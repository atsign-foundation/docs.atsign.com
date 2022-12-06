---
layout: codelab

title: 'Pre-requisites' # Step Name
description: | # SEO Description for this step
  Pre-requisites to setting up private dess on Google Cloud Platform (GCP)

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

* Register Atsign at [atsign.com](http://my.atsign.com/go)
* Have google account
* Have registered Fully Qualified Domain Name (FQDN)

#### 1. Registering your atSign

This topic is already well documented. Please follow the guidance of Our [FAQs](https://atsign.com/faqs/) and register via [the registrar site](https://my.atsign.com/go).

#### 2. Sign-up for GCP account



#### a) Account Creation 

If you are new to cloud like me and need to create new GCP account, I have good news! The creation is for free. As promotion all new customer will also receive 300$ as credit. That is more than enough to run multiple dess’s for 3 months of offer validity.

{{< image type="page" src="gcp-discount.png" >}}

You can register with your gmail account or create new one by clicking “Get started for free” and follow instructions to register

{{< image type="page" src="gcp-get-started_7797938325509315921.png" >}}

Once done with registration you will be able to login to your [console.cloud.google.com](https://console.cloud.google.com/) And voila you have your GCP account up and running.

#### b) Setting up billing

To be able to run some services you have to maintain billing account. Navigation Menu -> Billing

{{< image type="page" src="gcp-navigation-billing.png" >}}

By default GCP creates “My Billing Account” which you can link to your project.

{{< image type="page" src="gcp-billing_project_3792115323896866730_hu930d03d1e3771b3eb865110704a75bcb_0_600x0_resize_box_3.png" >}}

Click “Link Billing account” and select “My billing account” from drop down

🔴 Its important to note that this account holds your 300$ free credits! 🔴

We are all setup and ready to go deploy!

#### 3. Register your own fully qualified domain name (FQDN)

This step can be performed at range of different sites with different pricing models. You can use sites like [godaddy.com](http://www.godaddy.com); [namecheap.com](https://www.namecheap.com/); and many others. Since we have GCP account we can use it to register our domain through Cloud Domain.

#### a) Register domain name with GCP.

In your GCP console search for ```Cloud Domain```.

{{< image type="page" src="gcp-search-domain.png" >}}

We first need to enable this service.

{{< image type="page" src="gcp-domain-api_4756114638204601513_hu18f3dc8d8683ce87bc46bf76de500bcb_0_500x0_resize_box_3.png" >}}

Once the service activates you will be presented with its dashboard.

Lets register our fully qualified domain name (FQDN) that will be used for registration of our dess.

Click on “Register Domain” and look for suitable name.

{{< image type="page" src="gcp-domain-register_15385502001867454950_hu2cedff6dcaa13d7c794a852cdd1b9542_0_500x0_resize_box_3.png" >}}

Reviewing pricing options of GCP .pw is their cheapest option which will work for testing. For my test case I am selecting atsign.pw with price $0.75 / month by clicking add to cart button and continue.

{{< image type="page" src="gcp-domain-lookup_15750893407441542022_hub91df1b2ecf4fa27ada2e4a4a282a070_0_600x0_resize_box_3.png" >}}

Next we can select where will our DNS record be hosted. Simply select “Use Google Domains” and DNSSEC “Enabled” and click continue.

{{< image type="page" src="gcp-domain-config.png" >}}

We have no options with Privacy protection so simply click continue.

{{< image type="page" src="gcp-domain-privacy.png" >}}

Fill out contact details and click register. This will trigger registration email you will have to verify.

{{< image type="page" src="gcp-domain-contacts_3557708868624226178_hu0f8657f38db38b3b81eee3daccf01f35_0_600x0_resize_box_3.png" >}}

Once you verify your email your domain should be ready to use

{{< image type="page" src="gcp-domain-lookup_15750893407441542022_hub91df1b2ecf4fa27ada2e4a4a282a070_0_600x0_resize_box_3 (1).png" >}}

#### b) Create Cloud DNS zone 

Next step is to enable Cloud DNS service. Search for DNS in search bar and select Cloud DNS

{{< image type="page" src="gcp-search-dns_5877342956061685702.png" >}}

If its your first time activating this service you will have to enable the API. Press enable and wait for the activation to finish.

{{< image type="page" src="gcp-dns-api_2876756476555119665_hue560087b7958a7d0ffd7d15f415f2d9a_0_500x0_resize_box_3.png" >}}

Lets crate new DNS zone by clicking “Create Zone”

{{< image type="page" src="gcp-dns-create_4631853586991474287_hue04327fccca7e4dfac62e9d3c47d70d2_0_600x0_resize_box_3.png" >}}

We will select zone type as Public since we will be connecting to our DNS from internet and provide your registered DNS name. In my case atsign.pw. DNSSEC will be set to off and provide some meaningful Description. Once you filled all your details press create.

{{< image type="page" src="gcp-dns-create-details_17656337242790471658_hu2ef1ce24c09085889063ca7c59ba3568_0_600x0_resize_box_3.png" >}}

You should receive following message:

{{< image type="page" src="gcp-dns-confirm.png" >}}
