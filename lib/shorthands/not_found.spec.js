const shorthands = require('.');

describe('shorthands.notFound()', () => {
  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.notFound()).toEqual({statusCode: 404});
    });
  });
  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 404, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.notFound({ body, headers });

    expect(actual).toEqual(expected);
  });
});
