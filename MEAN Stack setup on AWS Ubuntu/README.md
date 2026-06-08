# MEAN Stack on AWS Ubuntu

Deploy a MEAN (MongoDB, Express.js, Angular, Node.js) books CRUD app on an Ubuntu EC2 instance.

## Prerequisites

- AWS EC2 instance running Ubuntu
- SSH access to the instance

## Project Files

```
books/
├── server.js
├── package.json
├── apps/
│   ├── routes.js
│   └── models/
│       └── book.js
└── public/
    ├── index.html
    └── script.js
```

## Step 1: Update System Packages

```bash
sudo apt update
sudo apt upgrade
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
```

## Step 2: Install Node.js

```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

## Step 3: Install MongoDB

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt install -y mongodb
sudo service mongodb start
sudo systemctl status mongodb
```

## Step 4: Deploy the Application

Copy the `books/` directory to your EC2 instance, then install dependencies and start the server:

```bash
cd books
npm install
npm start
```

## Step 5: Test

```bash
curl -s http://localhost:3300
```

Open in your browser:

```
http://<ec2-public-ip>:3300
```

Ensure port `3300` is open in your EC2 security group.
