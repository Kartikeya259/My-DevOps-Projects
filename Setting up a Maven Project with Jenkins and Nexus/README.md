# Setting up a Maven Project with Jenkins and Nexus

Step-by-step guide for setting up a Maven project with Jenkins and Nexus on Ubuntu Server.

![Jenkins and Nexus architecture](https://user-images.githubusercontent.com/13016369/230787363-31019a31-35ae-4a06-b54f-2d963c766f39.png)

## Prerequisites

- Ubuntu Server
- Docker installed
- OpenJDK 8 installed

## Project Files

```
jenkins/
└── Jenkinsfile
```

## Step 1: Install Docker

```bash
apt install docker.io
```

## Step 2: Install Jenkins in Docker

```bash
docker run -p 8080:8080 -p 50000:50000 -d \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(which docker):/usr/bin/docker \
  jenkins/jenkins:lts
```

## Step 3: Retrieve the Default Jenkins Password

```bash
docker exec -u 0 -it <container-id> bash
cat /var/jenkins_home/secrets/initialAdminPassword
```

## Step 4: Launch Jenkins

```
http://<your-public-ip>:8080
```

## Step 5: Install Jenkins Plugins

- Maven Integration plugin
- Nexus Artifact Uploader plugin
- Pipeline plugin
- Git plugin

## Step 6: Install Nexus on Ubuntu Server

```bash
apt install openjdk-8-jre-headless
cd /opt/
wget https://download.sonatype.com/nexus/3/latest-unix.tar.gz
tar -zxvf latest-unix.tar.gz
chown -R nexus:nexus nexus-3.51.0-01
chown -R nexus:nexus sonatype-work
vim /opt/nexus-3.51.0-01/bin/nexus.rc
# Set run-as user to "nexus"
usermod -aG sudo nexus
su - nexus
sudo /opt/nexus-3.51.0-01/bin/nexus start
```

## Step 7: Launch Nexus

```
http://<your-public-ip>:8081
```

## Step 8: Retrieve the Nexus Default Password

```bash
vim /opt/sonatype-work/nexus3/admin.password
```

## Step 9: Create a Maven Project in Jenkins

1. Click **New Item** → **Maven Project**.
2. Configure Git SCM, build goal `clean install`, and Nexus post-build deployment.

## Step 10: Configure the Pipeline

Use the pipeline script from [`jenkins/Jenkinsfile`](./jenkins/Jenkinsfile), or paste it into the Jenkins **Pipeline Script** box.

Replace `<your-nexus-ip>`, `<your-repo-name>`, and artifact details with your environment values.
