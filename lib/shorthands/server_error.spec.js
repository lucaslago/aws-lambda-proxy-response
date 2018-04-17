const shorthands = require('.');

describe('shorthands.serverError()', () => {
  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.serverError()).toEqual({statusCode: 500});
    });
  });
  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 500, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.serverError({ body, headers });

    expect(actual).toEqual(expected);
  });
});
