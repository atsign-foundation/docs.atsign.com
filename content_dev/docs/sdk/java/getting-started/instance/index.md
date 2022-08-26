---
layout: codelab

title: Creating an instance of AtClient # Step Name
description: | # SEO Description for this step
  Create an instance of AtClient with one of the various factory methods

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 1 # Ordering of the steps
---

To create an instance of AtClient, use one of the factory methods. Note: you must have the `.atKeys` file in the `~/.atsign/keys` directory. You can generate a .atKeys file from using the Register CLI or Onboaring CLI if you already own the atSign.

```
String ATSIGN_STR = "@bob";
AtSign atSign = new AtSign(ATSIGN_STR);
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(atSign);
} catch (AtException e) {
    System.err.println(e);
    e.printStackTrace();
}
// use atClient
```

There are a number of other factory methods for creating an AtClient instance to suit your needs. See the image below.

{{< image type="page" src="oc0YZfL.png" >}}

