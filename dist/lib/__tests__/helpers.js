var _helpers = require('../helpers');

test('if setImmediate is available, use it', function() {
  var setImmediateMock = jest.fn();
  global.setImmediate = setImmediateMock;
  expect((0, _helpers.getSetImmediate)()).toBe(setImmediateMock);
});
test('if setImmediate is not available, use setTimeout', function() {
  var setImmediateMock = {};
  var setTimeoutMock = jest.fn();
  global.setImmediate = setImmediateMock;
  global.setTimeout = setTimeoutMock;
  var setImmediate = (0, _helpers.getSetImmediate)();
  expect(setImmediate).not.toBe(setImmediateMock);
  setImmediate();
  expect(setTimeoutMock).toHaveBeenCalledTimes(1);
});
