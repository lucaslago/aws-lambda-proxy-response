const libraryModule = require('.');

describe('Library module', () => {
  it('should return a function', () => {
    expect(typeof libraryModule).toBe('function');
  });

  it('should return an object containing response factory functions', () => {
    const response = libraryModule();
    expect(typeof response).toBe('object');
  });

  describe('when options arguments is given', () => {
    it('should include default options on all response objects', () => {
      const defaultOptions = {
        headers: {
          'Content-Type': 'appplication/json'
        },
        body: { message: 'Hello' }
      };

      const response = libraryModule(defaultOptions);

      expect(response.ok()).toEqual({statusCode: 200, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.created()).toEqual({statusCode: 201, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.deleted()).toEqual({statusCode: 204, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.badRequest()).toEqual({statusCode: 400, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.unauthorized()).toEqual({statusCode: 401, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.forbidden()).toEqual({statusCode: 403, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.serverError()).toEqual({statusCode: 500, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.notFound()).toEqual({statusCode: 404, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.unprocessableEntity()).toEqual({statusCode: 422, headers: defaultOptions.headers, body: defaultOptions.body });
      expect(response.createResponse({ statusCode: 123 })).toEqual({statusCode: 123, headers: defaultOptions.headers, body: defaultOptions.body });
    });

    it('should give preference to response data over default options', () => {
      const expected = { headers: {'X-API-KEY': 'FAKE'}, body: '{"foo":"bar"}' };

      const defaultOptions = {
        headers: {
          'Content-Type': 'appplication/json'
        },
        body: {
          message: 'hello world!'
        }
      };
      const data = {
        body: { foo: 'bar' },
        headers: {'X-API-KEY': 'FAKE'}
      };

      const response = libraryModule(defaultOptions);

      expect(response.ok(data)).toEqual(expect.objectContaining(expected));
      expect(response.created(data)).toEqual(expect.objectContaining(expected));
      expect(response.deleted(data)).toEqual(expect.objectContaining(expected));
      expect(response.badRequest(data)).toEqual(expect.objectContaining(expected));
      expect(response.unauthorized(data)).toEqual(expect.objectContaining(expected));
      expect(response.forbidden(data)).toEqual(expect.objectContaining(expected));
      expect(response.serverError(data)).toEqual(expect.objectContaining(expected));
      expect(response.notFound(data)).toEqual(expect.objectContaining(expected));
      expect(response.unprocessableEntity(data)).toEqual(expect.objectContaining(expected));
      expect(response.createResponse(data)).toEqual(expect.objectContaining(expected));
    });
  });
});
