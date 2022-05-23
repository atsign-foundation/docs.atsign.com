---
layout: codelab
title: Images
description: Image shortcodes used in atsign.dev
draft: false
order: 3
---

{{<br>}}

Include an image using the 3 different types:

- remote (default)
- page
- asset

| Attribute | Description                                         |
| --------- | --------------------------------------------------- |
| class     | Additional css classes to apply to the img element. |
| src       | The src for the image (url or path).                |
| type      | The type of image (remote, page or global).         |

### image - remote

Used when you would like to use an image from another site (with permission of course!).

You do not need to specify a type for this since it is default.  
Set src to the url of the image.

#### Example

{{< image class="bg-white" src="https://atsign.com/wp-content/uploads/2020/09/The@Company-Logo@2x.png.webp" >}}

```go-html-template
  {{</* image class="bg-white" src="https://atsign.com/wp-content/uploads/2020/09/The@Company-Logo@2x.png.webp" */>}}
```

### image - page

Used when an image belongs to this site, and only needs to be visible from a single page.

Set the type to "page" for this.  
Set the src to the filename for your image.

If your page is not named "index.md" or "_index.md":
1. Create a folder with the same name as your page (without the ".md").
2. Place your file in this folder and rename it to index.md
3. Place your image in the folder, and you should be good to go!.

Your folder structure should look like this after:
```
- my_page (folder)
\ - index.md
\ - my_image.png
```

#### Example

{{< image class="bg-white" src="my_image.png" type="page" >}}
```go-html-template
  {{</* image class="bg-white" src="my_image.png" type="page" */>}}
```

### image - asset

Used when an image belongs to this site, and needs to be visible from multiple pages.

Set the type to "asset" for this.  
Set the src to the filepath for your image from within the assets folder.

#### Example

{{< image class="bg-white" src="img/contributing/my_global_image.png" type="asset" >}}

```go-html-template
  {{</* image class="bg-white" src="img/contributing/my_global_image.png" type="asset" */>}}
```