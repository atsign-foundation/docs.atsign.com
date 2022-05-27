---
layout: codelab

title: 'Send Dude Screen' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 7 # Ordering of the steps
---

At this step you should already have your @sign registered at [atsign.com](http://atsign.com). If not go do it!

I have registered my own free @sign (@44likelycanary) which I will link to my dess.

In your instance console, navigate to dess folder. If you were following this guide it will be located in:

We now need to create the service that will host our @sign by executing the dess-create command:

``` $ sudo dess-create @44likelycanary 4atsign.link 8000 <email address> likelycanary ```

To make it more understandable:

I will be registering my @sign @44likelycanary.

I will be using my domain 4atsign.link which I have registered through AWS.

I am using port 8000 which I have opened in my instance firewall.

My registration email address is <email address> (this email is used to sign the SSL certificates).

The last likelycanary is the name that docker will use to track the service.

If everything is successful you should see output like this:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image004-162728549379914.jpg?raw=true)

At this moment your @sign is registered on your dess.