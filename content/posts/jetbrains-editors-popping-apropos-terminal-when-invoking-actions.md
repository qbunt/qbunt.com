+++
date = "2019-04-17T00:00:00-07:00"
draft = true
title = "JetBrains editors popping `apropos` terminal when invoking actions"

+++
You may have noticed a new annoying behavior in the JetBrains/IntelliJ series of editors when invoking the actions menu `⌘+shift+A`. Instead of the normal actions menu rendered by the editor, you get this menu explaining something unrelated.

To disable this, and save your sanity, go into System Preferences > Shortcuts > Services > Developer and uncheck the `Search man Page index in Terminal` shortcut.

![](/img/2019-04-17-Screenshot 2019-04-17 09.57.16.png)

This wasn't a problem until recently when Apple decided this shortcut was theirs. More information on the workaround is \[here\]([https://intellij-support.jetbrains.com/hc/en-us/community/posts/360003430700--Apropos-terminal-pops-up-when-typing-cmd-shift-A-to-get-actions-bar](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360003430700--Apropos-terminal-pops-up-when-typing-cmd-shift-A-to-get-actions-bar "https://intellij-support.jetbrains.com/hc/en-us/community/posts/360003430700--Apropos-terminal-pops-up-when-typing-cmd-shift-A-to-get-actions-bar")).

Thank you to JetBrains for posting something about this that was easy enough to get indexed by Google.