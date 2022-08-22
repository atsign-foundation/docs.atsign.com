---
layout: codelab
title: Panel
description: Panel shortcodes used in atsign.dev
draft: false
order: 2
---

{{<br>}}

### panel/feature

A large format feature panel.

| Attribute  | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| class      | Additional css classes to apply to the panel                                   |
| title      | Title to be displayed in the panel                                             |
| footnote   | Optional text to be displayed below the inner text                             |
| img-src    | The src for the img element.                                                   |
| img-type   | The type of image, can be one of 'page', 'asset', or 'remote' (default)        |
| img-class  | Additional css classes to apply to the img tag.                                |
| img-right  | Whether the image should be positioned to the right side or not                |
| theme      | The color theme for this, can be one of  'gray', 'light', or 'clear' (default) |

#### Example

{{< panel/feature title="Option 1: Clear" footnote="Use footnotes to add captions to an image or additional context" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" theme="clear" img-class="bg-white" >}}
  This panel is an example of the clear theme with its image positioned to the right. Try mixing and matching different themes and orientations to make a page look more visually appealing.
{{< /panel/feature >}}

{{< panel/feature title="Option 2: Gray" footnote="Use footnotes to add captions to an image or additional context" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" theme="gray" img-class="bg-white" img-right="true" >}}
  This panel is an example of the gray theme with its image positioned to the left. Make sure that you omit the img-right attribute to get the orientation of the image to appear on the left side.
{{< /panel/feature >}}

{{< panel/feature title="Option 3: Light" footnote="Use footnotes to add captions to an image or additional context" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" theme="light" img-class="bg-white" >}}
  This panel is an example of the light theme with its image positioned to the left.
{{< /panel/feature >}}
{{<br>}}

```go-html-template
  {{</* panel/feature title="hello" footnote="foot" img-src="https://wavi.ng/assets/img/wavimetalogo.jpeg" theme="clear" img-class="bg-white" img-right="true" */>}}
    test
  {{</* /panel/feature */>}}
```