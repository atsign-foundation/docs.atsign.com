---
layout: codelab

title: 'Preparing GCP Instance' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

Now since I am new to GCP the easiest way to start using it is with prebuild solutions. This way you will deploy small system which is more then capable of handling dess at pre-set price.

We can use pre-build “Ubuntu 20”. In Search bar look for Ubuntu20

![gcp-search-ubuntu20](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-ubuntu20.png?raw=true)

🔴 Make sure to use “Ubuntu 20” and not “Hardened Ubuntu 20”. Although the Hardened version will work as well it requires additional manual steps to make work.🔴

​

This will take you to this prebuild solution overview page:


![gcp-ubuntu20](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-ubuntu20.png?raw=true)

Select launch


![gcp-ubuntu20-api-enable](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-ubuntu20-api-enable.png?raw=true)

And press enable all required API’s


![gcp-ubuntu20-api-enabled](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-ubuntu20-api-enabled.png?raw=true)

Once all API’s are activated you are taken to configuration page:


![gcp-ubuntu20-type](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-ubuntu20-type.png?raw=true)

Prices are based on region and power of selected Virtual Machine (VM). To cost optimize you can select US region / N1 / g1-small at cost of $15/Month.

Next up is boot disk which we can leave as is.


![gcp-ubuntu20-disk](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-ubuntu20-disk.png?raw=true)

This will deploy your Ubuntu 20.04 virtual machine.


![gcp-ubuntu20-confirmation](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-ubuntu20-confirmation.png?raw=true)