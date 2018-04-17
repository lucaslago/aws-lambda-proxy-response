const removeFalsyProps = require('./remove_falsy_props');

describe('removeFalsyProps()', () => {
  it('should return a new object without falsy properties', () => {
    const expected = { func: () => {}, string: 'test', bool: true, body: '{}' };

    const actual = removeFalsyProps({ func: () => {}, string: 'test', bool: true, body: '{}', foo: undefined, bar: null, baz: 0});

    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });
});
