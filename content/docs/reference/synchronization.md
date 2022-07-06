---
layout: single

title: "Synchronization" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  Synchronization in the atPlatform

description:
  | # SEO Description of the page (Shows in google and Atsign.dev search)
  Definition of Synchronization in the atPlatform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 210 # For single pages, lower is first.
---

## Definition

On at the atProtocol, your data is encrypted with your self [encryption](/docs/reference/encryption) key and stored on your device. Periodically, this data is copied securely over to a dedicated cloud server which only you can decrypt and read since you are the only one who owns the private key. No one else, including **Atsign** can read your data. This process is known as synchronization.

## How it works at Atsign

First we need to touch up on what local & remote secondaries are:

1. **Remote Secondary**: A microservice with a DNS address which makes it addressable, provides a backup of your data in case of loss on the phone, provides a joining place to synchronize data if you have more than one device.
2. **Local Secondary**: A copy of data that allows for fast interactivity and offline support. Every activated @sign gets their own remote secondary which runs on Atsign's servers. All of your data is signed and encrypted, so Atsign cannot see it.

Synchronization aims to keep both local and remote secondaries with the same data. If by any chance the device is lost, then the data can be retrieved from the remote secondary:

There are two main scenarios that require synchronization. The first occurs when your device is offline. Updates are saved to your device but not synced to the server. Once the device goes online, those saved updates get synced to the server. The second scenario is when you have multiple devices: one device is offline while the other is online. Updates from the online device will get synced to the server periodically. However the offline device will not be able to pull the changes until it is back online.

_To read more about synchronization and how it works check out this [Medium Article](https://Atsigncompany.medium.com/the-protocol-synchronization-77b00ca5341b) we made._
