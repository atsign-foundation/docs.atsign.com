---
layout: list

title: "Protocol Specification" # The title (ON THE PAGE) - can we change this to "Under the hood" I feel it is more literal.
lead: This page gives an overview of how the internal of the atPlatform works.

description: The specification of the atProtocol on the atPlatform

draft: false # Change this to "true" to hide the page
toc: true # Change this to "false" to hide the table of contents
autolinks: true # Change this to "false" to hide the automatic links below your content
weight: 3 # For list pages, higher is first.
---

## Introduction

The atProtocol is the underlying protocol that the atPlatform implements. It is a simple internet protocol for interacting with the atDirectory and atServer. The atPlatform builds on top of the atProtocol by taking full advantage of the features of the atProtocol.

See our [Protocol Specification](https://github.com/atsign-foundation/at_protocol/blob/trunk/specification/at_protocol_specification.md) on our GitHub page under our [at_protocol](https://github.com/atsign-foundation/at_protocol) repository.

If you see a typo, mistake, or want to suggest a feature, please see our [contributing guidelines](/start/other/#contributing-to-the-developer-site). All contributions are welcome.

## atDirectory

The atDirectory provides a lookup of where an atServer for an atSign is running. This is similar to a DNS server.

When asking an atDirectory for the lookup of a particular atSign the atDirectory should respond with a null if the name does not exist and if the name exists the DNS name or address of the atServer and the IP port number for that atSign should be returned.

Response:

`<host>:<port>`

The atDirectory only has one verb - `@exit` and all other inputs are considered to be lookup requests.

## atServer

An atServer is where an atSign user's personal data should be stored. One interacts with an atServer using the verbs exposed by the protocol.

An atServer should have 4 major sub components:

1. Key Store
2. Commit Log
3. Access Log
4. Notification Log

Verbs described in the document should be used to create, update, delete, and retrieve information from the above sub components.

### 1. Key Store

Key store is a place where user data in an atServer should be saved as key and value pairs. Apart from the value, an atSign owner should be able to add certain metadata for a key.

#### Key

A key in the atProtocol can be formed by using any alphanumeric and special characters (UTF-8) excluding "@", ":" and a white space (" "). A key in an atServer can be any of the following 5 types:

1. Public Key

- A public key is a key which can be looked up by any atSign owner.
- A public key should be part of the *scan* verb result.
- Format of the public key should be `public::<@sign>`.

Example:

`public:location@alice`

> The owner of the atServer should be allowed to update or delete the value of a public key.

2. Private Key

- A private key is a key which cannot be looked up by any atSign owner other than the one who created it.
- A private key should not be returned in a *scan* verb result.
- Format of the private key should be `privatekey::<@sign>`.

Example:

`privatekey:pk1@alice`

> The owner of the atServer should be allowed to update or delete the value of a private key.

3. User key

- A user key can only be looked up by an atSign owner with whom the data has been shared.
- A user key should be part of the *scan* verb result only for the user who created it and the specific user it has been shared with.
- Format of the key shared with someone else should be `<Shared with atSign>::<Created by atSign>`.

Example:

`@bob:phone@alice`

> Note: Above Key should be part of scan verb result only for @alice and @bob

> The owner of the atServer should be allowed to update or delete the value of a user key.

4. Internal Key

- Internal keys start with an underscore(_) and are not displayed in scan results. Internal keys can be looked up only by the owner of the atServer.

5. Cached Key
<! --- 
TODO: Do we continue to use "atSign user or atSign owner? Especially with our "Person not user rule.
>
- A cached key is a key that was originally created by another atSign owner but is now cached on the atServer of another user's atSign as they were given permission to cache it.
- A cached key should be listed in the *scan* verb result for the atSign user who cached it.
- Format of the key shared with someone else should be `cached:<Shared with atSign>::<Created by atSign>`.

Example:

`cached:@bob:phone@alice`

> The person who has cached the key should not be allowed to update the cached key.

> An atSign user who has created and shared the key should be allowed to update a cached key, and if the "autoNotify" config parameter is set to true, the updated value should be notified (please refer to the `notify` verb) and the cached key updated with the new value.

> If the user who originally shared the keys set the CCD (Cascade delete) to true, the cached key will be deleted when the original key is deleted.

#### Value

Text or binary values can be saved in an atServer. The size of the value saved in an atServer is bound by the config parameter "maxBufferSize".

> A user should be made aware of this limitation by using the `stats` verb.

> If a binary value is being saved on an atServer, the "isBinary" attribute on the metadata should be set to true by the convention.

1. Reference Value

An atServer should support referencing another key's value.

A reference value should be in the format "atsign://".

For example, 'phone@bob(key)' is 1234 (value). Now another key called altPhone@bob can refer to phone@bob by referencing it as altPhone@bob == atsign://phone@bob.

When the user does a lookup on the key that contains a reference, the atServer should return a fully resolved value.

2. Metadata

Metadata of a key should describe the following properties of the value being inserted.

| Meta Attribute | Auto create? | Description |
|----------------|--------------|-------------|
| createdOn | Yes | Date and time when the key has been created. |
| createdBy | Yes | atSign that has created the key |
| updatedOn | Yes | Date and time when the key has been last updated |
| sharedWith | No | atSign of the user with whom the key has been shared. Can be null if not shared with anyone. |
| ttl | No | Time to live in milliseconds. |
| expiresOn | Yes | A Date and Time derived from the ttl (now + ttl). A Key should be auto deleted once it expires. |
| ttb | No | Time to birth in milliseconds. |
| availableFrom | Yes | A Date and Time derived from the ttl (now + ttl). A Key should be only available after availableFrom |
| isCached | No | True if the key is cached |
| ttr | No | Time in milliseconds after which the cached key needs to be refreshed. ttr of -1 indicates that the key can be cached forever. ttr of 0 indicates do not refresh. ttr of > 0 will refresh the key. ttr of null indicates the key is impossible to cache (which has the same effect as a ttr of 0). |
| refreshAt | No | A Date and Time derived from the ttr. The time at which the key gets refreshed. |
| ccd | No | Indicates if a cached key needs to be deleted when the atSign user who has originally shared it deletes it. |
| isBinary | No | True if the value is a binary value. |
| isEncrypted | No | True if the value is encrypted. |

### 2. Commit Log

An atServer should record any `create`, `update`, and `delete` operations in a commit log. The Commit Log should record these operations with a unique commit id so that users of the atServer can lookup operations that happened on or after a given commit id.

An atServer should provide a way to compact the Commit Log based on time and size.

### 3. Access Log

An atServer should record the following user actions: user login, user authentication, and lookup. The Access Log should record these operations so that users of the atServer can retrieve various statistics such as the most visited atSign or most visited keys.

An atServer should provide a way to compact the Access Log based on time and size.


### 4. Notification Log

An atServer should record any notifications that have been received and sent. Please check the `notify` verb specification for details on how a notification should be sent.

An atServer should provide a way to compact the Notification Log based on time and size.

## Standard Keys

An atServer should have the following standard keys: 

| Key | Description |
|-----|-------------|
| public:publickey@ | Public key used by other atSigns for encryption. |
| public:signing_publickey@ | Public key used on a pol handler to a verify a signed challenge. | 
| @signing_privatekey@ | Private key used to sign a challenge on a pol request. |
| :shared_key@ | Symmetric key used to encrypt/decrypt self atSign data. |

## Configuration Parameters

An atserver should honor the following configuration parameters. 

| Key | Valid Values | Description |
|-----|--------------|-------------|
| autoNotify | true/false | If set to true, an atServer should automatically notify another atSign user when a key has been shared with them. Please refer to the `notify` verb spec for details. |
| bufferLimit | Number of bytes | Maximum size of a value for a key that can be transferred to an atServer |
| inbound_max_limit | An Integer | Maximum number of inbound connections that an atServer can accept |
| outbound_max_limit | An Integer | Maximum number of outbound connections that an atServer can make to another atServer | 
| inbound_idle_time_millis | Time in milliseconds | Maximum time the inbound connection can active |
| outbound_idle_time_millis | Time in milliseconds | Maximum time the outbound connection can be active. |

## Block List

A user of the atServer should be able to decide who is allowed to connect to their atServer. The `config` verb should be used to configure this. Once added, an atServer should honor the list at the time of accepting new connections from an atSign user using the `from` verb.

## Verbs

Verbs are commands you can execute on an atServer. Each verb interacts with the atServer in a different way. Some are for authentication, some are for data retrieval and some are for data manipulation. See the table below for more insight on which verb to use for what purpose.

| Verb | Purpose |
| ---- | ------- |
| `from` | Authentication |
| `cram` | Client Authentication |
| `pkam` | Client Authentication |
| `pol`  | atServer Authentication |
| `scan` | Data retrieval |
| `lookup` | Data retrieval |
| `plookup` | Data retrieval |
| `llookup` | Data retrieval |
| `update` | Data manipulation |
| `update:meta` | Data manipulation |
| `delete` | Data manipulation |
| `stats` | Misc |
| `sync` | Data synchronization |
| `notify` | Notifications |
| `monitor` | Notifications |

### The `from` verb

**Synopsis:**

The `from` verb is used to tell an atServer whom you claim to be. 

Following regex represents the syntax of the `from` verb:

`r'^from:(?<@sign>@?[^@\s]+$)'`

**Example**:

Telling the atServer that you are claiming to be `@bob`.

`from:@bob`

**Response**:

If the user who is trying to connect is the owner of the atServer, then the `from` verb should respond with the following response.

`data:<sessionId@sign:uuid>`

If the user who is trying to connect is not the owner of the atServer, then the `from` verb should respond with the following response.

`proof:<sessionId>@<@sign>:<UUID>`

If the user is not allowed to connect to the atServer, then it should respond back with the following error and close the connection to the server.

`error:AT0013-Connection Exception`

**Description:**

The `from` verb is used to tell the atServer what atSign you claim to be. With the `from` verb, one can connect to one's own atServer or someone else's atServer. In both cases, the atServer responds back with a challenge to prove that you are who you claim to be. This is part of the authentication mechanism of the atProtocol.

This authentication mechanism varies based on whether you are connecting to your own atServer (cram/pkam) or someone else's atServer (pol).

**Options:**

`<atSign>` Required: Yes. atSign  with which you are connecting to an atServer

### The `cram` verb

**Synopsis:**

The `cram` verb is used to bootstrap authenticate one's own client as the owner of an atServer. It is intended to be used once until a set of PKI keys are cut on the owner's mobile device and from then on we use the `pkam` verb.

The following regex represents the syntax of the `cram` verb:

`r'^cram:(?<digest>.+$)'`

**Example:**

`cram:<digest>`

**Response:**

If the user gets the challenge right, the prompt should change to the atSign of the user.

`<atSign>@`

If the user gets the cram authentication wrong, then it should respond back with the following error and close the connection to the server.

`error:AT0401-Client authentication failed`

**Description:**

The `cram` verb follows the `from` verb. As an owner of the atServer, you should be able to take the challenge thrown by the `from` verb and encrypt using the shared key that the server has been bound with. Upon receiving the `cram` verb along with the digest, the server decrypts the digest using the shared key and matches it with the challenge. If they are the same, then you can connect to the atServer and change the prompt to your atSign.

**Options:**

`<digest>` Required: Yes. Description: Encrypted challenge

### The `pkam` verb

**Synopsis:**

The `pkam` verb is used to authenticate one's own client as an owner of an atServer using a PKI style authentication.

Following regex represents the syntax of the `pkam` verb:

`^pkam:(?<signature>.+$)`

**Example:**

`pkam:<digest>`

**Response:**

If the user gets the challenge right, the prompt should change to the atSign of the user.

`<@sign>@`

If the user gets the pkam authentication wrong, then it should respond back with the following error and close the connection to the server.

`error:AT0401-Client authentication failed`

**Description:**

The `pkam` verb follows the `from` verb. As an owner of the atServer, you should be able to take the challenge thrown by the `from` verb and encrypt using the private key of the RSA key pair with what the server has been bound with. Upon receiving the `cram` verb along with the digest, the server decrypts the digest using the public key and matches it with the challenge. If they are the same then the atServer lets you connect and changes the prompt to your atSign.

**Options:**

`<digest>` Required: Yes. Description: Encrypted challenge

### The `pol` verb

**Synopsis**:

The `pol` verb is part of the `pkam` process to authenticate oneself (as an atServer) while connecting to someone else's atServer. The term 'pol' means 'proof of life' as it provides a near realtime assurance that the requestor is who it claims to be.

Following regex represents the syntax of the `pol` verb:

`r'^pol$'`

**Example:**

`pol`

**Response:**:

If the user gets the challenge right the prompt should change to the atSign of the user.

`<@sign>@`

If the user gets the cram authentication wrong, then it should respond back with the following error and close the connection to the server.

`error:AT0401-Client authentication failed`

**Description:**

The `pol` verb follows the `from` verb. 'pol' indicates another atServer that the user who is trying to connect is ready to authenticate himself. For example, if @bob is trying to connect to @alice, @bob would take the key and value from the proof response of the verb and create a public key and value which then can be looked up by @alice. After @alice looks up @bob's atServer, @alice's atServer should change the prompt to @bob.

**Options:**

NA

### The `scan` verb

**Synopsis:**

The scan verb is used to see the keys in an atSign's atServer. 
Following regex represents the syntax of the `scan` verb:
```r'^scan$|scan(:showhidden:(?<showhidden>true|false))?(:(?<forAtSign>@[^:@\s]+))?(:page:(?<page>\d+))?( (?<regex>\S+))?$'```

**Example:**

View all keys in the atServer excluding hidden

`scan`

View all keys in the atServer including hidden

`scan:showhidden:true`

View all keys in the atServer filtered by a regex

`scan <regex>`

View all keys in the atServer including hidden and filtered by a regex

`scan:showhidden:true <regex>`

**Response:**

The atServer should return the keys within the atServer if the scan verb executed successfully. The atServer will respond accordingly to whether the atSign is authenticated or not.
```data:[<keys>]```

### The `lookup` verb

**Synopsis**:

The `lookup` verb should be used to lookup the value shared by another atSign user.

The following is the regex of the `lookup` verb:

`lookup:((?<operation>meta|all):)?(?<atKey>(?:[^:]).+)@(?<@sign>[^@\s]+)$`

**Example:**

Look up the value of the key `@<you>:phone@alice` (the key is created and shared by @alice and lives on their atServer where the key is intentionally shared with you). 

`lookup:phone@alice`

Look up the metadata of the key `@<you>:phone@alice` (key shared by @alice and shared with you).

`lookup:meta:phone@alice`

Look up both the value and the metadata of the key `@<you>:phone@alice` (key shared by @alice and shared with you).

`lookup:all:phone@alice`

**Response**:

If the operation is not specified the atServer should just respond back with the value saved by the user as is.

`data:<value>`

If the operation is to lookup the metadata only then the result should be wrapped in a JSON in the following format:

`data:<Metadata in a JSON>`

**Example**:

```json
data: 
{
    "createdBy":"@bob",
    "updatedBy":"@bob",
    "createdAt":"2020-10-21 09:46:48.982Z",
    "updatedAt":"2020-10-21 09:46:48.982Z",
    "availableAt":"null",
    "expiresAt":"null",
    "refreshAt":"2020-10-21 09:46:58.982Z",
    "status":"active",
    "version":0,
    "ttl":null,
    "ttb":null,
    "ttr":10000,
    "ccd":false,
    "isBinary":false,
    "isEncrypted":false
 }
```

If the operation is to lookup the metadata and the data together, then the result should be wrapped in a JSON in the following format:

`data:<Value and Metadata in a JSON>`

**Example:**

```json
data:
{
	"key":"@alice:country@bob",
	"data":"USA",
	"metaData":
	{
	 "createdBy":"@bob",
       "updatedBy":"@bob",
       "createdAt":"2020-10-21 09:46:48.982Z",
       "updatedAt":"2020-10-21 09:46:48.982Z",
       "availableAt":"null",
       "expiresAt":"null",
       "refreshAt":"2020-10-21 09:46:58.982Z",
       "status":"active",
       "version":0,
       "ttl":null,
       "ttb":null,
       "ttr":10000,
       "ccd":false,
       "isBinary":false,
       "isEncrypted":false
     }
}
```

If the other atServer on which the lookup needs to be performed is down then the atServer should return the following error and keep the connection alive.

`error:AT0007-atServer not found.`

If the lookup command is not valid, then the atServer should return the following error and close the connection:

`error:AT0003-Invalid Syntax`

For whatever reasons, If the handshake with another atServer fails, then the atServer should return the following error:

`data:AT0008-Handshake failure`

**Description:**

The `lookup` verb should be used to fetch the value of the key shared by another atSign user. If there is a public and user key with the same name then the result should be based on whether the user is trying to lookup is authenticated or not. If the user is authenticated then the user key has to be returned, otherwise the public key has to be returned.

### The `plookup` verb

**Synopsis:**

The `plookup` verb enables to lookup the value of the public key shared by another atSign user.

Following is the regex of the `plookup` verb:

`^plookup:((?<operation>meta|all):)?(?<atKey>[^@\s]+)@(?<@sign>[^@\s]+)$`

**Example:**
    
Look up the value of the key `public:publickey@alice` (the key is created and shared by @alice and lives on their atServer where the key is public).

`plookup:publickey@alice`

Look up the metadata of the public key

`plookup:meta:publickey@alice`

Look up both the value and the metadata of the public key

`plookup:all:publickey@alice`

Look up the value and metadata of the public key while bypassing the cache (i.e. the value will be fetched directly from the atServer instead of first checking for a cached key on your secondary).

`plookup:bypassCache:true:all:publickey@alice`

**Response:**

The atServer should return the value or metadata or the value and metadata together based on the option specified.

The response structure should be exactly the same as the `lookup` verb.

If the other atServer on which the `lookup` needs to be performed is not available, then the atServer should return the following error and keep the connection alive.

`error:AT0007-atServer not found.`

If the `lookup` command is not valid, then the atServer should return the following error and close the connection:

`error:AT0003-Invalid Syntax`

### The `llookup` verb

**Synopsis:**

The `llookup` verb should be used to look up one's own atServer and this should return the value as is (i.e. without any resolution).

The following is the regex of the `llookup` verb:

`^llookup:((?<operation>meta|all):)?(?:cached:)?((?:public:)|(@(?<for@sign>[^@:\s]-):))?(?<atKey>[^:]((?!:{2})[^@])+)@(?<@sign>[^@\s]+)$`

**Example:**

Lookup the value of a public key that lives on your atServer

`llookup:public:publickey@<you>`

Lookup both the value and the metadata of a self key that lives on your atServer

`llookup:all:phone@<you>`

Lookup both the value and the metadata of a shared key (that is shared with @alice and created by @<you>)

`llookup:all:@alice:phone@<you>`

**Response:**

The atServer should return the value or metadata or the value and metadata together based on the option specified.

The response structure should be exactly the same as the `lookup` verb.

If the other atServer on which the lookup needs to be performed is down then the atServer should return the following error and keep the connection alive.

`error:AT0007-atServer not found.`

If the lookup command is not valid, then the atServer should return the following error and close the connection:

`error:AT0003-Invalid Syntax`

**Description:**

The `llookup` verb should be used to fetch the value of the key in the owner's atServer store as is without resolving it. For example if a key contains a reference as a value, the `lookup` verb should resolve it to a value whereas `llookup` should return the value as is.

**Example:**

If `phone@bob` is "1234" and `altphone@bob` is "atsign://phone@bob", then `lookup` of `altphone@bob` should return "1234" where as `llookup` of `altphone@bob` should return "atsign://phone@bob".

### The `update` verb

**Synopsis:**

The `update` verb is used to insert key/value pairs into a Key Store. An update can only be run by the owner of an atServer on his/her own atServer.

Following regex represents the syntax of the `update` verb:

`r'^update:(?:ttl:(?<ttl>\d+):)?(?:ttb:(?<ttb>\d+):)?(?:ttr:(?<ttr>(-?)\d+):)?(ccd:(?<ccd>true|false):)?((?:public:)|(@(?<for@sign>[^@:\s]-):))?(?<atKey>[^:@]((?!:{2})[^@])+)(?:@(?<@sign>[^@\s]-))? (?<value>.+$)'`

**Example:**

Put a key/value pair into the atServer with key `location@bob` and value `bob's location value`.
This operation will create a new key if it does not already exist. If it already exists, it will overwrite the existing value.

`update:location@bob bob's location value`

Put a key/value pair into the atServer with key `location@bob` and value `bob's location value but key expires in 10 minutes`. The time to live of this key is 10 minutes.

`update:ttl:600000:location@bob bob's location value but key expires in 10 minutes`

Put a shared key/value pair into the atServer with key `@alice:phone@bob` (shared with @alice and shared by @bob) with value `bob's phone number shared to @alice`.

`update:@alice:phone@bob bob's phone number shared to @alice`

**Response:**

The atServer should return the commit id from Commit Log if the update is successful.

`data:<CommitId>`

If the user provides the invalid update command, then it should respond with the following error and close the connection to the server

`error:AT0003-Invalid Syntax`

**Description:**

The `update` verb should be used to perform create/update operations on the atServer. The `update` verb requires the owner of the atServer to authenticate himself/herself to the atServer using `from` and `cram` verbs.

If a key has been created for another atSign user, the atServer should honor "autoNotify" configuration parameter.

**Options:**

`<ttl>` Required: No. Description: Time to live in milliseconds.

`<ttb>` Required: No. Description: Time to birth in milliseconds.

`<ttr>` Required: No. Description: Time to refresh in milliseconds.

> -1 is a valid value which indicates that the user with whom the key has been shared can keep it forever and the value for this key won't change forever.

`<ccd>` Required: No. Description: A value of "true" indicates that the cached key needs to be deleted when the atSign user who has originally shared it deletes it.

`<for@sign>` Required: Yes, (Not required when the key is a public key). Description: atSign of the user with whom the key has been shared.

`<@sign>` Required: Yes. Description: atSign of the owner.

`<value>` Required: Yes. Description: Value for the key.

### The `update:meta` verb

**Synopsis:**

The `update:meta` verb should be used to update the metadata of a key atSign user without having to send or save the value again.

Following is the regex for the `update:meta` verb

`^update:meta:((?:public:)|((?<forAtSign>@?[^@\s]-):))?(?<atKey>((?!:{2})[^@])+)@(?<atSign>[^@:\s]-)(:ttl:(?<ttl>\d+))?(:ttb:(?<ttb>\d+))?(:ttr:(?<ttr>\d+))?(:ccd:(?<ccd>true|false))?(:isBinary:(?<isBinary>true|false))?(:isEncrypted:(?<isEncrypted>true|false))?$`

**Example:**

Update the metadata of key `phone@bob` setting `isBinary:true` while keeping all other metadata as it is.

`update:meta:phone@bob:isBinary:true`

Update the metadata of the shared key `@alicephone@bob` (shared with @alice & shared by @bob) setting `ttl:600000`, setting `isBinary:true` and `isEncrypted:true` while keeping all other metadata as it is.

`update:meta:@alice:phone@bob:ttl:600000:isBinary:true:isEncrypted:true`

**Response:**

The atServer should return the commit id from Commit Log if the update is successful.

`data:<CommitId>`

If the user provides the invalid update meta command, then it should respond with the following error and close the connection to the atServer.

`error:AT0003-Invalid Syntax`

**Description:**

The `update:meta` verb should be used to perform create/update operations on the atServer. The `update:meta` verb requires the owner of the atServer to authenticate himself/herself to the atServer using `from` and `cram` verbs.

The atServer should allow creation of keys with null values. If a key has been created for another atSign user, the atServer should honor "autoNotify" configuration parameter.

**Options:**:

`<ttl>` Required: No. Description: Time to live in milliseconds

`<ttb>` Required: No. Description: Time to birth in milliseconds

`<ttr>` Required: No. Description: Time to refresh in milliseconds

> -1 is a valid value which indicates that the user with whom the key has been shared can keep it forever and the value for this key won't change forever

`<ccd>` Required: No. Description: A value of "true" indicates that the cached key needs to be deleted when the atSign user who has originally shared it, deletes it.

`<for@sign>` Required: Yes (Not required when the key is a public key). Description: atSign of the user with whom the key has been shared.

`<@sign>` Required: Yes. Description: atSign of the owner.

### The `delete` verb

**Synopsis:**

The `delete` verb should be used to delete a key from the key store. Only the authenticated owner of the atServer can delete keys that they created.

**Example:**

Delete a key (that you created) from your atServer. 

`delete:phone@<you>`

**Response:**

The atServer returns the commit id of the operation. Note: no information about the key (if it was deleted or if it ever existed in the first place) is given.

`data:1234`

### The `stats` verb

**Synopsis:**

The `stats` verb should be used to get the statistics of an atSign.

Following is the regex of the `stats` verb

`stats(?<statId>:((?!0)\d+)?(,(\d+))-)?`

**Response:**

if the user gives stats all the statistics will be returned as JSON. Following statistics are provided:

1. `activeInboundConnections`
2. `activeOutboundConnections`
3. `lastCommitId`
4. `secondaryStorageSize`
5. `topAtSigns`
6. `topKeys`

**Example:**

`data: [{"id":"1","name":"activeInboundConnections","value":"1"}, {"id":"2","name":"activeOutboundConnections","value":"0"}, {"id":"3","name":"lastCommitID","value":"1"}, {"id":"4","name":"secondaryStorageSize","value":12560}, {"id":"5","name":"topAtSigns","value":{"@bob":1}}, {"id":"6","name":"topKeys","value":{"publickey@alice":1}}]`

Individual statistics can be retrieved using the respective Id.

```
@alice@stats:1
data: [{"id":"1","name":"activeInboundConnections","value":"1"}]
```

### The `sync` verb

The `sync` verb enables to synchronize the keys between the local atServer and remote atServer.

Following is the regex:

`sync:(?<from_commit_seq>[0-9]+$|-1)`

**Response:**

The `sync` verb returns a json array of the commit entries from the given commit id to the current commit id. Further, the `sync` verb accepts -1 as argument which returns all the commit entries.

```
data:[{"atKey":"@bob:phone@alice","operation":"+","opTime":"2020-10-26 11:57:43.732","commitId":0,"value":"12345","metadata":{"ttr":"36000000","ccd":"false"}},
{"atKey":"@bob:shared_key@alice","operation":"-","opTime":"2020-10-26 09:44:54.382219Z","commitId":1}]
```

### The `notify` verb

**Synopsis:**

The `notify` verb enables us to notify the atSign user of some data event.

The following is the regex for the `notify` verb

```
notify:((?<operation>update|delete):)?(messageType:(?<messageType>key|text):)?(priority:(?<priority>low|medium|high):)?(strategy:(?<strategy>all|latest):)?(latestN:(?<latestN>\d+):)?(notifier:(?<notifier>[^\s:]+):)?(ttln:(?<ttln>\d+):)?(ttl:(?<ttl>\d+):)?(ttb:(?<ttb>\d+):)?(ttr:(?<ttr>(-)?\d+):)?(ccd:(?<ccd>true|false):)?(@(?<forAtSign>[^@:\s]*)):(?<atKey>[^:@]((?!:{2})[^@])+)(@(?<atSign>[^@:\s]+))?(:(?<value>.+))?$
```

**Example:**

Notify `@alice` that you have a shared key `@alice:test@<you>` with an updated value waiting for them to lookup.

`notify:update:@alice:test@<you>`

Notify `@alice` that you have a shared key `@alice:test@<you>` that was deleted.

`notify:delete:@alice:test@<you>`

Notify `@alice` with a message `my sample message to bob`.

`notify:messageType:text:@<you>:my sample message to bob`

**Response:**

When a key is notified successfully, returns

`data:<notificationId>`

where the notificationId is the id of the sent notification.

**Description:**

When an atSign user notifies the key to another atSign user, an entry has to be created in received notifications list on the user who has shared the key and an entry has to be created in sent notifications list on the user to whom the key is to be notified. When auto notify is set to true, when a key is created/updated and deleted notification is triggered to another atSign user.

#### Notify List

**Synopsis:**

Notify list returns a list of notifications.

The following is the regex

`notify:(list (?<regex>.-)|list$)`

**Example:**

List all notifications that you have received.

`notify:list`

**Response:**

If the user is the owner, returns a list of received notifications. If a user is pol authenticated user, returns a list of sent notifications

`data:[{"id":"0e5e9e89-c9cb-423b-8972-8c5487215990","from":"@alice","to":"@bob","key":"@bob:phone@alice","value":12345,"operation":"update","epochMillis":1603714122636}]`

#### Notify Remove

**Synopsis:**

Notify remove removes a notification from the notification log.

The following is the regex

`notify:(remove:(?<notificationId>[^:]+$))`

**Example:**

Remove a notification that you received that has id `0e5e9e89-c9cb-423b-8972-8c5487215990`.

`notify:remove:0e5e9e89-c9cb-423b-8972-8c5487215990`

**Response:**

If successful, returns

`data:success`

#### Notify Status

**Synopsis:**

Notify status returns the status of a notification that was sent to another atSign user.

The following is the regex

`notify:(status:(?<notificationId>[^:]+$))`

**Example::**

Check the status of the notification that you sent with id `0e5e9e89-c9cb-423b-8972-8c5487215990`.

`notify:status:0e5e9e89-c9cb-423b-8972-8c5487215990`

**Response:**

Returns the status of the notification

`data:delivered`

`data:undelivered`

### The `monitor` verb

**Synopsis:**

The `monitor` verb streams received notifications.

The following is the regex

`^monitor$|^monitor ?(?<regex>.-)?)$`

**Example:**

Start monitoring all notifications in this current session.

`monitor`

**Response:**

Returns a stream of notifications

```
@alice@monitor
notification: {"id":"773e226d-dac2-4269-b1ee-64d7ce93a42f","from":"@bob","to":"@alice","key":"@alice:phone@bob","value":null,"operation":"update","epochMillis":1603714720965}
```

**Description:**

The `monitor` verb accepts an optional parameter to filter the notifications by passing filter criteria as regex to `monitor` verb.

## Error Codes

| Error Code | Error Message | Description |
|------------|---------------|-------------|
| AT0001 | Server exception | Exception occurs when there is an issue while starting the server. |
| AT0002 | Datastore exception | Exception occurs during keystore operations (GET/PUT/DELETE). |
| AT0003 | Invalid syntax | Exception occurs if we give any invalid command to the server. |
| AT0004 | Socket error | Exception occurs when socket connection to an atServer cannot be established. |
| AT0005 | Buffer limit exceeded | This exception occurs when input/output message size reaches the maximum limit configured in the server. |
| AT0008 | Handshake failure | this exception is for any exception during the handshake process of two secondaries. | 
| AT0009 | Unauthorized client in the request | Occurs when an unsuccessful handshake happens between two secondaries. |
| AT0010 | Internal server error | This is for any server related errors. |
| AT0011 | Internal server exception | This exception is used for any server related exceptions. |
| AT0012 | Inbound connection limit exceeded | This exception will occur when the number of active clients reaches the maximum limit configured. |
| AT0401 | Client authentication failed | This exception occurs when client authentication fails or client tries to execute any verb which needs authentication before successful authentication. |
| AT0013 | Connection exception | This will occur when a blocked user tries to connect to the secondary. |
| AT0014 | Unknown AtClient exception | This exception will be thrown while performing any operations (GET/UPDATE/DELETE) using atClient SDK. |
| AT0015 | Key not found | This exception will be thrown when the key is not available for encryption/decryption. |
| AT0021 | Unable to connect to secondary | This exception will occur when we are unable to connect to secondary. |
