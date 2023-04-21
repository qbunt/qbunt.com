---
author: Jeremy Bunting
date: "2017-02-13T21:01:48Z"
description: ""
draft: false
slug: resin-wifi-env
title: resin-wifi-env
---

We've been using the excellent [Resin](https://resin.io/) platform for deploying Raspberry Pi's en masse at work. One of the issues we frequently have is the wifi we're connecting to is either unknown, or incorrect, so we have to update the wifi configuration on a group of devices. Because this need was not met by either [Resin-wifi-connect](https://github.com/resin-io/resin-wifi-connect) or anything else, we wrote a tiny app to pick configuration value out of the Resin environment variables.

That solution is called [resin-wifi-env, available at Github here](https://github.com/SpinifexGroup/resin-wifi-env). This script is far from finished, but it's provided a simple way for us to switch out wifi config on 80+ devices at a clip. 

I realize this won't work for everyone, but the script uses a single environment variable like so:

    WIFI : [SSID]|[PSK]

This this sort of has to be a single variable because Resin will request a reboot of the device **right** after you edit the first variable, and then you're stuck with a broken wifi configuration and you've got very few ways to recover.

Hope you like it if you're using the Resin platform!

