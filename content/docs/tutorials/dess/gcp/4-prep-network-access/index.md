---
layout: codelab

title: 'Preparing your instance for network access' # Step Name
description: | # SEO Description for this step
  Preparing your GCP instance for network access to private dess

draft: false # TODO CHANGE THIS TO FALSE WHEN YOU ARE READY TO PUBLISH THE PAGE
order: 4 # Ordering of the steps
---


#### a) Assignment of Static IP 
Next up our list of activities is providing our instance with static IP and linking our domain to it.

GCP assigned ephemeral IP address to our newly created VM. We need to change it to static IP.

In search bar look for ```External IP addresses```.

{{< image type="page" src="gcp-search-networking.png" >}}

You should see your external IP address assigned to your VM

{{< image type="page" src="gcp-networking-overview.png" >}}

In column Type select ephemeral and change it to Static

{{< image type="page" src="gcp-networking-type.png" >}}

Give your static IP name and some description.

{{< image type="page" src="gcp-networking-static.png" >}}

Type should now say Static

{{< image type="page" src="gcp-networking-type-change_11898444725264210817.png" >}}

#### b) Assignment of Domain name to your static IP 
Next step is to point your domain to your virtual machine running dess.

Search for ```Cloud DNS```

{{< image type="page" src="gcp-search-dns_5877342956061685702 (1).png" >}}

Open zone you have created in step 3.b Create Cloud DNS zone

{{< image type="page" src="gcp-dns-status_13949311399888617778_hu777160ac2eab30238d467e81e083e96c_0_600x0_resize_box_3.png" >}}

We now need to link A type record to your domain linking it to IP address of your Virtual machine.

This is done simply press “Add record set”

{{< image type="page" src="gcp-dns-add-record.png" >}}

Select Resource record type “A” and IPv4 address the address of your dess virtual machine.

{{< image type="page" src="gcp-dns-a_7036237558642499768_hu9c8d495f68fe00a5c16e5655e99b47e4_0_600x0_resize_box_3.png" >}}

If everything goes well you should see following in your domain dashboard:

{{< image type="page" src="gcp-dns-status-final.png" >}}

Next step is to update Google Name servers. You can follow Googles guide - step 5.

https://cloud.google.com/dns/docs/tutorials/create-domain-tutorial#register-domain

To test if you are successful open command line and ping your domain. You should see your instance static IP address.

{{< image type="page" src="gcp-dns-test_13286747454243189752_hub927062d8ba3f5df539b7c7916074aad_0_500x0_resize_box_3.png" >}}

At this point we have created DNS record we will use to link our dess, we created instance name which will be running our dess and we have opened port range which is exposed to the internet and we can communicate with atSign root server and our apps with.

#### c) Setting up Firewall 
Search for Firewall in search bar.

{{< image type="page" src="gcp-search-firewall.png" >}}

Click on Create firewall rule

{{< image type="page" src="gcp-firewall-create.png" >}}

Lets create firewall rule that will enable the atSign root server communicate with our dess.

{{< image type="page" src="gcp-networking-firewall-settings_1581951852401015226_hu87ca3ba35430ec50627899ab5a5dd716_0_600x0_resize_box_3.png" >}}

Important things to note:

Ingress translates to incoming traffic.

Selecting IP range as ```0.0.0.0/0``` will allow traffic from anywhere on the internet.

For my use case I will enable port range ```8000 – 8010``` allowing me to register up to 10 atSigns.

{{< image type="page" src="gcp-firewall-ranges_5605083512103493186_hu7ffb002e5f52eded2ea005587a2a92bf_0_600x0_resize_box_3.png" >}}

Press ```create``` and validate that your new rule appears in list of firewall rules.

{{< image type="page" src="gcp-firewall-status.png" >}}

Second we need to create firewall rule that will enable your dess server to communicate with certification authority.

{{< image type="page" src="gcp-networking-firewall-80_11100416043270783325_hu6c328baef8e76c410c9343d3ff93d8e3_0_600x0_resize_box_3.png" >}}

Important things to note:

Ingress translates to incoming traffic.

Selecting IP range as ```0.0.0.0/0``` will allow traffic from anywhere on the internet.

You need to enable port ```80``` for communication with Certification authority.

{{< image type="page" src="gcp-networking-firewall-range-80_10609262712259900970_huae385d8608b945b71324199de2d93ba4_0_600x0_resize_box_3.png" >}}

Press ```create``` and validate that your new rule appears in list of firewall rules.

{{< image type="page" src="gcp-firewall-status (1).png" >}}