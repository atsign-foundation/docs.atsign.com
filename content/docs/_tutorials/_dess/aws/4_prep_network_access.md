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

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image002-16272853840264.jpg?raw=true)

This is where you control hardware, connectivity and if needed can delete your instance.

Lets configure a static IP address for your new instance. Navigate to Networking and click on Create static IP:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image003.png?raw=true)

Our region and instance is selected, so the only thing left is to name our static IP. I selected the name atsign-static, but it can be any name you like.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image005.jpg?raw=true)

Lets hit create:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image007.jpg?raw=true)

And voila, we now have a static IP address on the internet and it will not change. Now we can link our domain name with it.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image009.jpg?raw=true)

When you click on your instance name and navigate to Networking, the static IP is now assigned.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image011.jpg?raw=true)

#### Assignment of Domain name to your static IP 

We can now move on to linking our static IP address to our domain. This is done via the AWS console which can be accessed in the top right of Lightsail.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image001.png?raw=true)

Verify your email used for registering domain:

By now you should receive verification email that will confirm registration of your domain. Click this link before moving on.

Linking domain with your static address:

Lets navigate to “Route 53” from Services menu.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image003.jpg?raw=true)

From your dashboard click on “Domain” which will take you to the “Registered Domains” tab.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image005-16272854399076.jpg?raw=true)

Here you can click on your registered domain which will take you to overview page with domain status and contacts.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image007-16272854399087.jpg?raw=true)

Click on “Manage DNS”

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image009-16272854399088.jpg?raw=true)

And click on your domain name.

This will show you your DNS records for your domain. We now need to link A type record to your domain linking it to IP address of your instance.

This is done simply by typing your static IP address from previous step into field “Value” and clicking Create record:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image011-16272854399089.jpg?raw=true)

If everything goes well you should see following in your domain dashboard:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image013.jpg?raw=true)

To test if you are successful open command line and ping your domain. You should see your instance static IP address. It will not respond which is normal due to IPv4 firewall. It is actually good thing!

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image014.png?raw=true)

At this point we have created DNS record we will use to link our dess, we created instance name which will be running our dess and we have opened port range which is exposed to the internet and we can communicate with @sign root server and our apps with.

#### Setting up Firewall

Next up we need to make sure we have ports open for our dess to communicate with root server and our apps. In Section networking go to section “IPv4 Firewall” and click “+ Add rule” Our rule will be “Custom” on TCP protocol with Port range in number higher then 1024. In my case I have selected port range 8000-8010. This will enable me to run up to 10 @signs in parallel.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image002-16272854074665.jpg?raw=true)

Click create and verify that your new rule is in list:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image002-16272854074665.jpg?raw=true)