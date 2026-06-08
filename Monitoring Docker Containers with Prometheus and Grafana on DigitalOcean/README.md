# Docker Container Monitoring with Prometheus and Grafana

Monitor Docker containers using Prometheus and Grafana on a DigitalOcean Droplet (or any Docker host).

## Prerequisites

- DigitalOcean account (or any Linux server with Docker)
- Basic knowledge of Docker, Prometheus, and Grafana

## Project Files

```
.
├── docker-compose.yml
└── prometheus/
    └── prometheus.yml
```

## Quick Start

### 1. Create a Droplet and Install Docker

```bash
ssh root@your_droplet_ip
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
```

### 2. Clone and Start the Stack

Copy this project to the server, then:

```bash
cd "Monitoring Docker Containers with Prometheus and Grafana on DigitalOcean"
docker compose up -d
```

### 3. Verify Services

| Service | URL |
| --- | --- |
| Prometheus | `http://<droplet-ip>:9090` |
| Grafana | `http://<droplet-ip>:3000` |
| cAdvisor | `http://<droplet-ip>:8080` |
| Node Exporter | `http://<droplet-ip>:9100` |

## Configure Grafana

1. Log in at `http://<droplet-ip>:3000` with `admin` / `admin` and change the password.
2. Add Prometheus as a data source at `http://prometheus:9090`.
3. Import a dashboard from [Grafana's dashboard library](https://grafana.com/grafana/dashboards) (e.g. ID `893` for Docker monitoring).

## Maintenance

- Update images periodically: `docker compose pull && docker compose up -d`
- Back up Grafana dashboards and the `grafana-data` volume
- Monitor resource usage on the droplet as scrape targets grow

## References

- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Grafana Documentation](https://grafana.com/docs/grafana/latest/)
- [cAdvisor](https://github.com/google/cadvisor)
- [Node Exporter](https://github.com/prometheus/node_exporter)
