---
title: "RSS is for winners 🏆"
date: "2023-08-17T20:29:19-04:00"
author: "Jeremy Bunting"
authorTwitter: "" #do not include @
cover: ""
# tags: ["", ""]
# keywords: ["", ""]
description: "A sane way to read RSS in 2023 🏴‍☠️"
showFullContent: false
readingTime: true
hideComments: false
color: "" #color from the theme settings

---
After a really 💀 year of [Twitter](https://www.theverge.com/2023/7/23/23804629/twitters-rebrand-to-x-may-actually-be-happening-soon), [Reddit](https://www.theverge.com/2023/6/8/23754183/apollo-reddit-app-shutting-down-api) and every other goddamn social network [losing their minds](https://fortune.com/2023/08/16/twitter-throttling-nyt-facebook-musk-5-second-delay/), my refuge has been [RSS](https://aboutfeeds.com/). Mastodon's awkward, [Bluesky](https://bsky.app/) is real weird (keep it classy weirdos) and that's all great. RSS has always felt like *my* place because it has been my place since [the good old days](https://en.wikipedia.org/wiki/Google_Reader). My journey through RSS went something like this:

- [Google Reader](https://www.wired.com/2013/06/why-google-reader-got-the-ax/) 🏆 (pour one out for the 🐐)
- [Feedly](https://feedly.com/) (somehow has gone super 👔, I don't need that)
- loooong gap (Reddit/Twitter/other network addiction)
- [Miniflux](https://miniflux.app/) 🏴‍☠️

> dude, RSS for real?! It's 2023, I get all my news from Reddit/Threads/Mastodon/Bluesky, why?

Hear me out. In the age of every social network pivoting, folding, renaming to [a unicode letter](https://www.popularmechanics.com/technology/apps/a44641211/twitter-x-unicode-symbol/), and losing their mind because of AI, RSS makes *so* much sense *especially* now. Blogs, turns out, are **great**. RSS feeds, are still, freaking everywhere.

Why?

Independence. Anyone can publish an RSS feed, which means that *anyone* can consume that feed. Because the tech's been around for years, it works, it's stable (enough) and there's no VC opinions in the way.

> fine, ok, you make some compelling points 🤣 how can this possibly work?

You've got a couple of solid options to get started, ramping up to running your own aggregator service.

Easiest thing to start with is *just* an RSS reader app and *maybe* attach some kind of hosted service for sync support. I recommend the following:

### macOS & iOS

- [NetNewsWire](https://netnewswire.com/) - Simple, syncs via iCloud, local, a bunch of hosted services
- [Reeder](https://reederapp.com/) - My *favorite* reader, syncs with a bunch of services (more on that in a sec)
- [Unread](https://apps.apple.com/us/app/unread-2/id1363637349) - nice experience, little weird

### Android

- [FocusReader](https://play.google.com/store/apps/details?id=allen.town.focus.reader&hl=en_US&gl=US) - Super nice experience, can sync with Fever API
- [Miniflutt](https://play.google.com/store/apps/details?id=be.martinelli.miniflutt) - Solid fallback should the first fall through
- [Microflux](https://play.google.com/store/apps/details?id=com.constantin.microflux) - Supports Miniflux, well built

### Web Services

- [Feedbin](https://feedbin.com/) - $5/mo, solid support for many apps (some of the above)
- [Inoreader](https://www.inoreader.com/) - Free to start, $5/mo to get fancy ✨
- [Feedly](https://feedly.com/i/welcome) - $8/mo, but all the 👔 you could ever want

> Got an app, what's next?

Once you're set up with an app, it's blank. You're here, [so let's start there](/index.xml). Subscribe to some killer [feeds](https://ooh.directory/) [somewhere](https://blogroll.org/). Once you found some wicked killer feeds, add those links to that app you found and let the web be weird. Visit a site, add it to the reader, read, enjoy, that's it. Sites will update, your reader will scrape those feeds, and you now have a customized, personal news feed. Always.

If you're satisfied, stop here

😛

---

A few things about this setup (which is fine) bothered me. Any one of the hosted services folds, changes focus, or decides that web4 is the next big thing, your news feed goes away. If one of those apps goes away, again, you're hosed. So how do we turn the ship into something that will never die (like RSS).

Take matters into your *own* hands 🏴‍☠️

Over the past few years, between two mobile platforms, I went *deep* into finding a solution to make this setup as robust as absolutely possible. I was after two things that could be relied upon:

- a service that I could run on my own
- a web/mobile/desktop app I could tolerate

That solution was [Miniflux](https://miniflux.app/) running in my homelab setup in [Docker](https://miniflux.app/docs/installation.html#docker). Simple thing to run in Docker, without a ton of fuss, and connect to some *killer* reader apps or just work on the web.

Miniflux has a couple absolutely hidden features that make this all work.

- Connect Miniflux to [Reeder](https://reederapp.com/) on macOS/iOS via the Google Reader API
- Connect Miniflux to [NetNewsWire](https://netnewswire.com/) via through [FreshRSS integration](https://github.com/Ranchero-Software/NetNewsWire/issues/2859#issuecomment-1019066748) with the Google Reader API
- Connect Miniflux to *any* other supported mobile app with the Fever API, or any of the other integrations
- Just use the very fast, simple web app
  
You can just pay for hosted Miniflux for $5/mo, but if you want to go the *full* 🏴‍☠️, you can just [run this stack yourself](https://miniflux.app/docs/installation.html#docker).

```yaml
# docker-compose.yml
services:
  miniflux:
    image: miniflux/miniflux:latest
    ports:
      - "80:8080"
    depends_on:
      db:
        condition: service_healthy
    environment:
      - DATABASE_URL=postgres://miniflux:secret@db/miniflux?sslmode=disable
      - RUN_MIGRATIONS=1
      - CREATE_ADMIN=1
      - ADMIN_USERNAME=admin
      - ADMIN_PASSWORD=test123
  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=miniflux
      - POSTGRES_PASSWORD=secret
    volumes:
      - miniflux-db:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "miniflux"]
      interval: 10s
      start_period: 30s
volumes:
  miniflux-db:
```

Then it's a `docker-compose up -d` and start the show. Point a domain at your IP and do some reverse proxying, and you're off to the races.

There's a of different options in here, but get into it. RSS is great, the internet should be *weird*, and everyone should have a wild little corner of the web. 🏴‍☠️
