# Build Automation Tools

## Options

Flag        | Description
----------- | --------------------------------------------------
`--release` | Minimizes and optimizes the compiled output
`--verbose` | Prints detailed information to the console
`--analyze` | Launches [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer)
`--static`  | Renders [specified routes](./render.js#L15) as static html files
`--docker`  | Build an image from a Dockerfile
`--silent`  | Do not open the default browser

For example:

```sh
$ yarn run build --release --verbose      # Build the app in production mode
```

or

```sh
$ yarn start --release                    # Launch dev server in production mode
```

## Misc
* `run.js` - Helps to launch other scripts with `babel-node` (e.g. `babel-node tools/run build`)
* `.eslintrc` - ESLint overrides for built automation scripts
