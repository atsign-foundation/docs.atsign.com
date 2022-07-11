---
layout: single

title: "Self-Encryption Key" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  What is a Self-Encryption Key?

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Definition of Self-Encryption Key at Atsign

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 206 # For single pages, lower is first.
---

## Definition

Self-Encryption key is an AES symmetric key that you own for encrypting data for yourself.

## atPlatform

In the atPlatform, the self-encryption key is used to encrypt data that is stored in your own secondary server. It is crucial that this key is kept secret and owned only by you so that third parties like Atsign cannot see your data.

The self-encryption key is generated during the [CRAM](/docs/reference/cram) process when your [PKAM](/docs/reference/pkam) RSA keypair is generated and your [atSign](/docs/reference/atsign) is activated.

## Related Resources

{{< card/breadcrumb href="/docs/atplatform/atsign" first="atSign" >}}
{{< card/breadcrumb href="/docs/atplatform/encryption" first="Encryption" >}}
{{< card/breadcrumb href="/docs/atplatform/public-private-keys" first="Public and Private Keys" >}}
{{< card/breadcrumb href="/docs/reference/cram" first="CRAM" >}}
{{< card/breadcrumb href="/docs/reference/pkam" first="PKAM" >}}
