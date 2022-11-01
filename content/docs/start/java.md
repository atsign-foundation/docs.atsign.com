---
layout: list

title: "Java" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  Get Started with Java Development on the atPlatform.

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Get started with developing atPlatform apps using Java SDK.

draft: false # Change this to "true" to hide the page
toc: true # Change this to "false" to hide the table of contents
autolinks: true # Change this to "false" to hide the automatic links below your content
weight: 2 # For list pages, higher is first.
---

## Setting Up Your Development Environment

### 1. Install Java

The first step in getting your developer environment ready, is to install [Java 8 or higher](https://www.java.com/en/download/) on your local machine.

### 2. Install Maven

Next step is to install [maven](https://maven.apache.org/install.html) and add it to your PATH. Maven is a great tool for managing Java projects and will be useful for development atPlatform applications.

### 3. Clone the Java Client

<!-- Eventually for Step 3., we'll want to either 1. tell the user to add a maven dependency to their pom.xml (which will be the at_java client), or 2. tell the user to download the JAR and add it as a dependency to their Java project. -->

Fork our `at_java` repository
Create a new directory on your local machine where you want the java client source code to live. Change directory (cd) into this directory and git clone your fork.
Git clone: `git clone <your_fork_url>` so that the source code is on your local machine. 

### 4. Build `at_java/at_client`

Compile at_java/at_client:

1. Ensure you are in the at_client directory: `cd at_java/at_client`.
2. Run `mvn install`
3. You should see `[INFO] BUILD SUCCESS`

## Registration CLI

1. Be sure you've fully [set up your development environment](/start/java/#setting-up-your-development-environment). Also ensure you've built and deployed the project by running `mvn install` under the `at_java/at_client` directory. 

2. Our next step is to run the `Register.java` CLI to register a new atSign will be onboarded and a set of .atKeys will be generated. You can do this by running:

Linux

```sh
java -cp "target/client-1.0-SNAPSHOT.jar:target/lib/*" org.atsign.client.cli.Register <email@email.com>
```

Windows

```sh 
java -cp "target/client-1.0-SNAPSHOT.jar;target/lib/*" org.atsign.client.cli.Register <email@email.com>
```

3. If successful, the output should be similar:

```
Getting free atsign
Got atsign: @64husky26
Sending one-time-password to :<email@email.com>
Got response: Sent Successfully
Enter OTP received on: <email@email.com>                                   
```

4. You will get a OTP (one-time password) in your entered email. Be sure to enter the OTP as received because it is case-sensitive. If successful, output should be similar to as follows:

```
xxxx
Validating one-time-password
Got response: Verified
```

5. IMPORTANT: There will be a newly generated .atKeys file for your new atSign in `~/.atsign/keys`. Congratulations, you've successfully registered a new atSign in the Java client. Note: The default properties in `config.yaml` point to the production environment. Your new atSign will be registered to the root that is defined in `config.yaml`

