---
layout: codelab

title: 'Instance setup and dess deployment' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---


Open your [LightSail](https://lightsail.aws.amazon.com/) console

By now you should see your instance in “Running state”

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image002-162728546025210.jpg?raw=true)

Open it and on tab Connect click on “Connect using SSH”

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image003-162728546025211.png?raw=true)

You should be presented by a new window with command line:

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-aws/images/clip_image005-162728546025212.jpg?raw=true)

Before we do anything else, we should update the system:

sudo apt update && sudo apt upgrade
This might take some time, but it will make sure we have latest repository information and the system is up to date.

Next make sure curl is installed, we will use curl to pull the dess installation file:

```sudo apt install curl```

Finally, run the dess installer:

```curl -fsSL https://getdess.atsign.com | sudo bash```

Once the installer is finished you should be prompted like so:

```Dess installed, please move on to the sudo dess-create command.```
