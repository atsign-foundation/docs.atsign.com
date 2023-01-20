---
layout: codelab

title: SelfKey interactions # Step Name
description: | # SEO Description for this step
  Learn how to put, get, and delete a SelfKey in the Java SDK

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 7 # Ordering of the steps
---

SelfKeys hold data that are intended for the atSign owner of the secondary server. Data is encrypted with the symmetric selfEncryptionKey. 

### Putting a SelfKey Example
Learn how to create and put a SelfKey associated with some value. This value will be encrypted with your selfEncryptionKey and only the creator of the AtKey will be able to see and decrypt the data. Ensure that the `sharedBy` atsign is an atSign you have the keys to. If you decide to make a shared-with-self key, (e.g. `@bob:location@bob`), then make the `sharedWith` atSign the same object as the `sharedBy` atSign.
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR = "@bob";
boolean VERBOSE = true;
String KEY_NAME = "test";
String VALUE = "I like pizza";
int ttl = 30 * 60 * 1000;
    
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
// 4. create selfkey
SelfKey sk = new KeyBuilders.SelfKeyBuilder(atSign).key(KEY_NAME).build();
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

### Getting a SelfKey Example
Learn how to get the data belonging to a self key. SelfKeys refer to keys in the secondary that hold encrypted data for self use. This data is encrypted with your selfEncryptionKey. 
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64";
String ATSIGN_STR = "@bob";
boolean VERBOSE = true;
        
String KEY_NAME = "test";
        
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
        
// 4. create selfkey
SelfKey sk = new KeyBuilders.SelfKeyBuilder(atSign).key(KEY_NAME).build();
        
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

### Deleting a SelfKey Example
Learn how to delete a SelfKey from your secondary.
```java
// 1. establish constants
String ROOT_URL = "root.atsign.org:64"; // root url of the atsign server for fetching secondary address
String ATSIGN_STR = "@bob"; // atSign that we will pkam auth (must have keys in keys/)
boolean VERBOSE = true; // true for more print logs 
        
String KEY_NAME = "test"; // name of the key we will create and put
        
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
// 4. create self key
SelfKey sk = new KeyBuilders.SelfKeyBuilder(atSign).key(KEY_NAME).build();

// 5. delete the key
String response = null;
try {
    response = atClient.delete(sk).get();
} catch (InterruptedException | ExecutionException | CancellationException e) {
    System.err.println("Failed to delete key " + e);
    e.printStackTrace();
}
System.out.println(response);
```