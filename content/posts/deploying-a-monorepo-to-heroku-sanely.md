+++
date = 2022-10-02T20:00:00Z
draft = true
title = "Deploying a monorepo to Heroku sanely"

+++
Heroku has made some [questionable business choices](https://blog.heroku.com/next-chapter) recently, but the one thing they got dead-right straight out of the gate was ease of setup. With very little work, you could go from a working thing locally, add a couple files, and `git push` your way to a deployed environment. That simple interaction made so much complexity go away, I think many hosting services are still after the bar that Heroku set so early.

In that time, things have gotten a lot more complex. 

Github actions has become ubiquitous, static hosting has gotten very simple, and web tooling has evolved very, **very** quickly. One of the largest changes I've seen in this space is moving from single-project repos, to monorepos. Monorepos make a ton of sense, especially when you have several services all interconnected into the same project. When it comes to deploying to our old friend Heroku though, a monorepo adds a new layer that Heroku has **certainly** not kept up with.

Deploying to Heroku with a single-project repo: