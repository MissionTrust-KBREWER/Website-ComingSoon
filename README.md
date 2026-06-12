## MissionTrust Advisors Site

This repository contains the first public website for MissionTrust Advisors, built with Next.js and prepared for Azure deployment using Azure Developer CLI (`azd`) and Bicep.

## Local Development

Install dependencies and run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and Lint

```bash
npm run lint
npm run build
```

## Azure Deployment (Static Web Apps Free)

This project includes:

- `azure.yaml` for `azd` project configuration
- `infra/main.bicep` for Azure infrastructure
- `infra/main.parameters.json` for environment parameters

### Prerequisites

1. Azure subscription
2. [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli)
3. [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/install-azd)

### Deploy

```bash
azd auth login
azd init
azd env new missiontrust-prod
azd provision --preview
azd up
```

`azd up` provisions a Free-tier Azure Static Web App and deploys the generated static site.

### Useful follow-up commands

```bash
azd deploy
azd down
```

## Project Structure

- `app/` application UI and routes
- `infra/` Bicep infrastructure for Azure
- `public/` static assets

## Notes

Hosting defaults to Azure Static Web Apps Free for the lowest possible startup cost.

If you need server-side rendering or API-heavy workloads later, migrate to App Service or upgrade SWA tier.
