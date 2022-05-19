---
layout: codelab
title: Cards
description: Card shortcodes used in atsign.dev
draft: false
order: 2
---

{{<br>}}

### card/breadcrumb

A breadcrumb style card that links to another page.

| Attribute | Description                                            |
| --------- | ------------------------------------------------------ |
| href      | The html href to the content when the card is clicked. |
| first     | The first text element in the breadcrumb               |
| second    | The second text element in the breadcrumb              |
| third     | The third text element in the breadcrumb               |

#### Example

{{< card/breadcrumb href="#" first="First" >}}
{{< card/breadcrumb href="#" first="First" second="Second" >}}
{{< card/breadcrumb href="#" first="First" second="Second" third="Third" >}}

{{<br>}}

```go-html-template
  {{</* card/breadcrumb href="#" first="First"  */>}}
  {{</* card/breadcrumb href="#" first="First" second="Second" */>}}
  {{</* card/breadcrumb href="#" first="First" second="Second" third="Third"  */>}}
```

### card/feature

A feature style card that links to another page.

| Attribute | Description                                            |
| --------- | ------------------------------------------------------ |
| href      | The html href to the content when the card is clicked. |
| class     | Additional css classes to apply to the card.           |
| title     | The title for the card                                 |
| text      | The text in the body of the card                       |

See [bootstrap cards](https://getbootstrap.com/docs/5.1/components/card/#using-custom-css) for more information.

#### Example

{{< card/feature class="w-50" href="#" title="My Card" text="My text goes here..." >}}

{{<br>}}

```go-html-template
  {{</* card/feature class="w-50" href="#" title="My Card" text="My text goes here..." */>}}
```

### card/group

A wrapper for cards using bootstrap's deck style.

No attributes for this shortcode.

#### Example

{{% card/group %}}
  {{< card/feature class="w-25" href="/docs/contribute/shortcodes/card" 
    title="Feature Card 1" text="This is the first card to show the deck example.">}}
  {{< card/feature class="w-25" href="/docs/contribute/shortcodes/card" 
    title="Feature Card 2" text="This is the second card to show the deck example.">}}
{{% /card/group %}}

{{<br>}}

```go-html-template
  {{%/* card/group */%}}
    {{</* card/feature class="w-25" href="/docs/contribute/shortcodes/card"
      title="Feature Card 1" text="This is the first card to show the deck example."*/>}}
    {{</* card/feature class="w-25" href="/docs/contribute/shortcodes/card"
      title="Feature Card 2" text="This is the second card to show the deck example."*/>}}
  {{%/* /card/group */%}}
```
### card/social

A card for linking to a social platform.

| Attribute | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| class     | Additional css classes to apply to the bootstrap card element.          |
| title     | The title for the card.                                                 |
| img-src   | The src for the img element.                                            |
| img-class | Additional css classes to apply to the img tag.                         |
| img-type  | The type of image, can be one of 'page', 'asset', or 'remote' (default) |

#### Example

{{< card/social href="https://github.com/" class="w-25" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" >}}
  Start contributing, this is where the code hits the fan.
{{< /card/social >}}

{{<br>}}

```go-html-template
  {{</* card/social href="https://github.com/" class="w-50" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" */>}}
    Start contributing, this is where the code hits the fan.
  {{</* /card/social */>}}
```
