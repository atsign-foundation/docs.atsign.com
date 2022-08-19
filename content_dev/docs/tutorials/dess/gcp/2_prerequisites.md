---
layout: codelab

title: 'Pre-requisites' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

* Register Atsign at [atsign.com](http://atsign.com)
* Have google account
* Have registered Fully Qualified Domain Name (FQDN)

#### 1. Registering your atSign

This topic is already well documented. Please follow the guidance of Our [FAQs](https://atsign.com/faqs/) and register via [the registrar site](https://atsign.com/get-an-sign/).

#### 2. Sign-up for GCP account



#### a) Account Creation 

If you are new to cloud like me and need to create new GCP account, I have good news! The creation is for free. As promotion all new customer will also receive 300$ as credit. That is more than enough to run multiple dess’s for 3 months of offer validity.

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-discount.png?raw=true)

You can register with your gmail account or create new one by clicking “Get started for free” and follow instructions to register

![image](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-get-started.png?raw=true)

Once done with registration you will be able to login to your [console.cloud.google.com](https://console.cloud.google.com/) And voila you have your GCP account up and running.

#### b) Setting up billing

To be able to run some services you have to maintain billing account. Navigation Menu -> Billing

![gcp-navigation-billing](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-navigation-billing.png?raw=true)

By default GCP creates “My Billing Account” which you can link to your project.

![gcp-navigation-billing](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-billing_project.png?raw=true)

Click “Link Billing account” and select “My billing account” from drop down

🔴 Its important to note that this account holds your 300$ free credits! 🔴

We are all setup and ready to go deploy!

#### 3. Register your own fully qualified domain name (FQDN)

This step can be performed at range of different sites with different pricing models. You can use sites like [godaddy.com](http://www.godaddy.com); [namecheap.com](https://www.namecheap.com/); and many others. Since we have GCP account we can use it to register our domain through Cloud Domain.

#### a) Register domain name with GCP.

In your GCP console search for ```Cloud Domain```.

![gcp-search-domain](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-domain.png?raw=true)

We first need to enable this service.

![gcp-domain-api](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-api.png?raw=true)

Once the service activates you will be presented with its dashboard.

Lets register our fully qualified domain name (FQDN) that will be used for registration of our dess.

Click on “Register Domain” and look for suitable name.

![gcp-domain-register](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-register.png?raw=true)

Reviewing pricing options of GCP .pw is their cheapest option which will work for testing. For my test case I am selecting atsign.pw with price $0.75 / month by clicking add to cart button and continue.

![gcp-domain-lookup](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-lookup.png?raw=true)

Next we can select where will our DNS record be hosted. Simply select “Use Google Domains” and DNSSEC “Enabled” and click continue.

![gcp-domain-config](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-config.png?raw=true)

We have no options with Privacy protection so simply click continue.

![gcp-domain-privacy](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-privacy.png?raw=true)

Fill out contact details and click register. This will trigger registration email you will have to verify.

![gcp-domain-contacts](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-contacts.png?raw=true)

Once you verify your email your domain should be ready to use

![gcp-domain-lookup](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-domain-lookup.png?raw=true)

#### b) Create Cloud DNS zone 

Next step is to enable Cloud DNS service. Search for DNS in search bar and select Cloud DNS

![gcp-search-dns](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-dns.png?raw=true)

If its your first time activating this service you will have to enable the API. Press enable and wait for the activation to finish.

![gcp-dns-api](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-api.png?raw=true)

Lets crate new DNS zone by clicking “Create Zone”

![gcp-dns-create](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-create.png?raw=true)

We will select zone type as Public since we will be connecting to our DNS from internet and provide your registered DNS name. In my case atsign.pw. DNSSEC will be set to off and provide some meaningful Description. Once you filled all your details press create.

![gcp-dns-create-details](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-create-details.png?raw=true)

You should receive following message:

![gcp-dns-confirm](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-confirm.png?raw=true)