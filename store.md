---
layout: store
title: Merchandise
permalink: /store
slug: store
type_slug: store
headline: Merchandise
header_image: ""
background_image: ""
thumbnail_image: ""

# If "merchandise" is left as the "slug", it is causing some bug, that took me some time too.
# As will comment in Happi-Hours. Had to repeat the process a couple times.
# It removes the logo and causes problems, obviously changing the "url" & "identifier"
# under "menus" too. Started with this "merchandise" as the name/slug etc of everything, and
# it was giving problem but I didn't understand what was happening, everything was right
# and consistent. Fixed just by changing this ones to "store" instead of "merchandise".

# In summary:
# If "slug" and "permalink" are "merchandise", also "identifier" and "url" under menus.yml
# are "merchandise", the page "/merchandise" will break.
---

This is the Merchandise page (will have Add-To-Cart function).