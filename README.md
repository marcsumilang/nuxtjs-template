# naks

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# ADDITIONAL INFORMATION

## Install AOS on NuxtJs
reference: https://github.com/michalsnik/aos#1-initialize-aos

First thing to do is create your own plugin and paste this code.
``import AOS from "aos";``
``import "aos/dist/aos.css";``

``export default ({ app }) => {``
  ``app.AOS = new AOS.init(); // eslint-disable-line new-cap``
``};``

After this next thing you need to do is setup your nuxt.config.js
``{ src: '~/plugins/aos', mode: 'client'}``

Make your mode is only setup in client side only or else you'll get an error about `document`.  
