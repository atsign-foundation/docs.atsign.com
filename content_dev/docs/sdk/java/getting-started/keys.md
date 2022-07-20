---
layout: codelab

title: Key Types # Step Name
description: | # SEO Description for this step
  Keys in Java are different from the Dart SDK AtKeys

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

### Overview

If you’ve ever used our dart library before, you’ll be familiar with `AtKey`. at_java does AtKeys similarly but has few differences.

Just like how hash maps have a key-value pair, the secondary server holds an AtKey-AtValue pair. To access the AtValue, you must provide an AtKey containing data like the keyName, sharedBy, and/or sharedWith.

There are 4 types of keys in at_java. Each key type represents what kind of data it holds and also exhibits different properties.

1. PublicKey
2. SharedKey
3. SelfKey
4. PrivateHiddenKey

| Key Type | Represents | Encrypted? | Cacheable? |
|----------|------------|------------|------------|
| Public Key | Public data for authorized/unauthorized people to access | No | Yes, by everyone |
| SharedKey | Shared data between atSigns | Yes, only between the two atSigns | Yes, only between the two atSigns |
| SelfKey | Self data for the owner of the atSign | Yes, only decryptable with your keys | No |
| PrivateHiddenKey | Contains secrets, never synced with remote secondary | Yes | No |
