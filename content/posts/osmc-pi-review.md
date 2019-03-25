+++
author = "Jeremy Bunting"
date = 2015-09-12T18:23:57Z
description = "A review of the Raspberry Pi running OSMC"
draft = false
image = "/images/2015/09/Raspberry_Pi_boxed.jpg"
slug = "osmc-pi-review"
title = "Cheap media server that plays anything"

+++

*UPDATE 11/5/15*

> With the Pi 2, amperage requirements are significantly higher, presumably due to the doubling of cores in the machine, more IO, etc. I'm changing my recommendation to a different power supply that provides clean 2.5A power for the Pi 2.

> Also, please note that the Pi 2 requires a microSD card instead of the standard SD card format from the original Pi, recommending a microSD card.


For years now I've been trying out different ways to play my digital video collection with something other than an AppleTV, Chromecast, Amazon Stick, Roku or anything else. I wanted to share my findings after relentlessly trying to find something that doesn't suck. I _finally_ found something.

The ideal for this magical solution would:
 
* Play the entire collection (480P, 720P, MKV, AVI, MP4 etc)
* Not cost a lot. You're watching TV after all.
* Make little/no noise
* Not take up a lot of space
* Not be fiddly, ideally, this wouldn't require a server 
* Not crash often
* Be controllable with a phone (Android & iOS)

These are some things I tried.

