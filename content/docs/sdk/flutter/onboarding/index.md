---
layout: codelab

title: "Onboarding" # Step Name
description: | # SEO Description for this step
  Onboarding on the atPlatform in Flutter and Dart

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

## Overview

The atPlatform uses secret keys for authenticating an atSign as cryptographically secure replacement for usernames and passwords. To improve developer experience, the atPlatform offers the {{< a href="https://pub.dev/packages/at_onboarding_flutter" target="_blank">}}at_onboarding_flutter{{< /a >}} package which handles secure management of these secret keys. If you are developing a new atPlatform app, we recommend that you use {{< a href="https://pub.dev/packages/at_app" target="_blank">}}at_app{{< /a >}} which can create atPlatform app template that already contains an example of using the {{< a href="https://pub.dev/packages/at_onboarding_flutter" target="_blank">}}at_onboarding_flutter{{< /a >}} widget.

{{< image type="page" src="onboarding.png" >}}

Once the onboarding widget is opened, the user can click one of the four options:

1. **Upload backup key file** - subsequent onboard: person possesses an activated and already onboarded atSign with the `.atKeys` file)
2. **Generate Free atSign** - need new atSign: person requires a new atSign and its `.atKeys` file.
3. **Scan QR Code** - one-time activation: person has an unactivated atSign (no `.atKeys` file) but possess the QR code containing the cram secret
4. **Activate atSign** one-time activation: person has an unactivated atSign (no `.atKeys` file) but possesses the `atSign` and access to the `email` associated with it to provide the OTP. 

## Installation

The {{< a href="https://pub.dev/packages/at_onboarding_flutter" target="_blank">}}at_onboarding_flutter{{< /a >}} package provides a widget that can be used to onboard atSigns.

1. Add the package by running the following command in your terminal:

```
flutter pub add at_onboarding_flutter
```

2. Or add it to your pubspec.yaml manually:

Note: Be sure to check the updated version on {{< a href="https://pub.dev" target="_blank">}}pub.dev{{< /a >}}.

Also run `flutter pub get` to update your dependencies.

```yaml
dependencies:
  flutter:
    sdk: flutter
  at_client_mobile: ^3.2.6
  at_utils: ^3.0.11
  at_onboarding_flutter: ^5.0.5
```


## Usage

Simply call the `.onboard` method whenever you want your app to open the onboarding widget.

```dart
AtOnboarding.onboard(
  context: context, // BuildContext
  config: AtOnboardingConfig(
    atClientPreference: AtClientPreference()
      ..rootDomain = AtEnv.rootDomain // access AtEnv from the `at_app_flutter` package
      ..namespace = AtEnv.appNamespace
      ..hiveStoragePath = dir.path
      ..commitLogPath = dir.path
      ..isLocalStoreRequired = true,
    rootEnvironment: AtEnv.rootEnvironment,
    domain: AtEnv.rootDomain,
    appAPIKey: AtEnv.appApiKey,
  ),
);
```

Notes:

- `dir` is a variable from holding data retrieved from the `path_provider` package: `var dir = await getApplicationSupportDirectory();`
- `AtEnv` comes from `at_app_flutter` which helps with providing various arguments like accessing the `.env` file and providing the `rootDomain` and `appNamespace` constants.

## Example

The example below demonstrates the onboarding widget being opened upon pressing this `ElevatedButton` widget. Since the `.onboard` method returns a `AtOnboardingResult` object, we store it in a variable and use it to determine what to do next. If the onboarding process was successful, we move onto a different page using `Navigator`, otherwise, we display an error. 

```dart
ElevatedButton(
  child: const Text('Onboard an @sign'),
  onPressed: () async {
    var dir = await getApplicationSupportDirectory(); // from the `path_provider` package
    AtOnboardingResult onboardingResult = await AtOnboarding.onboard(
      context: context, // BuildContext
      config: AtOnboardingConfig(
        atClientPreference: AtClientPreference()
          ..rootDomain = AtEnv.rootDomain // access AtEnv from the `at_app_flutter` package
          ..namespace = AtEnv.appNamespace
          ..hiveStoragePath = dir.path
          ..commitLogPath = dir.path
          ..isLocalStoreRequired = true,
        rootEnvironment: AtEnv.rootEnvironment,
        domain: AtEnv.rootDomain,
        appAPIKey: AtEnv.appApiKey,
      ),
    );
    switch (onboardingResult.status) {
      case AtOnboardingResultStatus.success:
        Navigator.push(context, MaterialPageRoute(builder: (_) => const HomeScreen()));
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
  },
),
```

## Parameters

### AtOnboarding.onboard

| Type | Name | Description | Required? | Default Value |
| ---- | ---- | ----------- | --------- | ------------- | 
| {{< a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html" target="_blank" >}}BuildContext{{< /a >}} | context | The context of the widget that is calling the `.onboard` method. | true |
| [AtOnboardingConfig](#atonboardingconfig) | config | The configuration object that contains the preferences for the onboarding widget. | true |
| bool | isSwitchingAtSign | True - show the UI for switching a new atsign. `false` - checks if atSign is already onboarded (if already onboarded, does not show UI). | false | `false` |
| String? | atSign | The new atSign name if switching atSigns (`isSwitchingAtSign` should be true) | false | `null` |


### AtOnboardingConfig

The `AtOnboardingConfig` object is used to configure the onboarding widget. It contains the following properties:

| Type | Name | Description | Required? | Default Value |
| ---- | ---- | ----------- | --------- | ------------- |
| {{< a href="/sdk/flutter/at_client_preference/" target="_blank" >}}AtClientPreference{{< /a >}} | atClientPreference | object used to configure preferences in your atPlatform application such as the namespace, hiveStoragePath, and maxDataSize. | true | 
| RootEnvironment (enum) | rootEnvironment | The set of servers your app will be running and talking to atSigns in (testing, staging, production) | true |
| String? | domain | The domain of the atDirectoryServer (previously called root server) | false | `root.atsign.org` |
| String? | appAPIKey | The API authentication key for getting free atsigns | 
| bool | hideReferences | If true, hides the reference to web pages. | false | `false` |
| bool | hideQrScan | If true, hides the QR functionality | false | `false` |

### AtOnboardingResult

This object is received when the `.onboard` method is called. It contains the following properties which can be used in your application:

| Type | Name | Description |
| ---- | ---- | ----------- |
| AtOnboardingResultStatus (enum) | status | The status of the onboarding process. | 
| String? | message | The message returned when the onboarding process fails. |
| String? | errorCode | The error code when the onboarding process fails. |
| String? | atSign | The atSign that was onboarded successfully. |


