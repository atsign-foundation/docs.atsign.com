---
layout: codelab

title: 'Pre-requisites' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 2 # Ordering of the steps
---

* Registered @sign(s) to setup
* A No-IP account
* A Fully Qualified Domain Name (FQDN)
* Raspberry Pi (model 3B+ used for this tutorial)


#### 1. Registering your @sign

This topic is already well documented. Please follow the guidance of Our FAQs and register via [the registrar site](https://atsign.com/get-an-sign/).

#### 2. Check if your IP address is static or dynamic
 
In case it is static, you can skip the rest of this step. Otherwise, if you have a dynamic address, keep reading:


You will need to setup an account on a Dynamic DNS (DDNS) service. Dynamic DNS are a service which allows us to associate our public IP address to a domain. 
In this case, we will use it to be able to reach our home IP address in a simpler way (eg: instead of connecting to '203.0.113.206', we can connect to 'example.ddns.com').

We will use No-IP service for this tutorial. Firstly, you need to sign up for an account:

{{< image type="page" src="noip-signup.jpg">}}

You can check the 'Create my hostname later' box, as we will also configure it.


Click on 'Free Sign Up' button:
{{< image type="page" src="free-signup.jpg">}}


Now you will need to activate your account via email:
{{< image type="page" src="noip-activate.jpg">}}


After that, navigate again to https://my.noip.com/ and select No-IP Hostnames:
{{< image type="page" src="noip-hostnames.jpg">}}



Click on 'Create a Hostname'. Choose a Hostname you like, and one of the free options in de Domain menu. Leave the 'Record Type' on 'DNS Host (A)' and the IPv4 Address field empty, and click on 'Create Hostname':
{{< image type="page" src="hostnamecreated.jpg">}}

We will end the No-IP configuration later.

#### 3. Register your own fully qualified domain name (FQDN) 

This step can be performed at a variety of sites, all with different pricing models. You can use sites like [Go Daddy](http://www.godaddy.com/), [Namecheap](https://www.namecheap.com/), and many others. The following configuration has been done in Cloudflare:
On the DNS panel, click on 'Add record':
{{< image type="page" src="addrecord.jpg">}}

And create a CNAME record which points to your No-IP Hostname:
{{< image type="page" src="cname.jpg">}}

We can now go to the next steps.