+++
author = "Jeremy Bunting"
date = 2015-10-11T17:51:36Z
description = ""
draft = false
slug = "short-cpu-freezes-on-os-x-el-cap"
title = "Short CPU freezes on OS X El Capitan"

+++

**Update 1/11/16:**
Current version of Chrome 47.0.2526.106 resolves this behavior.

I've been experiencing some short machine freezes while using both OS X Yosemite and El Capitan. Could not figure this out for a while and I think I found the culprit.

These short freezes last about 2-4 seconds, only appear while Chrome (production) is running, and appear to freeze not just Chrome but the entire machine.

When Chrome runs a software update in the background, it throws the following message in the console `"triggered DYLD shared region unnest for map"`.

The Chromium [team knows about this issue](https://code.google.com/p/chromium/issues/detail?id=428858). As mentioned in the issue thread, it appears that a bunch of messages get jammed into the system log, but it may not actually be the messages that are the issue.

Hopefully a proper fix is released for this soon, I've been struggling to find this issue for a while.

