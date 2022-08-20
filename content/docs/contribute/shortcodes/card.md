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
  {{</* card/showcase class="w-50" title="Wavi" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" img-class="bg-white p-5" */>}}

    {{</* card/showcase-item >}}Your space on the privacy-first web.{{< /card/showcase-item */>}}

    {{</* card/showcase-link href="https://atsign.com/apps/wavi" >}}Learn more{{< /card/showcase-link */>}}
    {{</* card/showcase-link href="https://wavi.ng/@wavi" >}}Wavi.ng{{< /card/showcase-link */>}}

  {{</* /card/showcase */>}}
```

### card/blogpost
A card for showing a blogpost

| Attribute   | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| class       | Additional css classes to apply to the bootstrap card element.            |
| title       | The title of the blogpost                                                 |
| publishDate | Date string this was published (eg June 23, 2022)                         |
| author      | The author of the blogpost (eg: Atsign)                                   |
| img-src     | Thumbnail image URL                                                       |
| description | The description for the blogpost                                          |
| href        | Link to the blogpost                                                      |
| rel         | Rel for anchor tag (a), "canonical" for canonical links                   |
| target      | "_blank" to open new tab when user clicks card                            | 

#### Example
{{< row >}}
  {{< 
    card/blogpost 
    title="A little, big island"
    publishDate="June 8, 2022"
    description="How someone from the small island of Bermuda found themselves in the Silicon Valley"
    author="Tyler Trott"
    img-src="https://miro.medium.com/max/700/1*C9s33bNRoPx5rV0cGhR3nw.png"
    href="https://medium.com/@tyler.trott/a-little-big-island-ae101eda7b06"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="Flutter Silicon Valley Meetup #2"
    publishDate="2022-06-03 17:39:03"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/808/1*Co1A04JT4fhx961EIWYBOA.png"
    description="Hey Everyone! The team at Atsign recently hosted Flutter Silicon Valley’s second meetup! Flutter Silicon Valley is an event where the Flutter devel..."
    href="https://medium.com/flutter-community/flutter-silicon-valley-meetup-2-d792b43f7e28?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="@spacechat: Students Building for Social Privacy on Flutter"
    publishDate="2022-04-20 18:47:05"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/1*TR4Vm8eUZZfnNU5Gdztcgg.png"
    description="Introduction Tired of social media companies like Facebook, YouTube, and Twitter messing with our data? Meet Gefei Zhang, an entrepreneur and stude..."
    href="https://medium.com/flutter-community/spacechat-students-building-for-social-privacy-on-flutter-183b1346cb82?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="“Hamming It Up” with The @ Company’s Colin Constable, Creator of CATWEB Mobile App For and By the…"
    publishDate="2022-04-07 23:02:54"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/1*fHc301_O-Ih1wBeOhWaM3g.png"
    description="“Hamming It Up” with The @ Company’s Colin Constable, Creator of CATWEB Mobile App For and By the Ham Radio Community. Colin Constable, AI6BH When ..."
    href="https://atsigncompany.medium.com/hamming-it-up-with-the-companys-colin-constable-creator-of-catweb-mobile-app-for-and-by-the-eb5b4e308dde?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="Developers, it’s time to #flipoffsocialmedia"
    publishDate="2021-12-05 00:10:11"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/0*TSLgiZSrKxKWg9V3"
    description="How’s that for a title? I had to use that title so that it would show up in your social media feeds, and that is exactly the point of this post. If..."
    href="https://atsigncompany.medium.com/developers-its-time-to-flipoffsocialmedia-28de97c1f4f4?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="Building Flutter apps with no backend?"
    publishDate="2021-10-19 13:28:55"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/0*9DJJ43R8XuSJmkAa"
    description="It’s possible with the free &amp; open-source @platform. As developers, we have to make so many decisions when we start a new project: What databas..."
    href="https://medium.com/flutter-community/building-flutter-apps-with-no-backend-9715b764a81e?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="The @ Company Core Values"
    publishDate="2021-07-20 18:40:07"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/1*3hv7a2qKNzDbH-EKKcTnpA.png"
    description="At The @ Company, we are building a flat organization, where decisions that impact the success of the company will be made at every level. As a gro..."
    href="https://atsigncompany.medium.com/the-company-core-values-61de7bf978f8?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="Ask the Founders: Storage &amp; Memory &amp; Servers, Oh My!"
    publishDate="2021-05-29 00:03:38"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1000/1*9LT2hxetIEVsvQrQmijmSQ.jpeg"
    description="Frequently Asked Questions about our private, open source protocol Photo by Fredy Jacob on UnsplashThe @platform is a clever abstraction machine. P..."
    href="https://atsigncompany.medium.com/ask-the-founders-storage-memory-servers-oh-my-250e302352c0?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="Ask the Founders: Breaking Down the @platform"
    publishDate="2021-05-26 05:25:58"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1000/1*9WDXtWH1sA53JsH4oTg4dQ.jpeg"
    description="Frequently Asked Questions about our private, open source protocol Photo by Matt Palmer on UnsplashWhen it comes to understanding the @platform and..."
    href="https://atsigncompany.medium.com/ask-the-founders-breaking-down-the-platform-1ab999d1b9ce?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

  {{< 
    card/blogpost 
    title="Ask the Founders: What is the @platform?"
    publishDate="2021-05-19 21:37:46"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/0*aP8VGvdhn58IETvw"
    description="Frequently Asked Questions about our private, open source protocol Image from UnsplashPart of the great thing about working at The @ Company is tha..."
    href="https://atsigncompany.medium.com/ask-the-founders-what-is-the-platform-89cdd644bcde?source=rss-f779d31710de------2"
    target="_blank" 
  >}}

{{</ row >}}


```go-html-template
{{</* row */>}}
  {{</* 
    card/blogpost 
    title="A little, big island"
    publishDate="June 8, 2022"
    description="How someone from the small island of Bermuda found themselves in the Silicon Valley"
    author="Tyler Trott"
    img-src="https://miro.medium.com/max/700/1*C9s33bNRoPx5rV0cGhR3nw.png"
    href="https://medium.com/@tyler.trott/a-little-big-island-ae101eda7b06"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="Flutter Silicon Valley Meetup #2"
    publishDate="2022-06-03 17:39:03"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/808/1*Co1A04JT4fhx961EIWYBOA.png"
    description="Hey Everyone! The team at Atsign recently hosted Flutter Silicon Valley’s second meetup! Flutter Silicon Valley is an event where the Flutter devel..."
    href="https://medium.com/flutter-community/flutter-silicon-valley-meetup-2-d792b43f7e28?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="@spacechat: Students Building for Social Privacy on Flutter"
    publishDate="2022-04-20 18:47:05"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/1*TR4Vm8eUZZfnNU5Gdztcgg.png"
    description="Introduction Tired of social media companies like Facebook, YouTube, and Twitter messing with our data? Meet Gefei Zhang, an entrepreneur and stude..."
    href="https://medium.com/flutter-community/spacechat-students-building-for-social-privacy-on-flutter-183b1346cb82?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="“Hamming It Up” with The @ Company’s Colin Constable, Creator of CATWEB Mobile App For and By the…"
    publishDate="2022-04-07 23:02:54"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/1*fHc301_O-Ih1wBeOhWaM3g.png"
    description="“Hamming It Up” with The @ Company’s Colin Constable, Creator of CATWEB Mobile App For and By the Ham Radio Community. Colin Constable, AI6BH When ..."
    href="https://atsigncompany.medium.com/hamming-it-up-with-the-companys-colin-constable-creator-of-catweb-mobile-app-for-and-by-the-eb5b4e308dde?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="Developers, it’s time to #flipoffsocialmedia"
    publishDate="2021-12-05 00:10:11"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/0*TSLgiZSrKxKWg9V3"
    description="How’s that for a title? I had to use that title so that it would show up in your social media feeds, and that is exactly the point of this post. If..."
    href="https://atsigncompany.medium.com/developers-its-time-to-flipoffsocialmedia-28de97c1f4f4?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="Building Flutter apps with no backend?"
    publishDate="2021-10-19 13:28:55"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/0*9DJJ43R8XuSJmkAa"
    description="It’s possible with the free &amp; open-source @platform. As developers, we have to make so many decisions when we start a new project: What databas..."
    href="https://medium.com/flutter-community/building-flutter-apps-with-no-backend-9715b764a81e?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="The @ Company Core Values"
    publishDate="2021-07-20 18:40:07"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/1*3hv7a2qKNzDbH-EKKcTnpA.png"
    description="At The @ Company, we are building a flat organization, where decisions that impact the success of the company will be made at every level. As a gro..."
    href="https://atsigncompany.medium.com/the-company-core-values-61de7bf978f8?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="Ask the Founders: Storage &amp; Memory &amp; Servers, Oh My!"
    publishDate="2021-05-29 00:03:38"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1000/1*9LT2hxetIEVsvQrQmijmSQ.jpeg"
    description="Frequently Asked Questions about our private, open source protocol Photo by Fredy Jacob on UnsplashThe @platform is a clever abstraction machine. P..."
    href="https://atsigncompany.medium.com/ask-the-founders-storage-memory-servers-oh-my-250e302352c0?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="Ask the Founders: Breaking Down the @platform"
    publishDate="2021-05-26 05:25:58"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1000/1*9WDXtWH1sA53JsH4oTg4dQ.jpeg"
    description="Frequently Asked Questions about our private, open source protocol Photo by Matt Palmer on UnsplashWhen it comes to understanding the @platform and..."
    href="https://atsigncompany.medium.com/ask-the-founders-breaking-down-the-platform-1ab999d1b9ce?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

  {{</* 
    card/blogpost 
    title="Ask the Founders: What is the @platform?"
    publishDate="2021-05-19 21:37:46"
    author="Atsign"
    img-src="https://cdn-images-1.medium.com/max/1024/0*aP8VGvdhn58IETvw"
    description="Frequently Asked Questions about our private, open source protocol Image from UnsplashPart of the great thing about working at The @ Company is tha..."
    href="https://atsigncompany.medium.com/ask-the-founders-what-is-the-platform-89cdd644bcde?source=rss-f779d31710de------2"
    target="_blank" 
  */>}}

{{</*/ row */>}}
```