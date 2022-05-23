---
layout: codelab
title: Showcase
description: Showcase shortcodes used in atsign.dev
draft: false
order: 4
---

{{<br>}}

### showcase/card

A card for showcasing a single item.

| Attribute | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| class     | Additional css classes to apply to the bootstrap card element.          |
| title     | The title for the card.                                                 |
| img-src   | The src for the img element.                                            |
| img-class | Additional css classes to apply to the img tag.                         |
| img-type  | The type of image, can be one of 'page', 'asset', or 'remote' (default) |

#### Example

{{< showcase/card class="w-50" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" >}}

  {{< showcase/item >}}Your space on the privacy-first web.{{< /showcase/item >}}

  {{< showcase/link href="https://atsign.com/apps/wavi" >}}Learn more{{< /showcase/link >}}
  {{< showcase/link href="https://wavi.ng/@wavi" >}}Wavi.ng{{< /showcase/link >}}

{{< /showcase/card >}}

{{<br>}}

```go-html-template
  {{</* showcase/card class="w-50" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" */>}}

    {{</* showcase/item >}}Your space on the privacy-first web.{{< /showcase/item */>}}
    
    {{</* showcase/link href="https://atsign.com/apps/wavi" >}}Learn more{{< /showcase/link */>}}
    {{</* showcase/link href="https://wavi.ng/@wavi" >}}Wavi.ng{{< /showcase/link */>}}

  {{</* /showcase/card */>}}
```
