const shorthands = require('.');

describe('.badRequest()', () => {

  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.badRequest()).toEqual({ statusCode: 400, body: '{}' });
    });
  });

  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 400, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.badRequest({ body, headers });

    expect(actual).toEqual(expected);
  });
});
