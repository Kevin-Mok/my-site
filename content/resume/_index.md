---
title: "Resume"
date: 2019-02-11T07:50:51-05:00
draft: false
---
{{% resume/section overview %}}<!--- {{{ -->

3<sup>rd</sup> year CS student. Enthusiast of all things
Linux and FOSS. Seeking 16-month internship for my PEY
co-op program. Looking to gain industry-relevant experience in 
full-stack web dev, DevOps or system administration.

{{% /resume/section %}}<!--- }}} -->

{{% resume/section skills %}}<!--- {{{ -->

#### Languages
- **Bash**, C, **CSS**, C++, **Fish** (shell), Godot, **HTML5**, 
  **Python**, Java, **Javascript** (ES6), **Sass**

#### Frameworks
- **Bootstrap**, **Django**, **Node.js**, **PostgreSQL**

#### Services
- **DigitalOcean**, **Linux**, Heroku, **REST/Web API's**

#### Tools
- **Arch Linux**, Android Studio, **Debian**, **Command Line**, 
  **Git**, IntelliJ IDEA, **Pycharm**, **NGINX**, **SFTP**, **SSH**, 
  **Vim**

{{% /resume/section %}}<!--- }}} -->

{{% resume/section projects %}}<!--- {{{ -->

<!--- Spotify Graphs {{{ -->

{{% resume/project name="Spotify Graphs" 
url="https://github.com/Kevin-Mok/spotify-lib-vis" date="June 2018 — July 2018" 
show="true" %}}

- Implemented base functionality of scanning tracks and listening 
  history from user's library using Spotify API and organized data 
  into **PostgreSQL** database with **Django** backend.
- Created and tested various relational database schemas to maximize 
  efficiency for use cases.
- Produced bubble chart and (stacked) bar chart using [**d3**]
[d3 graph examples] to visualize the artists, genres and features of 
tracks in library.

[d3 graph examples]: https://github.com/d3/d3/wiki/Gallery

{{% /resume/project %}}

<!--- Spotify Graphs }}} -->

<!--- Grocery Finder {{{ -->

{{% resume/project name="Grocery Finder" 
url="https://github.com/Kevin-Mok/grocery-finder" date="Feb. 2019 — Apr. 2019" 
show="true" %}}

- Proof of concept for web app that finds the ideal supermarket based on your cart.
- Designed responsive front-end layout using **Bootstrap**.
- Implemented REST API functionality on backend using **Node.js** and 
  **MongoDB**.
- Setup deployment on [**Heroku**][Grocery Finder Heroku].
- Led team of 4 as project leader to prioritize and delegate tasks while
  also implementing a majority of the core features.
- Performed code review for team members' pull requests.

[Grocery Finder Heroku]: http://www.grocery-finder.ml

{{% /resume/project %}}

<!--- Grocery Finder }}} -->

<!--- ParsaFood {{{ -->

{{% resume/project name="ParsaFood" 
url="https://github.com/Kevin-Mok/ParsaFood" date="Feb. 2018" 
show="true" %}}

- **Android** app that reads ingredient labels and detects any dietary 
  restrictions/allergies. 
- Designed user interface and linked various functionality together.
- Made during a 24-hour [food-themed hackathon][Platterz Hackathon event]
  in a group with two other members. Came in 2<sup>nd</sup> place and won
  an [Oculus Rift][Oculus Rift Amazon].

[Parsafood repo]: https://github.com/Kevin-Mok/ParsaFood
[Platterz Hackathon event]: 
https://www.eventbrite.com/e/platterz-hackathon-tickets-42682237722
[Oculus Rift Amazon]: https://www.amazon.ca/Oculus-Rift-Windows-VR-Headset/dp/B00VF0IXEY/ref=sr_1_1_sspa?ie=UTF8&qid=1520422949&sr=8-1-spons&keywords=oculus+rift&psc=1

{{% /resume/project %}}

<!--- ParsaFood }}} -->
 
<!--- TrapBot {{{ -->

{{% resume/project name="TrapBot"
url="https://github.com/Kevin-Mok/TrapBot" date="March 2018" %}}

- Use reddit API wrapper in **Python** to scan music subreddits for user 
  comments containing common track listing formats.
- Match detected track name and artists to track on SoundCloud using another 
  Python API wrapper.
- Respond to original poster's comment with formatted list of tracks found.
- Received positive comment from users who replied to the bot's posts.

{{% /resume/project %}}

<!--- Grocery Finder }}} -->

<!--- DigitalOcean {{{ -->

{{% resume/project name="Personal Server"
url="https://kevin-mok.com/server/" date="Aug. 2019 — present" %}}

- Deployed various web apps with backends such as Node, PHP and Python using 
  **NGINX** on a **Debian** server.
- Monitor system resources and perform system maintenance using tmux.
- Wrote [**Node.js** script][server script] and [**systemd** service][systemd service]/[timer]
  to check and display the uptime of my pages every hour.

[server script]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-status.js
[systemd service]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.service
[timer]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.timer

{{% /resume/project %}}

<!--- DigitalOcean Droplet }}} -->

<!--- Super ADA Bros. {{{ -->

{{% resume/project name="Super ADA Bros"
url="https://github.com/Kevin-Mok/SuperADABros" date="May 2019" %}}

- Designed clone of Super Mario Bros 1-1, but Mario is mobility-impaired and
  uses ramps to get through the level.
- Uses **OpenCV** to track player's head movement which is then translated to 
  in-game movement. [Video Demo]
- Implemented in [**Godot**][Godot site], an open-source game engine.
- Made during a 24-hour [accessibility-themed hackathon][PC Hacks event].

[PC Hacks event]: https://pchacks19.devpost.com/
[Godot site]: https://godotengine.org
[Video Demo]: https://youtu.be/vRdENLGrBqM

{{% /resume/project %}}


<!--- Grocery Finder }}} -->

{{% /resume/section %}}<!--- }}} -->

{{% resume/section "Work Experience" %}}<!--- {{{ -->

{{% resume/education name="Philpott Children's Tennis" 
title="Head Instructor" date="2013 — 2015" %}}
- Ran 8-week summer camp for inner-city youth with assistant coach.
- Prepared daily lesson plans for 4 different age groups of children 
  with varying skill levels and needs.
- Supervised and ensured the safety and enjoyment of up to 20 children at once.

{{% /resume/section %}}<!--- }}} -->

{{% resume/section education %}}<!--- {{{ -->

{{% resume/education name="University of Toronto"
title="Computer Science Specialist" date="2017 — 2021" %}}

{{% /resume/section %}}<!--- }}} -->

<!-- vim: fdm=marker -->
