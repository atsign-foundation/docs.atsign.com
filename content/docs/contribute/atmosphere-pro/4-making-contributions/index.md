---
layout: codelab

title: "Making Contributions" # Step Name
description: | # SEO Description for this step
  Atmosphere Pro introduction

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

Now that you have your fork all setup and you've appropriately setup your repository to be following the Contributing Standards, it's time to get to the fun part- coding!

1. Fetch the latest changes from the upstream repository.

```
git fetch upstream
```

2. Reset your fork's trunk to be exactly as the upstream trunk branch. **IMPORTANT**: Do this only at the beginning when you begin working on your contribution. It will overwrite and delete and local changes you've made and make it exactly as the code we have it in the upstream trunk branch.

```
git checkout trunk
git reset --hard upstream/trunk
git push --force
```

3. Make your changes to the code.

Make edits to your code then stage your changes, commit, then push to your origin trunk.

Be sure to follow the [semantic commits guide](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) to be a truly clean programmer.

```
# make changes
git add .
git commit -m "feat: here are my changes!" # commit message should describe the changes you've made
git push origin trunk
```

4. Once you are ready to make a pull request, head over to your personal fork on GitHub and click "Pull Requests."

{{< image type="page" src="1.png" >}}

5. Then click "New Pull Request."

{{< image type="page" src="2.png" >}}

6. Make sure it is going from your own personal trunk to the upstream trunk.

{{< image type="page" src="3.png" >}}

7. Fill out the PR form. We have an add-on that scans for semantic PRs. Follow the [Semantic Guidelines](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) that we use. Your PR title should be something like `feat: new encrypted file transfer feature`.

8. Create the pull request

Congratulations! You are awesome. You've made a contribution to one of our Flutter apps that aims to "Flip the Internet" by providing developers a platform to implement end-to-end encryption in their devices and apps.

Head over to our [Discord](https://discord.gg/55sHTQFxfz) and give a gentle ping to the managers of the repository to let them know you've made a contribution.