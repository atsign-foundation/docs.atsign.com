---
layout: codelab

title: PublicKey interactions # Step Name
description: | # SEO Description for this step
  Keys in Java are different from the Dart SDK AtKeys

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---

PublicKeys are meant for public data. Authorized or unauthorized users are able to know of the existence of these keys (via scan) and the data is not encrypted.

### Putting a PublicKey Example
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64"; // root url of the atsign server for fetching secondary address
String ATSIGN_STR = "@bob"; // atSign that we will pkam auth (must have keys in keys directory) 
boolean VERBOSE = true; // true for more print logs 
String KEY_NAME = "test"; // name of the key we will create and put
String VALUE = "I love pineapple on pizza 12345"; // value we will associate with the key

// 2. create AtSign object
AtSign atSign = new AtSign(ATSIGN_STR);

// 3. atClient factory method
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, atSign, VERBOSE);
} catch (AtException e) {
    System.err.println("Failed to connect to remote server " + e);
    e.printStackTrace();
}

// 4. create a new public key
PublicKey pk = new KeyBuilders.PublicKeyBuilder(atSign).key(KEY_NAME).build();

// 5. put the key
String response = null;
try {
    response = atClient.put(pk, VALUE).get();
} catch (InterruptedException | ExecutionException e) {
    System.err.println("Failed to put key " + e);
    e.printStackTrace();
}
System.out.println(response); // data:<CommitId>
```

### Getting a PublicKey example
```java
// 1. establish arguments
String ROOT_URL = "root.atsign.org:64"; // root url of the atsign server for fetching secondary address
String ATSIGN_STR = "@bob"; // atSign that we will pkam auth (must have keys in keys directory)
boolean VERBOSE = true; // true for more print logs
String KEY_NAME = "test"; // name of the key we will get

// 2. create AtSign object
AtSign atSign = new AtSign(ATSIGN_STR);

// 3. atClient factory method
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, atSign, VERBOSE);
} catch (AtException e) {
    System.err.println("Failed to connect to remote server " + e);
    e.printStackTrace();
}

// 4. create the key
PublicKey pk = new KeyBuilders.PublicKeyBuilder(atSign).key(KEY_NAME).build();

// 5. get the value associated with the key
String response = null;
try {
    response = atClient.get(pk).get();
} catch (InterruptedException | ExecutionException e) {
    System.err.println("Failed to get key " + e);
    e.printStackTrace();
}
System.out.println(response);
```

### Deleting a PublicKey example
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR = "@bob";
boolean VERBOSE = true;
String KEY_NAME = "test";

// 2. create AtSign instance
AtSign atSign = new AtSign(ATSIGN_STR);
        
// 3. create AtClient instance using factory methods
AtClient atClient = null;
try {
    atClient = AtClient.withRemoteSecondary(ROOT_URL, atSign, VERBOSE);
} catch (AtException e) {
    System.err.println(e);
    e.printStackTrace();
}
// 4. create public key
PublicKey pk = new KeyBuilders.PublicKeyBuilder(atSign).key(KEY_NAME).build();

// 5. delete the key
String response = null;
try {
    response = atClient.delete(pk).get();
} catch (InterruptedException | ExecutionException | CancellationException e) {
    System.err.println(e);
    e.printStackTrace();
}
System.out.println(response);
```