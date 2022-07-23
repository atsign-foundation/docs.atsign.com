---
layout: codelab

title: SharedKey interactions # Step Name
description: | # SEO Description for this step
  Keys in Java are different from the Dart SDK AtKeys

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---

SharedKeys are for data you want to share with another atSign. The sharedBy atSign should be you. The sharedWith atSign should be the receiver. 

### Putting SharedKey Example
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR_SHARED_BY = "@bob"; // my atSign (sharedBy)
String ATSIGN_STR_SHARED_WITH = "@farinataanxious"; // other atSign (sharedWith)
boolean VERBOSE = true;
String KEY_NAME = "test";
int ttl = 30 * 60 * 1000; // 30 minutes
String VALUE = "I love cheese and pepperoni salads 12345";
// 2. create AtSign objects
AtSign sharedBy = new AtSign(ATSIGN_STR_SHARED_BY);
AtSign sharedWith = new AtSign(ATSIGN_STR_SHARED_WITH);
// 3. atClient factory method
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, sharedBy, VERBOSE);
} catch (AtException e)  {
    System.err.println("Failed to create AtClient instance " + e);
    e.printStackTrace();
}
// 4. create SharedKey instance
SharedKey sk = new KeyBuilders.SharedKeyBuilder(sharedBy, sharedWith).key(KEY_NAME).build();
sk.metadata.ttl = ttl;
// 5. put the key
String response = null;
try {
    response = atClient.put(sk, VALUE).get();
} catch (InterruptedException | ExecutionException e) {
    System.err.println("Failed to put key " + e);
    e.printStackTrace();
}
System.out.println(response);
```

### Getting a SharedKey Other Example
Getting a SharedKey that was sent by another atSign being sent to you.
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR_SHARED_BY = "@bob"; // their atSign (key is sharedBy this atSign)
String ATSIGN_STR_SHARED_WITH = "@farinataanxious"; // your atSign (key is sharedWith you)
boolean VERBOSE = true;
String KEY_NAME = "test";

// 2. create AtSign objects
AtSign sharedBy = new AtSign(ATSIGN_STR_SHARED_BY);
AtSign sharedWith = new AtSign(ATSIGN_STR_SHARED_WITH); // your atSign

// 3. atClient factory method
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, sharedWith, VERBOSE); // AtClient instance created with your atSign 
(sharedWith)
} catch (AtException e) {
    System.err.println("Failed to create AtClient instance " + e);
    e.printStackTrace();
}

// 4. create SharedKey instance
// key is sharedBy the other person and sharedWith you.
SharedKey sk = new KeyBuilders.SharedKeyBuilder(sharedBy, sharedWith).key(KEY_NAME).build();

// 5. get the key
String response = null;
try {
    response = atClient.get(sk).get();
} catch (InterruptedException | ExecutionException e) {
    System.err.println("Failed to get key " + e);
    e.printStackTrace();
}
System.out.println(response);
```

### Getting a SharedKey Self Example
Getting a SharedKey that is shared by you and is sent to another atSign.
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR_SHARED_BY = "@bob"; // my atSign (sharedBy)
String ATSIGN_STR_SHARED_WITH = "@farinataanxious"; // other atSign (sharedWith)
boolean VERBOSE = true;
String KEY_NAME = "test";

// 2. create AtSign objects
AtSign sharedBy = new AtSign(ATSIGN_STR_SHARED_BY);
AtSign sharedWith = new AtSign(ATSIGN_STR_SHARED_WITH);

// 3. atClient factory method
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, sharedBy, VERBOSE);
} catch (AtException e) {
    System.err.println("Failed to create AtClient instance " + e);
    e.printStackTrace();
}

// 4. create SharedKey instance
SharedKey sk = new KeyBuilders.SharedKeyBuilder(sharedBy, sharedWith).key(KEY_NAME).build();

// 5. get the key
String response = null;
try {
    response = atClient.get(sk).get();
} catch (InterruptedException | ExecutionException e) {
    System.err.println("Failed to get key " + e);
    e.printStackTrace();
}
System.out.println(response);
```

### Deleting a SharedKey Example
You can only delete SharedKeys that are sharedBy and created by you. If it is a SharedKey created by another atSign, you cannot delete it because it lives on their secondary server. 

```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR_SHARED_BY = "@bob"; // my atSign (sharedBy)
String ATSIGN_STR_SHARED_WITH = "@farinataanxious"; // other atSign (sharedWith)
boolean VERBOSE = true;
String KEY_NAME = "test";

// 2. create AtSign objects
AtSign sharedBy = new AtSign(ATSIGN_STR_SHARED_BY);
AtSign sharedWith = new AtSign(ATSIGN_STR_SHARED_WITH);

// 3. atClient factory method
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, sharedBy, VERBOSE);
} catch (AtException e) {
    System.err.println("Failed to create AtClient instance " + e);
    e.printStackTrace();
}

// 4. create SharedKey instance
SharedKey sk = new KeyBuilders.SharedKeyBuilder(sharedBy, sharedWith).key(KEY_NAME).build();

// 5. delete the key
String response = null;
try {
    response = atClient.delete(sk).get();
} catch (InterruptedException | ExecutionException e) {
    System.err.println(e);
    e.printStackTrace();
}
System.out.println(response);
```
