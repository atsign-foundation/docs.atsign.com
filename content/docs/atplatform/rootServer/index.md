---
layout: list

title: "Root Server" # The title (ON THE PAGE)
lead: Learn about the root server behind the atPlatform

description: Learn about the atPlatform root server

draft: false # Change this to "true" to hide the page
toc: true # Change this to "false" to hide the table of contents
autolinks: true # Change this to "false" to hide the automatic links below your content
weight: 4 # For list pages, higher is first.
---

atRoot servers are the only centralized part of the atProtocol and are centralized to provide a single namespace and a global dependable platform. No data beyond the atSign and responding authoritative atSecondary server is held on the root servers. This information is considered public and no authentication is required to look up the atSecondary server for a particular atSign.

{{< image class="bg-none" src="findSecondary.png" type="page"  >}}

{{< image class="bg-none" src="noRoot.png" type="page"  >}}

The atRoot servers have been designed to scale to billions of atSigns and handle the request for atSign lookups at near real-time, globally. To achieve this, in-memory databases are utilized and only the absolute minimum of data is stored.
