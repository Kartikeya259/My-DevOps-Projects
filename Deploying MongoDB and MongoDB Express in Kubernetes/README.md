# Deploying MongoDB and MongoDB Express in Kubernetes

Deploy MongoDB and MongoDB Express in a Kubernetes cluster using YAML manifests.

## Prerequisites

- Kubernetes cluster with `kubectl` configured
- Docker installed (if building custom images)
- Base64-encoded MongoDB credentials for the Secret

## Project Files

```
manifests/
├── mongo-deployment.yaml
├── mongodb-service.yaml
├── mongo-express-deployment.yaml
├── mongo-express-service.yaml
├── mongodb-configmap.yaml
└── mongodb-secret.yaml.example
```

## Deployment

### 1. Create the Secret

Copy the example and add your base64-encoded credentials:

```bash
cp manifests/mongodb-secret.yaml.example manifests/mongodb-secret.yaml
# Edit mongo-root-username and mongo-root-password values
# Example: echo -n 'admin' | base64
```

### 2. Apply Manifests

Apply resources in order:

```bash
kubectl apply -f manifests/mongodb-secret.yaml
kubectl apply -f manifests/mongodb-configmap.yaml
kubectl apply -f manifests/mongo-deployment.yaml
kubectl apply -f manifests/mongodb-service.yaml
kubectl apply -f manifests/mongo-express-deployment.yaml
kubectl apply -f manifests/mongo-express-service.yaml
```


### 3. Verify

```bash
kubectl get pods
kubectl get svc
```

## Access MongoDB Express

For Minikube:

```bash
minikube service mongo-express-service
```

For LoadBalancer clusters, use the external IP assigned to `mongo-express-service` on port `8081`.

![MongoDB Express on Kubernetes](https://github.com/akintunero/My-DevOps-Projects/assets/13016369/af48b2bf-ce75-4b03-bdc0-cd88ac9847e6)
