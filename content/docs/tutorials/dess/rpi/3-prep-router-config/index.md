---
layout: codelab

title: 'Preparing router configuration' # Step Name
description: | # SEO Description for this step
  Prepare router configuration for setting up private dess using Raspberry Pi

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

Now we will need to do the proper configuration in our home router. We will need to do two things:
	
- Open port 80, and a port for the dess (typically 6464)
- Associate Dynamic DNS to No-IP


After logging in into the home router (In my case, navigating to "192.168.1.1" in any web browser. You will find that information on the back of your router), We can start the configuration. We will need to know the local IP assigned to our Raspberry Pi (which can be also seen in the router configuration page).

Firstly, we will open the ports we need. Port 80 needs to be opened so [Certbot](https://certbot.eff.org/) can provide us with a certificate from [Let's Encrypt](https://letsencrypt.org/).

This is an example of both ports opened for our Raspberry Pi's local IP:
{{< image type="page" src="router-ports2.png" >}}
{{< image type="page" src="router-ports1.png" >}}

After that, we now need to configure the Dynamic DNS (DDNS) service. Some newer routers let the users choose a popular service (such as No-IP) directly from a list (as in the following example image), but if that is not our case, we can just provide the router with the direction of the service.
{{< image type="page" src="router-ddns.png" >}}

That is all we will need to configure in our router.
