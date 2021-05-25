---
id: basic-usage
title: Basic Usage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Init and Login

The username and password used for the first time login will be initialized as the administrator user (which can be changed later). So far (`v0.1.4`) it is not possible to retrieve a forgotten password, so please make sure to remember it.

<img alt="Login Page" src={useBaseUrl('img/login.png')} />

## Add a Website

Navigate to `Settings -> Website` then click the adding button:

<img alt="Website Page" src={useBaseUrl('img/website.png')} />

Please make sure your baseurl is set correctly, for example:

```
/                        # same as leave it empty
/subpath/
/subpath/subsubpath
```

<img alt="Website Adding" src={useBaseUrl('img/website-add.png')} />

## Get Tracker Code

Go back to Website list then click the code button.

If you don't set your own custom tracker name like mentioned in [Bypass Blocker](bypass-blocker), you'll get the tracker from the jsDelivr CDN:

<img alt="Tracker Code" src={useBaseUrl('img/tracker.png')} />

Copy the code and insert it into the `<head>` section of your website.

## Done

When enough data has been collected, the dashboard will display all the statistics.

<img alt="Dashboard Preview" src={useBaseUrl('img/dashboard.png')} />
