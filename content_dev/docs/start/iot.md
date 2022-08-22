---
layout: list

title: "IoT Devices" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  Add end-to-end security to your IoT devices with the atPlatform.

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Get started with IoT (Internet of Things) devices on the atPlatform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "false" to hide the table of contents
autolinks: true # Change this to "false" to hide the automatic links below your content
weight: 3
---

## Introduction

Here at Atsign, we believe in a world where IoT devices have atSigns and send their data end-to-end-encrypted to other atSigns. We'd love to work with you on adding security to your IoT devices. Please contact us at [info@atsign.com](mailto:info@atsign.com) or join our [discord](https://discord.gg/55sHTQFxfz) and ask us about anything and we will be happy to answer!

## SSH No Ports

### Introduction

[SSH No Ports](https://github.com/atsign-foundation/sshnoports) provides a way to ssh to a remote linux host/device without that device having any open ports (not even port 22). All network connectivity is out bound and there is no need to know the IP address the device has been given. As long as the device has an IP address, DNS and Internet access, you will be able to connect to it.

See our [GitHub repository](https://github.com/atsign-foundation/sshnoports) and [demo video](https://www.youtube.com/watch?v=Z-5sZ2UQn0I) for more information.

### Instructions

1. Prepare two atSigns and ensure you have both of their `.atKeys` files. If you've done this, skip to step 3.
2. If you don't have two atSigns (free or paid), go to [atsign.com](https://atsign.com). Once you've purchased two atSigns be sure to activate them on the dashboard by pressing the "Click to activate" button on each atSign dropdown. Then you will have to onboard these atSigns by either .
3. Download the binaries [here](https://github.com/atsign-foundation/sshnoports/releases). Ssh! No ports comes with two binary files. One binary (sshnpd) is the daemon that runs on the remote linux host/device, while the other binary (sshnp) runs on the client that is connecting to the device via ssh. *It is also possible to run the source code via `dart run`.
4. Place your `.atKeys` files in `~/.atsign/keys` directory for both your client and device. One atSign will be the manager (client) atSign and the other atSign will be the device atSign (that you will be connecting to via ssh).
5. Start up the daemon (sshnpd) on the remote device. Remember to start up the daemon on device start up via rc.local or similar.

```sh
./sshnpd --atsign <@your_devices_atsign> --manager <@your_manager_atsign> \
--device <iot_device_name> -u
```

6. Run the client on your machine. 

```sh
./sshnp --from <@your_manager_atsign> --to <@your_devices_atsign> --host <example.com>  -l --local-port --device <iot_device_name>
```

The --host specifies a DNS name of the openssh server of the client machine that the remote device can connect to. If everything goes to plan the client will complete and tell you how to connect to the remote host for example.

7. Connect via ssh

```sh
ssh -p 3456 cconstab@localhost
```