---
layout: codelab

title: 'Preparing Raspberry Pi configuration' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

For this part of the tutorial, I'm going to be using a Raspberry Pi model 3B+, although some other Raspberry Pi which runs an OS version compatible with dess will also work. This time we are going to be using Raspbian (Raspberry Pi OS Lite (32-bit) version), along with the Raspberry Pi Imager program, which will help us to install the OS.

First of all, we need to download the [Raspberry Pi Imager program](https://www.raspberrypi.com/software/) for our current PC OS:
{{< image type="page" src="imager.png" >}}


We can install the Lite or the Full version. I will be using the Lite one:
{{< image type="page" src="imager2.png" >}}

It is important that we configure SSH, as we will be using it to connect to the device. It is highly recommendable to configure it with public-key authentication (for security reasons), but you can also configure it with username and password (which is not secure).
{{< image type="page" src="ssh.png" >}}

We can also configure other things, such as a wireless network, or a username/password for the system. If you are going to be using the device connected to the Ethernet, I would not recommend configuring the wireless network. 

{{< image type="page" src="wireless.png" >}}

If you configure the wireless network and then decide to connect it to your network through Ethernet, you may experience some network related errors in the next steps (dess installation). In that case, you can run:

	ip addr sh

To see your interfaces (typically, eth0 and wlan0), and:

	ip link set wlan0 down

To shutdown your wireless network interface, so the installation can run properly. You can enable it again by substituting 'down' by 'up' in the previous command.

Finally, introduce the SD-card into your computer, select it, and write the OS to the SD-Card (all content will be formatted in the process):
{{< image type="page" src="write.png" >}}


After the installation ends, we can continue with the next step.
