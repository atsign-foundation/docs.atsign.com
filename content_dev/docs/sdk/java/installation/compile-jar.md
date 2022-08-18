---
layout: codelab

title: JAR File # Step Name
description: | # SEO Description for this step
  Compile the Java SDK into a JAR file to use as a dependency in your Java projects

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

If you'd like to use at_java as a dependency, you can compile `at_java` into a JAR by following the instructions below:
1. `cd at_client` to be in the at_client directory.
2. `mvn install`
3. JAR file created in `target/` named similarly to `client-1.0-SNAPSHOT.jar`
4. If you run into dependency issues, you may need to add the dependencies used by the `at_java`. Look in `at_client/pom.xml` and copy everything within the `<dependencies></dependencies>` tags and paste that in your `pom.xml` that you have in your Java project.
