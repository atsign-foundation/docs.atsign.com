---
layout: codelab
title: Links
description: Links shortcodes used in atsign.dev
draft: false
order: 5
---

{{<br>}}

### Anchor Tag (a)

Links in your paragraphs

| Attribute | Description                                            |
| --------- | ------------------------------------------------------ |
| href      | The html href to the content when the link is clicked. |
| target    | (optional) "_blank" for new tab, "_self" for same frame (default, *use markdown for self links: `[here](www.google.com)`),|
| rel       | (optional) "calonical" for calonical links

#### Example

{{</* a rel="calonical" target="_blank" href="https://atsign.com/" */>}} atsign.com {{</* /a */>}}

```go-html-template
  {{</* a rel="calonical" target="_blank" href="https://atsign.com/" */>}} atsign.com {{</* /a */>}}
```