---
layout: codelab

title: "Onboarding" # Step Name
description: How to onboard or authenticate on any app built on the atPlatform # SEO Description for this step Documentation

draft: true # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

In this tutorial, we will build the onboarding screen for the dude app and modify the default onboarding function to make it compatible with our app architecture.



With out further ado, let's get back to building the atDude app.

At the end of this step our app will look like this,

{{< image type="page" src="first_onboard_screen.png" >}}

{{<br>}}
{{<br>}}

Before we get into the onboarding, let's make the UI changes to our app. 

#### Update AppBar
The first thing we will do is change the App bar title to  "atDude" in `main.dart`.

```
MaterialApp(
      // * The onboarding screen (first screen)
      debugShowCheckedModeBanner: false, // New
      home: Scaffold(
        appBar: AppBar(
          title: const Text('atDude'), // Changed
        ),
      ),
    );
```

The next step is to wrap our `ElevatedButton` widget with a `Column` widget and center its mainAxisAlignment.

```dart
MaterialApp(
      // * The onboarding screen (first screen)
      home: ...
      body: Builder(
        builder: (context) => Center(
          child: Column( // new
            mainAxisAlignment: MainAxisAlignment.center, // new
            children: [
              ElevatedButton(
                onPressed: ...
                child: const Text('Onboard an @sign'),
              ),
            ],
          ),
        ),
      ),
    );
```

#### Adding IconButton 

Before we add an `IconButton` widget with the dude logo as the icon property. We need to add the logo to our project.

Type the following in your terminal:

```
mkdir -p assets/images/
open pubspec.yaml
```

Add the location of the image folder as shown below.
```
flutter:
  uses-material-design: true
  assets:
    - .env
    - assets/images/ // new
```

Let's create the `IconButton` as shown below.

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    // IconButton New
    IconButton(
        iconSize: 200,
        onPressed: () {},
        icon: Image.asset('assets/images/dude_logo.png'),
    ),
    ElevatedButton(
      onPressed: () async {...},
      child: const Text('Onboard an @sign'),
    ),
  ],
),
```

#### Refactoring the Onboard Function

Before we get started with this section, let's define a few terms: 

[Onboarding](../../../sdk/flutter/onboarding) - The process of activating an atSign and/or authenticating the atSign into its secondary server.

[atsign](https://atsign.com/what-is-an-atsign/) - An atsign is your digital identity; it ensures that your data is owned and controlled by you. You can pair your device with any app on the atPlatform to access but not store your data.

We will make the onboarding code compatible with our architecture by removing it from the “onboard an @sign” button and moving it into an authentication class.

In your terminal type:

```
touch lib/services/authentication_service.dart
open lib/services/authentication_service.dart
```

Add the following:

```dart
class AuthenticationService {
  static final AuthenticationService _singleton =
      AuthenticationService._internal();
  AuthenticationService._internal();

  factory AuthenticationService.getInstance() {
    return _singleton;
  }
}
```
The above code creates a [singleton](https://flutterbyexample.com/lesson/singletons) of our class.



Now we'll create an async method called `onboard` in our `AuthenticationService` class. We will then move the contents of the `onboardingResult` variable inside the  `ElevatedButton` `onPressed` anonymous function in `main.dart`, to the this method as shown below.

```dart
class AuthenticationService {
  ...
  Future<AtOnboardingResult> onboard() async {
    return await AtOnboarding.onboard(
      context: context,
      config: AtOnboardingConfig(
        atClientPreference: await futurePreference,
        rootEnvironment: AtEnv.rootEnvironment,
        domain: AtEnv.rootDomain,
        appAPIKey: AtEnv.appApiKey,
      ),
    );
  }
}
```

#### Fixing Undefined name errors

To fix the `Undefined name` errors we need to provide the `AtOnboarding.onboard()`method with a `BuildContext` and the `AtClientPreference` class as shown below.


```dart
import 'package:at_app_flutter/at_app_flutter.dart';
import 'package:at_client_mobile/at_client_mobile.dart';
import 'package:at_onboarding_flutter/at_onboarding_flutter.dart';
import 'package:path_provider/path_provider.dart'
    show getApplicationSupportDirectory;

