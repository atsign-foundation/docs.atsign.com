---
layout: codelab

title: 'Controller' # Step Name
description: | # SEO Description for this step
  Documentation for "Controller" in atDude app

draft: true # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order:  # Ordering of the steps
---

| TOC                              |
|----------------------------------|
|  [Dude Model](#dude-model)       |
|  [From Json](#from-json)         |
|  [To Json](#to-json)             |
|  [Other Methods](#other-methods) |
|  [Profile Model](#profile-model) |

In this codelab we will discuss the controller class of the dude app and how it interacts with the `DudeService()` class.

#### Dude Controller
The `DudeController()` class controls the state management for the app.
```dart
/// A Dude class that controls the UI update when the [DudeService] methods are called.
class DudeController with ChangeNotifier {
  List<DudeModel> _dudes = [];

  List<DudeModel> get dudes {
    _dudes.sort((a, b) => b.timeSent.compareTo(a.timeSent));
    return _dudes;
  }

  /// Get dudes sent to the current astign.
  Future<void> getDudes() async {
    _dudes = await DudeService.getInstance().getDudes();
    notifyListeners();
  }

  List<AtContact> _contacts = [];

  List<AtContact> get contacts {
    return [..._contacts];
  }

  int get dudeCount => dudes.length;

  /// Get contacts for the current atsign.
  Future<void> getContacts() async {...}

  /// Deletes dudes sent to the current atsign.
  ///
  void deleteDude(DudeModel dude) async {...}
}
```

We extend this class with a `ChangeNotifier()` because the app uses the Provider package as state management.

Lines 5 to 8 returns a `List` of `DudeModel` sorted from oldest to newest dudes. Lines 18 to 20 returns a `List` of `AtContact`. The AtContacts class contains properties about the contacts of an atsign like the contacts atsign.

```dart
  /// Get dudes sent to the current astign.
  Future<void> getDudes() async {
    _dudes = await DudeService.getInstance().getDudes();
    notifyListeners();
  }
```
This method calls `DudeService.getDudes()` method followed by notify listeners so all widgets that depends on the `DudeModel()` will be rebuilt. ie dudes will be added to the screen.


```dart
  /// Get contacts for the current atsign.
  Future<void> getContacts() async {
    _contacts = await DudeService.getInstance().getContactList() ?? [];
    notifyListeners();
  }
```
This method calls `DudeService.getContactList()` method followed by notify listeners so all widgets that depends on the `DudeModel()` will be rebuilt. ie contacts will be added or removed from the screen. If the list of contacts is null an empty list is returned instead.

```dart
  /// Deletes dudes sent to the current atsign.
  ///
  void deleteDude(DudeModel dude) async {
    bool result = await DudeService.getInstance().deleteDude(dude);
    result ? _dudes = await DudeService.getInstance().getDudes() : null;
    notifyListeners();
  }
```
This method calls `DudeService.deleteDude()` method followed by notify listeners so all widgets that depends on the `DudeModel()` will be rebuilt. i.e the deleted dude will be removed from the screen.
