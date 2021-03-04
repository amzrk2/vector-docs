---
id: functions
title: Functions
---

### `useAofuji`

- `@param {string} ID` Website tracker ID
- `@param {string} API` Application API endpoint
- `@param {boolean} SPA` Optional. Whether apply automated tracker, if you are tracking an SPA, it should be set to `true` (default).

Exported with esm module. Returns an object which contains the three functions below.

### `aoView`

- `@param {string} path` Pathname of this view
- `@param {string} ref` Referer of this view

Send a page view.

### `aoLeave`

- `@param {string} path` Pathname of this view

Send a page leave.

### `aoEvent`

- `@param {string} path` Pathname of this event
- `@param {string} name` Event name
- `@param {Event|string} e` Event type

Send a user event.
