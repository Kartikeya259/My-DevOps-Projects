# Setting Up WordPress on Red Hat EC2 Instances

Deploy WordPress across two Red Hat EC2 instances: one web server and one database server. The web server uses LVM for storage.

## Architecture

- **Web Server**: Apache, PHP, WordPress, LVM volumes for `/var/www/html` and `/var/log`
- **Database Server**: MySQL with dedicated LVM volume mounted at `/db`

## Project Files

```
config/
├── fstab.example
└── wordpress-db.sql
```

## Step 1: Set Up the Web Server (LVM)

1. Launch two Red Hat EC2 instances (web and database).
2. Create three 10 GiB volumes in the web server's AZ and attach them.
3. Partition, create PVs/VGs/LVs, format, and mount as described below.

```bash
lsblk
df -h
sudo gdisk /dev/xvdf
sudo yum install lvm2
sudo lvmdiskscan

sudo pvcreate /dev/xvdf1 /dev/xvdg1 /dev/xvdh1
sudo vgcreate webdata-vg /dev/xvdh1 /dev/xvdg1 /dev/xvdf1
sudo lvcreate -n apps-lv -L 14G webdata-vg
sudo lvcreate -n logs-lv -L 14G webdata-vg

sudo mkfs -t ext4 /dev/webdata-vg/apps-lv
sudo mkfs -t ext4 /dev/webdata-vg/logs-lv
sudo mkdir -p /var/www/html /home/recovery/logs
sudo mount /dev/webdata-vg/apps-lv /var/www/html/
sudo rsync -av /var/log/. /home/recovery/logs/
sudo mount /dev/webdata-vg/logs-lv /var/log
sudo rsync -av /home/recovery/logs/. /var/log
```

Persist mounts using [`config/fstab.example`](./config/fstab.example) as a template:

```bash
sudo blkid
sudo vi /etc/fstab
sudo mount -a
sudo systemctl daemon-reload
df -h
```

![mounted filesystems](https://github.com/akintunero/My-DevOps-Projects/assets/13016369/b0b3fec2-45cc-4ce5-ba23-a373ab1d5495)

## Step 2: Prepare the Database Server

Repeat the LVM setup from Step 1. Create `db-lv` instead of `apps-lv` and mount it to `/db`.

## Step 3: Install WordPress on the Web Server

```bash
sudo yum -y update
sudo yum -y install wget httpd php php-mysqlnd php-fpm php-json
sudo systemctl enable httpd && sudo systemctl start httpd

sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo yum install yum-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm
sudo yum module reset php
sudo yum module enable php:remi-7.4
sudo yum install php php-opcache php-gd php-curl php-mysqlnd
sudo systemctl enable php-fpm && sudo systemctl start php-fpm
setsebool -P httpd_execmem 1
sudo systemctl restart httpd

mkdir wordpress && cd wordpress
sudo wget http://wordpress.org/latest.tar.gz
sudo tar xzvf latest.tar.gz && sudo rm -rf latest.tar.gz
cp wordpress/wp-config-sample.php wordpress/wp-config.php
cp -R wordpress /var/www/html/

sudo chown -R apache:apache /var/www/html/wordpress
sudo chcon -t httpd_sys_rw_content_t /var/www/html/wordpress -R
sudo setsebool -P httpd_can_network_connect=1
```

## Step 4: Install MySQL on the Database Server

```bash
sudo yum update
sudo yum install mysql-server
sudo systemctl enable mysqld && sudo systemctl start mysqld
```

## Step 5: Configure the Database

Use [`config/wordpress-db.sql`](./config/wordpress-db.sql) as a template. Replace placeholders, then run:

```bash
sudo mysql < config/wordpress-db.sql
```

Or run interactively:

```bash
sudo mysql
```

## Step 6: Connect WordPress to the Remote Database

On the web server:

```bash
sudo yum install mysql
sudo mysql -u myuser -p -h <db-server-private-ip>
```

Open port 80 in the web server security group, then visit:

```
http://<web-server-ip>/wordpress/
```

![WordPress connected to remote MySQL](https://github.com/akintunero/My-DevOps-Projects/assets/13016369/abff7a21-71ce-4d52-9298-cd4ad1dfe722)
