---
id: mongodb-atlas-guide
title: MongoDB Atlas Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Get a Cluster

Go to [MongoDB Altas](https://www.mongodb.com/cloud/atlas) and create a free account.

Then follow the introduction and create your own cluster:

<img alt="MongoDB Altas Create" src={useBaseUrl('img/atlas.jpg')} />

:::note
Select a region that is close to your server/function region will improve the response time of the application.
:::

## Setup Network Access

Navigate to `Network Access` and add your server ip or serverless function source ip to IP Access List:

<img alt="MongoDB Altas Network Access" src={useBaseUrl('img/atlas-access.jpg')} />

## Setup User

Navigate to `Database Access` and add a new user, grant specific privileges for the user:

<img alt="MongoDB Altas Database Access" src={useBaseUrl('img/atlas-user.jpg')} />

## Get the Connecting String

Navigate to `Clusters` then click connect button, choose "Connect your application", then you can get the connecting string:

```
mongodb+srv://<username>:<password>@mycluster.xxxxx.mongodb.net/<databasename>?retryWrites=true&w=majority
```
