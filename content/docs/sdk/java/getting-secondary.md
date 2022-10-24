---
layout: codelab

title: Getting Secondary.Address # Step Name
description: | # SEO Description for this step
  There are a number to get the address of a secondary server belonging to an atSign( using Secondary.Address Finder and Secondary.Address Constructor)

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

There are a number to get the address of a secondary server belonging to an atSign.

-  You have the atSign and rootUrl

```java
// Use Secondary.AddressFinder
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR = "@bob";
        
AtSign atSign = new AtSign(ATSIGN_STR);
Secondary.AddressFinder saFinder = ArgsUtil.createAddressFinder(ROOT_URL);
Secondary.Address sAddress = null;
try {
    sAddress = saFinder.findSecondary(atSign);
} catch (NoSuchSecondaryException | IOException e) {
    System.err.println(e);
    e.printStackTrace();
}

// use sAddress
```

-  You have the host and port of the secondary server
```java
// Use Secondary.Address constructor
String HOST = "ddbe1816-f40f-5b9f-bb2a-ba1492b93aec.staging0001.atsign.zone";
int PORT = 3198;

Secondary.Address sAddress = new Secondary.Address(HOST, PORT);

// use sAddress
```
