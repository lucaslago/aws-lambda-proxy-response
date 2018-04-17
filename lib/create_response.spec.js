const createResponse = require('./create_response');

describe('.createResponse()', () => {
  it('should use statusCode, body and headers arguments to build object', () => {
    const expected = { statusCode: 666, body: '{"hello":"world"}', headers: {'Content-Type': 'application/json'}};

    const actual = createResponse({statusCode: 666, body: {hello: 'world'}, headers: {'Content-Type': 'application/json'}});

    expect(actual).toEqual(expected);
  });
});
