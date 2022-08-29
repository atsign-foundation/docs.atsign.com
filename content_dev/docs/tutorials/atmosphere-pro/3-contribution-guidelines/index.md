---
layout: codelab

title: "Following the Contrbuting Guidelines" # Step Name
description: | # SEO Description for this step
  Atmosphere Pro introduction

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

Here at Atsign, we LOVE pull requests. You may have been part of various teams & projects where they followed different styles of contributing to GitHub repositories (squash & rebase, or committing to the same branch,..). But here at Atsign, all of our projects, apps, and services are open-sourced and the fork and pull request process seems to work the best for us.

See the [CONTRIBUTING.md](https://github.com/atsign-foundation/atmosphere_pro/blob/trunk/CONTRIBUTING.md) file in the root of the repository to see how we want you to set up your repository when making contributions. Either read the updated guidelines above, or continue reading below (the steps are roughly the same).

1. Add a new remote "upstream" to be our version of the repository 

```
git remote add upstream git@github.com:atsign-foundation/atmosphere_pro.git
```

2. Set pushing to disabled. This is so you can't accidentally push to the upstream repository. We want everyone to make pull requests so our developers can review your code and make suggestions.

```
git remote set-url upstream --push DISABLED
```

3. Do `git remote -v`. If you see something similar to this, then you've done it successfully.

```
origin  git@github.com:yourname/atmosphere_pro.git (fetch)
origin  git@github.com:yourname/atmosphere_pro.git (push)
upstream        git@github.com:atsign-foundation/atmosphere_pro.git (fetch)
upstream        DISABLED (push)
```
