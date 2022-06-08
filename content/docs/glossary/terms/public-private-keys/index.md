---
layout: single

title: 'Public and Private Keys' # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  <em>Providing access to information</em>


description: | # SEO Description of the page (Shows in google and atsign.dev search)
    Definition of public and private keys

draft: false # Change this to "true" to hide the page
toc: false # Change this to "true" to show the table of contents
weight: 1 # For single pages, lower is first.
---

A private key is used in asymmetric key cryptography. Asymmetric key cryptography is based on applying mathematical functions to numbers to achieve personal secrecy. It uses two keys, one being the private key. If you think of decryption as locking and unlocking padlocks with keys, then the padlock that is locked with a public key can only be unlocked with its corresponding private key.

On the other hand, public keys are distributed to the trusted masses. This is done through a public-key distribution channel. This channel should provide authentication and integrity. Someone should not send their public key to the community pretending to have a different public key. Everyone should have their own private and public keys. For example, Colin only needs one private key to receive all correspondence in the community, but Barbara needs *n* public keys to communicate with *n* entities in the community, one public key for each entity. In other words, Barbara needs a ring of public keys.

{{< card/showcase class="bg-white" img-src="E2EE.png" img-type="page"  >}}
