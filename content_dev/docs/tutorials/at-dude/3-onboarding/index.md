---
layout: codelab

title: "Onboarding" # Step Name
description: How to onboard or authenticate on any app built on the atPlatform # SEO Description for this step Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

In this tutorial, we will build the onboarding screen for the dude app.



With out further ado, lets get back to building the atDude app.

At the end this step our app will look like this,

{{< image type="page" src="first_screen.png" >}}

{{<br>}}
{{<br>}}

Before we get into the onboarding, lets make the UI changes to our app. 

#### Update AppBar
The first thing we will do is change the App bar title to  "atDude" in `main.dart`.

```
MaterialApp(
      // * The onboarding screen (first screen)
      home: Scaffold(
        appBar: AppBar(
          title: const Text('atDude'), # Changed
        ),
      ),
    );
```

The next step is to wrap our `ElevatedButton` widget with a Column widget and center its mainAxisAlignment.

```
MaterialApp(
      // * The onboarding screen (first screen)
      home: ...
      body: Builder(
        builder: (context) => Center(
          child: Column( # new
            mainAxisAlignment: MainAxisAlignment.center, # new
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

Before add an `IconButton` widget with the dude logo as the icon property. We need to add the logo to our project.

In your editor create a new folder called assets and inside the assets folder create a folder name images or type the following in your terminal:

```
mkdir -p assets/images/
```

Open `pubspec.yaml` and add the location of the image folder as shown below.
```
flutter:
  uses-material-design: true
  assets:
    - .env
    - assets/images/ # new
```

Let's create the `IconButton` as shown below.

```
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    IconButton(  # new
        iconSize: 200, # new
        onPressed: () {}, # new
        icon: Image.asset('assets/images/dude_logo.png'), # new
    ), # new
    ElevatedButton(
      onPressed: () async {...},
      child: const Text('Onboard an @sign'),
    ),
  ],
),
```

#### Onboarding

Before we get started with this section, lets define a few terms: 

[Onboarding](../../../sdk/flutter/onboarding) - The process of activating an atSign and/or authenticating the atSign into its secondary server.

[atsign](https://atsign.com/what-is-an-atsign/) - An atsign is your digital identity. It ensures that your data is owned and controlled by you. You can pair your device with any app to access but not store your data.

To make the onboarding code reusable, we will remove it form the "onboard an @sign" button and move it into an authentication class.

Copy the code inside the `onPressed` anonymous function of the ElevatedButton

In your terminal type:

```
mkdir lib/services
touch lib/services/authentication_service.dart
```

Open `authentication_service.dart` file and add the following:

```
class AuthenticationService {
  static final AuthenticationService _singleton =
      AuthenticationService._internal();
  AuthenticationService._internal();

  factory AuthenticationService.getInstance() {
    return _singleton;
  }
}
```


```
AtOnboardingResult onboardingResult =
                        await AtOnboarding.onboard(
                      context: context,
                      config: AtOnboardingConfig(
                        atClientPreference: await futurePreference,
                        rootEnvironment: AtEnv.rootEnvironment,
                        domain: AtEnv.rootDomain,
                        appAPIKey: AtEnv.appApiKey,
                      ),
                    );
                    switch (onboardingResult.status) {
                      case AtOnboardingResultStatus.success:
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (_) => const HomeScreen()));
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
```