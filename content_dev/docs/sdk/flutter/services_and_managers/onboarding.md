---
layout: codelab

title: "Onboarding" # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

### Overview

The atPlatform uses secret keys for authenticating an atSign as cryptographically secure replacement for usernames and passwords.To make developers life easier atPlatform offers [at_onboarding_flutter](https://pub.dev/packages/at_onboarding_flutter) package which handles secure management of secret keys.If you are developing a new atPlatform app, we recommend that you use [at_app](https://pub.dev/packages/at_app) which can create atPlatform app template that already contains onboarding in it.

## Usage

Before using the onboarding widget, ensure that your [AtClientPreference](https://docs.google.com/document/d/14PZ-FHV9djBJL1RR8G8aYd6qxiWErBJEvRW9hD0pfNQ/edit#heading=h.yept27gyvv8g) is properly assigned.
If you need an appAPIKey please email us at.

```
Onboarding(
  context: context,
  atClientPreference: atClientPreference!,
  domain: AtEnv.rootDomain,
  rootEnvironment: AtEnv.rootEnvironment,
  appAPIKey: AtEnv.appApiKey,
  onboard: (value, atsign) {
     _logger.finer('Successfully onboarded $atsign');
  },
  onError: (error) {
     _logger.severe('Onboarding throws $error error');
  },
   nextScreen: const HomeScreen(),
   );
  },
  child: const Text('Onboard an atSign'),
),
```
