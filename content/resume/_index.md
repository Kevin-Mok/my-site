---
title: "Resume"
date: 2019-02-11T07:50:51-05:00
draft: false
---
{{% resume/section "Work Experience" %}}<!--- {{{ -->

{{% resume/work-experience name="Red Hat" 
title="Cloud/Software Engineer Intern" languages="Kubernetes, GoLang, Jenkins" date="May 2020 — Aug 2021" %}}

- **Reduced deployment time by 66%** by implementing a 
  [solution](https://github.com/apache/incubator-kie-kogito-operator/commit/175a6356c5474f2360ccb8ae835e0b9b2d653cf1) for deploying locally-compiled binaries onto 
  Kubernetes/OpenShift via command-line, **cutting average 
  deployment times from 45 minutes to 15 minutes**. 
  (**Kubernetes/GoLang** used for this and three below). 
- **Eliminated 80% of manual configuration errors** by enabling 
  the Kubernetes operator to automatically fetch data from 
  deployed services and update configurations, **deprecating 
  legacy startup scripts and reducing overall startup time 
  by 40%**.
- **Improved application stability** by introducing startup 
  probes for legacy applications with longer boot times, 
  **resulting in a 50% reduction in startup-related failures 
  and downtime during production launches**.
- **Enhanced system reliability** by refactoring probes to 
  [assign default values](https://github.com/apache/incubator-kie-kogito-operator/commit/af4977af228ec8648be28779259d4552246b656f) dynamically based on deployed YAML 
  files and fixing reconciliation issues, **increasing probe 
  accuracy by 30%** and preventing misconfigurations.
- **Increased CI pipeline efficiency** by rewriting the 
  **Jenkins (Groovy)** [nightly pipeline](https://github.com/apache/incubator-kie-kogito-pipelines/commit/4c83f1aecdea2c1ba2796b79839a90d4083dce88) to run in a GitHub PR 
  environment, allowing for automated testing of all 
  team-submitted PRs prior to merging, **reducing manual 
  intervention by 60%**.
- **Demonstrated leadership and collaboration** by actively 
  contributing to Agile sprint planning in a 12-member team, 
  driving improvement in sprint velocity through 
  optimized task delegation and idea generation.
- **Increased project reproducibility** by taking initiative to 
  write a [reusable GitHub parameters file](https://github.com/apache/incubator-kie-kogito-pipelines/commit/4c83f1aecdea2c1ba2796b79839a90d4083dce88#diff-7d2c018dafbccec859077d19bf1ade53ec9c7649f235528ce89f5632b109f7e6) for the pipeline, 
  **enabling 100% reusability** and ensuring consistent pipeline 
  setups across different environments.
- **Streamlined developer onboarding** by authoring 
  comprehensive [project documentation](https://github.com/apache/incubator-kie-kogito-operator/blob/1534c03d1d26bec08a16608a775782bf8b305de9/docs/GUIDE_FOR_KOGITO_DEVS.md) and mentoring an 
  incoming intern, **reducing onboarding time by 50%** and 
  enhancing new team members' productivity within their 
  first sprint.

{{% /resume/section %}}<!--- }}} -->

{{% resume/section projects %}}<!--- {{{ -->

<!--- Rarity Surf {{{ -->

{{% resume/project name="Rarity Surf" 
languages="Python, JavaScript, React, Django"  
date="Oct 2021" show="true" %}}

- Web app to give rarity rankings to NFT's and check which are listed on the OpenSea marketplace using their API.
- Reverse engineered the ranking algorithm to match the 
  leading rarity ranking site's rankings ([scraped](https://github.com/Kevin-Mok/rarity-surf/blob/django/rarity_check/project/scrape.py) using 
  Selenium) with a **discrepancy of <0.25%**. 
- Used app to frontrun purchases of **top 0.5%** rarity NFT's 
  against competing buyers.
- Wrote **Django (Python)** [backend](https://github.com/Kevin-Mok/rarity-surf) to fetch metadata from IPFS, store rarity rankings in PostgreSQL and serve rarity data using GraphQL.
- Wrote **React** [frontend](https://github.com/Kevin-Mok/rarity-surf-frontend) with hooks to dynamically load rarity data. Styled with Tailwind.

{{% /resume/project %}}

<!--- Rarity Surf }}} -->

<!--- AWS {{{ -->

{{% resume/project name="AWS Server"
url="https://kevin-mok.com/server/" languages="AWS, Kubernetes, Docker, Terraform" date="May 2024" show="true" %}}

- Deployed [various web apps](https://kevin-mok.com/server/) using **Docker** (Compose) on an 
  **AWS EC2** Debian/**Linux** server.
- Created **Kubernetes** [manifest files](https://github.com/Kevin-Mok/aws-minicube) to quickly recreate my server setup 
  with persistent storage/restarts and open ports.
- Created **Terraform** [files](https://github.com/Kevin-Mok/terraform-deploys/tree/main) 
  to deploy an AWS EC2 instance and Docker containers.
- Used Amazon Route 53's DNS and **NGINX** to route 
  subdomains to each web application.
- Wrote a **JavaScript** [server script] and [systemd service][systemd service]/[timer]
  to display the uptime of my pages every hour.

[server script]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-status.js
[systemd service]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.service
[timer]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.timer

{{% /resume/project %}}

<!--- AWS }}} -->

{{% /resume/section %}}<!--- }}} -->

{{% resume/section skills %}}<!--- {{{ -->

AWS, Kubernetes, Terraform, Docker (Compose), Jenkins, Groovy, Go(Lang), Bash, **Linux**, **JavaScript**, **React**, **Python**, **Django**, Node.js, PostgreSQL, MongoDB, Solidity, C, **Git**, **Command Line**

{{% /resume/section %}}<!--- }}} -->

{{% resume/section education %}}<!--- {{{ -->

{{% resume/education name="University of Toronto"
title="Computer Science Specialist — 3.84 GPA (CS). Graduated with High Distinction." date="2019 — 2024" %}}

{{% /resume/section %}}<!--- }}} -->

{{% resume/section "References" %}}<!--- {{{ -->

{{% resume/references %}}

{{% /resume/section %}}<!--- }}} -->

<!-- vim: fdm=marker -->
