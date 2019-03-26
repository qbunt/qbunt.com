+++
author = "Jeremy Bunting"
categories = ["technology", "advertising"]
date = 2015-07-16T03:14:20Z
description = ""
draft = true
slug = "volkswagen-unleash-your-rrr"
tags = ["technology", "advertising"]
title = "Volkswagen Unleash Your Rrr tech stack"

+++

{{< youtube hQGGq-i4u2w >}}

I'm really proud to show off something I worked on recently at Deutsch LA for Volkswagen for the Golf R launch campaign.

##### http://rrr.vw.com #####

This app uses deep learning and signals analysis to determine the sound you're making against a pre-defined library that's been trained to recognize specific car sounds. Acceleration, screeching and deceleration were sounds we collected from hundreds of people across the agency, and trained an artificial intelligence brain against. 

What's interesting is the artificial intelligence was all in the browser.

There's a huge amount of technology and explanation that is required for breaking sounds down into logical chunks. The recognition of that data, especially relatively simple data like this, is fairly simple. 

The stack works like this:

* Audio file is recorded in the browser using WebRTC and getUserMedia
* The audio file is sent (via HTTP POST) to a Python backend
* The server parses through that data, using [MFCC](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum)'s to describe the sounds in the audio file.
* Server then responds with an array of MFCC data
* Javascript (and Convnet.js) interprets that data and responds with confidence scores of which sound it most likely is.
* The front end displays a nice UI after stitching a custom video together (through a custom built API)

Given the caché that Artificial Intelligence and machine learning has right now, it's a really sexy thing to say that this is built on, but it's not really the case though. The most complex part of this is not the artificial intelligence, it's the signals processing of sound that is the huge challenge.

http://www.fastcocreate.com/3048595/you-control-this-new-vw-ad-by-making-your-own-ridiculous-car-noises

