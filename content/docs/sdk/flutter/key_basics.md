---
layout: codelab

title: "Key Basics" # Step Name
description: | # SEO Description for this step
  Key basics for the atPlatform in Flutter and Dart

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 5 # Ordering of the steps
---

### Overview

To store data, atPlatform utilizes a straightforward key-value method. A key serves as a unique identifier in key-value pairs.

**AtKey Structure:**

| Attributes | Description                    | Return Type |
| ---------- | ------------------------------ | ----------- |
| key        | Unique Identifier for the data | String      |
| sharedWith | The atSign to share with       | String      |
| sharedBy   | The atSign that is sharing     | String      |
| namespace  | The namespace of the app       | String      |
| metadata   |                                | Metadata    |
| isRef      |                                | Bool        |

### Metadata

Metadata In AtKey allows you to add more aspects of AtKey. If you want your data to live for a given period of time, or if you want it to be born/deleted after a set amount of time, metaData can help you with that.

**Metadata Structure:**

| Attributes      | Capabilities | Return Type |
| --------------- | ------------ | ----------- |
| ttl             |              | int         |
| ttb             |              | int         |
| ttr             |              | int         |
| ccd             |              | bool        |
| availableAt     |              | DateTime    |
| expiresAt       |              | DateTime    |
| refreshAt       |              | DateTime    |
| createdAt       |              | DateTime    |
| updatedAt       |              | DateTime    |
| dataSignature   |              | String      |
| sharedKeyStatus |              | bool        |
| isPublic        |              | bool        |
| isHidden        |              | bool        |
| namespaceAware  |              | bool        |
| isBinary        |              | bool        |
| isEncrypted     |              | bool        |
| isCached        |              | bool        |

**Key Creation rules**

A key in atProtocol has the structure described below.

`<Key Visibility>|<sharedWith>:<entity>.<namespace>@<sharedBy/owner>`

<a name="keyrules">A key in atProtocol should adhere to following rules:</a>

1. Length of a key should not be more than 240 characters (Limited by the current impl of the secondary. Not a protocol limitation)
2. Max of fifty five 7-bit characters for the atSign
3. Allowed characters in an entity are: [\w\._,-’”<emoji list>] <TO DO : Sitaram>
4. Namespace is mandatory in the current implementation of the protocol
5. If cached then the owner of the key should not be same as current atSign
6. sharedWith and sharedBy/owner cannot be same for a shared key
7. sharedWith and sharedBy/owner should be same for a self key (Private, Hidden (\_), Just self)
8. Reserved keys in protocol, private keys and hidden keys cannot be notified
   Ex: notify:\_secret@jagan:sitaram
   9.Protocol prevents creation of a key with a owner/sharedBy using an atSign that’s not owned by the current user.
9. Key cannot be a reserved key.

List of reserved keys:

- privatekey:at_pkam_privatekey
- privatekey:at_pkam_publickey
- public:publickey
- privatekey:privatekey
- shared_key
- privatekey:self_encryption_key
- signing_privatekey
- public:signing_publickey
- privatekey:at_secret
- privatekey:at_secret_deleted

**atProtocol data visibility**

The atProtocol saves data created in a key-value pair format. atProtocol lets you create data with three levels of visibility. They are public, shared and self data.
In the atProtocol a piece of data is identified as a certain data type based on the key structure. In the SDK, AtKey exposes abstractions to create keys for the various data types. Below sections describe this in detail.

**Public data**

Public data can be looked up without authentication. I.e. if @bob wants to lookup public data in the secondary server of @alice, @bob does not need to prove to @alice that he is @bob to see the data publicly shared by @alice. Public view of the @alice’s data will be the same for any user on the atPlatform. I.e. if @jane and @john look up some public data from @alice, it will be exactly the same as what @bob sees.

Good examples of public data in the real world are “first name” and the “last name”. We often don’t mind sharing our name with people, even random strangers.

**Signing of public data**
Public data is signed with the “private keys” of the user. Which means when @alice looks up @bob’s public data, @alice knows for sure that the data is indeed from @bob.

**Creating a public key in atProtocol**

```
var publicKey = AtKey.public('phone', namespace: 'wavi')
                .build();
```

**Persisting public data in atProtocol**

```
final atClientManager = await AtClientManager.getInstance()
   .setCurrentAtSign(‘@alice, 'me', AtClientPreference());
var atClient = atClientManager.atClient;
var phoneKey = AtKey.public('phone', namespace: 'wavi')
             .build();;
var value = '+1 100 200 300';
var putResult = await atClient.put(phoneKey, value);
```

