const shorthands = require('.');

describe('.unauthorized()', () => {

  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.unauthorized()).toEqual({ statusCode: 401, body: '{}' });
    });
  });

  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 401, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.unauthorized({ body, headers });

    expect(actual).toEqual(expected);
  });
});
