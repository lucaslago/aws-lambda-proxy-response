const response = require('.');

describe('Response', () => {
  describe('.withDefaults()', () => {
    it('should return an object not containing "withDefaults" function itself', () => {
      const expected = false;
      const customResponses = response.withDefaults();

      const actual = Object.keys(customResponses).includes('withDefaults');

      expect(actual).toEqual(expected);
    });

    it('should return an object containing all short-hand functions', () => {
      const expected = Object.keys(response).filter(funcName => funcName !== 'withDefaults');

      const customResponses = response.withDefaults();

      expect(Object.keys(customResponses)).toEqual(expected);
    });

    it('should include default parameters on all short-hand functions', () => {
      const defaultParams = {
        headers: {
          'Content-Type': 'appplication/json'
        }
      };

      const customResponses = response.withDefaults(defaultParams);

      expect(customResponses.ok()).toEqual({statusCode: 200, headers: defaultParams.headers});
      expect(customResponses.created()).toEqual({statusCode: 201, headers: defaultParams.headers});
      expect(customResponses.deleted()).toEqual({statusCode: 204, headers: defaultParams.headers});
      expect(customResponses.badRequest()).toEqual({statusCode: 400, headers: defaultParams.headers});
      expect(customResponses.unauthorized()).toEqual({statusCode: 401, headers: defaultParams.headers});
      expect(customResponses.forbidden()).toEqual({statusCode: 403, headers: defaultParams.headers});
      expect(customResponses.serverError()).toEqual({statusCode: 500, headers: defaultParams.headers});
      expect(customResponses.notFound()).toEqual({statusCode: 404, headers: defaultParams.headers});
      expect(customResponses.createResponse({ statusCode: 123 })).toEqual({statusCode: 123, headers: defaultParams.headers});
    });

    it('should give preference to function arguments over default parameters', () => {
      const expected = { statusCode: 200, headers: {'bar': 'baz'}, body: '{"foo":"bar"}'};
      const defaultParams = {
        headers: {
          'Content-Type': 'appplication/json'
        }
      };

      const customResponses = response.withDefaults(defaultParams);

      expect(customResponses.ok({body: {foo: 'bar'}, headers: {'bar': 'baz'}})).toEqual(expected);
    });
  });
});
