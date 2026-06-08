# Containerizing a Python Application with Docker

Package and run a Python hello-world app with Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Project Files

```
.
├── app.py
└── Dockerfile
```

## Quick Start

Clone the repository and navigate to this project:

```bash
git clone https://github.com/akintunero/My-DevOps-Projects.git
cd "My-DevOps-Projects/Containerizing a Python Application with Docker"
```

Build the image:

```bash
docker build -t python-hello-world .
```

Run the container:

```bash
docker run --rm python-hello-world
```

Expected output:

```
Hello, World!
```

## Verify

List containers:

```bash
docker ps -a
```
