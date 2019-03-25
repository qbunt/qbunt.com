+++
author = "Jeremy Bunting"
date = 2014-11-19T19:46:17Z
description = ""
draft = false
slug = "handy-ssh-config"
title = "Handy SSH config"

+++

When you going into multiple servers at once, it can be handy to have a little leeway when you use password authentication. Let's say you're SSHing into one box, then another, then back to the first box.

It'd be really nice not to have to paste that first password in again, wouldn't it?

From my buddy [Phil](http://fivesevenfive.org), he's got a handy SSH config that will recycle the first authenticated session when you try to connect again.

Add this to your ~/.ssh/config file

    Host *
    ForwardAgent yes
    ControlMaster auto
    ControlPath /tmp/ssh-cm-socket-%r@%h:%p
    ControlPersist 86400

