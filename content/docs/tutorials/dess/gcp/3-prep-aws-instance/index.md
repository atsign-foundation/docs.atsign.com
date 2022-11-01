---
layout: codelab

title: 'Preparing GCP Instance' # Step Name
description: | # SEO Description for this step
  Preparing GCP instance for setting up private dess

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 3 # Ordering of the steps
---

Now since I am new to GCP the easiest way to start using it is with prebuild solutions. This way you will deploy small system which is more then capable of handling dess at pre-set price.

We can use pre-build “Ubuntu 20”. In Search bar look for Ubuntu20

{{< image type="page" src="gcp-search-ubuntu20.png" >}}

🔴 Make sure to use “Ubuntu 20” and not “Hardened Ubuntu 20”. Although the Hardened version will work as well it requires additional manual steps to make work.🔴​

This will take you to this prebuild solution overview page:

{{< image type="page" src="gcp-ubuntu20.png" >}}

Select launch

{{< image type="page" src="gcp-ubuntu20-api-enable.png" >}}

And press enable all required API’s

{{< image type="page" src="gcp-ubuntu20-api-enabled.png" >}}

Once all API’s are activated you are taken to configuration page:

{{< image type="page" src="gcp-ubuntu20-type_639438254319893625_hu21af1f6861cfb63553e9503644e91cae_0_600x0_resize_box_3.png" >}}

Prices are based on region and power of selected Virtual Machine (VM). To cost optimize you can select US region / N1 / g1-small at cost of $15/Month.

Next up is boot disk which we can leave as is.

{{< image type="page" src="gcp-ubuntu20-disk.png" >}}

This will deploy your Ubuntu 20.04 virtual machine.

{{< image type="page" src="gcp-ubuntu20-confirmation.png" >}}