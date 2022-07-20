---
layout: codelab

title: atProtocol # Step Name
description: | # SEO Description for this step
  What is the atProtocol?

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

## Overview
The atProtocol lets you communicate with the root server and secondary server allowing you to do some pretty amazing things like sending encrypted data to other people. 

### Root Secondary
When asking a Root Server for the lookup of a particular atSign the Root Server should respond with a null if the name does not exist and if the name exists the DNS name or address of the @server and the IP port number for that @sign should be returned. The Root Server is the only centralized feature controlled by Atsign.

### Secondary Servers
Secondary servers are servers that belong to an atSign and hold data. Some of the data in the secondary server is encrypted, and some is public, but the owner of the atSign is in complete control of that. 