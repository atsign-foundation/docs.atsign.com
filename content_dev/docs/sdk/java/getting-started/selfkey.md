---
layout: codelab

title: SelfKey interactions # Step Name
description: | # SEO Description for this step
  Keys in Java are different from the Dart SDK AtKeys

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 6 # Ordering of the steps
---

SelfKeys hold data that are intended for the atSign owner of the secondary server. Data is encrypted with the symmetric selfEncryptionKey. 

### Putting a SelfKey Example
```java
// 1. establish constants
String ROOT_URL = "root.atsign.wtf:64";
String ATSIGN_STR = "@33thesad";
boolean VERBOSE = true;
String KEY_NAME = "test";
String VALUE = "I hate pineapple on pizza!!!";
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
```java
// 1. establish constants
String ROOT_URL = "root.atsign.wtf:64";
String ATSIGN_STR = "@33thesad";
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
SelfKey sk = new KeyBuilders.SelfKeyBuilder(atSign).key(KEY_NAME).build(
        
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

```java
// 1. establish constants
String ROOT_URL = "root.atsign.wtf:64"; // root url of the atsign server for fetching secondary address
String ATSIGN_STR = "@33thesad"; // atSign that we will pkam auth (must have keys in keys/)
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