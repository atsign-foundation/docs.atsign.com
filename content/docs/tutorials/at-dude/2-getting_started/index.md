---
layout: codelab

title: "Getting Started" # Step Name
description: How to get started on the atPlatform  # SEO Description for this step Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

In this tutorial, we will be using VS Code, but feel free to use any editor of your choice.

To get started, open your terminal and `cd` to the folder where you want to start this project. Type the following in your terminal:


```
dart pub global activate at_app
```
The above command will allow you to run the at_app scripts from the command line when you are not currently inside a package.

Next, let's create our atDude Flutter project by running the command below:

```
at_app create . --project-name "at_dude"
```
This command will create a Flutter project with the necessary packages required to build on the atPlatform.

Run your project with the below command to see the default app.

```
flutter run -d < your android or ios device >
```

If successful, you should see the default atPlatform Flutter app.

{{< image type="page" src="default_flutter_app.png" >}}

{{<br>}}
In the next step, we'll implement the MVC+S architecture pattern in our app.