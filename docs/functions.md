---
id: functions
title: Functions
---

### `vecView`

- `@param {string} path` Pathname of this view
- `@param {string} ref` Referer of this view

Send a page view.

### `vecLeave`

- `@param {string} path` Pathname of this view

Send a page leave.

### `vecEvent`

- `@param {string} path` Pathname of this event
- `@param {string} name` Event name
- `@param {Event|string} e` Event type

Send a user event.
