---
layout: codelab

title: 'Registration of atSign in your private dess' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 6 # Ordering of the steps
---

Now, we will proceed to install dess, following the official [instructions](https://github.com/atsign-foundation/dess/blob/trunk/Instructions.md#getting-started). Make sure curl is installed, we will use curl to pull the dess installation file:

	sudo apt install curl

Finally, run the dess installer:

	curl -fsSL https://getdess.atsign.com | sudo bash

Once the installer is finished you should be prompted like so:

```Dess installed, please move on to the sudo dess-create command.```



At this step you should already have your atSign registered at [atsign.com](http://atsign.com). If not go do it!

I have registered my own free atSign (@44likelycanary) which I will link to my dess.

In your instance console, navigate to dess folder. If you were following this guide it will be located in:

We now need to create the service that will host our atSign by executing the dess-create command:

	sudo dess-create <@your-atSign> <your-domain> <opened-port> <email-address> <service-name: your atsign with no '@'>```

For instance:
```sudo dess-create @44likelycanary 4atsign.link 8000 tutorial@example.com likelycanary```

To make it more understandable:

- I will be registering my atSign @44likelycanary.

- I will be using my domain 4atsign.link which I have registered.

- I am using port 8000 which I have opened in my router firewall (typically 6464, but as we can see, it can be any other).

- My registration email address is tutorial@example.com (this email is used to sign the SSL certificates).

- The last likelycanary is the name that docker will use to track the service.

If everything is successful you should see output like this:

{{< image type="page" src="clip_image004-162728549379914.jpg" >}}



At this moment your atSign is registered on your dess.