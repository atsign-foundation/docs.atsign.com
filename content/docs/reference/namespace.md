---
layout: single

title: "Namespace" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  Namespaces in the atPlatform

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Definition of Namespace in the atPlatform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 209 # For single pages, lower is first.
---

## Definition

Atsign's CTO, Colin Constable says this in an interview on Namespaces:
{{<br>}}
"Most people are familiar with DNS (domain name system): for example, if you type “cnn.com”, “fox.com”, or “bbc.com”, you get news sites.
But you can’t just type in “news” and expect the Internet to tell you which particular flavor of news you want. We need to create namespaces
so that humans can remember the name and computers can translate it to Internet protocol. Once there is a namespace like “bbc.com,” you can
reliably know that somebody owns that particular space, and it needs to be managed so that there are no clashes. For instance, you don’t
want to type “bbc.com” and get sent to Amazon’s home page. That’s why they have to be unique, and we at Atsign created a new
namespace with @Namespace."

Feel free to read more on namespaces {{< a
    rel="canonical"
    target="_blank"
    href="https://atsigncompany.medium.com/the-hidden-beauty-of-protocol-namespaces-6f5fab7f7a09" >}}here{{< /a >}}.

## atPlatform

Namespace is a common term that may occur when reading about the atPlatform. To put it simply, a namespace is a unique container to place
data in. More in the context of the apps, namespaces are just atSigns associated with each app so a secondary server can be aware of which
data belongs to who. See an example below.

## Example

When you ask someone “What is my name?” you will get a different answer for every person you ask. If you ask your parents, they may answer
with a sweet nickname they gave you. If you ask your friends, they may answer with your first name. This is how namespaces work. You can ask
different namespaces for data and get a different answer every time.

In the context of the atProtocol, refer to the example below to improve your understanding.

Example:

- `phone.mospherepro` (phone is the key, mospherepro is the namespace) will answer with data=`123-123-1234`
- `phone.alice` (phone is the key, alice is the namespace) will answer with data=`444-444-4444`
- `phone.wavi` (phone is the key, wavi is the namespace) will answer with data=`555-555-5555`

This is the beauty of the atProtocol. Each namespace replied with different information. People control their own data and which applications
get what data. With the atPlatform, the people become in control of their own data privacy.

## Related Resources

{{< card/breadcrumb href="/docs/atplatform/specification" first="Protocol Specification" >}}
{{< card/breadcrumb href="/docs/atplatform/secondary-server" first="Secondary Server" >}}
{{< card/breadcrumb href="/docs/reference/polymorphism" first="Polymorphism" >}}
