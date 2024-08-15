---
title: "Resume"
date: 2019-02-11T07:50:51-05:00
draft: false
---
{{% resume/section "Work Experience" %}}<!--- {{{ -->

{{% resume/work-experience name="Red Hat" 
title="Cloud/Software Engineer Intern" languages="Kubernetes, GoLang, Jenkins" date="May 2020 — Aug 2021" %}}
- Reduced deployment time by **66%** by [implementing ability](https://github.com/apache/incubator-kie-kogito-operator/commit/175a6356c5474f2360ccb8ae835e0b9b2d653cf1) to 
  deploy locally-compiled binaries onto **Kubernetes**/**OpenShift**
  using only command-line (**Kubernetes/GoLang** used for this and three below). 
- Implemented ability for Kubernetes operator to fetch data 
  from a deployed service and update config with data to 
  deprecate reliance on startup script.
- Added startup probes to handle starting legacy application containers that require additional startup time.
- Refactored probes to [have default values](https://github.com/apache/incubator-kie-kogito-operator/commit/af4977af228ec8648be28779259d4552246b656f) assigned based on 
  deployed YAML while also fixing reconciliation issues.
- Rewrote the **Jenkins (Groovy)** [nightly pipeline](https://github.com/apache/incubator-kie-kogito-pipelines/commit/4c83f1aecdea2c1ba2796b79839a90d4083dce88) to run in a GitHub 
  PR using a trigger keyword to test all the team's submitted PR's 
  before merging to the main branch.
- Took initiative to write [file](https://github.com/apache/incubator-kie-kogito-pipelines/commit/4c83f1aecdea2c1ba2796b79839a90d4083dce88#diff-7d2c018dafbccec859077d19bf1ade53ec9c7649f235528ce89f5632b109f7e6) 
  to define the GitHub parameters for the above pipeline so that it 
  can be recreated easily.
- Took initiative to write [documentation](https://github.com/apache/incubator-kie-kogito-operator/blob/1534c03d1d26bec08a16608a775782bf8b305de9/docs/GUIDE_FOR_KOGITO_DEVS.md) on how to get started with the project to onboard new 
  developers and mentored the incoming intern.

{{% /resume/section %}}<!--- }}} -->

{{% resume/section projects %}}<!--- {{{ -->

<!--- AWS {{{ -->

{{% resume/project name="AWS Server"
url="https://kevin-mok.com/server/" languages="AWS, Kubernetes, Terraform, Docker" date="May 2024" show="true" %}}

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
<!--- Rarity Surf {{{ -->

{{% resume/project name="Rarity Surf" 
languages="Python, Django, React, GraphQL"  
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

<!--- Astronofty {{{ -->

{{% resume/project name="Astronofty" 
url="https://github.com/Kevin-Mok/astronofty" languages="React, Solidity" date="Jan 2023" 
show="true" %}}

- Created for a 36 hour hackathon (UofTHacks X) where it [**came 2nd overall**](https://devpost.com/software/astronofty).
- Created and deployed a smart contract with **Solidity** on 
  the Ethereum blockchain to create/buy/sell NFT's.
- Wrote **React** [components](https://github.com/Kevin-Mok/astronofty/tree/main/src/components) to synchronously upload images and metadata to IPFS and fetch and show NFT's.

{{% /resume/project %}}

<!--- Astronofty }}} -->


{{% /resume/section %}}<!--- }}} -->

{{% resume/section skills %}}<!--- {{{ -->

AWS, Kubernetes, Terraform, Docker (Compose), Jenkins, Groovy, Go(Lang), Bash, **Linux**, **JavaScript**, **React**, **Python**, **Django**, Node.js, PostgreSQL, MongoDB, Solidity, C, **Git**, **Command Line**

{{% /resume/section %}}<!--- }}} -->

{{% resume/section education %}}<!--- {{{ -->

{{% resume/education name="University of Toronto"
title="Computer Science Specialist — 3.84 GPA (CS). Graduated with High Distinction." date="2018 — 2023" %}}

{{% /resume/section %}}<!--- }}} -->

{{% resume/section "References" %}}<!--- {{{ -->

{{% resume/references %}}

{{% /resume/section %}}<!--- }}} -->

<!-- vim: fdm=marker -->
