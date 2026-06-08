# Setting up a LEMP Stack on AWS EC2 (Ubuntu)

Install and configure a LEMP (Linux, Nginx, MySQL, PHP) stack on an AWS EC2 Ubuntu instance.

## Project Files

```
.
├── configs/nginx/lemp-stack.conf
└── www/info.php
```

## Step 1: Install Nginx

```bash
sudo apt update
sudo apt install nginx
sudo systemctl status nginx
```

Test at `http://localhost:80` or using your EC2 public IP:

```bash
curl -s http://169.254.169.254/latest/meta-data/public-ipv4
```

## Step 2: Install MySQL

```bash
sudo apt install mysql-server
sudo mysql
```

Set a root password (replace with your own):

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<your-password>';
exit
```

Run the security script:

```bash
sudo mysql_secure_installation
```

## Step 3: Install PHP

```bash
sudo apt install php-fpm php-mysql
```

## Step 4: Configure Nginx

Create the web root and install the site config from this repo:

```bash
sudo mkdir /var/www/LEMP-Stack
sudo chown -R $USER:$USER /var/www/LEMP-Stack
sudo cp configs/nginx/lemp-stack.conf /etc/nginx/sites-available/LEMP-Stack
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/LEMP-Stack /etc/nginx/sites-enabled/
sudo nginx -t
sudo unlink /etc/nginx/sites-enabled/default
sudo systemctl reload nginx
```

Create a test page:

```bash
sudo echo 'Hello LEMP-Stack from hostname' $(curl -s http://169.254.169.254/latest/meta-data/public-hostname) 'with public IP' $(curl -s http://169.254.169.254/latest/meta-data/public-ipv4) > /var/www/LEMP-Stack/index.html
```

## Step 5: Test PHP

```bash
sudo cp www/info.php /var/www/LEMP-Stack/info.php
```

Visit `http://<server-ip>/info.php` in your browser. Remove `info.php` after testing.

## Result

![LEMP stack result](https://github.com/akintunero/My-DevOps-Projects/assets/13016369/dd46e327-fc4f-4535-8c5f-33f953c03b1c)
