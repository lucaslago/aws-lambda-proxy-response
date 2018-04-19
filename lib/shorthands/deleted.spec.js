const shorthands = require('.');

describe('.deleted()', () => {

  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.deleted()).toEqual({ statusCode: 204 });
    });
  });

  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 204, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.deleted({ body, headers });

    expect(actual).toEqual(expected);
  });
});
