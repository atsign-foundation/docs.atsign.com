---
layout: codelab

title: 'AtClientManager' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 1 # Ordering of the steps
---


### Overview

The AtClientManager is in charge of overseeing and managing all client services.It makes NotificationService, SyncService, and Client application preferences easier to access from its instance.It is also used for client method calls.


Based on your need you can either  install at_client_mobile or at_client and import. After that you will be able to make an AtClientManager Instance. Now to Initialize the AtClient instance , the setCurrentAtsign method needs to be called.

```
AtClientManager.getInstance().setCurrentAtSign('@alice', 'wavi', <preference>);
```

 The setCurrentAtSign method accepts the following arguments: currentAtSign, namespace and the preferences. The currentAtsign argument accepts an @sign , namespace accepts the namespace of the app and the preference accepts AtClientPreference value which we are going to discuss next.

After Initializing you are ready to make calls of client methods and services. The AtClientManger Instance has a getter atClient which returns an instance of AtClient. 

### Usage

To access CRUD methods,
```
AtClient atClient = atClientManager.atClient;
```

To access NotificationService methods 

```
NotificationService notificationService = atClientManager.notificationService;
```

And for the SyncService which is responsible for invoking the sync :

```
SyncService syncService = atClientManager.syncService;
```