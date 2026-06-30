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

## Conversation Bootstrap Notes

Use this section to start a new Copilot conversation on any machine and immediately recover context.

### Current Production State

- Live site URL: https://lively-desert-0936c0e0f.7.azurestaticapps.net/
- Legacy/alternate SWA URL still exists: https://witty-island-06870b20f.7.azurestaticapps.net/
- Deployment flow: Git push to `main` triggers Azure Static Web Apps deployment
- Status: Approved, published, and visually QA reviewed

### Primary Site File

- Main page/content source: `app/page-fullsite.tsx`
- Global styles/theme: `app/globals.css`
- Infra config: `azure.yaml`, `infra/main.bicep`, `infra/main.parameters.json`

### Messaging And Content Decisions (Final)

- Zero Trust remains the primary theme; AI is positioned as integrated guidance, not the top-level theme.
- Hero line: "Turn Existing Microsoft Security Investments into Measurable Zero Trust Outcomes at Lower Cost."
- Core value proposition emphasizes using existing Microsoft investment and reducing complexity/cost.
- Audience order: IC, DoW, Federal Civilian, DIB.
- Capability order starts with Zero Trust Architecture, then ICAM.
- Contact CTA uses Microsoft Bookings URL (see Operational Links below).
- Authority framing in bio emphasizes leadership without diminishing other contributors.

### Authority Framing (Intent)

The site language is intentionally framed to preserve authority while respecting team contributions.

- Bio language: Keith "architected and directed Microsoft official guidance" across major federal security areas.
- Credential chip language: "Architect & Director: Microsoft Official Guidance on Zero Trust, Identity & Compliance".
- Avoid wording that implies sole authorship of every artifact.

### Operational Links

- Bookings CTA URL:
	- https://outlook.office.com/book/MissionTrustAdvisors1@MissionTrustAdvisors.onmicrosoft.com/?ismsaljsauthenabled
- Guidance links used on page:
	- DoW Zero Trust Strategy: https://aka.ms/ZTforDoD
	- CISA Zero Trust Maturity Model: https://aka.ms/ZTforUSGov
	- CMMC guidance: https://aka.ms/AzureADCMMC
	- FedRAMP High guidance: https://learn.microsoft.com/en-us/entra/standards/configure-for-fedramp-high-impact
	- Phishing-resistant auth media: https://www.youtube.com/playlist?list=PL3ZTgFEc7LysTnItcN7SJnJ6wpPJif2-k
	- Entra CBA media: https://youtu.be/jsKQxo-xGgA?si=_gKnquCot5LDf4HH

### Known Implementation Details

- Executive Advisory Outcomes text color depends on `--ink-800` in `app/globals.css`.
- If that variable is missing, outcomes text can look blank on white cards.
- Build has recently passed successfully (`npm run build`) after all updates.

### Common Commands

```bash
npm install
npm run dev
npm run build
git add .
git commit -m "<message>"
git push origin main
```

### Next Steps (If Resuming Work)

1. Confirm production render on the live SWA URL.
2. Decide whether to configure/complete custom domain cutover for `missiontrustadvisors.com`.
3. If content edits are requested, update `app/page-fullsite.tsx`, run `npm run build`, then push.

### Starter Prompt For New Conversation

Copy this into a new chat:

"Resume work on MissionTrust site using README bootstrap notes. Treat `app/page-fullsite.tsx` as source of truth, validate against live site at https://lively-desert-0936c0e0f.7.azurestaticapps.net/, preserve Zero Trust-first positioning, and keep authority framing as architect/director language while respectful of team contributions."
