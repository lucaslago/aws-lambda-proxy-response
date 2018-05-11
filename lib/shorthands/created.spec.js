const shorthands = require('.');

describe('.created()', () => {

  describe('when no arguments are given', () => {
    it('should fallback to standard values', () => {
      expect(shorthands.created()).toEqual({ statusCode: 201, body: '{}' });
    });
  });

  it('should allow passing body and headers as arguments', () => {
    const expected = { statusCode: 201, body: '{"hello":"world"}', headers: {'foo':'bar'} };
    const body = { hello: 'world' };
    const headers = {'foo': 'bar'};

    const actual = shorthands.created({ body, headers });

    expect(actual).toEqual(expected);
  });
});
