javascript:alert(
  function(url) {
    var d = document;
    var textarea = d.createElement("textarea");
    var selection = d.getSelection();
    textarea.textContent = "[audio]" + url + "[/audio]";
    d.body.appendChild(textarea);
    selection.removeAllRanges();
    textarea.select();
    d.execCommand("copy");
    selection.removeAllRanges();
    d.body.removeChild(textarea);
    return "Copied audio tag to clipboard!";
  }(function() {
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
    alert("Could not determine URL of MP3...");
    throw new Error();
  }())
);