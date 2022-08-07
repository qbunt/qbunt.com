+++
date = 2020-02-05T05:00:00Z
title = "Tracking page exits with Mixpanel-js"

+++
Oh mixpanel.

After looking for far too long for a way in the [Mixpanel docs](https://developer.mixpanel.com/docs/javascript-full-api-reference#section-mixpanel-track) to find a way to track `session-end` events with the [Mixpanel JS library](https://github.com/mixpanel/mixpanel-js), I tried all the usual tricks to get the tracking event to fire correctly, `beforeunload`, `unload` and similar. Nothing was firing correctly. Having heard fairly recently about [the beacon API](https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API), I thought "Yeah, there's no way there's support for that in recent stuff yet".

[I was thankfully incorrect;](https://caniuse.com/#feat=beacon)

Unfortunately, this feature is documented in a series of pull requests, github issues and similar, so tracking down how you can use it was annoying, so I thought I'd document it here instead.

[This](https://github.com/mixpanel/mixpanel-js/pull/240) has more information than I could find on any of the Mixpanel official docs. I realize it's a new PR, but the JS lib docs also mention Bower, probably not the most up to date.

```javascript
// for an individual track() call
mixpanel.track('my event', {my: 'props'}, {transport: 'sendBeacon'});

// turn on for every Mixpanel call when page is unloading
// (you would use this to use sendBeacon for everything, including
// mixpanel.people calls)
window.addEventListener(`beforeunload`, function() {
  mixpanel.set_config({api_transport: 'sendBeacon'});
  mixpanel.track('my event');
  mixpanel.people.set({foo: 'bar'});
});

// initialize for all tracking; not recommended as it will prevent any
// request-retry facilities
mixpanel.init('my token', {api_transport: 'sendBeacon'});
mixpanel.track('my event');
```

After pulling my own hair out trying to track page exit or `session_end` events, this is the right way to do it (as of today, released 9 days ago). Thankfully, this actually exists and appears to be working properly, not having this feature was going to require intricate timer events and silly stuff.

If you have a choice though and you just need a couple stats, **stop with this Mixpanel nonsense** and [get some respectful tracking with Fathom](https://usefathom.com/) instead. You can capture session duration without having to code it by hand.

Like a neanderthal.
