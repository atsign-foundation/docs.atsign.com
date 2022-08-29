---
layout: codelab

title: 'Local Notification Service' # Step Name
description: | # SEO Description for this step
  Documentation

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


They are three service classes in the dude app, they are `NavigationServices()`, `DudeServices()` and `LocalNotificationServices()`. In this code lab we will explore the properties of these classes.


#### LocalNotificationService

This class contains the configurations required to send in app notification on Android and IOS.

##### imports

```dart
import 'dart:io';

import 'package:flutter/material.dart';

import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/data/latest.dart' as tz;
import 'package:timezone/timezone.dart' as tz;

import '../screens/history_screen.dart';
import 'navigation_service.dart';
```

The flutter_local_notification` package is used to send notifications.

##### Properties of LocalNotificationService

```dart
class LocalNotificationService {
  static final LocalNotificationService _notificationService =
      LocalNotificationService._internal();

  factory LocalNotificationService.getInstance() {
    return _notificationService;
  }

  factory LocalNotificationService() {
    return _notificationService;
  }

  final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  LocalNotificationService._internal();
  
  Future<void> initNotification() async {...}

  _requestIOSPermission() {...}

  /// Shows notification when dude is sent to the current atsign.
  ///
  /// Notification currently only works in app on android.
  Future<void> showNotifications(
      int id, String title, String body, int seconds) async {...}
}
```

Similar to `DudeService()` this class is a singleton. Lines 13 and 14 instantiates the `FlutterLocalNotificationsPlugin`.