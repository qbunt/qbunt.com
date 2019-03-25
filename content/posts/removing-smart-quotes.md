+++
author = "Jeremy Bunting"
date = 2017-11-29T01:20:19Z
description = ""
draft = false
slug = "removing-smart-quotes"
title = "Removing terrible MS Word 'smart quotes' in JS"

+++

I just put this on Twitter, but I thought it could use a more permanent home. Eventually, I'll just add it to [Toothpick](https://github.com/qbunt/toothpick.js). For now though, I'm sure someone is struggling with it right now.


```javascript 1.7
const replaceSmartQuotes = str => str.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, ‘”’)`
```
