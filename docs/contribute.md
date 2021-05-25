---
id: contribute
title: Contribute
---

## Local Development

First you need to fork this repo and clone it.

Then create a `.env.development` then set the development environment variables above. Check the [Environment Variables](environment-variables) section for more details.

After these, you can simply:

```sh
npm install
npm run dev
```

Local MongoDB server is also needed.

## Code Style

This project uses [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to format source code, so the git commands may be slow due to the [Prettier](https://prettier.io) formatting workflow.

### Options API Props Order

```
name => components
props => data => computed => watch
lifecycle functions
methods
render
```

### SCSS Scopes

All basic components in `@/components` should not use scoped styles, styles of those needs to be named like `a-component-ctx`.

Alternatively, all view components in `@/views` should use scoped styles.

## License

This project is released under `MIT License`, for more information read the [LICENSE](https://github.com/dsrkafuu/aofuji-analytics/blob/main/LICENSE).

Copyright © 2020-present DSRKafuU (<https://dsrkafuu.su>)
