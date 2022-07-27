---
layout: codelab

title: atProtocol # Step Name
description: | # SEO Description for this step
  What is the atProtocol?

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

## Overview
The atProtocol is the underlying network protocol used by the atPlatform. The atPlatform provides people, entities, and things with unique identifiers called atSigns.

Each atSign creates its own public and private cryptographic key pair. The private keys are kept private and public keys made available globally through the atProtocol.

The atProtocol provides verbs for interacting with fully qualified atSigns and the data in their secondary servers.

### Root Secondary
When asking a Root Server for the lookup of a particular atSign the Root Server should respond with a null if the name does not exist and if the name exists the DNS name or address of the @server and the IP port number for that @sign should be returned. The Root Server is the only centralized feature controlled by Atsign.

### Secondary Servers
Secondary servers are servers that belong to an atSign and hold data. All of the data in the secondary server is encrypted unless the owner specifically wants to make some data publicly available.