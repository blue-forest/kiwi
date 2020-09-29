![Kiwi Bundle](./assets/cover.png)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftheblueforest%2Fkiwi-bundle.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftheblueforest%2Fkiwi-bundle?ref=badge_shield)

## Features
- TypeScript everywhere for a well-structured code
- project boilerplate ready in seconds
- all-in-one NPM package, no versions to manage
- sidekick CLI (start, test & build)


## Getting started
**./package.json** (required)
```json
{
  "name": "example",
  "version": "1.0.0",
  "scripts": {
    "start": "kiwi start",
    "test": "kiwi test",
    "build": "kiwi build"
  },
  "devDependencies": {
    "kiwi-bundle": "3.2.0"
  }
}
```

**./tsconfig.json** (required)
```json
{
  "extends": "./node_modules/kiwi-bundle/configs/ts/commonjs.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules",
    "src/**/*.test.ts",
    "src/**/*.test.tsx"
  ]
}
```

**./.gitignore** (recommended)
```
dist/
node_modules/
```

**./.eslintrc.json** (optional)
```json
{
  "extends": "./node_modules/kiwi-bundle/configs/eslint/bf.json"
}
```


## Additional packages

### [kiwi-bundle-react](https://github.com/theblueforest/kiwi-bundle-react)

### [kiwi-bundle-api](https://github.com/theblueforest/kiwi-bundle-api)

### [kiwi-bundle-cli](https://github.com/theblueforest/kiwi-bundle-cli)

### [kiwi-bundle-vscode](https://github.com/theblueforest/kiwi-bundle-vscode)


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftheblueforest%2Fkiwi-bundle.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftheblueforest%2Fkiwi-bundle?ref=badge_large)