# Kevin Mok's Portfolio Site

A Hugo-powered personal portfolio and resume website featuring a dynamic server monitoring dashboard, Linux configuration documentation, and professional resume showcase.

![Hugo](https://img.shields.io/badge/Hugo-Extended-ff4088)
![SCSS](https://img.shields.io/badge/SCSS-Base16_Eighties-cc6699)
![GitLab Pages](https://img.shields.io/badge/Deploy-GitLab_Pages-fc6d26)

**Live Site**: [kevin-mok.com](https://kevin-mok.com/)

## Features

- **Interactive Resume** - Collapsible project sections with detailed work experience
- **Server Monitoring Dashboard** - Real-time status of running applications with hourly updates
- **Linux Config Documentation** - Comprehensive Arch Linux rice/ricing setup guide
- **Digital Contact Card** - Creative social links and contact information display
- **Blog/Articles** - Technical writing and documentation

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Static Site Generator** | Hugo (Extended for SCSS) |
| **Styling** | SASS/SCSS with Base16 Eighties theme |
| **Frontend** | Bootstrap 4.3.1, Vanilla JavaScript |
| **Hosting** | GitLab Pages |
| **Infrastructure** | AWS EC2, Docker, Kubernetes, Terraform |

## Project Structure

```
my-site/
├── config.yaml           # Hugo configuration
├── .gitlab-ci.yml        # Deployment pipeline
├── content/
│   ├── resume/           # Resume content
│   ├── server/           # Server monitoring page
│   ├── config/           # Linux config documentation
│   ├── card/             # Digital contact card
│   └── posts/            # Blog articles
├── layouts/
│   ├── shortcodes/       # Resume components (10 custom shortcodes)
│   └── partials/         # Reusable templates
├── assets/sass/          # Base16 Eighties SCSS (22KB)
├── static/               # CSS, JS, images, PDFs
└── .gitmodules           # Submodules for private content
```

## Getting Started

### Prerequisites

- Hugo Extended (for SCSS compilation)
- Git

### Installation

```bash
# Clone repository
git clone git@github.com:Kevin-Mok/my-site.git
cd my-site

# Initialize submodules (optional, for private content)
git submodule update --init --recursive

# Start development server
hugo server
# Visit http://localhost:1313/
```

### Build & Deploy

```bash
# Build for production
hugo

# Deployment is automatic via GitLab CI/CD
git push origin master
```

## Key Sections

### Resume (`/resume`)
- Work experience (Red Hat Cloud/Software Engineer Intern)
- Project showcase with collapsible details
- Skills: AWS, Kubernetes, Docker, JavaScript, React, Python
- Education: UofT CS Specialist, 3.84 GPA, High Distinction

### Server Apps (`/server`)
- Dynamic monitoring dashboard
- Displays running applications with status icons
- Updates via Node.js script and systemd service
- Shows uptime and last-updated timestamps

### Linux Config (`/config`)
- Arch Linux rice documentation
- i3-gaps window manager setup
- Neovim, Zsh, Ranger configurations
- chezmoi-managed dotfiles

### Digital Card (`/card`)
- Creative contact display
- Social media links (Mastodon, LinkedIn, GitHub)
- Interactive layout design

## Why This Project is Interesting

### Technical Highlights

1. **Multi-Purpose Static Site Architecture**
   - Custom Hugo shortcodes for resume components
   - Different layouts for distinct content types
   - JavaScript loading per page via frontmatter

2. **Real-Time Monitoring Integration**
   - Server status page with dynamic data
   - Systemd timer/service for hourly updates
   - Sophisticated time formatting with duration calculation

3. **Infrastructure as Code**
   - Terraform for AWS EC2 deployment
   - Kubernetes manifests for container orchestration
   - Docker Compose for local/remote environments

4. **Professional Design**
   - Base16 Eighties color scheme
   - Thoughtful responsive design (800px breakpoint)
   - Custom SCSS mixins for consistency

### Skills Demonstrated

- **Full-Stack Development**: Hugo, JavaScript, SCSS
- **DevOps**: GitLab CI/CD, Docker, Kubernetes, Terraform
- **Cloud**: AWS EC2, Route 53, NGINX
- **Systems Administration**: Linux, systemd, automation

## Resume Highlights

- **Red Hat Internship**: Kubernetes/OpenShift work
- **Rarity Surf**: Django backend + React frontend
- **Astronofty**: Solidity smart contracts + IPFS (2nd @ UofTHacks)
- **Infrastructure**: AWS, Docker, Kubernetes, Terraform setup

## Author

[Kevin Mok](https://github.com/Kevin-Mok)