### Take 1 - The Macbook
![](https://i.kinja-img.com/gawker-media/image/upload/18kzmia28t4asjpg.jpg)
I loved this thing, but eventually, I needed more juice than this little guy could deliver day-to-day. I quickly relegated this to media center duty using XBMC (now [Kodi](http://kodi.tv/)). Plex hadn't really matured at this point, but was showing some promise. XBMC/Kodi on the Macbook worked really well, while it worked. Even had an IR receiver in the front!

After years of this labor, the fan in this hard-working machine died a horrible black death. Laptops are terrible for playing video like this. You have to have a mouse and monitor attached, there's little cooling, you'll kill the fan, and then you just have a fried laptop. I'm sure the [Intel GMA950](http://www.intel.com/content/www/us/en/chipsets/gma-950-graphics-sales-brief.html) integrated GPU didn't help. Welp, worked for a while.

Laptops should be laptops. This was a terrible idea.

### Take 2 - The AppleTV

![](https://d3nevzfk7ii3be.cloudfront.net/igi/ge1LZXKrXOHCboiX.medium)

I owned this AppleTV (2nd gen) for years. We used it for Netflix, Airplay and Pandora fairly frequently. It was okay for supported stuff but not great for playing my own video smoothly. That remote got lost _constantly_.

I played my own video on [Plex](https://plex.tv/) for a while with [PlexConnect](https://github.com/iBaa/PlexConnect/wiki). This, however, also shackled my laptop back to media center duty, as [Plex](https://plex.tv/) required a server to transcode things into a codec that the AppleTV understands. Not ideal.

I'd heard about people [jailbreaking AppleTV with Seas0npass](http://seas0npass.org/) as well, so I gave that a go, again with [Kodi](http://kodi.tv/). This was the most crashy thing on the planet. Any remotely high-res files crashed the jailbreak immediately. After some logging, it was just completely out of RAM. That AppleTV had 256MB of RAM, so running a stripped down iOS + Kodi was just way too much.

Eventually, we mostly stopped using the AppleTV and sold it, for [a crazy profit on eBay](http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR12.TRC2.A0.H0.Xapple+tv+2.TRS0&_nkw=apple+tv+2&_sacat=0), it was the last version you could jailbreak after all. With the reports people have of their experience, I don't miss it much. 

Maybe I needed a purpose built machine?

### Take 2.2
I considered and priced out a tiny [Intel NUC](http://www.intel.com/content/www/us/en/nuc/overview.html) box. I couldn't stomach the $500 to watch TV & movies. 

Onto the cheaper option...

### Take 3 - The Raspberry Pi
![](http://raspi.tv/wp-content/uploads/2015/03/Official-Raspberry-Pi-Case_1500.jpg)

After receiving a [Raspberry Pi](https://www.raspberrypi.org/) from my brother as a gift, it needed a full time gig. The Pi's SD card drive was well suited for messing around, and I had a couple of spare SD cards around as well, so I stretched it's legs. Kodi was pretty well supported on these things, it would cost nothing. Why not?

First, I tried [Xbian](http://www.xbian.org/). Xbian's a Debian Linux distribution with a Kodi install baked in. I was shocked that _any_ video would play on a machine that size, but _absolutely everything_ started playing, and very smoothly. Super impressive. The Pi is a great little machine for media center duty.

This was better than the Macbook _or_ the AppleTV for local media playback and it was inexpensive.

Still, despite what it says on [their site](http://www.xbian.org/), I found Xbian to not be as well maintained as I'd hoped. It worked pretty well, but it wasn't without it's flaws. It crashed the Pi once in a while, didn't get updates, and was more fiddly than I'd hoped.

Then, I tried [OSMC](https://osmc.tv/). This is still Kodi running on a stripped down version of Debian Jessie. They've done a custom skin specifically for the Raspberry Pi, and it's been tuned really well for the platform. Much lighter than the stock Kodi skin.

![](http://www.minttech.io/wp-content/uploads/2015/07/int2.jpg)

Install process is super easy, you download an app, stick in a card, wait a while, and it's ready to boot. This was a step above, I've got nothing but good things to say. It gets updated, it's fast, smooth, silent, and it doesn't require a transcoding server. Completely ideal. There's even a tiny app store.

This was the holy grail. It does everything well.

##### How?
How can you do this? You'll need a few things.

Power Supplies [Pi 1 ~ $8](http://www.amazon.com/CanaKit-Raspberry-Supply-Adapter-Charger/dp/B00GF9T3I0/ref=sr_1_2?ie=UTF8&qid=1446761332&sr=8-2&keywords=raspberry+pi+power+supply), [Pi 2 ~ $10](http://www.amazon.com/CanaKit-Raspberry-Supply-Adapter-Charger/dp/B00MARDJZ4/ref=sr_1_1?ie=UTF8&qid=1446761121&sr=8-1&keywords=raspberry+pi+2+power+supply) CanaKit makes  good ones. Definitely purchase a purpose built power supply, these things like clean power at the correct amperage.

(Non-Pi 2) [SD Card ~ $8](http://www.amazon.com/SanDisk-Memory-SDSDUN-032G-G46-Newest-Version/dp/B00M55BMBE/ref=sr_1_12?ie=UTF8&qid=1442042051&sr=8-12&keywords=SD+card) More than 4GB, and preferably class 10. Standard SD format for Pi Model A - B+, MicroSD for Pi 2.
(Pi 2) [microSD card recommended here.](http://www.amazon.com/dp/B00IVPU7KE/ref=twister_B00IYOCEG2?_encoding=UTF8&psc=1)

[Optional USB WiFi adapter ~ $11](http://www.adafruit.com/products/814) Not needed if you just use ethernet (probably faster anyway).

[Raspberry Pi ~ $40](http://www.amazon.com/Raspberry-Pi-Model-Desktop-Linux/dp/B00T2U7R7I) Mine is older, this one is quad core!!

[Codec Keys ~ $4](http://www.raspberrypi.com/mpeg-2-license-key/) This sounds really complicated, but it's just a short text string. You'll want this for hardware decoding.

[Case ~ $12](http://www.amazon.com/Official-Raspberry-Pi-Foundation-Model/dp/B00ZW4RKFM/ref=sr_1_3?s=pc&ie=UTF8&qid=1442042426&sr=1-3&keywords=raspberry+pi+case) This new one is from the Pi foundation, seems well done. Interesting reading on the design [here](https://www.raspberrypi.org/blog/raspberry-pi-official-case/).

[HDMI cable ~ $5](http://www.amazon.com/AmazonBasics-High-Speed-HDMI-Cable-Supports/dp/B00870ZHCQ/ref=sr_1_2?ie=UTF8&qid=1442043195&sr=8-2&keywords=hdmi) - if you don't have one already.

Then a remote of some kind. I use my phone.
**Android**: [Yatse](https://play.google.com/store/apps/details?id=org.leetzone.android.yatsewidgetfree&hl=en) is super solid, nice looking and reliable.

**iOS**: [Kodi Remote (official)](https://itunes.apple.com/us/app/official-kodi-remote/id520480364?mt=8) is a solid option, looks great on iPad. Or [Sybu](https://itunes.apple.com/us/app/sybu-for-kodi-and-xbmc/id567524653?mt=8) is pretty good too.

**Any other IR remote**: The USB [Flirc adapter](https://flirc.tv/) will receive IR and send keypresses to the Pi. Even that weird old stereo remote in your junk drawer.

Total cost for everything above, $93, though not everything is required. You probably have some/all of this kicking around, if not, you'd be hard pressed to find a better and more flexible option. It will play any format you toss it's way, it's silent, easy to use and tiny.

If you've got a large media library and keep coming up with crazy tech chains to play it all, this is a _fantastic_ way to reduce the computers involved.

