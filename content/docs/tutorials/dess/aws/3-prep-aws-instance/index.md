---
layout: codelab

title: 'Preparing AWS Instance' # Step Name
description: | # SEO Description for this step
  Preparing AWS Instance for setting up private dess

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---


Now since I am new to AWS, the easiest way to get started is by using the LightSail service from service catalog. This will enable you to deploy small system which is more then capable of handling dess at pre-set price.

{{< image type="page" src="clip_image002-16272842283471.jpg" >}}

Welcome to LightSail:

{{< image type="page" src="clip_image004-16272842283482_18125622222514166628_hufdea9b3ab0552a2e74e899b60a1b4819_0_800x0_resize_q75_box.jpg" >}}

First step is to create new instance. Fortunately, we have big orange button that can do just that!

There are several options we are presented at this moment. Since I am living in Europe I select “Frankfurt, Zone A (eu-central-1a)” as my instance location. Instance region will dictate how well will your instance response based on your geographical location. People located in India should selects APAC region where as people in US should select North America region. You can leave availability zone set as default.

{{< image type="page" src="clip_image006-16272842283483.jpg" >}}

Next up will be selection of operating system we want to deploy. We know that dess works well with Ubuntu 20.04 LTS so lets select just that.

{{< image type="page" src="clip_image008.jpg">}}

You are presented with couple more options, but unless you know what you are doing leave these as is.

{{< image type="page" src="clip_image010.jpg" >}}

Now let’s select instance plan. dess is relatively light weight so for testing purposes I will select first instance plan for 3.5$/Month. This will provide us with 512 MB of RAM, 1vCPU, 20GB of storage and 1TB of data transfer. This is more than enough to run our dess.

{{< image type="page" src="clip_image012.jpg" >}}

Lastly we have to name our instance. This is the name you will be presented with in your dashboard.

{{< image type="page" src="clip_image014.jpg" >}}

Last but not least is to press “Create instance”

{{< image type="page" src="clip_image015.png" >}}

After a couple of seconds you should be re-routed to your dashboard and see your instance up and running:

{{< image type="page" src="clip_image016.png" >}}