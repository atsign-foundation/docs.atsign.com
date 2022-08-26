---
layout: codelab

title: 'Set up the Daemon' # Step Name
description: | # SEO Description for this step
  Get your daemon setup on your remote device

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

1. Place your `.atKeys` files in `~/.atsign/keys` directory for both your client and device. One atSign will be the manager (client) atSign and the other atSign will be the device atSign (that you will be connecting to via ssh).

2. Start up the daemon (sshnpd) on the remote device. Remember to start up the daemon on device start up via rc.local or similar.

```sh
./sshnpd --atsign <@your_devices_atsign> --manager <@your_manager_atsign> \
--device <iot_device_name> -u
```

(Or run the dart file via `dart run`)

```sh
dart run bin/sshnpd.dart <args|flags>
```

See the options & flags available for the daemon binary:

| Argument  | Abbreviation | Mandatory | Description                                                                         | Default   |
|-----------|--------------|-----------|-------------------------------------------------------------------------------------|-----------|
| --keyFile | -k           | false     | Sending atSign's keyFile if not in `~/.atsign/keys/`                                |
| --atsign  | -a           | true      | atSign of this device                                                               |
| --manager | -m           | true      | Manager's atSign, that this device will accept triggers from                        |
| --device  | -d           | false     | Send a trigger to this device, allows multiple devices share an atSign              | "default" |

| Flags               | Abbreviation | Description                                                                     |
|---------------------|--------------|---------------------------------------------------------------------------------|
| --[no-]sshpublickey | -s           | Update authorized_keys to include public key from sshnp                         |
| --[no-]username     | -u           | Send username to the manager to allow sshnp to display username in command line |
| --[no-]verbose      | -v           | More logging                                                                    |