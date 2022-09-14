---
layout: codelab

title: 'Set up the Client' # Step Name
description: | # SEO Description for this step
  Setup your client to connect to the remote device via ssh

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

Run the client on your machine. 

```sh
./sshnp --from <@your_manager_atsign> --to <@your_devices_atsign> --host <example.com>  -l --local-port --device <iot_device_name>
```

(Or run the dart file via `dart run`)

```sh
dart run bin/sshnp.dart <args|flags>
```

See the options & flags available for the client binary:

| Argument         | Abbreviation | Mandatory | Description                                                                           | Default   |
|------------------|--------------|-----------|---------------------------------------------------------------------------------------|-----------|
| --key-file       | -k           | false     | Sending atSign's atKeys file if not in `~/.atsign/keys/`                              |           |
| --from           | -f           | true      | Sending atSign                                                                        |           |
| --to             | -t           | true      | Send a notification to this atSign                                                    |           |
| --device         | -d           | false     | Send a notification to this device                                                    | "default" |
| --host           | -h           | true      | FQDN Hostname e.g. example.com or IP address to connect back to                       |           |
| --port           | -p           | false     | TCP port to connect back to                                                           | 22        |
| --local-port     | -l           | false     | Reverse ssh port to listen on, on your local machine                                  | 2222      |
| --ssh-public-key | -s           | false     | Public key file from `~/.ssh` to be appended to authorized_hosts on the remote device | false     |

| Flags          | Abbreviation | Description  |
|----------------|--------------|--------------|
| --[no-]verbose | -v           | More logging |