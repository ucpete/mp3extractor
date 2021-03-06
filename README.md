# mp3extractor

## Intro
This repository is only intended for use in the [phish.net](https://phish.net) forum (https://forum.phish.net). The code is written for use as a bookmarklet that quickly enables embedding of `[audio]` tag'd audio files from various common streaming sites in the Phish community.

As of May 2020, the following sites are supported:
1. [phish.in](https://phish.in)
2. [archive.org](https://archive.org/details/etree)
3. [SoundCloud](https://soundcloud.com)*
4. [relisten.net](https://relisten.net)
5. [Bandcamp](https://bandcamp.com)

<sub>\* SoundCloud changes `CLIENT_IDs` associated with accounts from time to time; please [create an issue](https://github.com/ucpete/mp3extractor/issues/new) or contact us if SoundCloud embeds stop working and we will update the `CLIENT_ID` link on this page, and will replace the `CLIENT_ID` in existing comments with the new one.</sub>
## Set-up
In order to generate a bookmarklet, view the latest version of [the code](https://github.com/ucpete/mp3extractor/blob/master/mp3extractor.js) and follow the instructions in the comments on lines 1-3:
```javascript
// to make a bookmarklet out of this:
// copy all of this code and paste it into a JavaScript compressor like https://jscompress.com
// then put "javascript:" in front of what it gives you, and save that as the URL for a bookmark.
```

In other words, copy the latest version of the code and paste it [here](https://jscompress.com). Before compressing the code, you will need to replace the `CLIENT_ID_GOES_HERE` bit (seen on [line 84](https://github.com/ucpete/mp3extractor/blob/master/mp3extractor.js#L84)) with a valid SoundCloud `client_id` – SoundCloud streaming will not work without one! Forum users are welcome to use the `client_id` of the [@PhishHacks](https://soundcloud.com/PhishHacks) account, which can be found [here](https://pastebin.com/raw/UFJ70nWM), or if you are clever enough you can figure out a valid `client_id` by visiting the URL contained within an embed element for a downloadable track directly (e.g. [this URL](https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/269268224)) and right clicking on the download button and copying the URL from there (which will contain a valid `client_id`). Once you've overwritten `CLIENT_ID_GOES_HERE` with a valid `client_id` at [JSCompress](https://jscompress.com), click "Compress JavaScript" and copy the compressed code to your clipboard. Now you're ready to create a new bookmark in your web browser – for the 'Address' or 'URL', type `javascript:` then paste in the [JSCompress](https://jscompress.com)'d version of the code you just compressed. There should **not** be a space after `javascript:` before your pasted code, and there should **not** be any HTML URL encoding characters present in the pasted address, e.g. `%20` instead of a space, `%2F` instead of a slash.

**NOTE:** We can only confirm that this bookmarklet works in the following browsers:
1. Chrome
2. Opera
3. Firefox (but must have recent builds – old versions do **not** support bookmarklets)
4. Brave

## Usage

Using this bookmarklet is (purposefully) remarkably simple. Once you have set it up properly, head to the streaming site of choice and start playing the song you want to embed. (**NOTE:** for SoundCloud embedding to work, you _must_ be playing from the SoundCloud _song_ page, not the universal player at the bottom of your SoundCloud browsing session. In other words, clicking play [here](https://soundcloud.com/phishdownloads/ph1999-12-29-jam) will work, but clicking play [here](https://soundcloud.com/PhishDownloads) will not.) Once your track is playing, simply click your bookmarklet once – you will either get a message that the tag has been copied to the clipboard, or that it wasn't able to be copied. If it doesn't work, you could be using an outdated web browser, or you may not have waited for the page to load, or there may be another issue. If you are sure the issue is with the bookmarklet code and not on your end, go ahead and create an issue on this repository and we'll see if we can troubleshoot for you. Assuming you get a confirmatory alert that the tag was copied to your clipboard, simply paste it into a comment box on [phish.net](https://phish.net) without modifying anything between the `[audio]` tags – tweaking the title of the track won't affect anything (unless you inadvertantly mess up one of the `[tag]`s), but please don't be a jerk and mislabel something to mislead people into playing something they don't want to hear.


## Brief history

[@ucpete](https://phish.net/user/ucpete) was playing around on [phish.net](https://phish.net) one day in early 2017, when he guessed that an `[audio]` tag might work, so he [tested](https://forum.phish.net/forum/permalink/1377205202) it in the forum. People's minds were blown, including his pal (and much better software developer) [@sevenpounds](https://phish.net/user/sevenpounds), who quickly wrote a one-line [bookmarklet](https://forum.phish.net/forum/permalink/1377207446) to make the process a little easier. Shortly thereafter, Xander added functionality for other sites, Pete added the functionality to automatically put the `[audio]` tag into the user's clipboard to save an error prone step, and from there it's blossomed into a powerful, elegant, user-friendly tool for [phish.net](https://phish.net) forum users. Stay tuned more changes: some may be cosmetic tweaks, while others may be adding additional streaming sites.

-- [@ucpete](https://github.com/ucpete) and [@alxndr](https://github.com/alxndr)
