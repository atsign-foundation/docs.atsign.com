---
layout: codelab

title: "Reset atsign" # Step Name
description: Creating the UI of the send dude screen # SEO Description for this step Documentation

draft: true # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---

In this tutorial, we will complete the onboarding screen for the dude app and implement the reset app functionality.




At the end of this step our app will look like this,

{{< image type="page" src="final_onboard_screen.png" >}}

{{<br>}}
{{<br>}}


#### Creating the Texts util class
The first thing we will do is create a utility class that will store our texts. This will make it easy to update our texts across out app without having to search and replace all occurrence of the string.

 Follow the steps below:

```
mkdir lib/utils
touch lib/utils/texts.dart
open lib/utils/texts.dart
```

```dart
class Texts {
  static const String atDude = 'atDude';
  static const String onboardAtsign = 'Onboard an atsign';
  static const String resetApp = 'Reset App';
}
```

Replace the string 'Reset App' with it's equivalent `static const` for the `ResetAppButton` widget as shown below

```dart
...
@override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      child: const Text(Texts.resetApp), // Changed
    );
  }
```

Let us make similar changes in `main.dart` as shown below:
```dart
...
MaterialApp(
       ...
        home: Scaffold(
          appBar: AppBar(
            title: const Text(Texts.atDude), // Changed
          ),
          body: Builder(
            builder: (context) => Center(
              child: Column(
                ...
                children: [
                  ...
                  ElevatedButton(
                    ...
                    child: const Text(Texts.onboardAtsign),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
```

#### Adding Reset Functionality to Authentication Service

In your terminal type:

```
open lib/services/authentication_service.dart
```

Now we'll create a method called `reset` and `getAtOnboardingConfig` in our `AuthenticationService` class and refactor the `onboard` method.

```dart
class AuthenticationService {
  ...

  AtOnboardingConfig getAtOnboardingConfig({
    required AtClientPreference atClientPreference,
  }) =>
      AtOnboardingConfig(
        atClientPreference: atClientPreference,
        rootEnvironment: AtEnv.rootEnvironment,
        domain: AtEnv.rootDomain,
        appAPIKey: AtEnv.appApiKey,
      );

  Future<AtOnboardingResult> onboard() async {
    return await AtOnboarding.onboard(
      context: context,
      config: getAtOnboardingConfig(atClientPreference: atClientPreference),
    );
  }
}
```

Here we simply moved `AtOnboardingConfig` into it's own method so we can reuse it on our reset method we're going to create below:

```dart
import 'package:at_onboarding_flutter/screen/at_onboarding_reset_screen.dart';
...
Future<AtOnboardingResetResult> reset() async {
    var dir = await getApplicationSupportDirectory();

    var atClientPreference = AtClientPreference()
      ..rootDomain = AtEnv.rootDomain
      ..namespace = AtEnv.appNamespace
      ..hiveStoragePath = dir.path
      ..commitLogPath = dir.path
      ..isLocalStoreRequired = true;

    return AtOnboarding.reset(
      context: NavigationService.navKey.currentContext!,
      config: getAtOnboardingConfig(atClientPreference: atClientPreference),
    );
  }
```

`AtOnboarding.reset` allows the user to remove any atsign that onboard on the app before. This allows the user to onboarding with another atsign. 

#### Onboard Command

Now that we're all set, lets create our Reset Command. This class method will contain the instructions required to reset the currently signed in atsign on the atPlatform. In your terminal type:

```
touch lib/commands/reset_command.dart
open lib/commands/reset_command.dart
```

Add the below code:

```dart
import 'package:at_dude/commands/base_command.dart';
class OnboardCommand extends BaseCommand {
  Future<void> run() async {
    var onboardingResult = await authenticationService.onboard();
    
  }
}
```
This command return a `Future<void>`. 

Move the remaining code in the `onPressed` anoymous function and paste in in the `run()` method of the `OnboardCommand()` class as show below:

```dart
import 'package:at_dude/commands/base_command.dart';
import 'package:at_dude/commands/onboard_command.dart';

import 'package:at_onboarding_flutter/screen/at_onboarding_reset_screen.dart'; //new
import 'package:flutter/material.dart'; // new



class ResetCommand extends BaseCommand {
  Future<void> run() async {
    var resetResult = await authenticationService.reset();


    // Everything Below New

    switch (onboardingResult.status) {
      case AtOnboardingResultStatus.success:
        OnboardCommand().run();
        break;
      case AtOnboardingResultStatus.cancelled:
        break;
    }
  }
}
```

If `authenticationService.onboard()` return `AtOnboardingResetResultStatus.success` we call `'OnboardCommand().run()` to initiate the onboarding process, if it returns `AtOnboardingResetResultStatus.cancelled` we do nothing.


#### Completing the first screen

Now we just have to update the UI in `main.dart` to all the user to reset their atsign.

Add the below code to `main.dart`:

```dart
@override
  Widget build(BuildContext context) {
    return MultiProvider(
      ...
      child: MaterialApp(
        ...
        home: Scaffold(
          appBar: ...,
          body: Builder(
            builder: (context) => Center(
              child: Column(
                ...
                children: [
                  ...,
                  ElevatedButton(...),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 8,
                    ),
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Expanded(
                            child: Divider(
                              color: Colors.black,
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.symmetric(horizontal: 12.0),
                            child: Text(
                              'Or',
                              textAlign: TextAlign.center,
                            ),
                          ),
                          Expanded(
                            child: Divider(
                              color: Colors.black,
                            ),
                          ),
                        ]),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
```

We add a divider to create separation between the two buttons.

lets add the reset atsign button as shown below:

```dart
import 'package:at_dude/commands/reset_command.dart';
...
Padding(...)
ElevatedButton(
  onPressed: () async {
    await ResetCommand().run();
  },
  child: Text(Texts.resetApp),
)
```

Run your flutter app and everything should work perfectly.

Go ahead and reset the app

```
flutter run
```
#### Conclusion

Well done, you've made it this far. In the next step we will start building our Send Dude Screen.
