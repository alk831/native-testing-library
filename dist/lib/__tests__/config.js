var _config = require('../config');

describe('configuration API', function() {
  var originalConfig;
  beforeEach(function() {
    (0, _config.configure)(function(existingConfig) {
      originalConfig = existingConfig;
      return {};
    });
  });
  afterEach(function() {
    (0, _config.configure)(originalConfig);
  });
  beforeEach(function() {
    (0, _config.configure)({
      foo: '123',
      bar: '456',
    });
  });
  describe('getConfig', function() {
    test('returns existing configuration', function() {
      var conf = (0, _config.getConfig)();
      expect(conf.foo).toEqual('123');
    });
  });
  describe('configure', function() {
    test('merges a delta rather than replacing the whole config', function() {
      var conf = (0, _config.getConfig)();
      expect(conf).toMatchObject({
        foo: '123',
        bar: '456',
      });
    });
    test('overrides existing values', function() {
      (0, _config.configure)({
        foo: '789',
      });
      var conf = (0, _config.getConfig)();
      expect(conf.foo).toEqual('789');
    });
    test('passes existing config out to config function', function() {
      (0, _config.configure)(function(existingConfig) {
        return {
          foo: existingConfig.foo + '-derived',
        };
      });
      var conf = (0, _config.getConfig)();
      expect(conf).toMatchObject({
        foo: '123-derived',
      });
    });
    test('asyncWrapper callback exists by default', function() {
      var callback = jest.fn();
      (0, _config.getConfig)().asyncWrapper(callback);
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
