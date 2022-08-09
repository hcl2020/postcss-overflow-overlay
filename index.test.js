const postcss = require('postcss');

const plugin = require('./');

const css = String.raw;

async function testEqualResult(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it('with overflow: auto', async () => {
  await testEqualResult(
    css`
      div {
        overflow: auto;
      }
    `,
    css`
      div {
        overflow: auto;
        overflow: overlay;
      }
    `,
    {}
  );
});

it('with double overflow: auto', async () => {
  await testEqualResult(
    css`
      div {
        overflow: auto;
        overflow: auto;
      }
    `,
    css`
      div {
        overflow: auto;
        overflow: overlay;
        overflow: auto;
      }
    `,
    {}
  );
});

it('with overflow: auto !important', async () => {
  await testEqualResult(
    css`
      div {
        overflow: auto !important;
      }
    `,
    css`
      div {
        overflow: auto !important;
        overflow: overlay !important;
      }
    `,
    {}
  );
});

it('skip overflow: auto', async () => {
  await testEqualResult(
    css`
      div {
        /** overflow-overlay: off */
        overflow: auto;
      }
    `,
    css`
      div {
        overflow: auto;
      }
    `,
    {}
  );
});

it('with overflow-x: auto', async () => {
  await testEqualResult(
    css`
      div {
        overflow-x: auto;
      }
    `,
    css`
      div {
        overflow-x: auto;
        overflow-x: overlay;
      }
    `,
    {}
  );
});

it('with overflow-y: auto', async () => {
  await testEqualResult(
    css`
      div {
        overflow-y: auto;
      }
    `,
    css`
      div {
        overflow-y: auto;
        overflow-y: overlay;
      }
    `,
    {}
  );
});

it('with overflow: scroll', async () => {
  await testEqualResult(
    css`
      div {
        overflow: scroll;
      }
    `,
    css`
      div {
        overflow: scroll;
      }
    `,
    {}
  );
});

it('with overflow: scroll and auto', async () => {
  await testEqualResult(
    css`
      div {
        overflow: scroll;
        overflow: auto;
      }
    `,
    css`
      div {
        overflow: scroll;
        overflow: auto;
        overflow: overlay;
      }
    `,
    {}
  );
});

it('with overflow: auto and scroll', async () => {
  await testEqualResult(
    css`
      div {
        overflow: auto;
        overflow: scroll;
      }
    `,
    css`
      div {
        overflow: auto;
        overflow: overlay;
        overflow: scroll;
      }
    `,
    {}
  );
});

it('with overflow: hidden scroll', async () => {
  await testEqualResult(
    css`
      div {
        overflow: hidden scroll;
      }
    `,
    css`
      div {
        overflow: hidden scroll;
      }
    `,
    {}
  );
});

it('with overflow: hidden auto', async () => {
  await testEqualResult(
    css`
      div {
        overflow: hidden auto;
      }
    `,
    css`
      div {
        overflow: hidden auto;
        overflow: hidden overlay;
      }
    `,
    {}
  );
});

it('with overflow: auto hidden', async () => {
  await testEqualResult(
    css`
      div {
        height: auto;
        overflow: auto hidden;
      }
    `,
    css`
      div {
        height: auto;
        overflow: auto hidden;
        overflow: overlay hidden;
      }
    `,
    {}
  );
});
