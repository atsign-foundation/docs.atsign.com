---
layout: codelab
title: Buttons
description: Button shortcodes used in atsign.dev
draft: false
order: 1
---
{{<br>}}

### button/link

A button that links to another page.

| Attribute | Description                                                   |
| --------- | ------------------------------------------------------------- |
| href      | The html href to the content when the button is clicked.      |
| type      | The button style (Any bootstrap style, defaults to 'primary') |
| text      | The label for the button.                                     |

Note: Only primary and secondary types are fully supported.

#### Example

{{< button/link href="#" type="secondary" text="Secondary" >}}
{{< button/link href="#" type="primary" text="Primary" >}}


```go-html-template
  {{</* button/link href="#" type="secondary" text="Secondary" */>}}
  {{</* button/link href="#" type="primary" text="Primary" */>}}
```


