---
layout: codelab

title: "AtClientPreference" # Step Name
description: | # SEO Description for this step
  The atPlatform AtClientPreference in Flutter and Dart

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

### Overview

AtClientPreference is used to configure the preferences of an atPlatform application. It offers a variety of attributes to give a developer ultimate flexibility.

| Attributes                | Description                                                                                                       | Optional/Mandatory  | Default Value   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------- | --------------- | 
| hiveStoragePath           | Local device path of hive storage                                                                                 | Mandatory           | N/A             |
| commitLogPath             | Local device path of commit log                                                                                   | Mandatory           | N/A             |
| isLocalStoreRequired      | Specify whether local store is required                                                                           | Optional            | false           | 
| cramSecret                | Shared secret of the atSign                                                                                       | Mandatory           | N/A             |
| keyStoreSecret            | Secret key to encrypt keystore data                                                                               | Mandatory           | N/A             |
| privateKey                | Private key of the atSign                                                                                         | Mandatory           | N/A             |
| namespace                 | Specifies the namespace of an app.                                                                                | Mandatory           | N/A             |
| rootDomain                | Domain of the root server. Defaults to root.atsign.com                                                            | Optional            | root.atsign.org |
| rootPort                  | Port of the root server. Defaults to 64                                                                           | Optional            | 64              |
| syncIntervalMins          | Frequency of sync tasks to run in minutes. Defaults to 10 minutes.                                                | Optional            | 10              |
| outboundConnectionTimeout | Idle time in milliseconds of connection to secondary server. Defaults to 10 minutes.                              | Optional            | 600000          |
| maxDataSize               | Maximum data size a secondary can store. Temporary solution. Have to fetch this from the server using stats verb. | Optional            | 512000          |
| downloadPath              | Default path to download stream files                                                                             | Mandatory           | N/A             |
| syncRegex                 | Regex to perform sync                                                                                             | Mandatory           | N/A             |
| syncBatchSize             | Number of keys to batch for sync to secondary server                                                              | Optional            | 5               |
| syncPageLimit             | Number of keys to pull from cloud secondary to local secondary in a single call.                                  | Optional            | 10              |

For Local device paths we recommend the path_provider package.

## Usage

```
Future<AtClientPreference> loadAtClientPreference() async {
 var dir = await getApplicationSupportDirectory();
 return AtClientPreference()
       ..rootDomain = 'root.atsign.org'
       ..namespace = 'sdkExample'
       ..hiveStoragePath = dir.path
       ..commitLogPath = dir.path
       ..isLocalStoreRequired = true
     // TODO set the rest of your AtClientPreference here
     ;
}
```
