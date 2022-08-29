---
layout: codelab

title: "Getting Started" # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

<!-- | TOC                             | -->
<!-- | ------------------------------- | -->
<!-- | [Dude Model](#dude-model)       | -->
<!-- | [From Json](#from-json)         | -->
<!-- | [To Json](#to-json)             | -->
<!-- | [Other Methods](#other-methods) | -->
<!-- | [Profile Model](#profile-model) | -->

In this tutorial we will be using vscode but feel free to use any editor of your choice.

To get started open your terminal and `cd` to the folder where you want to start this project. In your terminal type:


```
dart pub global activate at_app
```
The above command will allow you to run the at_app scripts from the command line when you are not currently inside a package.

Next, Lets create our atDude flutter project by running the below command.

```
at_app create --project-name "at_dude"
```
This command will create a flutter projects with the necessary packages required to build on the at platform.

Run your project with the below command so see the default app.

```
flutter run -d <your android or ios device>
```

If successful you should see the default atPlatform flutter app.

{{< image class="bg-white contain" type="page" src="./assets/default_flutter_app.png" alt="default atPlatform flutter app" >}}

In the next step we'll learn how to onboard on the atPlatform.


