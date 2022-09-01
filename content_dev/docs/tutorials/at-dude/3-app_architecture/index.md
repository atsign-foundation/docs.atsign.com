---
layout: codelab

title: "App Architecture" # Step Name
description: How to onboard or authenticate on any app built on the atPlatform # SEO Description for this step Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

In this tutorial, we will we'll implement the [MVC+S](https://blog.gskinner.com/archives/2020/09/flutter-state-management-with-mvcs.html) architecture pattern in our app.

We will create the folders that will store our models, views, commands and services.





#### Models

The models are only concerned with storing and manipulation of data our app needs.

In your terminal type:

```
mkdir lib/models
```
The model files will be saved in this folder.

#### Views

The views are the widgets and screen in our application.

In your terminal type:

```
mkdir -p lib/views/widgets
mkdir lib/views/screens
```
The screens and widgets files will be saved in these folders.

#### Commands

The commands are the various application logic.

In your terminal type:

```
mkdir lib/commands
```
The controller files will be saved in this folder.

#### Services

The services fetch data from the network or local storage and returns it to the controllers.

In your terminal type:

```
mkdir lib/services
```
The services files will be saved in this folder.



#### Conclusion

The controllers will call the services to fetch data from the network and then send the fetched data to the model. The views are bound to the model using provider or an alternative. As the models are updated the views will be updated. Alternatively the controller can update the views directly.

In the next step we'll explore this further as we implement onboarding on the atPlatform.