---
layout: codelab

title: 'Pre-requisites' # Step Name
description: | # SEO Description for this step
  Pre-requisites for setting up private dess, distributed edge secondary server, using Amazon Web Services (AWS)

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

* Registered atSign(s) to setup
* An AWS account
* A Fully Qualified Domain Name (FQDN)


#### 1. Registering your atSign

This topic is already well documented. Please follow the guidance of Our FAQs and register via [the registrar site](https://my.atsign.com/go).

#### 2. Sign-up for AWS account

If you are new to AWS, signing up for an account is free! The cost of running dess is about 10$/month. You can create your account at [Amazon Web Services](https://aws.amazon.com/) and as of June 6th, 2021 there is a “free tier” available which was used during the making of this guide.

aws-free-trial

Follow the instructions on screen.

aws-sign-up

Once you are done with registration, you will be able to login to your aws console.

Make sure that you select the correct region in the top right corner.

aws-region

Select the region that is geographically closest to your location for best performance.

You are now setup on AWS and ready to prepare dess.

#### 3. Register your own fully qualified domain name (FQDN) 

This step can be performed at a variety of sites, all with different pricing models. You can use sites like [Go Daddy](http://www.godaddy.com/), [Namecheap](https://www.namecheap.com/), and many others. However, since we have AWS account, we can use it to register our domain through the Route 53 service.

In your AWS console navigate to services in top left corner and select `Route 53`.

#### a) Register domain name with AWS. 

In your AWS console search for `Route 53`.

{{< image class="bg-white contain" type="page" src="aws-route53.png" >}}

You can start looking for your domain directly from here:

{{< image class="bg-white contain" type="page" src="image-20210726083635919.png" >}}

Based on the domain name you search, AWS will give you similar options, and their pricing. As I am looking for the best deal, the .link domain seems like a good option at a cost of 5$ / year.

In my case 4atsign.link is free and I will register it by clicking “Add to cart” and continue.

{{< image type="page" src="clip_image002.jpg" >}}

Fill out DNS registration form:

{{< image type="page" src="clip_image004.jpg" >}}

Continue review details and order. At this point if all is fine you should see your domain request pending:

{{< image type="page" src="clip_image006.jpg" >}}

This can take some time so why don’t we move on to next step!
