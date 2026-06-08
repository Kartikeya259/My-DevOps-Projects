# Static Website Deployment with Nginx and Docker

Serve a static website from an Nginx container.

## Prerequisites

- [Docker](https://www.docker.com/get-started) (version 20+)

## Project Files

```
.
├── Dockerfile
├── index.html
└── nginx.png
```

## Quick Start

Clone the repository and navigate to this project:

```bash
git clone https://github.com/akintunero/My-DevOps-Projects.git
cd "My-DevOps-Projects/Static Website Deployment with Nginx and Docker"
```

Build and run:

```bash
docker build -t my-demo-website .
docker run -d -p 8080:80 my-demo-website
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

![Nginx static site](nginx.png)

## Docker Commands

```bash
docker build -t my-demo-website .
docker run -d -p 8080:80 my-demo-website
docker ps
docker stop <container_id>
docker rm <container_id>
docker images
```

To change the site content, edit `index.html` and rebuild the image.
