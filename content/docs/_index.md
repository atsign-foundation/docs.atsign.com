---
layout: root

title: '@platform Documentation' # The title (ON THE PAGE)
lead: 'Learn all about how the @platform works.' # The lead below the title (ON THE PAGE)


description: | # SEO Description of the page (Shows in google and atsign.dev search)
  Documentation for the @platform.

draft: false # Change this to "true" to hide the page
toc: false # Change this to "false" to hide the table of contents
autolinks: false # Change this to "false" to hide the automatic links below your content
weight: 1 # Weight compared to other sections of the site, this shouldn't affect anything on the facade

---

### I want to...
{{% card/group %}}
  {{< card/feature href="/docs/start" title="Get Started" text="Follow our getting started guide here" >}}
  {{< card/feature href="/docs/sdk" title="Learn the SDK" text="See our SDK Documentation here">}}
{{% /card/group %}}
{{% card/group %}}
  {{< card/feature href="/docs/atplatform" title="Learn the platform" text="See our infrastructure overview here" >}}
  {{< card/feature href="/docs/tutorials" title="Follow a tutorial" text="Find a specific tutorial here">}}
{{% /card/group %}}

### Featured Tutorials

{{% card/group %}}
  {{< card/feature href="/docs/tutorials/atmosphere-pro" title="@moshere pro" text="An open source end-to-end encrypted file sharing app" >}}
  {{< card/feature href="/docs/tutorials/at-dude" title="@dude app" text="Send an end-to-end encrypted duuuuuuude to your friends">}}
{{% /card/group %}}
{{% card/group %}}
  {{< card/feature href="/docs/tutorials/dess/aws" title="dess - AWS" text="Host your own secondary server on Amazon Web Services" >}}
  {{< card/feature href="/docs/tutorials/dess/gcp" title="dess - GCP" text="Host your own secondary server on Google Cloud Platform">}}
{{% /card/group %}}

### Samples & Tutorials
{{<card/breadcrumb href="/docs/_tutorials/_at_dude" first="at_dude">}}
{{<card/breadcrumb href="/docs/_tutorials/_dess" first="Dess">}}
#### References
{{<card/breadcrumb href="/docs/sdk/flutter" first="SDK Reference" second="Flutter">}}
{{<card/breadcrumb href="/docs/sdk/java" first="SDK Reference" second="Java">}}

### More Options
{{<card/breadcrumb link="/docs/contribute" first="Contribute to this site">}}
{{<card/breadcrumb link="/docs/glossary" first="Glossary">}}

