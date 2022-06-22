# PostCSS Overflow Overlay

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/hcl2020/postcss-overflow-overlay.svg
[ci]: https://travis-ci.org/hcl2020/postcss-overflow-overlay
[mit]: https://github.com/hcl2020/postcss-overflow-overlay/blob/master/LICENSE
[official docs]: https://github.com/postcss/postcss#usage
[releases history]: https://github.com/hcl2020/postcss-overflow-overlay/blob/master/CHANGELOG.md

[![npm](https://img.shields.io/npm/v/postcss-overflow-overlay.svg)](https://www.npmjs.com/package/postcss-overflow-overlay) [![Build Status][ci-img]][ci]
[![npm](https://img.shields.io/npm/dt/postcss-overflow-overlay.svg)](https://www.npmjs.com/package/postcss-overflow-overlay)

[PostCSS] plugin for adding 'overflow: overlay' style for elements with 'overflow: auto' style.

```css
.foo {
  /* Input example */
  overflow: auto;
}
```

```css
.foo {
  /* Output example */
  overflow: auto;
  overflow: overlay;
}
```

## 🍳 Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-overflow-overlay
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-overflow-overlay'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
