---
title: "Linux Config"
date: 2019-04-26
draft: false
layout: single 
---
<!---  Intro {{{ --> 

![desktop-screenshot](/img/config/desktop-screenshot.png)
*Screenshot from my dual-monitor setup.*

This [repository][lc-repo] contains the dotfiles to increase my workflow 
efficiency. They are also for my Linux [rice][ricing_explanation].

[lc-repo]: https://git.kevin-mok.com/Kevin-Mok/linux-config
[ricing_explanation]: https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/cukxwog/
<!---  }}} Intro -->

<!---  Main Programs {{{ --> 
## Main Programs
* **OS**: [Arch Linux](https://www.archlinux.org/) ([packages](https://git.kevin-mok.com/Kevin-Mok/linux-config/src/branch/master/txt/arch-2-pkgs.txt))
    ```
    $ systemd-analyze
    Startup finished in 2.341s (kernel) + 1.085s (userspace) = 3.426s 
    graphical.target reached after 1.085s in userspace
    ```
* **Terminal**: [kitty](https://sw.kovidgoyal.net/kitty/) 
* **Shell**: [fish](https://fishshell.com/)
* **Window Manager**: [i3-gaps](https://i3wm.org/)
* **Editor**: [neovim](https://neovim.io/) ([plugins](https://git.kevin-mok.com/Kevin-Mok/linux-config/src/branch/master/dot_vimrc.tmpl#L147-L359))
* **File Manager**: [ranger](https://github.com/ranger/ranger?tab=readme-ov-file#ranger-193)/[PCManFM](https://en.wikipedia.org/wiki/PCMan_File_Manager)
<!---  }}} Basic Info --> 

<!---  Setup {{{ --> 

## Setup
I use [chezmoi] to manage varying configs for different machines with 
a single branch.                                                         

[chezmoi]: https://github.com/twpayne/chezmoi

<!---  }}} Setup --> 
