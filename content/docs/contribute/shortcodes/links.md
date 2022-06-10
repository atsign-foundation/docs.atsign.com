---
layout: codelab
title: Links
description: Links shortcodes used in atsign.dev
draft: false
order: 5
---

### Links

Links in your paragraphs

| Attribute | Description                                            |
| --------- | ------------------------------------------------------ |
| href      | The html href to the content when the link is clicked. |
| target    | "_blank" for new tab, "_self" for same frame (default),|

#### Example

{{< a target="_blank" href="https://atsign.com/" >}} atsign.com {{< /a >}}

```go-html-template
  {{</* a target="_blank" href="https://atsign.com/" */>}} atsign.com {{</* /a */>}}
```