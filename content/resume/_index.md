---
title: "Resume"
date: 2019-02-11T07:50:51-05:00
draft: false
---
{{% resume/section "Work Experience" %}}<!--- {{{ -->

{{% resume/education name="Red Hat" 
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


<!--- CSC369 {{{ -->

{{% resume/project name="Custom Kernel Module"
url="https://kevin-mok.com/server/" date="Jan. 2022" show="true" %}}

- Wrote and installed a custom Linux kernel module in **C**.
- Intercepted pre-existing system calls using 
  custom kernel module by sending commands to 
  userspace.
- Monitored specific process ID's in my system 
  call to intercept their system calls.

{{% /resume/project %}}

<!--- CSC369 }}} -->

<!--- DigitalOcean {{{ -->

{{% resume/project name="Personal Server"
url="https://kevin-mok.com/server/" date="Aug. 2019 — present" show="true" %}}

- Deployed various web apps with backends using NGINX on a Debian/**Linux** server.
- Wrote a [**JavaScript** script][server script] and [systemd service][systemd service]/[timer]
  to display the uptime of my pages every hour.
- Monitored system resources and performed system maintenance using tmux.

[server script]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-status.js
[systemd service]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.service
[timer]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.timer

{{% /resume/project %}}

<!--- DigitalOcean Droplet }}} -->

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

{{% /resume/section %}}<!--- }}} -->

{{% resume/section skills %}}<!--- {{{ -->

Kubernetes, **JavaScript**, **React**, **Python**, Go, Bash, Solidity, C, **Django**, Node.js, Jenkins, PostgreSQL, **Linux**, **Git**, **Command Line**

{{% /resume/section %}}<!--- }}} -->

{{% resume/section education %}}<!--- {{{ -->

{{% resume/education name="University of Toronto"
title="Computer Science Specialist — 3.84 GPA (CS), Graduated with High Distinction" date="2018 — 2023" %}}

{{% /resume/section %}}<!--- }}} -->

{{% resume/section "References" %}}<!--- {{{ -->

{{% resume/references %}}

{{% /resume/section %}}<!--- }}} -->

<!-- vim: fdm=marker -->
