---
layout: codelab

title: "Dude Service" # Step Name
description: | # SEO Description for this step
  Documentation for "Dude Service" in atDude app

draft: true # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order:  # Ordering of the steps
---

| TOC |
| --- |

| [Dude Service](#dudeservice) |
| [Dude Service Imports](#imports) |
| [Dude Service Properties](#properties-of-dudeservice) |
| [Local Notification](#localnotificationservice) |
| [Local Notification imports](#imports-1) |
| [Properties of LocalNotificationService](#properties-of-localnotificationservice) |

There are three service classes in the dude app, they are `NavigationServices()`, `DudeServices()` and `LocalNotificationServices()`. In this code lab we will explore the properties of these classes.

#### DudeService

This class is a singleton that makes all the network calls to the atPlatform.

##### Imports

```Dart
import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:at_app_flutter/at_app_flutter.dart';
import 'package:at_client/src/service/notification_service.dart';
import 'package:at_client_mobile/at_client_mobile.dart';
import 'package:at_commons/at_commons.dart';
import 'package:at_contact/at_contact.dart';
import 'package:at_contacts_flutter/services/contact_service.dart';
import 'package:at_utils/at_utils.dart';
import '../models/dude_model.dart';
import '../models/profile_model.dart';
import 'local_notification_service.dart';
```

All the packages that starts with `at_` are packages that allows us to interact with the atPlatform.

at_app_flutter
: A library that help developers build flutter applications on the atPlatform.

at_client
: The at_client library is the non-platform specific Client SDK which provides the essential methods for building an app using the atProtocol.

at_client_mobile
: A Flutter extension to the at_client library which adds support for mobile, desktop and IoT devices.

at_commons
: A library of Dart and Flutter utility classes that are used across other components of the @‎platform.

at_contacts:
: A Dart library for managing contact data that developers can use for their applications.

at_contacts_flutter
: A Flutter plugin project to provide ease of managing contacts for an @‎sign using @‎platform.

at_utils
: A Dart library that contains various utility classes such as atSign, atmetadata, configuration, and logger.

We discussed the dude and profile model in the previous codelab.

##### Properties of DudeService

```dart
class DudeService {
  static final DudeService _singleton = DudeService._internal();

  DudeService._internal();

  factory DudeService.getInstance() {
    return _singleton;
  }
  final AtSignLogger _logger = AtSignLogger(AtEnv.appNamespace);

  AtClient? atClient;
  AtClientService? atClientService;
  var atClientManager = AtClientManager.getInstance();
  static var contactService = ContactService();

  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {...}

  /// Receives all dudes sent to the current atsign.
  Future<List<DudeModel>> getDudes() async {...}

  /// Subscribes to the stream of data being sent to the current atsign.
  void monitorNotifications(BuildContext context) {...}

  /// Fetch the current atsign contacts.
  Future<List<AtContact>?> getContactList() {...}

  /// Fetch the current atsign profile image
  Future<Uint8List?> getCurrentAtsignProfileImage() async {...}

  /// Fetch details for the current atsign
  Future<dynamic> getCurrentAtsignContactDetails() async {...}

  /// Get the profile stats for the current atsign
  Future<ProfileModel> getProfile() async {...}

  /// Save senders atsign to the current atsign local secondary.
  Future<void> putSenderAtsign(
      {required String senderAtsign, required String receiverAtsign}) async {...}

  /// Get sender atsign saved in the current atsign remote secondary.
  Future<List<String>> getSenderAtsigns() async {...}

  /// Delete dude sent to the current atsign.
  Future<bool> deleteDude(DudeModel dude) async {...}
  }
}
```

Line 2 - 6 creates a singleton pattern. Every time `DudeService.getInstance()` is called it will always return the same object. You can read more about it in on [stackoverflow](https://stackoverflow.com/questions/65868841/why-must-the-internal-be-called-in-the-class).

The `AtSignLogger` in line 9 is used to generate server logs. It also helps to classify logs into subclasses live severe, info and warning based on importance.

Lines 11 to 14 creates instances of `AtClient()`, `AtClientService()`, `AtClientManager()` and `ContactService()`.

AtClient
: AtClient should be used to perform Create, Read, Update or Delete (CRUD) operations on the secondary server.

AtClientService
: Class that manages your atsigns.

AtClientManager
: Factory class responsible for giving the instances of AtClient and other services for a given atSign.

##### DudeService Methods

We'll now discuss the network calls that are made to the atPlatform to perform various CRUD operation.

###### putDude Method

This method saves the `DudeModel` and `ProfileModel` on the atPlatform.

```dart
  /// Saves Dude to the receiver's remote secondary and stats to the sender's local secondary.
  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {
    bool isCompleted = false;
    dude.saveSender(atClient!.getCurrentAtSign()!);
    dude.saveReceiver(contactAtsign);
    dude.saveId();
    ...
  }
```

Line 4 instantiates `isCompleted` to false. This is to display a `CircularProgressIndicator` on the UI while this method is being executed.

Line 5 saves the currentAtsign or signed in user to the `DudeModel.receiver` property.

Line 6 saves the `contactAtsign` to the `DudeModel.receiver` property. The `contactAtsign` is the atsign that was selected as the receiver in the UI.

line 7 generates a UUID and saves it to the `DudeModel.id` property.

##### Metadata & AtKeys

```dart
  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {
        ...
   var metaData = Metadata()
      ..isEncrypted = true
      ..namespaceAware = true
      ..ttr = -1
      ..isPublic = false;

    var key = AtKey()
      ..key = dude.id
      ..sharedBy = dude.sender
      ..sharedWith = dude.receiver
      ..metadata = metaData
      ..namespace = '';

    dude.saveTimeSent();
    ...
    }
```

Lines 4 to 8 creates the `MetaData`. This class describes the characteristics of the `AtKey` being saved on the atPlatform. eg. The `AtKey` will not be available to everyone on the atPlatform because `isPublic` is set to false. The list of `Metadata` properties can be viewed here<add metadata link here>.

Lines 10 to 15 creates the `AtKey`. This class acts as an unique identifier of the data being saved to the atPlatform. If the atPlatform was a table the @key would represent the row.

It is important to remember that the atsign that creates the data owns the data. Therefore, the sharedWith property controls who the data is being shared with and the shareBy property determine who the owner of the data is. This is not true in every case, I'll explain the exception next.

Line 17 saves the current time to the `DudeModel.timeSent` property.

##### Notify

They are two ways to save data on the atPlatform. It can be saved on the sender secondary server or the receiver secondary server, We'll discuss the latter

```dart
  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {
        ...
    await atClientManager.notificationService.notify(
        NotificationParams.forUpdate(
          key,
          value: json.encode(dude.toJson()),
        ),
        onSuccess: (notification) async {});
    ...
    }
```

Lines 4 to 9 saves the the method we use to save data on the receiver secondary server. The reason we want to save the dude on the receiver server is because we want the receiver to have the permission to delete the dude after listening to it.

The `NotificationParams.forUpdate()` method accepts an `Atkey` and a value arguments. We pass the `AtKey` we created previously in line 6 and in line 7 we pass in a string as the value.

`json.encode(dude.toJson())` converts the `DudeModel` to a string.

##### Saving Profile Model data

```dart
  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {
        ...

    var profileMetaData = Metadata()
      ..isEncrypted = true
      ..namespaceAware = true
      ..isPublic = false;

    var profileKey = AtKey()
      ..key = 'dude_profile_' + dude.sender.replaceFirst('@', '')
      ..sharedBy = dude.sender
      ..metadata = profileMetaData;
    ...
```

Lines 5 to 8 creates the Profile `Metadata` and lines 10 to 13 creates the Profile `AtKey`. No `sharedWith` property was provided because the data will not be shared with any other atsign.

```dart
  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {
        ...
    try {
      AtValue profileAtValue = await atClient!.get(profileKey);
      ProfileModel profileModel =
          ProfileModel.fromJson(jsonDecode(profileAtValue.value));
      profileModel.saveId(dude.sender);
      profileModel.dudesSent += 1;
      profileModel.dudeHours += dude.duration;
      if (dude.duration > profileModel.longestDude) {
        profileModel.saveLongestDude(dude.duration);
      }
      await atClient!
          .put(
            profileKey,
            json.encode(
              profileModel.toJson(),
            ),
          )
          .whenComplete(() => isCompleted = true)
          .onError((error, stackTrace) => isCompleted = false);
    }
    ...
  )
```

Lines 5 to 7 retrieves the `ProfileModel` data from the remote secondary. We will discuss the `AtClient!.get()` method later in this code lab.

Lines 9 to 10 updated the `ProfileModel` by incrementing the previous values.

Lines 11 to 12 compare the current `dude.duration` with the previous `profileModel.longestDude` and saves the current `dude.duration` if it is the longest duration of the two.

Lines 14 to 22 saves the `profileModel` to remote secondary.

The code was placed in a try block because it will throw an exception if there is no `ProfileModel` in remote secondary.

```dart
  Future<bool> putDude(
      DudeModel dude, String contactAtsign, BuildContext context) async {
        ...

    } catch (e) {
      // Exception should be thrown the first time a profile is created for an atsign
      await atClient!
          .put(
            profileKey,
            json.encode(
              ProfileModel(
                      id: dude.sender,
                      dudesSent: 1,
                      dudeHours: dude.duration,
                      longestDude: dude.duration)
                  .toJson(),
            ),
          )
          .whenComplete(() => isCompleted = true)
          .onError((error, stackTrace) => isCompleted = false);
    }
    return isCompleted;
    }
```

Lines 8 to 20 saves the `profileModel` to the remote secondary. This code only execute the first time a profileModel is created for an atSign.

##### Getting Dudes from remote secondary

```dart
  /// Receives all dudes sent to the current atsign.
  Future<List<DudeModel>> getDudes() async {
    List<AtKey> receivedKeysList = [];
    var key = await atClient!.getAtKeys(
      regex: '^cached:.*@.+\$',
      // sharedBy: atsign,
    );

    receivedKeysList.addAll(key);
    ...
  }
```

    // @blizzard30:some_uuid.at_skeleton_app@assault30
    // @blizzard30:signing_privatekey@blizzard30

This method retrieves the `DudeModel` thats stored on remote secondary.

Lines 3 instantiates an empty list that will eventually store `AtKeys`.

Lines 4 to 7 grabs all the `AtKey` stored in the current atSign remote secondary.

Line 9 add the keys to the `receivedKeysList`.

```dart
  /// Receives all dudes sent to the current atsign.
  Future<List<DudeModel>> getDudes() async {
    ...
    List<DudeModel> dudes = [];
    for (AtKey key in receivedKeysList) {
      try {
        if (key.sharedBy != null && key.key!.length == 36) {
          AtValue _keyValue = await atClient!.get(AtKey()..key = key.key!);

          dudes.add(DudeModel.fromJson(jsonDecode(_keyValue.value)));
        }
      } on Exception catch (e) {
        ScaffoldMessenger(child: SnackBar(content: Text(e.toString())));
      }
    }
    return dudes;
  }
```

Line 4 instantiates an empty list that will eventually store the `DudeModel` extracted from remote secondary.

Lines 5 to 15 loops through every `AtKey` in the `receivedKeysList`.

line 7 filters the receivedKeysList to only select `AtKey` that was shared and where the key/id is a UUID.

line 8 extract the `AtValue` of the `AtKey`

line 10 converts the value of the `AtValue` to a `DudeModel` and add it to the empty dudes list.

line 13 shows a SnackBar with the exception message if an error occurs.

Line 16 returns the `List` of `DudeModel`.

#### Monitor Notification

The atPlatform has its own Notification Service that monitors being sent to the current atSign.

```dart
void monitorNotifications(BuildContext context) {
    atClientManager.notificationService
        .subscribe(regex: 'at_skeleton_app')
        .listen(
      (AtNotification notification) async {
        String? currentAtsign =
            DudeService.getInstance().atClient!.getCurrentAtSign();

        if (currentAtsign == notification.to) {
          await LocalNotificationService().showNotifications(
              notification.id.length,
              'Dude',
              '${notification.from} sent you a dude',
              1);
        }
      },
    );
  }
```

Line 3 subscribe to data being sent over the dude app.

In line the listen method expects an option function. This function receives an `AtNotification` that allows us to control what data we want to listen for as show in lines 5 to 16.

In line 6 to 7 we get the current atsign. In line 9 we filter the notification to ensure the notification is being sent to the current atsign.

In lines 10 to 14 we show the user a notification that a dude was sent to them by the atSign of the sender.

#### Get Contacts

```dart
  /// Fetch the current atsign contacts.
  Future<List<AtContact>?> getContactList() {
    return contactService.fetchContacts();
  }
```

Line 3 returns a list of `AtContacts`. An AtContact is a class containing properties of other atsigns that was selected as a contact.

#### Get Profile

This method retrieves the `ProfileModel` of the current atsign.

```dart
  /// Get the profile stats for the current atsign
  Future<ProfileModel> getProfile() async {
    return await atClient!
        .getAtKeys(
          regex: 'dude_profile_',
          sharedBy: atClient!.getCurrentAtSign(),
        )
        .then(
          (value) => atClient!.get(value[0]).then(
                (value) => ProfileModel.fromJson(
                  jsonDecode(value.value),
                ),
              ),
        );
  }
```

Lines 3 to 7 gets a list profile models AtKeys, there only one AtKey in the list. Line 9 returns the AtValue and lines 10 to 11 returns the `ProfileModel` class.

### Delete Dude

This dude deletes a dude from remote secondary.

```dart
 /// Delete dude sent to the current atsign.
  Future<bool> deleteDude(DudeModel dude) async {
    try {
      List<AtKey> dudeAtKey = await atClient!.getAtKeys(regex: dude.id);
      bool isDeleted = await atClient!.delete(dudeAtKey[0]);

      return isDeleted;
    } on AtClientException catch (atClientExcep) {
      _logger.severe('❌ AtClientException : ${atClientExcep.errorMessage}');
      return false;
    } catch (e) {
      _logger.severe('❌ Exception : ${e.toString()}');
      return false;
    }
  }
```

Line 4 returns a list containing a dude AtKey that corresponds with the uuid of the DudeModel. Line 5 deletes it.

Lines 8 to 13 logs the exception if an error occurs.
