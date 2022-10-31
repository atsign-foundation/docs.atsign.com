---
layout: codelab

title: 'Connection to Raspberry Pi' # Step Name
description: | # SEO Description for this step
  Connection to Raspberry Pi

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---

Now we will connect to our Raspberry Pi (which should be connected via ethernet or wireless to our network). We will be using [Putty](https://www.putty.org/), although there are other options such as [OpenSSH](https://www.openssh.com/). To begin with, [let's download the software](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).


We will choose SSH (port 22) and our Raspberry Pi local IP address:
{{< image type="page" src="putty-menu.png" >}}


If you are using a public-key (if not, this step is not necessary), you will have to choose the directory where it is located, in SSH->Auth options:
{{< image type="page" src="putty-key.png" >}}

After that, click 'Open' button, located in the main menu. The connection will start. Now we are ready to start configuring our private dess.