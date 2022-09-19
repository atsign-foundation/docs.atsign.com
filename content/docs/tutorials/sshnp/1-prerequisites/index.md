---
layout: codelab

title: 'Prerequisites' # Step Name
description: | # SEO Description for this step
  Get your environment ready to run this codelab.

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 1 # Ordering of the steps
---

[SSH No Ports](https://github.com/atsign-foundation/sshnoports) provides a way to ssh to a remote linux host/device without that device having any open ports (not even port 22). All network connectivity is out bound and there is no need to know the IP address the device has been given. As long as the device has an IP address, DNS and Internet access, you will be able to connect to it.

See our [GitHub repository](https://github.com/atsign-foundation/sshnoports) and [demo video](https://www.youtube.com/watch?v=Z-5sZ2UQn0I) for more information.

Demo video:

{{< youtube src="https://www.youtube.com/embed/Z-5sZ2UQn0I" >}}

{{< br >}}

Instructions:

1. Prepare two atSigns and ensure you have both of their `.atKeys` files. If you've done this, skip to step 3.
2. If you don't have two atSigns (free or paid), go to [atsign.com](https://atsign.com). Once you've obtained two atSigns be sure to activate them on the dashboard by pressing the "Click to activate" button on each atSign dropdown. Then you will have to onboard these atSigns and generate your .atKeys files. There are two ways you can do this.

One, you can download one of our apps (like [atmospherePro](https://atsign.com/apps/atmospherepro/)) and onboard the atSign via the [at_onboarding_flutter widget](https://pub.dev/packages/at_onboarding_flutter) built into the app. This will generate your .atKeys file for you. Save this `.atKeys` file to the machine you are working on. One of these atSigns wil be the "manager" atSign working on the client-side and the other atSign will be the "device" atSign working in the remote device. 

Two, you can also use the [at_onboarding_cli](https://github.com/atsign-foundation/at_libraries/tree/trunk/at_onboarding_cli) to generate your keys through terminal.

3. Download the binaries [here](https://github.com/atsign-foundation/sshnoports/releases). Ssh! No ports comes with two binary files. One binary (sshnpd) is the daemon that runs on the remote linux host/device, while the other binary (sshnp) runs on the client that is connecting to the device via ssh. *It is also possible to run the source code via `dart run`.