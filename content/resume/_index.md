---
title: "Resume"
date: 2019-02-11T07:50:51-05:00
draft: false
---
{{% resume/section "Work Experience" %}}<!--- {{{ -->

{{% resume/work-experience name="Red Hat" 
title="Cloud/Software Engineer Intern" date="May 2020 — Aug 2021" %}}
- Reduced deployment time by **66%** by implementing ability to 
  deploy locally-compiled binaries onto **Kubernetes**/**OpenShift**
  using only command-line. 
- Implemented ability for Kubernetes operator to fetch data 
  from a deployed service and update config with data.
- Added startup probes to handle starting legacy application containers that require additional startup time.
- Refactored probes to have default values assigned based on 
  deployed YAML while also fixing reconciliation issues.
- Automated the promotion and release process 
  as part of the **Jenkins** release pipeline.
- Wrote documentation on how to get started with the project to onboard new 
  developers and mentored the incoming intern.

{{% /resume/section %}}<!--- }}} -->

{{% resume/section projects %}}<!--- {{{ -->

<!--- AWS {{{ -->

{{% resume/project name="AWS Server/Kubernetes"
url="https://kevin-mok.com/server/" date="May 2024" show="true" %}}

- Deployed [various web apps](https://kevin-mok.com/server/) using **Docker** (Compose) and on an 
  **AWS EC2** Debian/**Linux** server.
- Created **Kubernetes** [manifest files](https://github.com/Kevin-Mok) to quickly recreate my server setup 
  (with persistent storage/restarts and open ports).
- Used Amazon Route 53's DNS and **NGINX** to route 
  subdomains to each web application.
- Used AWS security groups to allow inbound HTTPS traffic.
- Used Amazon EBS snapshots to regularly back up server.
- Wrote a [**JavaScript** script][server script] and [systemd service][systemd service]/[timer]
  to display the uptime of my pages every hour.

[server script]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-status.js
[systemd service]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.service
[timer]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.timer

{{% /resume/project %}}

<!--- AWS }}} -->

<!--- Rarity Surf {{{ -->

{{% resume/project name="Rarity Surf" 
date="Oct 2021" show="true" %}}

- Web app to give rarity rankings to NFT's within minutes of their metadata being revealed and check which are listed (based on rarity and price filters) on the OpenSea marketplace using their API.
- Reverse engineered the ranking algorithm to match the 
  leading rarity ranking site's rankings (scraped using 
  Selenium) with a **discrepancy of <0.25%**. 
- Used app to frontrun purchases of **top 5%** rarity NFT's 
  against competing buyers.
- Wrote **Django (Python)** backend to fetch metadata from IPFS, store rarity rankings in PostgreSQL and serve rarity data using GraphQL.
- Wrote **React** frontend with hooks to dynamically load rarity data. Styled with Tailwind.

{{% /resume/project %}}

<!--- Rarity Surf }}} -->

<!--- Astronofty {{{ -->

{{% resume/project name="Astronofty" 
url="https://github.com/Kevin-Mok/astronofty" date="Jan 2023" 
show="true" %}}

- Created for a 36 hour hackathon (UofTHacks X) where it [**came 2nd overall**](https://devpost.com/software/astronofty).
- Created and deployed a smart contract with **Solidity** on 
  the Ethereum blockchain to create/buy/sell NFT's 
  using MetaMask.
- Wrote a **React** hook to fetch and show listed NFT's, NFT details and owned NFT's.
- Used API to synchronously upload images and metadata to IPFS.

{{% /resume/project %}}

<!--- Astronofty }}} -->

{{% /resume/section %}}<!--- }}} -->

{{% resume/section skills %}}<!--- {{{ -->

AWS, Kubernetes, Docker (Compose), **JavaScript**, **React**, **Python**, Go, Bash, Solidity, C, **Django**, Node.js, Jenkins, PostgreSQL, **Linux**, **Git**, **Command Line**

{{% /resume/section %}}<!--- }}} -->

{{% resume/section education %}}<!--- {{{ -->

{{% resume/education name="University of Toronto"
title="Computer Science Specialist — 3.84 GPA (CS). Graduated with High Distinction." date="2018 — 2023" %}}

{{% /resume/section %}}<!--- }}} -->

{{% resume/section "References" %}}<!--- {{{ -->

{{% resume/references %}}

{{% /resume/section %}}<!--- }}} -->

<!-- vim: fdm=marker -->