**Shared data**

Shared data does exactly what it says it does! It is created in order to share it with other people. These are the people we typically know and trust. When @bob shares his phone number with @alice, then only @alice can see that piece of data.
Good examples of shared data in the real world are “phone number” and “email”. We only share these details with the people we know and trust.

**Encryption of shared data**

When @bob shares data to @alice, @bob generates a shared key for @alice and encrypts the data with the shared key. Further, the shared key is encrypted with the @alice public key. So the data shared is cryptographically secure.

**Creating a shared key in atProtocol**

```
var sharedKey = AtKey.shared('phone', namespace: 'wavi')
                ..sharedWith('@bob').build();
```

**Persisting shared data in atProtocol**

```
final atClientManager = await AtClientManager.getInstance()
   .setCurrentAtSign(‘@alice, 'me', AtClientPreference());
var atClient = atClientManager.atClient;
var phoneKey = AtKey.shared('phone', namespace: 'wavi')
             ..sharedWith('@bob')
             .build();
var value = '+1 100 200 300';
var putResult = await atClient.put(phoneKey, value);
```

**Self data**
Self data is created for self. If @bob creates data for self, only @bob and no one else can see the data.

Good examples of self data are “passwords” and “financial data”. We keep these details to ourselves.

**Encryption of self data**

When @bob creates data for self it is encrypted using @bob’s self encryption key.

**Creating a self key in atProtocol**

```
var selfKey = AtKey.self('phone', namespace: 'wavi')
              .build();
```

**Persisting self data in atProtocol**

```
final atClientManager = await AtClientManager.getInstance()
   .setCurrentAtSign(‘@alice, 'me', AtClientPreference());
var atClient = atClientManager.atClient;
var phoneKey = AtKey.self('phone', namespace: 'wavi')
             .build();
var value = '+1 100 200 300';
var putResult = await atClient.put(phoneKey, value);
```

<Sita lets add list of reserved keys>
<Request your feedback on what to keep and what to throw away>
 
       All of the above rules are implemented and exposed using the validate() method on AtKey. These rules are enforced during creation of the data.

**Key attributes of atProtocol data**

**_TTL - Time to live_**

TTL (Time To Live) is the duration of time for which the key will be available. TTL is expressed in milliseconds. Adding TTL during the key creation results in the time at which the key expires.

```
// Below key expires in 1 minute

var phoneKey = (AtKey.shared('phone', namespace: 'wavi')
               ..sharedWith('bob')
               ..timeToLive(60000))
               .build();
var value = '+1 100 200 300';
var putResult = await atClient.put(phoneKey, value);
```

**Scan/List behavior with TTL**
A key whose ttl has been set will be listed until a background job that runs at frequent time intervals deletes all the expired keys

**Lookup/Get behavior with TTL**
As long as the key has not expired, a “lookup” of the key returns the value that was set originally. After the key expiry, ‘null’ is returned when the key is looked up for a value.

**_TTB - Time to birth_**

TTB (Time To Birth) is the span of time within which the key’s value is not available. TTB is expressed in milliseconds. Adding TTB during the key creation results in the time at which the key's value is available.

```
// Below key is available after 1 minute

var phoneKey = (AtKey.shared('phone', namespace: 'wavi')
               ..sharedWith('bob')
               ..timeToBirth(60000))
               .build();
var value = '+1 100 200 300';
var putResult = await atClient.put(phoneKey, value);
```

**Scan/List behavior with TTB**

A key whose ttb has been set will be listed.

**Lookup/Get behavior with TTB**

Until the key’s TTB is met, a “lookup” of the key returns ‘null’. After which the original value of the key is returned.

**_TTR - Time to refresh_**

