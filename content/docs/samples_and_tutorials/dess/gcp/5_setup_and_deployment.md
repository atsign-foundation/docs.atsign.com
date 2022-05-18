---
layout: codelab

title: 'Instance setup and dess deployment' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---


Open your GCP console at https://console.cloud.google.com/compute/instances and search for ```VM instances```


![gcp-search-vm](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-vm.png?raw=true)

By now you should see your instance in “Running state”


![gcp-vm-status](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-vm-status.png?raw=true)

Click on the SSH button and connect to your instance.

You should be presented by new window with command line:


![gcp-vm-connected](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-vm-connected.png?raw=true)

Before we do anything else, we should update the system:

```sudo apt update && sudo apt upgrade```

This might take some time, but it will make sure we have latest repository information and the system is up to date.

Next make sure curl is installed, we will use curl to pull the dess installation file:

```sudo apt install curl```
Finally, run the dess installer:

```curl -fsSL https://getdess.atsign.com | sudo bash```

Once the installer is finished you should be prompted like so:

```Dess installed, please move on to the sudo dess-create command```.
