---
layout: codelab

title: Introduction # Title of the codelab
lead: Learn some background information before diving into Java specifics.
description: Learn about the core Atsign platform Java SDK services

doneLink: /sdk/java/ # Where to send them if they press "Done" at the end of the Codelab
exitLink: /sdk/java/ # Where to send them to if they press "Exit Codelab"
order: 1
---

## atProtocol

### Overview
The atProtocol is the underlying network protocol used by the atPlatform. The atPlatform provides people, entities, and things with unique identifiers called atSigns.

Each atSign creates its own public and private cryptographic key pair. The private keys are kept private and public keys made available globally through the atProtocol.

The atProtocol provides verbs for interacting with fully qualified atSigns and the data in their secondary servers.

#### Root Secondary
When asking a Root Server for the lookup of a particular atSign the Root Server should respond with a null if the name does not exist and if the name exists the DNS name or address of the @server and the IP port number for that @sign should be returned. The Root Server is the only centralized feature controlled by Atsign.

#### Secondary Servers
Secondary servers are servers that belong to an atSign and hold data. All of the data in the secondary server is encrypted unless the owner specifically wants to make some data publicly available.

## What is at_java?

at_java is Atsign’s implementation of the atProtocol. Just like Atsign’s dart libraries, at_java allows you to interact with Atsign’s services like registering atSigns, onboarding, communicating with the root & secondary servers, and more.

### Where can at_java be used?

As long as the device running at_java has
1. Internet
2. Java 8 or higher

Then at_java can be used to add simplicity and security to your Java applications and/or IoT devices running Java.

at_java is perfect for those who want to interact with low-level atProtocol for whatever the use case is. Whether it be IoT devices sending end-to-end-encrypted data, sharing medical data between patients, or storing data in your Java apps that you can feel safe about owning; the possibilities are endless with the power of the atProtocol.

As of writing this (July 20, 2022), at_java only has remote secondary implementation meaning that the device running this service must be connected to the internet.