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

- **Developed a full-stack web application** to generate rarity 
  rankings for NFT's integrated with OpenSea's API, 
  enabling users to **quickly identify rare NFT's** and check 
  their listing status, **improving market research efficiency by 80%**.
- **Reverse engineered a proprietary ranking algorithm** to 
  mirror the leading rarity ranking site’s results, 
  **achieving 99.75% accuracy** by 
  utilizing data scraping techniques [with Selenium](https://github.com/Kevin-Mok/rarity-surf/blob/django/rarity_check/project/scrape.py), 
  increasing the platform's trustworthiness among users.
- **Optimized purchasing strategy** by leveraging the app to 
  frontrun competitors in purchasing top 0.5% rarity NFTs, 
  **boosting acquisition success rate by 90%** and allowing 
  users to gain a competitive edge in the marketplace.
- **Architected a robust Django (Python) [backend](https://github.com/Kevin-Mok/rarity-surf)** to fetch and process 
  NFT metadata from IPFS, store rarity rankings in 
  **PostgreSQL**, and serve the data via GraphQL API, **ensuring low-latency access and scaling to handle 2,000+ concurrent requests**.
- **Developed a dynamic React [frontend](https://github.com/Kevin-Mok/rarity-surf-frontend)** using hooks to load 
  rarity data in real-time, styled with Tailwind for 
  mobile responsiveness, **improving user experience 
  and reducing frontend load times by 70%**.

{{% /resume/project %}}

<!--- Rarity Surf }}} -->

{{% /resume/section %}}<!--- }}} -->

{{% resume/section skills %}}<!--- {{{ -->

**JavaScript**, **React**, **Python**, **Django**, Node.js, PostgreSQL, MongoDB, Bash, **Git**, **Linux**, **Command Line**, Go(Lang), AWS, Kubernetes, Terraform, Docker (Compose), Jenkins, Groovy, Solidity, C  

{{% /resume/section %}}<!--- }}} -->

{{% resume/section education %}}<!--- {{{ -->

{{% resume/education name="University of Toronto"
title="Computer Science Specialist — 3.84 GPA (CS). Graduated with High Distinction." date="2019 — 2024" %}}

{{% /resume/section %}}<!--- }}} -->

{{% resume/section "References" %}}<!--- {{{ -->

{{% resume/references %}}

{{% /resume/section %}}<!--- }}} -->

<!-- vim: fdm=marker -->
