var _queryHelpers = require('../query-helpers');

var _config = require('../config');

describe('validComponentFilter > no key provided', function() {
  test('returns `true` when node.type is a string', function() {
    expect(
      (0, _queryHelpers.validComponentFilter)({
        type: 'Text',
      }),
    ).toEqual(true);
  });
  test('validComponentFilter returns `false` when node.type is not in the mocked type list', function() {
    expect(
      (0, _queryHelpers.validComponentFilter)({
        type: function type() {},
      }),
    ).toEqual(false);
  });
});
describe('validComponentFilter > key provided', function() {
  test('validComponentFilter returns `true` when node.type is in the mocked type list', function() {
    (0, _config.configure)({
      testComponents: ['Text'],
    });
    expect(
      (0, _queryHelpers.validComponentFilter)(
        {
          type: 'Text',
        },
        'testComponents',
      ),
    ).toEqual(true);
  });
  test('validComponentFilter returns `false` when node.type is not in the mocked type list', function() {
    (0, _config.configure)({
      testComponents: ['Text'],
    });
    expect(
      (0, _queryHelpers.validComponentFilter)(
        {
          type: 'Test',
        },
        'testComponents',
      ),
    ).toEqual(false);
  });
});
test('proxyElement ignores what it should', function() {
  var testElement = (0, _queryHelpers.proxyElement)({
    _fiber: 'should work',
    find: jest.fn(),
    findAllByProps: jest.fn(),
    findAllByType: jest.fn(),
    findByProps: jest.fn(),
    findByType: jest.fn(),
    instance: jest.fn(),
  });
  expect(testElement._fiber).toBe('should work');
  expect(testElement.find).toBe(undefined);
  expect(testElement.findAllByProps).toBe(undefined);
  expect(testElement.findAllByType).toBe(undefined);
  expect(testElement.findByProps).toBe(undefined);
  expect(testElement.findByType).toBe(undefined);
  expect(testElement.instance).toBe(undefined);
});