class AuthenticationService {
  ...

  Future<AtOnboardingResult> onboard() async {
    var dir = await getApplicationSupportDirectory(); // new

    var atClientPreference = AtClientPreference() // new
      ..rootDomain = AtEnv.rootDomain //new
      ..namespace = AtEnv.appNamespace //new
      ..hiveStoragePath = dir.path //new
      ..commitLogPath = dir.path //new
      ..isLocalStoreRequired = true; //new

    return AtOnboarding.onboard(
      context: context,
      config: AtOnboardingConfig(
        atClientPreference: atClientPreference, // new
        rootEnvironment: AtEnv.rootEnvironment,
        domain: AtEnv.rootDomain,
        appAPIKey: AtEnv.appApiKey,
      ),
    );
  }
}
```

We Now need access to the BuildContext, We'll create a separate class for this since we'll be reusing our BuildContext outside of the stateful and stateless widgets.

In your terminal type:

```
touch lib/services/navigation_service.dart
```
Add the below code snippet in that file.
```dart
import 'package:flutter/material.dart';

class NavigationService {
  static GlobalKey<NavigatorState> navKey = GlobalKey();

  static GlobalKey<NavigatorState> nestedNavKey = GlobalKey();
}
```
```
touch lib/services/services.dart
open lib/services/services.dart
```

Add the below code to use one import statement to import all export files:
```dart
export 'authentication_service.dart';
export 'navigation_service.dart';
```

In `main.dart` add the navigatorKey to the materialApp as shown below;

```dart
import 'package:at_dude/services/services.dart'; // new
...
Widget build(BuildContext context) {
    return MaterialApp(
      // * The onboarding screen (first screen)
      navigatorKey: NavigationService.navKey, // new
      home: ...
    );
  }
```

In `navigation_service.dart` add the below code to the `onboard()` method.

```dart
Future<AtOnboardingResult> onboard() async {
    ...
    return await AtOnboarding.onboard(
      context: NavigationService.navKey.currentContext!,  // new
      config: ...
    );
  }
```

That's it, our `AuthenticatinService` can reach out to the atPlatform to return our `AtOnboardingResult`. We now need our command to call this service and decide what action to take depending on the returned `AtOnboardingResult`.

#### Base Command

 Remember, our commands contain our application logic; we’ll first create a base command that all other commands will extend from before creating our onboard command  In your terminal type:

```
touch lib/commands/base_command.dart
open lib/commands/base_command.dart
```

Create the `BaseCommand` class with the needed imports as shown below:

```dart
import 'package:provider/provider.dart';

import '../services/services.dart';

abstract class BaseCommand {
  // Services
  AuthenticationService authenticationService =
      NavigationService.navKey.currentContext!.read();
}
```

 We need to provide the services to the widget tree in order for `BaseCommand` to successfully read the services from the BuildContext. To achieve this we'll make use of the [provider package](https://pub.dev/packages/provider) as shown below:

```
flutter pub add provider
open lib/main.dart
```
```dart
import 'package:provider/provider.dart'; //new
...
class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MultiProvider( //new
      providers: [Provider(create: (c) => AuthenticationService.getInstance())] // new
      child: MaterialApp(),
    )
  }
}
```

To learn more about state management using provider check out this [flutter article](https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple)

#### Onboard Command

Now that we're all set, let's create our Onboard Command. This class method will contain the instructions required to onboard on the atPlatform. In your terminal type:

```
touch lib/commands/onboard_command.dart
open lib/commands/onboard_command.dart
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
Our Commands will only have one method called `run()`. This command return a `Future<void>`. 

Move the remaining code inside the `ElevatedButton onPressed` anonymous function in `main.dart`, to the `run()` method of the `OnboardCommand()` class as show below:

