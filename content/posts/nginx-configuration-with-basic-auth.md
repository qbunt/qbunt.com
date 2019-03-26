+++
author = "Jeremy Bunting"
date = 2015-09-25T23:39:30Z
description = ""
draft = false
slug = "nginx-configuration-with-basic-auth"
title = "NGinX Configuration with basic auth & custom error messages"

+++

If for some reason you need the following things out of an NGinX server:

* Multiple virtual blocks
* Basic authentication (with IP whitelist of approved IPs
* Customized error messages

there are some things you should probably be aware of, as the virtual block configuration is not obvious.

First off, custom error messages are straightforward *if and only if* you do not have basic auth enabled.

If you do, you need to ensure two things. Your `error_page` flag needs to reside **above** the location block of that specific virtual host.

One thing I wasn't aware of with NGinX virtual blocks is that the `root` should be (at least in this configuration) inside the `location` block. If you put the basic authentication at the `server` level, it will apply to all locations inside that configuration.

Here's a consolidated example of how all the pieces go together.


```bash
server {
     listen 80 default_server;
     listen [::]:80 default_server ipv6only=on;

     server_name yoursitenamehere.com www.yoursitenamehere.com;
     
     root /var/www/yoursitenamehere.com/html;

     # path to your custom error page & the error you're handling
     error_page 401 =401 /401.html;

     # turn off basic auth, allow from all IPs,
     # disallow public access to that page
     location = /401.html {
    	auth_basic off;
        allow all;
        internal;
     }

     location / {
       

        # this is super important, unless you set this, 
        # you'll get the default nginx error pages across the board
        proxy_intercept_errors on;
        
        try_files $uri $uri/ =404;

        index   index.html;

        # satisfy first the whitelisted IPs
        # then fall back to basic, then fail everything else
        satisfy any;

        # Your whitelist IPs
        allow 111.222.333.444;
        allow 555.666.777.888;

        # basic auth
        auth_basic "Forbidden";
        auth_basic_user_file /etc/nginx/.htpasswd;

        # tell everyone else to leave with your fancy error messages
        deny all;
	}
}

```


The key in the above configuration is this one line `proxy_intercept_errors on`. This combined with containing the `root` inside the location block, will allow NGinX to return your custom error page.

Anyway, I recently burned some time with this, thought I'd share my findings, it was not easy to find a working combination of flags.

