var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\misc.js';
afterEach(_.cleanup);
test('queryByProp', function() {
  var _render = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
          },
        },
        _react.default.createElement(_reactNative.View, {
          testID: 'foo',
          importantForAccessibility: 'no',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          importantForAccessibility: 'no',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          importantForAccessibility: 'no-hide-descendants',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
          },
        }),
      ),
    ),
    container = _render.container;

  expect((0, _.queryByTestId)(container, 'foo')).not.toBeNull();
  expect((0, _.queryByProp)('importantForAccessibility', container, 'auto')).toBeNull();
  expect(function() {
    return (0, _.queryByProp)('importantForAccessibility', container, /no/);
  }).toThrow(/multiple elements/);
});
