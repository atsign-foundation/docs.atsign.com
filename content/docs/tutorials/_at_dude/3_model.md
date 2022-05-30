---
layout: codelab

title: 'Models' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

| TOC                              |
|----------------------------------|
|  [Dude Model](#dude-model)       |
|  [From Json](#from-json)         |
|  [To Json](#to-json)             |
|  [Other Methods](#other-methods) |
|  [Profile Model](#profile-model) |

This app uses two model for data management, the dude model and the profile model.

#### Dude Model

The dude model is a class that represent a dude or a message that will be sent to others on the at platform.The dude model class contains the following properties.

```dart
class DudeModel {
  late String id;
  String dude = '';
  late String sender;
  late String receiver;
  late DateTime timeSent;
  late Duration duration;
  DudeModel({
    required this.id,
    required this.dude,
    required this.sender,
    required this.receiver,
    required this.timeSent,
    required this.duration,
  });
  }
...
```

The value of these properties will be sent to the @platform as a string.

The receiver and sender properties are necessary for the @platform to determine on will send and receive the data and on whose server the data will be saved.

The duration property will determine which voiceover will be played. A voiceover will be played to reflect the duration of the dude message. 

##### From Json

```Dart
...
  DudeModel.fromJson(Map<String, dynamic> json)
      : this(
            id: json['id'] as String,
            dude: json['dude'] as String,
            sender: json['sender'] as String,
            receiver: json['receiver'] as String,
            timeSent: DateTime.parse((json['timeSent'])) as DateTime,
            duration: Duration(milliseconds: json['duration']) as Duration);
...
```

This method converts the json received from the @platform to the `DudeModel()` class.


##### To Json

```dart
...
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'dude': dude,
      'sender': sender,
      'receiver': receiver,
      'timeSent': timeSent.toIso8601String(),
      'duration': duration.inMilliseconds,
    };
  }
...
```

This method converts the `DudeModel()` instance into a Map.

##### Other Methods
```dart
...
void saveId() => id = const Uuid().v4();
  void saveDude(String value) => dude = value;
  void saveSender(String value) => sender = value;
  void saveReceiver(String value) => receiver = value;
  void saveTimeSent() => timeSent = DateTime.now();

  ///Record the duration of a dude.
  /// Record the length of a dude use want to send.
  void saveDuration(DateTime startTime) {
    duration = DateTime.now().difference(startTime);
  }
  ...
```
These methods will save the values received from the app and save it to an instance of the `DudeModel()` that will be sent to the @Platform.

#### Profile model

This model keeps track of the number of dudes sent, the number of hours spend duding and the duration of the longest dude.

```Dart
class ProfileModel {
  late String id;
  int dudesSent = 0;
  Duration dudeHours = const Duration(milliseconds: 0);
  Duration longestDude = const Duration(milliseconds: 0);

  ProfileModel({
    required this.id,
    required this.dudesSent,
    required this.dudeHours,
    required this.longestDude,
  });

  ProfileModel.newDude();

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'dudesSent': dudesSent,
      'dudeHours': dudeHours.inMilliseconds,
      'longestDude': longestDude.inMilliseconds,
    };
  }

  ProfileModel.fromJson(Map<String, dynamic> json)
      : this(
          id: json['id'] as String,
          dudesSent: json['dudesSent'] as int,
          dudeHours: Duration(milliseconds: json['dudeHours']) as Duration,
          longestDude: Duration(milliseconds: json['longestDude']) as Duration,
        );

  // @override
  // String toString() {
  //   return 'ProfileModel(id: $id, dude: $dude, sender: $sender, receiver: $receiver, timeSent: $timeSent, duration: $duration)';
  // }

  void saveId(String value) => id = value;
  void saveDudesSent(int value) => dudesSent = value;
  void saveDudeHours(Duration value) => dudeHours = value;
  void saveLongestDude(Duration value) => longestDude = value;

  bool getChampionStats() {
    return longestDude >= const Duration(hours: 1);
  }
}
```



