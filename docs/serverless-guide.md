---
id: serverless-guide
title: Serverless Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Deploy on Vercel

Go to [Vercel](https://vercel.com/) and sign up a free account.

From the dashboard click "New Project" then specify the URL to your fork of the application on GitHub.

Set the required environment variable `DATABASE_URL` like mentioned in [Environment Variables](environment-variables#database_url).

<img alt="Vercel Env" src={useBaseUrl('img/vercel.jpg')} />

After the deployment is finished, follow the instructions in [Basic Usage](basic-usage) to setup the application.

## Deploy on Netlify

:::caution
Netlify and AWS Lambda support is still work in progress.
:::
