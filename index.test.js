const postcss = require('postcss');

const plugin = require('./');

async function testEqualResult(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it('with overflow: auto', async () => {
  await testEqualResult('div{ overflow: auto; }', 'div{ overflow: auto; overflow: overlay; }', {});
});

it('with overflow-x: auto', async () => {
  await testEqualResult('div{ overflow-x: auto; }', 'div{ overflow-x: auto; overflow-x: overlay; }', {});
});

it('with overflow-y: auto', async () => {
  await testEqualResult('div{ overflow-y: auto; }', 'div{ overflow-y: auto; overflow-y: overlay; }', {});
});

it('with overflow: scroll', async () => {
  await testEqualResult('div{ overflow: scroll; }', 'div{ overflow: scroll; }', {});
});
