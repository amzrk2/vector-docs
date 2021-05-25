---
id: installation
title: Installation
---

## Get Source

```sh
git clone https://github.com/dsrkafuu/aofuji-analytics.git
cd aofuji-analytics
```

Checkout the latest release after cloned:

```sh
git checkout v0.1.4
```

:::note
You can get the latest release tag at [release page](https://github.com/dsrkafuu/aofuji-analytics/releases).
:::

## Setup Environment Variables

Create a `.env.production` file and set the only required environment variable `NODE_DATABASE_URL`. If you're using a locally installed MongoDB server, your setup looks like this:

```sh
echo "NODE_DATABASE_URL=mongodb://username:password@localhost:27017/dbname" > .env.production
```

:::note
Check out the [Environment Variables](environment-variables) for more optional variables.
:::

## Install Deps and Build

```sh
npm ci
npm run build
```

## Start Application

```sh
npm start
```

When the server starts up at port 3000, you can expose it directly to the public network (not recommended) or provide it to a reverse proxy.
