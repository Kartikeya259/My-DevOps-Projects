# My DevOps Projects

Hands-on DevOps labs covering containerization, orchestration, cloud deployments, CI/CD pipelines, and observability. Each project is self-contained with its own README and step-by-step instructions.

## Projects

### Containers & Docker

| Project | Description | Stack |
| --- | --- | --- |
| [Containerizing a Python Application with Docker](./Containerizing%20a%20Python%20Application%20with%20Docker/) | Package and run a Python hello-world app with Docker | Docker, Python |
| [Static Website Deployment with Nginx and Docker](./Static%20Website%20Deployment%20with%20Nginx%20and%20Docker/) | Serve a static site from an Nginx container | Docker, Nginx |

### Kubernetes

| Project | Description | Stack |
| --- | --- | --- |
| [Deploying MongoDB and MongoDB Express in Kubernetes](./Deploying%20MongoDB%20and%20MongoDB%20Express%20in%20Kubernetes/) | Deploy MongoDB with Mongo Express using Kubernetes manifests | Kubernetes, MongoDB |

### Cloud & Web Stacks

| Project | Description | Stack |
| --- | --- | --- |
| [Deploying a Python Flask App on AWS EC2](./Deploying%20a%20Python%20Flask%20App%20on%20AWS%20EC2/) | Deploy a Flask web app on an EC2 instance | AWS EC2, Flask, Python |
| [LEMP Webstack on Ubuntu](./LEMP%20Webstack%20installation%20using%20NGINX%2C%20PHP%2C%20MySQL%20on%20ubuntu/) | Install and configure a LEMP stack on Ubuntu | Nginx, MySQL, PHP, Ubuntu |
| [MEAN Stack on AWS Ubuntu](./MEAN%20Stack%20setup%20on%20AWS%20Ubuntu/) | Deploy a MEAN stack application on AWS EC2 | MongoDB, Express, Angular, Node.js |
| [Setting up Wordpress on AWS](./Setting%20up%20Wordpress%20on%20AWS/) | WordPress on Red Hat EC2 with LVM storage | AWS EC2, WordPress, MySQL, LVM |

### CI/CD & Artifact Management

| Project | Description | Stack |
| --- | --- | --- |
| [Maven Project with Jenkins and Nexus](./Setting%20up%20a%20Maven%20Project%20with%20Jenkins%20and%20Nexus/) | Build and publish Maven artifacts through Jenkins to Nexus | Jenkins, Nexus, Maven, Docker |
| [Node.js Application with Nexus](./Integrating%20a%20Node.js%20Application%20with%20Nexus%20Repository%20Manager/) | Publish npm packages to a Nexus hosted repository | Node.js, Nexus, npm |

### Monitoring & Observability

| Project | Description | Stack |
| --- | --- | --- |
| [Docker Monitoring with Prometheus and Grafana](./Monitoring%20Docker%20Containers%20with%20Prometheus%20and%20Grafana%20on%20DigitalOcean/) | Monitor Docker containers on a DigitalOcean droplet | Prometheus, Grafana, Docker |

## Repository Structure

```
.
├── README.md
├── LICENSE
└── <project-name>/
    ├── README.md           # Setup guide
    ├── manifests/          # Kubernetes YAML (where applicable)
    ├── configs/            # Nginx, SQL, fstab templates (where applicable)
    └── ...                 # Dockerfiles, app source, docker-compose, etc.
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/akintunero/My-DevOps-Projects.git
   cd My-DevOps-Projects
   ```

2. Open the project you want to work on from the table above.
3. Follow the README in that project's directory.

## License

This project is licensed under the [MIT License](./LICENSE).
