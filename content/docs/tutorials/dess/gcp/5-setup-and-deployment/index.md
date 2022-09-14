---
layout: codelab

title: 'Instance setup and dess deployment' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---


Open your GCP console at https://console.cloud.google.com/compute/instances and search for ```VM instances```

{{< image type="page" src="gcp-search-vm_18139707276442090809.png" >}}

By now you should see your instance in “Running state”

{{< image type="page" src="gcp-vm-status_17581805644815711932_hua5c51e9e12cdc2b272965933eeace49d_0_600x0_resize_box_3.png" >}}

Click on the SSH button and connect to your instance.

You should be presented by new window with command line:

{{< image type="page" src="gcp-vm-connected_9664295141231021424_hu7e59050221157d166e838d298e258e4b_0_600x0_resize_box_3.png" >}}

Before we do anything else, we should update the system:

```sudo apt update && sudo apt upgrade```

This might take some time, but it will make sure we have latest repository information and the system is up to date.

Next make sure curl is installed, we will use curl to pull the dess installation file:

```sudo apt install curl```
Finally, run the dess installer:

```curl -fsSL https://getdess.atsign.com | sudo bash```

Once the installer is finished you should be prompted like so:

```Dess installed, please move on to the sudo dess-create command```.