TTR (Time To Refresh) is the span of time that represents the time interval at which the cached key will be refreshed with a new value(if the original key's value is updated). TTR is expressed in seconds. Further, TTR can also be set to '-1' which represents the value of the original key will not be updated and therefore the cached key need not be refreshed.

**Cacheability**

All of the data created resides in the secondary server of an atSign. The owner of an atSign can choose to allow the public and the shared data to be cached in the another atSign

```
// Below key refreshes everyday
// TTR accepts time units in seconds

var phoneKey = (AtKey.shared('phone', namespace: 'wavi')
               ..sharedWith('bob')
               ..cache(86400, true))
               .build();
var value = '+1 100 200 300';
var putResult = await atClient.put(phoneKey, value);
```

**Scan/List behavior with TTR**

All the keys with TTR and the cached keys that are created as a result of TTR are listed.

**Lookup/Get behavior with TTR**

During lookup of a key, fetches for availability of the corresponding cached key. If a cached key is available, the value is returned. If cached is not available, fetches the value from the original key.

**Update behavior with TTR**
Only the owner of the key reserves the right to update the value. Updating the cached key’s value is prohibited.

**Propagation of an update to the cached key**

When an original key is updated by the creator, the ones who have cached it need to update the cached copy too. This can happen in two ways:

1. The Auto-Notify notifies the updated value to another atSign, thereby the cached key’s value is updated.
2. The refresh job in the secondary server

**_CCD - Cascade delete_**

CCD (Cascade delete) compliments the TTR functionality by allowing the owner of the key to decide if the cached key has to be deleted upon the deletion of the original key. CCD accepts a boolean value(either true (or) false). When set to true, upon deletion of the original key, the cached key is also deleted. Setting false results in the cached key remains intact even after the origi

**atProtocol CRUD operations**

**Create/Update Data**
SDK of atProtocol exposes two methods to create the data. They are:

- put
- putMeta

**_put_**

Update’s value of key is if it is already present. Otherwise creates a new key.

To share a key to another atSign, use AtKey.shared() factory method or populate AtKey.sharedWith with the atSign to whom the data has to be shared. Further, notifies the sharedWith atSign that a key has been created.

**Signature**

`Future<bool> put(AtKey key, dynamic value);`

Accepts an instance of AtKey and value and stores it in the local storage(local secondary) has a key-value pair.

AtKey represents the key against which the value will be stored. It further describes to whom the data is shared and metadata of the key. [key rules](#keyrules)

The value can be either a textual information or a binary data (e.g. Images, Files etc ). Returns a boolean value that represents the status of the put method. Returns ‘TRUE’ when put is completed successfully, else returns false.

Throws **AtClientException** with an error code and error description that describes that cause of the exception.

**_putMeta_**

Updates the metadata of the key.

_Signature_

`Future<bool> putMeta(AtKey key);`

Accepts an Instance of AtKey. The Metadata is encapsulated in the AtKey. Set the new/updated metadata to [Atkey.Metadata].

Returns a boolean value that represents the status of the putMeta method. Returns ‘TRUE’ when putMeta is completed successfully, else returns false.

Throws **AtClientException** with an error code and error description that describes that cause of the exception.

**Read Data**

**_get_**

Get the value of the key from the user's cloud secondary.
Signature
`Future<AtValue> get (AtKey key);`

Accepts an Instance of AtKey. The Metadata is encapsulated in the AtKey. Fetch both the value and metadata of the key.

Returns a boolean value that represents the status of the ‘get’ method. Returns ‘TRUE’ when ‘get’ is completed successfully, else returns false.

Throws **AtClientException** with an error code and error description that describes that cause of the exception.

**_getMeta_**

Gets the metadata of the key.

**Signature**

`Future <bool> getMeta(AtKey key);`

Accepts an Instance of AtKey. The Metadata is encapsulated in the AtKey. Gets the metadata of the key.

Returns a boolean value that represents the status of the putMeta method. Returns ‘TRUE’ when getMeta is completed successfully, else returns false.

Throws _AtClientException_ with an error code and error description that describes that cause of the exception.

**Delete Data**

Deletes the key.

**Signature**
`Future<bool> delete(AtKey key);`

Accepts an Instance of AtKey. Deletes the key from the storage. If the key is shared with another atSign, notifies the other atSign on the deletion of the key.

Returns a boolean value that represents the status of the delete method. Returns ‘TRUE’ when delete is completed successfully, else returns false.

Throws **AtClientException** with an error code and error description that describes that cause of the exception.

**List of Keys**

**_getKeys_**

Get all the keys stored in the user's secondary in string format.

_Signature_

`Future <<List<String>> getKeys({String? regex, String? sharedBy, String? sharedWith});`

If regex is specified only matching keys are returned, giving you the flexibility to use different regexes for different types of data.

**_getAtKeys_**

Get all the keys stored in the user's secondary in [AtKey] format.

**Signature**

`Future <<List<AtKey>> getAtKeys({String? regex, String? sharedBy, String? sharedWith});`

If regex is specified only matching keys are returned, giving you the flexibility to use different regexes for different types of data.

**Notification**
