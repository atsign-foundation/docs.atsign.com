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

{{< card/group >}}
{{< card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
    title="Feature Card 1" text="This is the first card to show the deck example.">}}
{{< card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
    title="Feature Card 2" text="This is the second card to show the deck example.">}}
{{< /card/group >}}

{{<br>}}

```go-html-template
  {{</* card/group */>}}
    {{</* card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
      title="Feature Card 1" text="This is the first card to show the deck example."*/>}}
    {{</* card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
      title="Feature Card 2" text="This is the second card to show the deck example."*/>}}
  {{</* /card/group */>}}
```

### card/grid

A css-grid based wrapper for cards best used for an even number of cards.

| Attribute | Description                                     |
| --------- | ----------------------------------------------- |
| class     | Additional css classes to apply to the wrapper. |

{{< card/grid class="grid-col-4 grid-col-md-2 grid-col-sm-1">}}
  {{< card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
      title="Feature Card 1" text="This is the first card to show the deck example.">}}
  {{< card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
      title="Feature Card 2" text="This is the second card to show the deck example.">}}
{{< /card/grid >}}

#### Example

```go-html-template
  {{</* card/grid class="grid-col-4 grid-col-md-2 grid-col-sm-1"*/>}}
    {{</* card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
        title="Feature Card 1" text="This is the first card to show the deck example." */>}}
    {{</* card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
        title="Feature Card 2" text="This is the second card to show the deck example." */>}}
  {{</* /card/grid */>}}
```

### card/flex

A css flexbox based wrapper to automatically layout cards.

| Attribute | Description                                     |
| --------- | ----------------------------------------------- |
| class     | Additional css classes to apply to the wrapper. |

{{< card/flex class="justify-content-space-evenly">}}
  {{< card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
      title="Feature Card 1" text="This is the first card to show the deck example.">}}
  {{< card/feature class="w-25 min-w-250" href="/docs/contribute/shortcodes/card"
      title="Feature Card 2" text="This is the second card to show the deck example.">}}
{{< /card/flex >}}

### card/social

A card for linking to a social platform.

| Attribute | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| class     | Additional css classes to apply to the bootstrap card element.          |
| title     | The title for the card.                                                 |
| img-src   | The src for the img element.                                            |
| img-class | Additional css classes to apply to the img tag.                         |
| img-type  | The type of image, can be one of 'page', 'asset', or 'remote' (default) |
| bg-class  | Additional css classes to apply to the img container                    |

#### Example

{{< card/social href="https://github.com/" class="w-25 min-w-250" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" >}}
Start contributing, this is where the code hits the fan.
{{< /card/social >}}

{{<br>}}

```go-html-template
  {{</* card/social href="https://github.com/" class="w-25 min-w-250" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" */>}}
    Start contributing, this is where the code hits the fan.
  {{</* /card/social */>}}
```

### card/showcase

A card for showcasing a single item.

| Attribute | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| class     | Additional css classes to apply to the bootstrap card element.          |
| title     | The title for the card.                                                 |
| img-src   | The src for the img element.                                            |
| img-class | Additional css classes to apply to the img tag.                         |
| img-type  | The type of image, can be one of 'page', 'asset', or 'remote' (default) |
| bg-class  | Additional css classes to apply to the img container                    |

#### Example

{{< card/showcase class="w-50" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" >}}

{{< card/showcase-item >}}Your space on the privacy-first web.{{< /card/showcase-item >}}

{{< card/showcase-link href="https://atsign.com/apps/wavi" >}}Learn more{{< /card/showcase-link >}}
{{< card/showcase-link href="https://wavi.ng/@wavi" >}}Wavi.ng{{< /card/showcase-link >}}

{{< /card/showcase >}}

{{<br>}}

```go-html-template
  {{</* showcase/card class="w-50" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" */>}}

    {{</* showcase/item >}}Your space on the privacy-first web.{{< /showcase/item */>}}

    {{</* showcase/link href="https://atsign.com/apps/wavi" >}}Learn more{{< /showcase/link */>}}
    {{</* showcase/link href="https://wavi.ng/@wavi" >}}Wavi.ng{{< /showcase/link */>}}

  {{</* /showcase/card */>}}
```

### card/blogpost
A card for showing a blogpost

| Attribute   | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| class       | Additional css classes to apply to the bootstrap card element.            |
| title       | The title of the blogpost                                                 |
| description | The description for the blogpost                                          |
| author      | The author of the blogpost                                                |
| href        | Link to the blogpost                                                      |
| rel         | Rel for anchor tag (a), "canonical" for canonical links                   |
| target      | "_blank" to open new tab when user clicks card                            | 

#### Example
{{< card/blogpost title="A little, big island" description="How someone from the small island of Bermuda found themselves in the Silicon Valley" author="Tyler Trott" href="https://medium.com/@tyler.trott/a-little-big-island-ae101eda7b06" img-src="https://miro.medium.com/max/700/1*C9s33bNRoPx5rV0cGhR3nw.png" target="_blank" >}}


```go-html-template
  {{</* card/blogpost title="A little, big island" description="How someone from the small island of Bermuda found themselves in the Silicon Valley" author="Tyler Trott" href="https://medium.com/@tyler.trott/a-little-big-island-ae101eda7b06" img-src="https://miro.medium.com/max/700/1*C9s33bNRoPx5rV0cGhR3nw.png" target="_blank" */>}}
```