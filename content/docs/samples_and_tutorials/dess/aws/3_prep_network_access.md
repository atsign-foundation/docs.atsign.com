---
layout: codelab

title: 'Preparing your instance for network access' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

### Overview

AtClientPreference is used to configure the preferences of an @platform application. It offers a variety of attributes to give a developer ultimate flexibility. 

| Attributes                | Description |
| ------------------------- | ----------- |
| hiveStoragePath           | Local device path of hive storage |
| commitLogPath             | Local device path of commit log |
| isLocalStoreRequired      | Specify whether local store is required
| cramSecret                | Shared secret of the atSign
| keyStoreSecret            | Secret key to encrypt keystore data
| privateKey                | Private key of the atSign 
| namespace                 | Specifies the namespace of an app.
| rootDomain                | Domain of the root server. Defaults to root.atsign.com
| rootPort                  | Port of the root server. Defaults to 64
| syncIntervalMins          | Frequency of sync tasks to run in minutes. Defaults to 10 minutes.
| outboundConnectionTimeout | Idle time in milliseconds of connection to secondary server. Default to 10 minutes.
| maxDataSize               | Maximum data size a secondary can store. Temporary solution. Have to fetch this from the server using stats verb.
|downloadPath               | Default path to download stream files
|syncRegex                  | regex to perform sync
|syncBatchSize              | Number of keys to batch for sync to secondary server
|syncPageLimit              | The number of keys to pull from cloud secondary to local secondary in a single call.

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
