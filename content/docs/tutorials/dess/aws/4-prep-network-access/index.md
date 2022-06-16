---
layout: codelab

title: 'Preparing your instance for network access' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

#### Assignment of Static IP

Next up, is to provide our instance with a static IP and linking our domain to it.

When you click on your instance name, it will take you to the management console, which should look like this:

{{< image type="page" src="clip_image002-16272853840264.jpg" >}}

This is where you control hardware, connectivity and if needed can delete your instance.

Lets configure a static IP address for your new instance. Navigate to Networking and click on Create static IP:

{{< image type="page" src="clip_image003.png" >}}

Our region and instance is selected, so the only thing left is to name our static IP. I selected the name atsign-static, but it can be any name you like.

{{< image type="page" src="clip_image005.jpg" >}}

Lets hit create:

{{< image type="page" src="clip_image007.jpg" >}}

And voila, we now have a static IP address on the internet and it will not change. Now we can link our domain name with it.

{{< image type="page" src="clip_image009.jpg" >}}

When you click on your instance name and navigate to Networking, the static IP is now assigned.

{{< image type="page" src="clip_image011.jpg" >}}

#### Assignment of Domain name to your static IP 

We can now move on to linking our static IP address to our domain. This is done via the AWS console which can be accessed in the top right of Lightsail.

{{< image type="page" src="clip_image001.png" >}}

Verify your email used for registering domain:

By now you should receive verification email that will confirm registration of your domain. Click this link before moving on.

Linking domain with your static address:

Lets navigate to “Route 53” from Services menu.

{{< image type="page" src="clip_image003.jpg" >}}

From your dashboard click on “Domain” which will take you to the “Registered Domains” tab.

{{< image type="page" src="clip_image005-16272854399076.jpg" >}}

Here you can click on your registered domain which will take you to overview page with domain status and contacts.

{{< image type="page" src="clip_image007-16272854399087.jpg" >}}

Click on “Manage DNS”

{{< image type="page" src="clip_image009-16272854399088.jpg" >}}

And click on your domain name.

This will show you your DNS records for your domain. We now need to link A type record to your domain linking it to IP address of your instance.

This is done simply by typing your static IP address from previous step into field “Value” and clicking Create record:

{{< image type="page" src="clip_image011-16272854399089.jpg" >}}

If everything goes well you should see following in your domain dashboard:

{{< image type="page" src="clip_image013.jpg" >}}

To test if you are successful open command line and ping your domain. You should see your instance static IP address. It will not respond which is normal due to IPv4 firewall. It is actually good thing!

{{< image type="page" src="clip_image014.png" >}}

At this point we have created DNS record we will use to link our dess, we created instance name which will be running our dess and we have opened port range which is exposed to the internet and we can communicate with @sign root server and our apps with.

#### Setting up Firewall

Next up we need to make sure we have ports open for our dess to communicate with root server and our apps. In Section networking go to section “IPv4 Firewall” and click “+ Add rule” Our rule will be “Custom” on TCP protocol with Port range in number higher then 1024. In my case I have selected port range 8000-8010. This will enable me to run up to 10 @signs in parallel.

{{< image type="page" src="clip_image002-16272854074665.jpg" >}}

Click create and verify that your new rule is in list:

{{< image type="page" src="clip_image002-16272854074665.jpg" >}}