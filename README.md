# Webpack Demo

On 2020/10/21 starting the styling section at
https://survivejs.com/webpack/styling/

The code in this repository is based on the
[Webpack Book](https://survivejs.com/webpack).

```bash
npx serve # in the dist directory
npm run build -- --watch # failed with webpack-nano maybe need the full cli
```

## Notes

- webpack-dev-server require webpack-cli to be installed
- webpack-plugin-serve require an active LTS version of node

## fs polling - for vms, docker as file watching may not work

```javascript title="webpack.config.js"
module.exports = {
  watchOptions: {
    // Delay the rebuild after the first change (in ms)
    aggregateTimeout: 300,
    // Poll using interval (in ms, accepts a boolean too)
    poll: 1000,
    // Ignore node_modules to decrease CPU usage
    ignored: /node_modules/,
  },
};
```
