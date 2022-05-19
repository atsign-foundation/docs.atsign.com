---
layout: root

title: '@platform Documentation' # The title (ON THE PAGE)
lead: 'Learn all about how the @platform works.' # The lead below the title (ON THE PAGE)

linkTitle: Docs # The title in the navigation
description: | # SEO Description of the page (Shows in google and atsign.dev search)
  Documentation for the @platform.

draft: false # Change this to "true" to hide the page
toc: false # Change this to "false" to hide the table of contents
autolinks: false # Change this to "false" to hide the automatic links below your content
weight: 1 # Weight compared to other sections of the site, this shouldn't affect anything on the facade

---

#### I want to...
{{% card/group %}}
  {{< card/feature href="/docs/get-started" title="Get Started" text="This is a card with lots of inner text to determine whether it fits nicely within the card itself." >}}
  {{< card/feature href="/docs/get-started" title="Get Started" text="This is a card with lots of inner text to determine whether it fits nicely within the card itself.">}}
{{% /card/group %}}

### Samples & Tutorials
{{<card/breadcrumb link="/docs/samples_and_tutorials/dess" first="Dess">}}
#### References
{{<card/breadcrumb href="/docs/sdk/flutter" first="SDK Reference" second="Flutter">}}
{{<card/breadcrumb href="/docs/sdk/java" first="SDK Reference" second="Java">}}

{{<image class="bg-white" src="https://atsign.dev/assets/img/@dev.png?sanitize=true" >}}

{{<button/link type="secondary" href="/docs/sdk/java" text="Go to Java">}}
{{<button/link href="/docs/sdk/flutter" text="Go to Flutter">}}
