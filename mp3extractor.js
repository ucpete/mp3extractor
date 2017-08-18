// to make a bookmarklet out of this:
// copy all of this code and paste it into a JavaScript compressor like http://jscompress.com
// then put "javascript:" in front of what it gives you, and save that as the URL for a bookmark.
var REGEX_ON_YYYY_MM_DD = /on (\d{4}-\d{2}-\d{2})$/;
function elemById(id) {
  return document.getElementById(id);
}
function elemsByClassName(className) {
  return document.getElementsByClassName(className);
}
function elemsByTag(tagName) {
  return document.getElementsByTagName(tagName);
}
function makeAudioTag(info) {
  if (!info) {
    return false;
  }
  var audioTag = "[audio]" + info.url + "[/audio]";
  if (info.title) {
    return "[pre]" + "[b]" + (info.date ? info.date + " " : "") + info.title + "[/b]\n" + audioTag + "[/pre]";
  }
  return audioTag;
}
function copyString(string) {
  if (!string) {
    return false;
  }
  var d = document;
  var textarea = d.createElement("textarea");
  textarea.textContent = string;
  d.body.appendChild(textarea);
  var selection = d.getSelection();
  selection.removeAllRanges();
  textarea.select();
  d.execCommand("copy");
  selection.removeAllRanges();
  d.body.removeChild(textarea);
  return true;
}
function extractTrackInfo(w) {
  if (w.App) {
    if (w.App.Player && w.App.Player.sm_sound) {
      // phish.in
      return {
        date: elemsByClassName("show_date")[0].innerText,
        url: "http://phish.in" + w.App.Player.sm_sound.url,
        title: elemById("player_title").innerText
      };
    }
    if (w.App.player && w.App.player.sound) {
      // relisten.net
      var dateMatch = elemsByClassName("album")[0].innerText.match(REGEX_ON_YYYY_MM_DD);
      return {
        date: dateMatch && dateMatch[1],
        url: w.App.player.sound.url,
        title: elemsByClassName("title")[0].innerText
      };
    }
  }
  if (w.jwplayer) {
    // archive.org
    var player = w.jwplayer("jw6");
    var track = player.getPlaylist()[player.getPlaylistIndex()];
    var dateMatch = elemsByTag("h1")[0].innerText.match(REGEX_ON_YYYY_MM_DD);
    return {
      date: dateMatch && dateMatch[1],
      url: "http://archive.org" + track.file,
      title: track.title.replace(/\d+\. /, "")
    };
  }
  var soundcloudMetatag = w.document.querySelector("meta[content*='soundcloud://sounds:']");
  if (soundcloudMetatag && soundcloudMetatag.content) {
    // soundcloud song pages only
    var trackId = /\d+/.exec(soundcloudMetatag.content)[0];
    return {
      url: "https://api.soundcloud.com/tracks/"+trackId+"/stream?client_id=CLIENT_ID_GOES_HERE"
    };
  }
  var audioTag = w.document.querySelector("audioTag");
  if (audioTag && audioTag.src) {
    var titleMetaTag = w.document.querySelector("meta[property='og:title']");
    return {
      url: audioTag.src,
      title: titleMetaTag && titleMetaTag.content
    };
  }
  return false;
}
alert(function() {
  var info = extractTrackInfo(window);
  if (info && copyString(makeAudioTag(info))) {
    return "Copied audio tag to clipboard!";
  }
  return "Could not determine URL of MP3...";
}());
