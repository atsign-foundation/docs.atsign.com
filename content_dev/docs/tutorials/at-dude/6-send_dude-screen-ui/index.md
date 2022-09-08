---
layout: codelab

title: "Send Dude Screen AppBar" # Step Name
description: Creating the UI of the send dude screen # SEO Description for this step Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---

In this tutorial, we will build the AppBar of send dude screen.




At the end of this step our app will look like this,

{{< image type="page" src="final_onboard_screen.png" >}}

{{<br>}}
{{<br>}}


#### Creating the AppBar
The first thing we will do is create our send dude screen dart file with the AppBar and the widgets and properties it needs.

 Follow the steps below:

```

touch lib/views/screens/send_dude_screen.dart
open lib/views/screens/send_dude_screen.dart
```

```dart
import 'package:flutter/material.dart';
import '../../utils/texts.dart';

class SendDudeScreen extends StatefulWidget {
  SendDudeScreen({Key? key}) : super(key: key);
  static String routeName = 'sendDudeScreen';

  @override
  State<SendDudeScreen> createState() => _SendDudeScreenState();
}

class _SendDudeScreenState extends State<SendDudeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.transparent,
        shadowColor: Colors.transparent,
        title: const Text(
          Texts.sendDude,
          style: TextStyle(color: Colors.black),
        ),
        actions: const [AtsignAvatar()],
        
      ),
    );
  }
}
```

We have our stateful widget with an `appBar` but we neither have a `Texts.sendDude` constant nor the `AtsignAvatar()`.  Lets create them:

```
open lib/utils/texts.dart
```

```dart
...
class Texts {
  ...
  static const String sendDude = 'Reset App';
}
```

#### AtsignAvatar

Let us create `AtsignAvatar` as shown below:

```
touch lib/views/widgets/atsign_avatar.dart
open lib/views/widgets/atsign_avatar.dart
```
```dart
import 'dart:typed_data' show Uint8List;
import 'package:flutter/material.dart';

class AtsignAvatar extends StatefulWidget {
  const AtsignAvatar({Key? key}) : super(key: key);

  @override
  State<AtsignAvatar> createState() => _AtsignAvatarState();
}

class _AtsignAvatarState extends State<AtsignAvatar> {
  Uint8List? image;
  String? profileName;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: CircleAvatar(
        backgroundColor: Colors.transparent,
        child: image == null
            ? const Icon(
                Icons.person_outline,
                color: Colors.black,
              )
            : ClipOval(child: Image.memory(image!)),
      ),
      onTap: () {},
    );
  }
}
```

Basically we have a `CircleAvatar` whose child is an image or an person_outline. We need to add the functionality that will check for the atsign contact details.

##### Profile Data
```
mkdir lib/data
touch lib/data/profile_data.dart
open lib/data/profile_data.dart
```

```dart
import 'dart:typed_data' show Uint8List;

class ProfileData {
  ProfileData({required this.name, required this.profileImage});

  final String name;
  final Uint8List? profileImage;
}
```
This class will contain the name and profile image data we'll get from ContactService class provided to us form free from the at_xxx package.

##### Contacts Model
We'll now create our contacts model that will store all our contacts information needed in our app.

```
touch lib/models/contacts_model.dart
open lib/models/contacts_model.dart
```

```dart
import 'package:flutter/material.dart';

import '../data/profile_data.dart';

class ContactsModel extends ChangeNotifier {
  late ProfileData _profileData;

  ProfileData get profileData => _profileData;

  set profileData(ProfileData profileData) {
    _profileData = profileData;
    notifyListeners();
  }
}
```
Our profile data extends `ChangeNotifier`, this will allow us to `notifyListeners()` of changes made to `profileData`.

We now have to add our `ContactModel` as a `ChangeNotifierProvider` and then add it to `BaseCommand`.

```
open lib/main.dart
```

```dart
...
@override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        Provider(create: (c) => AuthenticationService.getInstance()),
        ChangeNotifierProvider(create: (c) => ContactsModel()), // new
      ],
      child: MaterialApp(...),
    );
```

```
open lib/commands/base_command.dart
```
```dart
...
import '../models/contacts_model.dart';

abstract class BaseCommand {
  // Services
  AuthenticationService authenticationService =
      NavigationService.navKey.currentContext!.read();

  // Models
  ContactsModel contactsModel = NavigationService.navKey.currentContext!.read();
```

#### Contact Details Command
We'll now create our Contact Details Command. We don't have to create our `ContactService` since this is provided to us from the at_contacts_flutter package.


In your terminal type:

```
flutter pub add at_contacts_flutter
touch lib/commands/contact_details_command.dart
open lib/commands/contact_details_command.dart
```

```dart
import 'package:at_client_mobile/at_client_mobile.dart';
import 'package:at_contacts_flutter/services/contact_service.dart';
import 'package:at_dude/commands/base_command.dart';
import 'package:at_dude/data/profile_data.dart';

class ContactDetailsCommand extends BaseCommand {
  Future<void> run() async {
    final contactService = ContactService();

    ContactService()
        .getContactDetails(
            AtClientManager.getInstance().atClient.getCurrentAtSign(), null)
        .then(
      (value) {
        contactsModel.profileData =
            ProfileData(name: value['name'], profileImage: value['image']);
        return null;
      },
    );
  }
}
```

We use the `AtClientManager` method to get the current atsign, then use the ContactService to get the name and profile image of the atsign. We then return the profileData to our contactsModel.



#### Completing the AtsignAvatar widget

Now we just have what we need to complete the AtsignAvatar Widget.

```
open lib/views/widgets/atsign_avatar.dart
```

```dart
class _AtsignAvatarState extends State<AtsignAvatar> {
...
@override
  void initState() {
    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      await ContactDetailsCommand().run();
    });
    super.initState();
  }
}
```

To run an async method inside `initState` we need to call the method inside `WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {});`

We can now delete the `image` and `profileName` variables since the data is now inside our `ContactsModel.profileData` property. Let's use the power of provider to access this property.

```dart
class _AtsignAvatarState extends State<AtsignAvatar> {
  Uint8List? image; // Delete this
  String? profileName; // Delete this

  @override
  void initState() {
   ...
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: CircleAvatar(
        backgroundColor: Colors.transparent,
        child: context.watch<ContactsModel>().profileData.profileImage == null
            ? const Icon(
                Icons.person_outline,
                color: Colors.black,
              )
            : ClipOval(
                child: Image.memory(
                    context.watch<ContactsModel>().profileData.profileImage!)),
      ),
      onTap: () {},
    );
  }
}
```

#### Cleaning up our SendDudeScreen 

Let's fix our "The method 'AtsignAvatar' isn't defined" error by simply importing out `AtsignAvatar` widget:

```
open lib/views/screens/send_dude_screen.dart
```

```dart
import '../widgets/atsign_avatar.dart'; // new

class SendDudeScreen extends StatefulWidget {
  ...
}

class _SendDudeScreenState extends State<SendDudeScreen> {
  ...
}
```

#### Navigating to the SendDudeScreen

We can now navigate to our SendDudeScreen now that our send Dude Screen AppBar is completed.

```
open lib/commands/onboard_command.dart
```

```dart
...
class OnboardCommand extends BaseCommand {
  Future<void> run() async {
    ...
    switch (onboardingResult.status) {
      case AtOnboardingResultStatus.success:
        Navigator.popAndPushNamed(context, SendDudeScreen.routeName); // new
        break;
      ...
    }
  }
}
```

#### Conclusion

Well done, you've made it this far. In the next step we will start building our Send Dude Screen.
