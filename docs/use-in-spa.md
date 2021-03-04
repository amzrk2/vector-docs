---
id: use-in-spa
title: Use in SPA (Single Page Application)
sidebar_label: Use in SPA
---

Though it is possible to add the auto tracker in SPA using the state of the History API, we don't do so for a couple of reasons, for example using a hash route or custom route. Setting the tracker manually for best results is recommended.

:::note
Directly use the tracker script from the CDN as mentioned in [Basic Usage](basic-usage) is supported, all tracker functions will be mounted on global `window` after tracker initialization.
:::

## Installation

Install the dedicated tracker package:

```sh
npm install --save aofuji-tracker
```

## Usage

Import and initialize the tracker in your app:

```js
import useAofuji from 'aofuji-tracker';

// setting website id in env variables is recommended
const id = process.env.AOFUJI_ID;
// you can get id and api in the control panel same as basic usage
const { aoView, aoLeave, aoEvent } = useAofuji(id, 'https://my-analytics.example.org/api');
```

Track the router push in you app (Vue Router example):

```js
router.afterEach((to, from) => {
  if (!window._aofuji_push) {
    window._aofuji_push = true;
    aoView(to.path, document.referrer); // if first view, send referrer
  } else {
    aoView(to.path); // report view
  }
  if (window._aofuji_push && from.name !== null) {
    aoLeave(from.path); // report leave
  }
});
```

Also track leave when browser or tab is closed:

```js
// safari doesn't fire the `visibilitychange` and `beforeunload` when navigating away from a document
window.addEventListener('pagehide', () => {
  aoLeave(window.location.pathname);
});
```
