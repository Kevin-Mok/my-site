---
title: "Server Apps"
date: 2024-06-10
draft: false
layout: single
js: ["server-table"]
---
Here is a list of apps that I am running on my [AWS EC2][AWS EC2 info] 
Debian instance/[DigitalOcean 
droplet][do-droplet]. Their [statuses] are updated every hour using a 
[Node.js script][update-script] and a [systemd service]/[timer].

[AWS EC2 info]: https://aws.amazon.com/pm/ec2/?gclid=CjwKCAjwyJqzBhBaEiwAWDRJVA8xkzlFBVRieWU_oiTxnHHfRgTnfN9WlnYON3UptS4aTtjaYRbVJRoCju8QAvD_BwE&trk=8c0f4d22-7932-45ae-9a50-7ec3d0775c47&sc_channel=ps&ef_id=CjwKCAjwyJqzBhBaEiwAWDRJVA8xkzlFBVRieWU_oiTxnHHfRgTnfN9WlnYON3UptS4aTtjaYRbVJRoCju8QAvD_BwE:G:s&s_kwcid=AL!4422!3!472464674288!e!!g!!aws%20ec2!11346198414!112250790958
[do-droplet]: https://www.digitalocean.com/products/droplets/
[statuses]: https://kevin-mok.com/server-apps.json
[systemd service]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.service
[timer]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-pages.timer
[update-script]: https://git.kevin-mok.com/Kevin-Mok/server-pages/src/branch/master/server-status.js
