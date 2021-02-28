+++
date = 2020-09-03T04:00:00Z
draft = true
title = "Reverting a range of git commits safely (without losing your mind)"

+++
There are a number of documented ways to roll back a long range of commits with varying levels of effort, those include:

* Reverting a range via the command line (if the range has no merge commits)
* Reverting one by one on the range of commits, deconflicting as you go
* Ruin the history and reset head to your selected version

I, kind of by accident, discovered a way to handle rolling back a range of commits that I was surprised worked quite as well as it did, and will be my recommendation for rolling repos back _without losing history_ or reverting one by one.

It boils down to:

* Split off a new branch at the revision you want to go back to (beginning of the range)
* _Squash_ merge the changes that have happened since that branch (condensing the changes into a single commit)
* Revert that single commit (inverts those changes)
* Make sure that's actually what you want
* Push to remote

So for instance:

    git checkout new-thing-legacy
    git merge --squash master
    git commit -m "fast-forwarding master changes to revert them"
    git revert HEAD

This carries some advantages:

* You still have the condensed version of the changes that have happened since
* It marks a very clear revision in history of what happened (with great comments of course)
* You don't piss everyone on the team off by wrecking the history of their working copy

A coworker of mine is calling this 'The Bunting Method', which is hilarious and you definitely should not use.

Hope this helps!

**_Update:_**  
Rebase instead of merge may work for this, but I probably won’t recommend using this going forward. Works on the branch just fine (maybe I’ll mess with some of this with a cherry-pick) but ymmv.