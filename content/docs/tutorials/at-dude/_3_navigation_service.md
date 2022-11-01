---
layout: codelab

title: 'Navigation Service' # Step Name
description: | # SEO Description for this step
  Documentation for "Navigation Services" in atDude app

draft: true # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order:  # Ordering of the steps
---
| TOC                              |
|----------------------------------|
|  [Navigation Service](#navigationservice)       |
|  [Dude Service](#dudeservice)         |
|  [Dude Service Imports](#imports)             |
|  [Dude Service Properties](#properties-of-dudeservice) |
|  [Local Notification](#localnotificationservice) |
|  [Local Notification imports](#imports-1) |
|  [Properties of LocalNotificationService](#properties-of-localnotificationservice) |


There are three service classes in the dude app, they are `NavigationServices()`, `DudeServices()` and `LocalNotificationServices()`. In this code lab we will explore the properties of these classes.


#### NavigationService

```dart
import 'package:flutter/material.dart';

class NavigationService {
  static GlobalKey<NavigatorState> navKey = GlobalKey();

  static GlobalKey<NavigatorState> nesteNavKey = GlobalKey();
}

```

This Class contains two static properties of type `GlobalKey`. It allows us to get the current context without being inside a builder method.

