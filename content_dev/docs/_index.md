---
layout: root

title: Welcome to the atPlatform Documentation # The title (ON THE PAGE)
lead: "Learn all about how the atPlatform works" # The lead below the title (ON THE PAGE)

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Documentation for the atPlatform.

draft: false # Change this to "true" to hide the page
toc: false # Change this to "false" to hide the table of contents
autolinks: false # Change this to "false" to hide the automatic links below your content
weight: 1 # Weight compared to other sections of the site, this shouldn't affect anything on the facade
---

#### I want to...

{{% card/group %}}
{{< card/feature href="/start" title="Get Started" text="Start with Flutter, Java, or IoT development" >}}
{{< card/feature href="/sdk" title="Learn the SDK" text="See our SDK Documentation here">}}
{{% /card/group %}}
{{% card/group %}}
{{< card/feature href="/atplatform" title="Learn the Platform" text="See our infrastructure overview here" >}}
{{< card/feature href="/tutorials" title="Follow a Tutorial" text="Find specific tutorials on our tech here">}}
{{% /card/group %}}

#### Featured Tutorials

{{% card/group %}}
{{< card/feature href="/tutorials/sshnp" title="SSH no ports" text="SSH to remote machines without opening inbound connections" >}}
{{< card/feature href="/tutorials/at-dude" title="atDude" text="Send an end-to-end encrypted duuuuuuude to your friends">}}
{{% /card/group %}}
{{% card/group %}}
{{< card/feature href="/tutorials/dess/aws" title="dess - AWS" text="Host your own secondary server on Amazon Web Services" >}}
{{< card/feature href="/tutorials/dess/gcp" title="dess - GCP" text="Host your own secondary server on Google Cloud Platform">}}
{{% /card/group %}}
