---
layout: default
title: Videos
permalink: /videos/
youtubeId: putYourIDHere
vimeoId: putYourIDHere
twitchId: putYourIDHere

# https://github.com/nathancy/jekyll-embed-video#embed-youtube
---

{% include embed_players/youtubePlayer.html id=page.youtubeId %}

{% include embed_players/vimeoPlayer.html id=page.vimeoId %}

{% include embed_players/twitchPlayer.html id=page.twitchId %}