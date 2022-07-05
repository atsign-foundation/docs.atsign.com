---
layout: single

title: "Encryption" # The title (ON THE PAGE)
lead: | # The lead below the title (ON THE PAGE)
  Helps conceal information into secret code.

description:
  | # SEO Description of the page (Shows in google and atsign.dev search)
  Definition of the term encryption

draft: false # Change this to "true" to hide the page
toc: true # Change this to "true" to show the table of contents
weight: 202 # For single pages, lower is first.
---

## Definition

Encryption is a means of achieving privacy. It is a part of cryptography which has the Greek origin meaning of "secret writing". The goal of encryption is that assuming that an unwanted third party is eavesdropping on an insecure channel, said person would not be able to comprehend the transmitted information. Decryption is the process of converted encrypted information into a comprehensible format. Encryption and Decryption algorithms are known as ciphers. Encryption uses a key which is a set of values that the cipher, as an algorithm, will operate on. Encryption and Decryption go back a long way with one of the most well known ciphers being the [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## How we do it

The atPlatform implements end-to-end encryption that is best illustrated with the following example: @alice wishes to share her phone number with her friend @bob. To do this, @alice, who is on her own device, prompts her own secondary server to direct phone @alice at her friend @bob's secondary server. From here, a shared key is generated for @bob (@bob:shared_key@alice).

This shared key uses the same encryption process as the Symmetric Key Encryption, which is called AES (Advanced Encryption Standard) and involves three block ciphers: AES-128, AES-192 and AES-256.

The @protocol specifically uses AES-256 for Data Encryption Keys.

The RSA (Rivest-Shamir-Adleman) encryption algorithm is then used to encrypt the shared key from the above example with @bob's public key. The @protocol specifically utilizes RSA 2048. Note, that because the RSA algorithm is an Asymmetric Key Encryption method, a public and private key are generated.

If you want to read more about Encryption and how it works on the atPlatform check this [Medium](https://atsigncompany.medium.com/data-encryption-caching-with-the-protocol-debe9efc0f49) article!

## Related Sources

<!-- The redirects for this site do not work yet! -->

{{<card/breadcrumb link="/docs/reference/public_private_keys/" first="Public and Private Keys">}}

{{<card/breadcrumb link="/docs/reference/self_encryption_key/" first="Self-Encryption Key">}}

{{<card/breadcrumb link="/docs/reference/privacy/" first="Privacy">}}
