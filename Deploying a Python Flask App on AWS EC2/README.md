# Deploying a Python Flask App on AWS EC2

Deploy a Python Flask web application on an AWS EC2 instance.

## Prerequisites

- AWS account with EC2 permissions
- SSH key pair for the instance
- Basic knowledge of Python, Flask, and the command line

## Project Files

```
.
├── app.py
└── requirements.txt
```

## Step 1: Launch an EC2 Instance

1. Open the AWS EC2 console.
2. Launch an Ubuntu instance.
3. Configure the security group to allow SSH and port `5000`.

## Step 2: Copy Application Files

Copy `app.py` and `requirements.txt` to the instance, or clone this repository.

## Step 3: Set Up the Environment

SSH into the instance:

```bash
ssh -i /path/to/your/key.pem ubuntu@your-ec2-instance-ip
```

Install dependencies and run the app:

```bash
sudo apt update
sudo apt install -y python3 python3-pip python3-venv

mkdir flask_app && cd flask_app
# Copy app.py and requirements.txt here

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

## Step 4: Access the App

Open in your browser:

```
http://<ec2-public-ip>:5000
```

![Flask app running on EC2](https://github.com/akintunero/My-DevOps-Projects/assets/13016369/2425ce04-718c-4d84-b04c-c6f6773d455f)
