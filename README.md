# Azure CI/CD Pipeline Demo

A simple Node.js web application demonstrating an automated CI/CD pipeline using Azure DevOps, Azure Container Registry, and Azure App Service.

## 📌 Project Overview

This project demonstrates:
- Building an automated CI/CD pipeline with **Azure Pipelines**
- Storing container images in **Azure Container Registry (ACR)**
- Automatically deploying to **Azure App Service** on every code push
- Monitoring pipeline execution and application health

## 🏗️ Architecture

```
Developer pushes code to GitHub (main branch)
            │
            ▼
   Azure Pipelines triggers automatically
            │
            ▼
   Build stage: Docker image is built
            │
            ▼
   Image pushed to Azure Container Registry (ACR)
            │
            ▼
   Deploy stage: Azure App Service pulls new image
            │
            ▼
   App live at https://<app-name>.azurewebsites.net
```

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Containerization:** Docker
- **CI/CD:** Azure Pipelines (YAML)
- **Container Registry:** Azure Container Registry (ACR)
- **Hosting:** Azure App Service (Linux, Docker container)
- **Version Control:** Git + GitHub

## 📁 Project Structure

```
azure-cicd-app/
├── index.js              # Express web server
├── package.json           # Node.js dependencies and scripts
├── package-lock.json
├── Dockerfile              # Container build instructions
├── .dockerignore
├── azure-pipelines.yml     # CI/CD pipeline definition
└── README.md
```

## 🚀 Running Locally

```bash
npm install
npm start
```
Then open `http://localhost:8080` in your browser.

## 🐳 Running with Docker

```bash
docker build -t azure-cicd-app .
docker run -p 8080:8080 azure-cicd-app
```

## ⚙️ CI/CD Pipeline

The pipeline is defined in `azure-pipelines.yml` and runs automatically on every push to the `main` branch. It has two stages:

1. **Build stage** — builds the Docker image and pushes it to Azure Container Registry, tagged with the build ID and `latest`.
2. **Deploy stage** — deploys the newly pushed image to Azure App Service, so the live app updates automatically with zero manual steps.

## 📊 Monitoring

- Pipeline run history and logs: **Azure DevOps → Pipelines**
- Live application logs: **Azure Portal → App Service → Log stream**
- Cost/usage tracking: **Azure Portal → Cost Management**

## 👩‍💻 Author

Rudaina Hoorain — DevOps Internship, Coralpha
TKR College of Engineering and Technology

## 📄 License

This project is for educational/internship purposes.
