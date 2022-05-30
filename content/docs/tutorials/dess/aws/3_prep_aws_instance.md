---
layout: codelab

title: 'Preparing AWS Instance' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---


Now since I am new to AWS, the easiest way to get started is by using the LightSail service from service catalog. This will enable you to deploy small system which is more then capable of handling dess at pre-set price.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image002-16272842283471.jpg?raw=true)

Welcome to LightSail:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image004-16272842283482.jpg?raw=true)

First step is to create new instance. Fortunately, we have big orange button that can do just that!

There are several options we are presented at this moment. Since I am living in Europe I select “Frankfurt, Zone A (eu-central-1a)” as my instance location. Instance region will dictate how well will your instance response based on your geographical location. People located in India should selects APAC region where as people in US should select North America region. You can leave availability zone set as default.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image006-16272842283483.jpg?raw=true)

Next up will be selection of operating system we want to deploy. We know that dess works well with Ubuntu 20.04 LTS so lets select just that.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image008.jpg?raw=true)

You are presented with couple more options, but unless you know what you are doing leave these as is.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image010.jpg?raw=true)

Now let’s select instance plan. dess is relatively light weight so for testing purposes I will select first instance plan for 3.5$/Month. This will provide us with 512 MB of RAM, 1vCPU, 20GB of storage and 1TB of data transfer. This is more than enough to run our dess.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image012.jpg?raw=true)

Lastly we have to name our instance. This is the name you will be presented with in your dashboard.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image014.jpg?raw=true)

Last but not least is to press “Create instance”

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image015.png?raw=true)

After a couple of seconds you should be re-routed to your dashboard and see your instance up and running:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image016.png?raw=true)