```dart
import 'package:at_dude/commands/base_command.dart';
import 'package:at_dude/services/navigation_service.dart'; // new
import 'package:at_onboarding_flutter/at_onboarding_result.dart'; // new
import 'package:flutter/material.dart'; // new

import '../home_screen.dart'; // new

class OnboardCommand extends BaseCommand {
  Future<void> run() async {
    var onboardingResult = await authenticationService.onboard();

    // Everything Below New
    var context = NavigationService.navKey.currentContext!; 
    switch (onboardingResult.status) {
      case AtOnboardingResultStatus.success:
        Navigator.push(
            context, MaterialPageRoute(builder: (_) => const HomeScreen()));
        break;
      case AtOnboardingResultStatus.error:
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            backgroundColor: Colors.red,
            content: Text('An error has occurred'),
          ),
        );
        break;
      case AtOnboardingResultStatus.cancel:
        break;
    }
  }
}
```

If `authenticationService.onboard()` return `AtOnboardingResultStatus.success` we navigate to the HomeScreen, if it returns `AtOnboardingResultStatus.error` we display a `Snackbar` on the screen.

We will be using the `Snackbar` widget often so let's extract it into its own method.

#### Creating Snackbar Method

In your terminal type

```
touch lib/views/widgets/snackbars.dart
open lib/views/widgets/snackbars.dart
```

Add the below code

```dart
import 'package:at_dude/services/navigation_service.dart';
import 'package:flutter/material.dart';

class Snackbars extends StatelessWidget {
  const Snackbars({Key? key}) : super(key: key);

  static void errorSnackBar({
    required String errorMessage,
  }) {
    ScaffoldMessenger.of(NavigationService.navKey.currentContext!)
        .showSnackBar(SnackBar(
      content: Text(
        errorMessage,
        textAlign: TextAlign.center,
      ),
      backgroundColor:
          Theme.of(NavigationService.navKey.currentContext!).errorColor,
    ));
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

We created a class that extends `StatelessWidget`. This class contains a static void method named `errorSnackBar` that accepts an `errorMessage`.

This method will save us from calling `ScaffoldMessenger.of(context).showSnackBar()` every time we want so show a snackbar.

Let's replace our snackbar part of `OnboardCommand.run()` method as shown below:

```dart
...

import 'package:at_dude/views/widgets/snackbars.dart'; // new

class OnboardCommand extends BaseCommand {
  Future<void> run() async {
    ...
    switch (onboardingResult.status) {
      ...
      case AtOnboardingResultStatus.error:
        Snackbars.errorSnackBar(errorMessage: 'An error has occurred'); // new
        break;
      case AtOnboardingResultStatus.cancel:
        break;
    }
  }
}
```

All done!

#### Cleaning up main.dart

Now we just have to clean up `main.dart`.
Remove the code below from main.dart:
 

```dart
import 'package:at_onboarding_flutter/at_onboarding_flutter.dart'; // remove

import 'package:path_provider/path_provider.dart' // remove
     show getApplicationSupportDirectory; // remove

Future<AtClientPreference> loadAtClientPreference() async { // remove
  var dir = await getApplicationSupportDirectory(); //remove

  return AtClientPreference() // remove
    ..rootDomain = AtEnv.rootDomain // remove
    ..namespace = AtEnv.appNamespace // remove
    ..hiveStoragePath = dir.path // remove
    ..commitLogPath = dir.path // remove
    ..isLocalStoreRequired = true; // remove
  // TODO
  // * By default, this configuration is suitable for most applications
  // * In advanced cases you may need to modify [AtClientPreference]
  // * Read more here: https://pub.dev/documentation/at_client/latest/at_client/AtClientPreference-class.html
}

class _MyAppState extends State<MyApp> {
  // * load the AtClientPreference in the background // remove
  Future<AtClientPreference> futurePreference = loadAtClientPreference(); // Remove
 ...
}
```

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
                  ElevatedButton(
                    onPressed: () async {
                      await OnboardCommand().run(); // new
                    },
                    child: const Text('Onboard an @sign'),
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

Run your flutter app and everything should work as before.

```
flutter run
```
#### Conclusion

Following an architecture is like having an organized room, it takes extra effort but it makes navigating and understand your codebase a whole lot easier and cleaner.

Now that we've completed the onboarding process, in the next step we'll complete the first screen by adding a reset atsign button and it's functionalities.
