// to make a bookmarklet out of this:
// copy all of this code and paste it into a JavaScript compressor like http://jscompress.com
// then put "javascript:" in front of what it gives you, and save that as the URL for a bookmark.
alert(function() {
  var copyUrl = function(url) {
    var d = document;
    var textarea = d.createElement("textarea");
    textarea.textContent = "[audio]" + url + "[/audio]";
    d.body.appendChild(textarea);
    var selection = d.getSelection();
    selection.removeAllRanges();
    textarea.select();
    d.execCommand("copy");
    selection.removeAllRanges();
    d.body.removeChild(textarea);
    return true;
  };
  var determineUrl = function() {
    var w = window;
    if (w.App) {
      if (App.Player && App.Player.sm_sound) // phish.in
        return "http://phish.in" + App.Player.sm_sound.url;
      if (App.player && App.player.sound) // relisten.net
        return App.player.sound.url;
    }
    if (w.jwplayer) { // archive.org
      var j = jwplayer("jw6");
      return "http://archive.org" + j.getPlaylist()[j.getPlaylistIndex()].file;
    }
    var soundcloudMetatag = document.querySelector("meta[content*='soundcloud://sounds:']");
    if (soundcloudMetatag && soundcloudMetatag.content) { // soundcloud song pages only
      var trackId = /\d+/.exec(soundcloudMetatag.content)[0];
      return "https://api.soundcloud.com/tracks/"+trackId+"/stream?client_id=CLIENT_ID_GOES_HERE";
    }
    return false;
  };
  var url = determineUrl();
  if (url && copyUrl(url))
    return "Copied audio tag to clipboard!";
  return "Could not determine URL of MP3...";
}());
