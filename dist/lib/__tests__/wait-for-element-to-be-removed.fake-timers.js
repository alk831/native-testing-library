var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName =
  'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\wait-for-element-to-be-removed.fake-timers.js';
afterEach(_.cleanup);
jest.useFakeTimers();
test('requires a function as the first parameter', function() {
  return expect((0, _.waitForElementToBeRemoved)()).rejects.toThrowErrorMatchingInlineSnapshot(
    '"waitForElementToBeRemoved requires a callback as the first parameter"',
  );
});
test('requires an element to exist first', function() {
  return expect(
    (0, _.waitForElementToBeRemoved)(function() {
      return null;
    }),
  ).rejects.toThrowErrorMatchingInlineSnapshot(
    '"The callback function which was passed did not return an element or non-empty array of elements. waitForElementToBeRemoved requires that the element(s) exist before waiting for removal."',
  );
});
test('requires an unempty array of elements to exist first', function() {
  return expect(
    (0, _.waitForElementToBeRemoved)(function() {
      return [];
    }),
  ).rejects.toThrowErrorMatchingInlineSnapshot(
    '"The callback function which was passed did not return an element or non-empty array of elements. waitForElementToBeRemoved requires that the element(s) exist before waiting for removal."',
  );
});
test('times out after 4500ms by default', function() {
  var _render = (0, _.render)(
      _react.default.createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
        },
      }),
    ),
    container = _render.container;

  var promise = expect(
    (0, _.waitForElementToBeRemoved)(function() {
      return container;
    }),
  ).rejects.toThrowErrorMatchingInlineSnapshot('"Timed out in waitForElementToBeRemoved."');
  jest.advanceTimersByTime(4501);
  return promise;
});
