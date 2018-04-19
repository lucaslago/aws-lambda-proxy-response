const shorthands = require('.');

describe('.ok()', () => {

  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.ok()).toEqual({ statusCode: 200});
    });
  });

  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 200, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.ok({ body, headers });

    expect(actual).toEqual(expected);
  });
});
