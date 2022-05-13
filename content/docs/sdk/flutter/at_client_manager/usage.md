---
layout: codelab

title: 'Usage' # Step Name
description: | # SEO description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---


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