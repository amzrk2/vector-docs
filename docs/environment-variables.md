---
id: environment-variables
title: Environment Variables
---

## `NODE_DATABASE_URL`

> Example: `mongodb://username:password@host:port/database?options...`

MongoDB database connection string, see the [spec](http://docs.mongodb.org/manual/reference/connection-string/) for more detail.

## `NODE_MAXMIND_LICENSE`

Your MaxMind license key for downloading [GeoLite2 Free Geolocation Data](https://dev.maxmind.com/geoip/geoip2/geolite2/), if not set, build script will directly downloaded it from [geolite2-redist](https://www.npmjs.com/package/geolite2-redist).

## `NODE_SERVER_PORT`

> Example: `3000`

Application server port for exposing directly to the public network or providing to a reverse proxy.

## `VUE_APP_TRACKER_FILE`

> Example: `aofuji.min.js`

Custom tracker file output name, used in `npm run build`.

## `VUE_APP_BASE_URL`

> Example: `/`
