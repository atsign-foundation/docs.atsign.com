---
layout: codelab
title: YouTube
description: A YouTube video
draft: false
order: 7
---

{{< br >}}

### YouTube Video

Add YouTube videos to your content with the YouTube shortcode.

To get the correct YouTube URL:

1. Go to the YouTube video
2. Ensure it is set to public or unlisted (so that it can be accessed with the link)
3. Click "Share"
4. Select the "Embed" option
5. Copy the URL from the Embed from the generated html code (see image below)

{{< image type="page" src="embed.png" >}}

#### Example

YouTube video:

{{< youtube src="https://www.youtube.com/embed/Z-5sZ2UQn0I" >}}

```go-html-template
  {{</* youtube src="https://www.youtube.com/embed/Z-5sZ2UQn0I" */>}}
```
