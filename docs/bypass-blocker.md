---
id: bypass-blocker
title: Bypass Blocker
---

Add `VUE_APP_TRACKER_FILE` environment variable to your `.env.production` to customize the tracker script name, for example:

```
VUE_APP_TRACKER_FILENAME="jquery.min.js"
```

The tracker will output to the `dist` folder, you can upload it to the CDN or use it directly like in `Settings -> Website`.
