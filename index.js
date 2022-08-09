/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  let skipped = Symbol('isSkipped'); // skipped flag
  let counter = Symbol('skippedCounter'); // counter for test "isSkipped" optimization

  /**
   * @param {import('postcss').Declaration} decl
   */
  function makeRuleOverflowOverlay(decl) {
    let rule = decl.parent;
    rule[counter] = Number.isInteger(rule[counter]) ? rule[counter] : 0;
    if (!rule[skipped]) {
      let values = decl.value.split(' ');
      if (values.includes('auto')) {
        const annotation = decl.prev();
        if (annotation && annotation.type === 'comment') {
          if (/overflow-overlay:\s*(off)/i.test(annotation.text)) {
            annotation.remove();
            return;
          }
        }
        decl.cloneAfter({ prop: decl.prop, value: values.map(v => (v === 'auto' ? 'overlay' : v)).join(' '), important: decl.important });
        rule[skipped] = true;
        rule[counter]++;
      }
    }
    // console.log(rule[counter]);
  }

  return {
    postcssPlugin: 'postcss-overflow-overlay',
    Declaration: {
      overflow: decl => makeRuleOverflowOverlay(decl),
      'overflow-x': decl => makeRuleOverflowOverlay(decl),
      'overflow-y': decl => makeRuleOverflowOverlay(decl)
    }
  };
};

module.exports.postcss = true;
