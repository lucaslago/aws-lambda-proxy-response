const shorthands = require('.');

describe('.forbidden()', () => {

  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.forbidden()).toEqual({statusCode: 403});
    });
  });

  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 403, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.forbidden({ body, headers });

    expect(actual).toEqual(expected);
  });
});
