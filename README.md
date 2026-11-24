# Home decorating

A small installable web app built from the *Whole-Home Decorating & Where-to-Buy Shopping List*.

- **Rooms**: the colour scheme for each room, drawn as a painted wall, with finishes and pairings.
- **Shopping**: a tick-list of every paint, wrap and tool, with where to buy and guide prices. Filter by the shop you're standing in, and hide what you've already bought.
- **Order**: the rabbit-safe painting order, with drying and airing times.
- **Stores**: local shops with opening hours, an open-now indicator and directions, plus online suppliers.

Ticks are saved on the device. The app works offline once it has been opened.

## Hosting on GitHub Pages

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick **main** and **/ (root)**, then **Save**.
3. After a minute the app is live at **https://taffypride.github.io/homedecor/**.

## Installing on a phone

- **Android (Chrome)**: open the link and tap **Install app** at the top, or use the menu → *Add to Home screen*.
- **iPhone (Safari)**: open the link, tap **Share**, then **Add to Home Screen**.

## Updating

Edit the data at the top of `app.js`, then bump `CACHE` in `sw.js` (for example `homedecor-v2`) so installed copies pick up the change.

## Credits

Fonts: [Bitter](https://github.com/solmatas/BitterPro) and [DM Sans](https://github.com/googlefonts/dm-fonts), both under the SIL Open Font License (see `fonts/`).
Paint colours on screen are approximations of the Dulux shades.
