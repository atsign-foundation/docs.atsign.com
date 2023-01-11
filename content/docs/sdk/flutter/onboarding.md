---
layout: codelab

title: "Onboarding" # Step Name
description: | # SEO Description for this step
  Onboarding on the atPlatform in Flutter and Dart

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

### Overview

The atPlatform uses secret keys for authenticating an atSign as a cryptographically secure replacement for usernames and passwords. To make developers' lives easier, atPlatform offers the [at_onboarding_flutter](https://pub.dev/packages/at_onboarding_flutter) package, which handles secure management of secret keys. If you are developing a new atPlatform app, we recommend that you use [at_app](https://pub.dev/packages/at_app), which can create an atPlatform app template that already contains onboarding in it.

## Usage

Before using the onboarding widget, ensure that your [AtClientPreference](https://docs.google.com/document/d/14PZ-FHV9djBJL1RR8G8aYd6qxiWErBJEvRW9hD0pfNQ/edit#heading=h.yept27gyvv8g) is properly assigned.
If you need an appAPIKey please email us at: [support@atsign.com](mailto://support@atsign.com)

```
AtOnboarding.onboard(
  context: context,
  config: AtOnboardingConfig(
          atClientPreference: atClientPreference,
          domain: AtEnv.rootDomain,
          rootEnvironment: AtEnv.rootEnvironment,
          appAPIKey: AtEnv.appApiKey,
        ),
  onboard: (value, atsign) {
     _logger.finer('Successfully onboarded $atsign');
  },
  onError: (error) {
     _logger.severe('Onboarding throws $error error');
  });
  },
  child: const Text('Onboard an atSign'),
),
```
