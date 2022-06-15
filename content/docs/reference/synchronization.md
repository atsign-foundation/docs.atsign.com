---
layout: single

title: "Synchronization" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
    Synchronization in the @platform

description: | # SEO Description of the page (Shows in google and atsign.dev search)
    Definition of Synchronization in the @platform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 210 # For single pages, lower is first.
---

## Definition  

Here at the @protocol, your data is encrypted with your private key and stored on your device. Periodically, this data is copied securely over to a dedicated cloud server which only you can decrypt and read since you are the only one who owns the private key. No one else, including **AtSign** can read your data. This process is known as synchronization.

## How it works with the @protocol  

There are two main scenarios that require synchronization. The first occurs when your device is offline. Updates are saved to your device but not synced to the server. Once the device goes online, those saved updates get synced to the server. The second scenario is when you have multiple devices: one device is offline while the other is online. Updates from the online device will get synced to the server periodically. However the offline device will not be able to pull the changes until it is back online.  

*To read more about synchronization and how it works check out this [Medium Article.](https://atsigncompany.medium.com/the-protocol-synchronization-77b00ca5341b) we made*