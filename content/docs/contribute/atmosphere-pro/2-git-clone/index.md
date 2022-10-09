---
layout: codelab

title: "Forking the Repository" # Step Name
description: | # SEO Description for this step
  Fork and Cloning the Atmosphere Pro repository to your GitHub account

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

Now, it is time to fork the atmosphere

1. Make sure you are logged into [GitHub](https://github.com)

2. Head over to [atmosphere_pro](https://github.com/atsign-foundation/atmosphere_pro) and click "Fork".

{{< image type="page" src="fork.png" >}}

3. You should be given prompted to create a new repository on your account. Change these settings to your needs. Change the repository name, description, or copy all of the branches if you'd like. We recommend the default settings.

{{< image type="page" src="repo.png" >}}

4. Now that you have the repository on your own personal GitHub account, you can get the GitHub url by clicking on "Code," clicking "HTTPS," then copy the url.

{{< image type="page" src="https.png" >}}

5. On your local machine, `cd` into the directory where you want to clone the repository. This can be done either on your terminal or on the terminal in your code editor.

6. Now that you are in the right directory, run the following command:

```sh
git clone <YOUR_FORKED_REPOSITORY_URL> .
```

`<YOUR_FORKED_REPOSITORY_URL>` is the URL you copied from step 4.

6. Tada! You've cloned the repository. Just run `flutter pub get` to get the packages the atmosphere pro relies on.

7. Then do `flutter run` in the root project directory.