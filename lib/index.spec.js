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
      const options = {
        headers: {
          'Content-Type': 'appplication/json'
        },
        body: { message: 'Hello' }
      };

      const response = libraryModule(options);

      expect(response.ok()).toEqual({statusCode: 200, headers: options.headers, body: options.body });
      expect(response.created()).toEqual({statusCode: 201, headers: options.headers, body: options.body });
      expect(response.deleted()).toEqual({statusCode: 204, headers: options.headers, body: options.body });
      expect(response.badRequest()).toEqual({statusCode: 400, headers: options.headers, body: options.body });
      expect(response.unauthorized()).toEqual({statusCode: 401, headers: options.headers, body: options.body });
      expect(response.forbidden()).toEqual({statusCode: 403, headers: options.headers, body: options.body });
      expect(response.serverError()).toEqual({statusCode: 500, headers: options.headers, body: options.body });
      expect(response.notFound()).toEqual({statusCode: 404, headers: options.headers, body: options.body });
      expect(response.createResponse({ statusCode: 123 })).toEqual({statusCode: 123, headers: options.headers, body: options.body });
    });

    it('should give preference to response arguments over default options', () => {
      const expected = { headers: {'X-API-KEY': 'FAKE'}, body: '{"foo":"bar"}' };
      const options = {
        headers: {
          'Content-Type': 'appplication/json'
        },
        body: {
          message: 'hello world!'
        }
      };
      const parameters = {
        body: { foo: 'bar' },
        headers: {'X-API-KEY': 'FAKE'}
      };

      const response = libraryModule(options);

      expect(response.ok(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.created(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.deleted(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.badRequest(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.unauthorized(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.forbidden(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.serverError(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.notFound(parameters)).toEqual(expect.objectContaining(expected));
      expect(response.createResponse(parameters)).toEqual(expect.objectContaining(expected));
    });
  });
});
