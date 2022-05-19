---
layout: codelab

title: 'Preparing your instance for network access' # Step Name
description: | # SEO Description for this step
  Documentation

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---


#### a) Assignment of Static IP 
Next up our list of activities is providing our instance with static IP and linking our domain to it.

GCP assigned ephemeral IP address to our newly created VM. We need to change it to static IP.

In search bar look for ```External IP addresses```.

![gcp-search-networking](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-networking.png?raw=true)

You should see your external IP address assigned to your VM


![gcp-networking-overview](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-overview.png?raw=true)

In column Type select ephemeral and change it to Static


![gcp-networking-type](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-type.png?raw=true)

Give your static IP name and some description.


![gcp-networking-static](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-static.png?raw=true)

Type should now say Static


![gcp-networking-type-change](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-type-change.png?raw=true)

#### b) Assignment of Domain name to your static IP 
Next step is to point your domain to your virtual machine running dess.

Search for ```Cloud DNS```


![gcp-search-dns](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-dns.png?raw=true)

Open zone you have created in step 3.b Create Cloud DNS zone


![gcp-dns-status](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-status.png?raw=true)

We now need to link A type record to your domain linking it to IP address of your Virtual machine.

This is done simply press “Add record set”


![gcp-dns-add-record](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-add-record.png?raw=true)

Select Resource record type “A” and IPv4 address the address of your dess virtual machine.


![gcp-dns-a](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-a.png?raw=true)

If everything goes well you should see following in your domain dashboard:


![gcp-dns-status-final](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-status-final.png?raw=true)

Next step is to update Google Name servers. You can follow Googles guide - step 5.

https://cloud.google.com/dns/docs/tutorials/create-domain-tutorial#register-domain

To test if you are successful open command line and ping your domain. You should see your instance static IP address.


![gcp-dns-test](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-dns-test.png?raw=true)

At this point we have created DNS record we will use to link our dess, we created instance name which will be running our dess and we have opened port range which is exposed to the internet and we can communicate with @sign root server and our apps with.

#### c) Setting up Firewall 
Search for Firewall in search bar.


![gcp-search-firewall](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-search-firewall.png?raw=true)

Click on Create firewall rule


![gcp-firewall-create](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-firewall-create.png?raw=true)

Lets create firewall rule that will enable the @sign root server communicate with our dess.


![gcp-networking-firewall-settings](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-firewall-settings.png?raw=true)

Important things to note:

Ingress translates to incoming traffic.

Selecting IP range as ```0.0.0.0/0``` will allow traffic from anywhere on the internet.

For my use case I will enable port range ```8000 – 8010``` allowing me to register up to 10 @signs.


![gcp-firewall-ranges](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-firewall-ranges.png?raw=true)

Press ```create``` and validate that your new rule appears in list of firewall rules.


![gcp-ubuntu20-confirmation](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-firewall-status.png?raw=true)

Second we need to create firewall rule that will enable your dess server to communicate with certification authority.


![gcp-networking-firewall-80](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-firewall-80.png?raw=true)

Important things to note:

Ingress translates to incoming traffic.

Selecting IP range as ```0.0.0.0/0``` will allow traffic from anywhere on the internet.

You need to enable port ```80``` for communication with Certification authority.


![gcp-networking-firewall-range-80](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-networking-firewall-range-80.png?raw=true)

Press ```create``` and validate that your new rule appears in list of firewall rules.


![gcp-firewall-status](https://github.com/atsign-foundation/atsign.dev/blob/trunk/content/en/docs/Archives/guides/dess-setup/dess-gcp/images/gcp-firewall-status.png?raw=true)