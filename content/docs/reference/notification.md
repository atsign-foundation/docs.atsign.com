---
layout: single

title: "Notification" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
    Notifications and their service in the @platform

description: | # SEO Description of the page (Shows in google and atsign.dev search)
    Definition of Notificaton in the @platform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 211 # For single pages, lower is first.
---

## @platform

Notification enables developers to **notify** another @ sign of some data event. It is used to send data from one @ sign's secondary server to another @ sign's secondary server.

The @platform takes care of all of the heavy lifting with encryption, verb building, transmission, etc,.

Read more [here](https://blog.atsign.dev/part-1-the-notify-verb-cko97bv8f00l5gws13umb0nvz).

## @protocol

The notify verb enables you to notify the atsign user of some data event.

The follwing is the regex for the `notify` verb.

`notify:((?<operation>update|delete):)?(ttl:(?<ttl>\d+):)?(ttb:(?<ttb>\d+):)?(ttr:(?<ttr>(-)?\d+):)?(ccd:(?<ccd>true|false):)?(@(?<forAtSign>[^@:\s]-)):(?<atKey>[^:]((?!:{2})[^@])+)@(?<atSign>[^@:\s]+)(:(?<value>.+))?`

Response:

If the user is the owner, returns a list of received notifications. If a user is pol authenticated user, returns a list of sent notifications.

`data:[{"id":"0e5e9e89-c9cb-423b-8972-8c5487215990","from":"@alice","to":"@bob","key":"@bob:phone@alice","value":12345,"operation":"update","epochMillis":1603714122636}]`

Read more {{< a href="https://github.com/atsign-foundation/at_protocol/blob/trunk/specification/at_protocol_specification.md#the-sync-verb" target="_blank" rel="canonical" >}}here{{</ a >}}.

## Monitor

### @platform
Monitor uses notifications.

Monitor is used to receive notifications from the other secondary server.

Read more {{< a href="https://github.com/atsign-foundation/at_client_sdk/blob/trunk/at_client/lib/src/manager/monitor.dart" target="_blank" rel="canonical" >}}here{{</ a >}}.

### @protocol
The monitor verb streams received notifications.

The following is the regex
`^monitor$|^monitor ?(?<regex>.-)?)$`

Response:

Returns a stream of notifications

`@alice@monitor
notification: {"id":"773e226d-dac2-4269-b1ee-64d7ce93a42f","from":"@bob","to":"@alice","key":"@alice:phone@bob","value":null,"operation":"update","epochMillis":1603714720965}`

Read more here.
{{< a href="https://github.com/atsign-foundation/at_protocol/blob/trunk/specification/at_protocol_specification.md" target="_blank" rel="canonical" >}}here{{</ a >}}.