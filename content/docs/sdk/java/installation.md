---
layout: codelab

title: Installation # Title of the codelab
lead: Getting your development environment ready
description: Check Installation requirements, Cloning the Client, Compile at_java as dependancy using JAR

doneLink: /sdk/java/ # Where to send them if they press "Done" at the end of the Codelab
exitLink: /sdk/java/ # Where to send them to if they press "Exit Codelab"
order: 2
---

## Requirements

There are two requirements for developing with `at_java` on your machine.

1. [Java 8](https://www.java.com/en/download/) or higher
2. [Maven](https://maven.apache.org/download.cgi)
3. A code editor, see [getting started with Java](/start/java/)


## Compile JAR

If you'd like to use at_java as a dependency, you can compile `at_java` into a JAR by following the instructions below:
1. `cd at_client` to be in the at_client directory.
2. `mvn install`
3. JAR file created in `target/` named similarly to `client-1.0-SNAPSHOT.jar`
4. If you run into dependency issues, you may need to add the dependencies used by the `at_java`. Look in `at_client/pom.xml` and copy everything within the `<dependencies></dependencies>` tags and paste that in your `pom.xml` that you have in your Java project.

## Maven Dependency

Under construction

## Cloning the Client

If you'd like to make contributions or edit the client yourself, make a form of the repository by heading to the [repository](https://github.com/atsign-foundation/at_java) and clicking "[Fork](https://github.com/atsign-foundation/at_java/fork)" to fork the repository on your own GitHub account.

Once forked, you can make changes to your own fork version of the repository.

Get it on your local machine by doing the following (`.` is the directory you want to clone the repository in; in this case, we are cloning it in our current directory so be sure to `cd` into the directory you want the repository in):

```git
git clone https://github.com/<YOUR_GITHUB_USERNAME>/at_java.git .
```


