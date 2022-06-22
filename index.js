/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  let skipped = Symbol('isSkipped'); // skipped flag
  let counter = Symbol('skippedCounter'); // counter for test "isSkipped" optimization

  function makeRuleOverflowOverlay(decl) {
    let rule = decl.parent;
    rule[counter] = Number.isInteger(rule[counter]) ? rule[counter] : 0;
    if (!rule[skipped]) {
      if (decl.value === 'auto') {
        let hasOverlay = rule.some(i => i.value === 'overlay');
        if (!hasOverlay) {
          rule.append({ prop: decl.prop, value: 'overlay' });
        }
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
