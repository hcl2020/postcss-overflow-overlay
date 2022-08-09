# PostCSS Overflow Overlay

[postcss]: https://github.com/postcss/postcss
[mit]: https://github.com/hcl2020/postcss-overflow-overlay/blob/master/LICENSE
[official docs]: https://github.com/postcss/postcss#usage
[releases history]: https://github.com/hcl2020/postcss-overflow-overlay/blob/master/CHANGELOG.md

[![npm](https://img.shields.io/npm/v/postcss-overflow-overlay.svg)](https://www.npmjs.com/package/postcss-overflow-overlay)
[![npm](https://img.shields.io/npm/dt/postcss-overflow-overlay.svg)](https://www.npmjs.com/package/postcss-overflow-overlay)

[PostCSS] plugin for adding 'overflow: overlay' style for elements with 'overflow: auto' style.

```css
/* Input example */
.foo {
  overflow: auto;
}

/* Output example */
.foo {
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

## 📝 More Example

```css
/* Input */
.foo {
  overflow-x: auto;
}

/* Output */
.foo {
  overflow-x: auto;
  overflow-x: overlay;
}
```

```css
/* Input */
.foo {
  overflow: hidden auto;
}

/* Output */
.foo {
  overflow: hidden auto;
  overflow: hidden overlay;
}
```

```css
/* Input */
.foo {
  overflow: auto !important;
}

/* Output */
.foo {
  overflow: auto !important;
  overflow: overlay !important;
}
```

```css
/* Input */
.foo {
  overflow: auto;
  overflow: scroll;
}

/* Output */
.foo {
  overflow: auto;
  overflow: overlay;
  overflow: scroll;
}
```

```css
/* Input */
.foo {
  overflow: auto;
  overflow: auto;
}

/* Output */
.foo {
  overflow: auto;
  overflow: overlay;
  overflow: auto;
}
```

```css
/* Input */
.foo {
  /** overflow-overlay: off */
  overflow: auto;
}

/* Output */
.foo {
  overflow: auto;
}
```

[official docs]: https://github.com/postcss/postcss#usage
