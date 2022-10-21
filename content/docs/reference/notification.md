---
layout: single

title: "Notification" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  atPlatform & atProtocol Information on Notification

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Definition of Notification in the atPlatform, the notify verb in the atProtocol, and Definition of Monitor in the atPlatform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 211 # For single pages, lower is first.
---

## atPlatform

### Notification

Notification enables developers to **notify** another atSign of some data event. It is used to **notify** another atSign that data from your secondary server was modified (updated or deleted). Some example notifications include: the key's value is updated, the key is deleted, the key's metadata changed, and more.

The atPlatform takes care of all of the heavy lifting with encryption, verb building, transmission, etc.

Read more [here](https://blog.atsign.dev/part-1-the-notify-verb-cko97bv8f00l5gws13umb0nvz).

### Monitor
Monitor uses notifications.

The monitor is used to receive notifications from the other secondary server.

Read more {{< a href="https://github.com/atsign-foundation/at_client_sdk/blob/trunk/at_client/lib/src/manager/monitor.dart" target="_blank" rel="canonical" >}}here{{</ a >}}.

## atProtocol

### notify verb

The notify verb enables you to notify the atSign user of some data event.

The following is the regex for the `notify` verb.

```
notify:((?<operation>update|delete):)?(ttl:(?<ttl>\d+):)?(ttb:(?<ttb>\d+):)?(ttr:(?<ttr>(-)?\d+):)?(ccd:(?<ccd>true|false):)?(@(?<forAtSign>[^@:\s]-)):(?<atKey>[^:]((?!:{2})[^@])+)@(?<atSign>[^@:\s]+)(:(?<value>.+))?
```

| Regex Snippet                                                       | Explanation, [argument details], (example)                                                                                                                                                                             |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `(?<operation>update\|delete):)?`                                   | Operation of the notification (update\|delete)                                                                                                                                                                         |
| `(ttl:(?<ttl>\d+):)?`                                               | TTL (time to live), [integer, 1 or more digits, optional argument]                                                                                                                                                     |
| `(ttb:(?<ttb>\d+):)?`                                               | TTB (time to birth), [integer, 1 or more digits, optional argument]                                                                                                                                                    |
| `(ttr:(?<ttr>(-)?\d+):)?`                                           | TTR (time to refresh), [integer, 1 or more digits, can be negative, optional argument], (e.g.: 86400 will refresh once a day)                                                                                          |
| `(ccd:(?<ccd>true\|false):)?`                                       | CCD (cascade delete), [boolean, true\|false, optional argument], (e.g.: if the sender deletes their original key and ccd is true, the cached key gets deleted on both the sender's server and the recipient's server) |

Following the metadata for creating the notification, next, we mention the AtKey the notification pertains to.

| AtKey Regex Snippet                  | Explanation, [argument details], (example)                                         |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| `(@(?<forAtSign>[^@:\s]-))`                                         | The atSign the notification is for, [string, required argument], (`@alice`)                                                                                                                                    |
| `(?<atKey>[^:]((?!:{2})[^@])+)`      | AtKey name, [string, required argument], (e.g. 'signing_publickey')                                         |
| `@`                                  | at separator                                                                       |
| `(?<atSign>[^@:\s]+)(:(?<value>.+))` | sharedBy/creator atSign, [string], (e.g. 'bob') |

Example use of the `notify` verb:

```
notify:update:@farinataanxious:test@33thesad
```

Response:

If the notification was successfully sent, then the id of the notification is returned.

```
data:0ce0d150-52bf-4f09-a473-5c64777b1c53
```

Read more {{< a href="https://github.com/atsign-foundation/at_protocol/blob/trunk/specification/at_protocol_specification.md#the-sync-verb" target="_blank" rel="canonical" >}}here{{</ a >}}.

### notify:list verb

Notify list returns a list of notifications

Regex

```
notify:(list (?<regex>.-)|list$)
```

Response:

If the user is the owner, returns a list of received notifications. if a user is pol authenticated user, return a list of sent notifications

```
data:[{"id":"0e5e9e89-c9cb-423b-8972-8c5487215990","from":"@alice","to":"@bob","key":"@bob:phone@alice","value":12345,"operation":"update","epochMillis":1603714122636}]
```

### notify:remove verb

Notify remove will remove a notification from the Notify List

Not to be confused with `notify:delete` which notifies another atSign of a key change event.

Example:

```
notify:remove:<notification-id>
```

Response

```
data:success
```

### monitor verb

The monitor verb streams received notifications.

The following is the regex
```
^monitor$|^monitor ?(?<regex>.-)?)$
```

Response:

Returns a stream of notifications

```
@alice@monitor notification: {"id":"773e226d-dac2-4269-b1ee-64d7ce93a42f","from":"@bob","to":"@alice","key":"@alice:phone@bob","value":null,"operation":"update","epochMillis":1603714720965}
```

Read more 
{{< a href="https://github.com/atsign-foundation/at_protocol/blob/trunk/specification/at_protocol_specification.md" target="_blank" rel="canonical" >}}here{{</ a >}}.

## Related Resources

{{< card/breadcrumb link="/atplatform/specification/" first="Protocol Specification" >}}
