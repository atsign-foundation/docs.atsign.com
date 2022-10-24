---
layout: codelab

title: CLIs # Step Name
description: | # SEO Description for this step
  Keys in Java(different from the Dart SDK AtKeys), Prerequisite, List of CLIs

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 10 # Ordering of the steps
---

There are various CLIs (command-line interfaces) that uses the Java SDK to interact with a secondary server. 

### Prerequisite
To run the CLIs:
1. Edit settings in `at_client/src/main/resources/config.yaml`
2. cd to `at_java/at_client` and run `mvn install`
3. Run `java -cp "target/client-1.0-SNAPSHOT.jar:target/lib/*" org.atsign.client.cli.<CLI> <args>`. Replace “`<CLI>`” with one of the CLIs (Register, Get, Scan,...) and “`<args>`” with 

### List of CLIs

If you want to interact with the atProtocol through a command-line experience, see our CLIs in `src/main/java/org/atsign/client/cli/`. Note that to use some CLIs, you must have the keys in a `keys/` directory in the root project.
- Delete - delete AtKeys that you’ve shared with another atSign
- Get - get AtKeys that you’ve shared with another atSign
- Onboard - authenticate with CRAM and generate your PKI keypair
- Register - register an atSign (uses Onboard CLI)
- Scan - see what keys you have and view metadata
- Share - share an AtKey with another atSign
- REPL - use raw atProtocol

| Name | Description | Arguments |
|----------|-------------|-----------|
| Register | to claim a free atsign. Requires one-time-password received on the provided email to validate. Registers the free atsign to provided email. | email |
| Onboard  | utility which 'onboards' a new atSign. Once onboarding is complete it creates the all-important keys file. Onboard is a subset of Register | rootUrl, atSign, cramSecret |
| Share    | share something with another atSign | rootUrl, your AtSign, other AtSign, keyName to share, including namespace, keyValue to share, a string, ttr, |
| Get      | get something that was shared by another atSign | rootUrl, your AtSign, other AtSign, name of shared key, including namespace, |
| Delete   | delete something that was previously shared | rootUrl, other atSign, name of shared key including namespace |
| Scan     | for seeing what keys exist in the secondary and view metadata | rootUrl, atSign, verbose true or false, scan regex |
| REPL     | use raw atProtocol, handles PKAM auth | rootUrl, atSign, seeEncryptedNotifications true or false |
