---
layout: list

title: 'Tools of the atProtocol' # The title (ON THE PAGE)
lead: 'Tools and libraries for developers building atPlatform applications' # The lead below the title (ON THE PAGE)


description: | # SEO Description of the page (Shows in google and atsign.dev search)
  The different tools of atSign and how they work

draft: false # Change this to "true" to hide the page
toc: false # Change this to "false" to hide the table of contents
autolinks: false # Change this to "false" to hide the automatic links below your content
weight: 1 # Weight compared to other sections of the site, this shouldn't affect anything on the facade

---

{{< card/grid class="grid-col-4 grid-col-md-2 grid-col-sm-1" >}}

  {{< card/showcase class="w-100" title="SSH No Ports" img-src="ssh-no-ports.webp" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}Ssh to a remote linux host/device without that device having any open ports on external interfaces.{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://atsign.com/resources/articles/ssh-no-ports/" >}}Learn more{{< /card/showcase-link >}}
  {{< card/showcase-link href="https://github.com/atsign-foundation/sshnoports" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}

  {{< card/showcase class="w-100" title="VPN No Ports" img-src="vpn.jpeg" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}Setting up a VPN on a remote device with no ports open.{{< /card/showcase-item >}}
  {{% card/showcase-item %}} _Coming soon!_ {{% /card/showcase-item %}}

  {{< /card/showcase >}}

  {{< card/showcase class="w-100" title="E2EE SNMP" img-src="e2ee.png" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}Monitor a Nautel Transmitter via the atPlatform securely.{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://github.com/cconstab/at_nautel_snmp" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}

  
  {{< card/showcase class="w-100" title="at_ve_doctor" img-src="ve.jpg.webp" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}A simple utility than can check the state of the secondaries running in the virtual environment (VE).{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://github.com/atsign-foundation/at_tools/tree/trunk/at_ve_doctor" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}

  {{< card/showcase class="w-100" title="at_dump_atKeys" img-src="commandline.jpeg" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}A command line tool to dump keys from a .atKeys file.{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://github.com/atsign-foundation/at_tools/tree/trunk/at_dump_atKeys" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}

  {{< card/showcase class="w-100" title="at_cli" img-src="client.png" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}A command line tool to execute verbs on at platform.{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://github.com/atsign-foundation/at_tools/tree/trunk/at_cli" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}

  {{< card/showcase class="w-100" title="at_cram" img-src="cram.png" img-type="page" img-class="px-4 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}The challenge–response authentication mechanism of the atProtocol.{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://github.com/atsign-foundation/at_tools/tree/trunk/at_cram" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}

  {{< card/showcase class="w-100" title="at_pkam" img-src="pkam.png" img-type="page" img-class="px-5 py-2 max-h-50" bg-class="bg-white min-h-250" >}}

  {{< card/showcase-item >}}The public key authentication mechanism of the atProtocol{{< /card/showcase-item >}}
  {{< card/showcase-link href="https://github.com/atsign-foundation/at_tools/tree/trunk/at_pkam" >}}See the code!{{< /card/showcase-link >}}

  {{< /card/showcase >}}
  
{{< /card/grid >}}  
</br>

{{< panel/feature title="SSH No Ports" footnote="No more pain, no more ports, no more network attack surface" img-src="ssh-no-ports.webp" img-type="page" theme="gray" img-class="bg-white" img-right="true" >}}

  ssh no ports provides a way to ssh to a remote linux host/device without that device having any open ports (not even 22) on external interfaces. All network connectivity is out bound and there is no need to know the IP address the device has been given. As long as the device has an IP address, DNS and Internet access, you will be able to connect to it.

{{< /panel/feature >}}

{{< panel/feature title="VPN No Ports" footnote="Coming soon" img-src="vpn.jpeg" img-type="page" theme="clear" img-class="bg-white" >}}

  Setting up a VPN on a remote device with no ports open.

{{< /panel/feature >}}

{{< panel/feature title="E2EE SNMP" footnote="Coming soon" img-src="e2ee.png" img-type="page" theme="gray" img-class="bg-white" img-right="true">}}

Monitor a Nautel Transmitter via the atPlatform securely.

{{< /panel/feature >}}

{{< panel/feature title="at_ve_doctor" footnote="Coming soon" img-src="ve.jpg.webp" img-type="page" theme="clear" img-class="bg-white" >}}

at_ve_doctor is a simple utility than can check the state of the secondaries running in the virtual environment (VE).
The virtual environment provides the full atPlatform stack including an atRoot server and a number of preconfigured atSigns.

Once the virtual environment is up and running the at_ve_doctor can be run and it will report back the state of each of the preconfigured atSigns.
{{< /panel/feature >}}

{{< panel/feature title="at_dump_atKeys" footnote="Coming soon" img-src="commandline.jpeg" img-type="page" theme="gray" img-class="bg-white" img-right="true">}}

A command line tool to dump keys from a .atKeys file

{{< /panel/feature >}}
