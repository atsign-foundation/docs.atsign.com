---
layout: list

title: "atDirectory" # The title (ON THE PAGE)
lead: Learn about the atDirectory behind the atPlatform

description: atDirectory is a service that stores the location of the atServer for each atSign as well as the atSign’s public encryption key (previously called the root server).

draft: false # Change this to "true" to hide the page
toc: true # Change this to "false" to hide the table of contents
autolinks: true # Change this to "false" to hide the automatic links below your content
weight: 4 # For list pages, higher is first.
---

atDirectories are the only centralized part of the atProtocol and are centralized to provide a single namespace and a global dependable platform. No data beyond the atSign and responding authoritative atServer is held on the atDirecory. This information is considered public and no authentication is required to look up the atServers for a particular atSign.

{{< image class="bg-none" src="findSecondary.png" type="page"  >}}

The atDirectory have been designed to scale to billions of atSigns and handle the request for atSign lookups at near real-time, globally. To achieve this, in-memory databases are utilized and only the absolute minimum of data is stored.
