hexo.extend.filter.register('theme_inject', function(injects){
    injects.postMarkdownBegin.raw('live', '<script> \
      const config = { \
          "id": "mylive", \
          "playsinline": true, \
          "plugins": [], \
          "fluid": true, \
          "isLive": true, \
          "url": "//home.mailset.top:18701/hls/mailset.m3u8", \
          "rotate": { \
                    "clockwise": false, \
                    "innerRotate": true \
          }, \
          "screenShot": true, \
          "videoAttributes": { \
                    "crossOrigin": "anonymous" \
          }, \
          "pip": true, \
		  "playbackRate": [ \
                    1 \
          ] \
        } \
        config.plugins.push(HlsPlayer) \
        let player = new Player(config) \
        player.emit(\'resourceReady\', [{"name":"src","url":"//home.mailset.top:18701/hls/mailset.m3u8"}, \
		{"name":"hd720","url":"//home.mailset.top:18701/hls/mailset_hd720.m3u8"}, \
		{"name":"mid","url":"//home.mailset.top:18701/hls/mailset_mid.m3u8"}, \
		{"name":"low","url":"//home.mailset.top:18701/hls/mailset_low.m3u8"}])  \
          </script>');
});