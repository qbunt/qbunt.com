+++
date = 2022-10-02T20:00:00Z
draft = true
title = "Deploying a monorepo to Heroku sanely with Github Actions"

+++
Heroku has made some [questionable business choices](https://blog.heroku.com/next-chapter) recently, but the one thing they got dead-right straight out of the gate was ease of setup. With very little work, you could go from a working thing locally, add a couple files, and `git push` your way to a deployed environment. That simple interaction made so much complexity go away, I think many hosting services are still after the bar that Heroku set so early.

In that time, things have gotten a lot more complex.

Github Actions has become ubiquitous, static hosting has gotten very simple, and web tooling has evolved very, **very** quickly. One of the largest changes I've seen in this space is moving from single-project repos, to monorepos. Monorepos can make a ton of sense, especially when you have several services all interconnected into the same project. When it comes to deploying to our old friend Heroku though, a monorepo adds a new layer that Heroku has **certainly** not kept up with.

Deploying to Heroku with a single-project repo:  
`git push heroku main`

Deploying to Heroku **with a monorepo**:  
`git subtree push --prefix apiOne heroku-apiOne master`

> Okay...what is the big deal

You're now dealing with multiple Git origins, on potentially multiple stages, on multiple apps. It very quickly becomes unmanageable for a small team.

When you aren't using the Github/Heroku integration (say, for instance, because there was a [massive data breach]()) but you still need to ship code, that gets a lot more complicated.

The options then become:

* Use the multi-procfile buildpack and get your `git push git@heroku.com:<app> main` style deployments back (peppering your codebase with Procfiles)
* Deploy the apps locally with `git subtree` and witness the endless errors with that 🤮
* Wait for the data breach mitigations to complete and reconnect Github and do ALL the CI/CD inside Heroku

The way Heroku _wants_ everyone to use their service is to connect their Github account, and use hooks to determine when they should do a build & deploy step. There are a couple of issues with this (especially with the data breach behind us)

* I don't know about you, but I'm not **super** ready to connect our private Github org back to the same place that just had a data breach
* Really hard to see if there's something wrong directly from your repo
* You now have to have both Heroku & Github Actions open all the time to see if something fell over with the deployment or the build

Thankfully, you can bypass all of this [with a plugin]() to the Heroku CLI. Instead of pulling from Github, you can _push out_ to Heroku. Benefit of this, is that now multiple services allow for this deployment style, so you can standardize on GH Actions instead of bending around each service's deployment pipeline (looking at you Cloudflare Pages)

Instead of connecting Github via their OAuth integration and potentially exposing your entire org, you can:

1. Create a Heroku API key
2. Run the CI/CD in Github actions (where it's convenient, can be standardized)
3. Run a step in the action to tarball **just a single app of your monorepo**, and deploy the tarball directly to Heroku
4. Avoid any Heroku-specific deployment setups AND avoid the git-related headaches related to subtreeing

The setup is really pretty straightforward if you're familiar with Github Actions:

          - uses: akhileshns/heroku-deploy@v3.12.12
            with:
              heroku_api_key: ${{secrets.API_HEROKU_API_KEY}}
              heroku_app_name: ${{secrets.API_HEROKU_APP_NAME}}
              heroku_email: ${{secrets.API_HEROKU_EMAIL}}
              buildpack: https://github.com/heroku/heroku-buildpack-nginx.git
              justlogin: true
    
          - name: install build plugin
            run: heroku plugins:install heroku-builds
    
          - name: deploy tarball
            run: cd client/build && heroku builds:create -a name-of-your-app
            

You can repeat that last `deploy tarball` step as many times as would be required, but what's **fantastic** about this, is that all you need is to be inside the folder, and you can tarball & deploy in a single step.

## What are the downsides?

You're really only missing out on the fancy multi-stage deployments that Heroku can be capable of,  but again, with the multi-buildpack setup, I don't know how well that would work. Heroku is missing **a ton** to support monorepo projects in general, and it's kind of obnoxious that a service this expensive is this limited, BUT this at least lets you keep moving without rewriting your entire app.