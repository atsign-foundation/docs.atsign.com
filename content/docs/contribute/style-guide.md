---
layout: single

title: Style Guide # The title (ON THE PAGE)
lead: Rules to follow when contributing

description: Style guide for contributing to atsign.dev

draft: false # Change this to "true" to hide the page
toc: false # Change this to "true" to show the table of contents
weight: 1 # For single pages, lower is first.
---

## Layouts

In addition to Hugo's default list & single layouts, the docs section also supports codelab-list & codelab-single. Their inner workings are explained in the frontmatter section.

## Frontmatter

| Property    | Supported Layouts       | Description                                                                                                                                                              |
| ----------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title       | ALL                     | Title of the page                                                                                                                                                        |
| layout      | ALL                     | Hugo layout of the page                                                                                                                                                  |
| lead        | ALL except codelab-step | A lead to show below the title, this should be short and serves to provide a little more context to the title.                                                           |
| description | ALL                     | SEO description for the page, this should be descriptive of the content for the page, and include keywords that represent both the content & the overall site's purpose. |
| draft       | ALL                     | Whether this page is a draft or not, if true, this page will not be built on the production site.                                                                        |
| toc         | docs/single, docs/list  | Whether this page should generate a table of contents from headers.                                                                                                      |
| autolinks   | docs/list               | Whether this page should automatically generate links for sub-pages.                                                                                                     |
| weight      | ALL except codelab-step | Used to order content in navigation                                                                                                                                      |
| doneLink    | codelab-list            | Where to send the visitor if they press 'done' at the end of the codelab.                                                                                                |
| exitLink    | codelab-list            | Where to send the visitor if they press 'exit codelab'.                                                                                                                  |
| order       | codelab-single          | Used to order steps in a codelab, similar to 'weight' property.                                                                                                          |

## Content

1. No HTML in markdown content files.  
  HTML shall be written in `/layouts/` for the purposes of maintaining consistency across all other pages.
2. Keep things consistent across sections.  
  Content pages within a section should be written such that they match the format of other content within the section.
  There may be some exceptions, but keep this in mind when contributing.
3. Examples should be clear and concise.  
  Make sure to use examples that are accurate to the topic, and are easy to understand.
4. File names should be concise and prioritize '-' over '_'
  We've opted to use '-' instead of '_' in link names to keep things consistent.  
  The only exception to this is when '_' is part of a name, like in 'at_server', this also allows us to distinguish between names and spaces in the url.  
  Links should be as pretty as possible for sharing purposes.

## Building Layouts

1. Use bootstrap for styling where available.  
  All styling should be done in bootstrap, unless it is unable to achieve what you are after.
2. Ensure compatibility when writing custom styles and layouts.
  This includes compatibility for dark/light modes, various screen sizes, and has good browser support.

## JavaScript

This site is using purgeCSS for the staging and production builds.
If you write JavaScript that modifies the DOM in any way, ensure that all style selectors are added to the safelist in `config/postcss.config.js`.

## Assets

1. External assets and images should be stored in the static folder.  
  Site-only images should be stored at page level where possible, or in the assets folder if it is used in multiple places across the site.
  See [here](/docs/contribute/shortcodes/image/) for more information.
