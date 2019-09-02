var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\within.js';
afterEach(_.cleanup);
test('it works when scoping to a smaller set of elements', function() {
  var _render = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
          },
        },
        _react.default.createElement(
          _reactNative.View,
          {
            testID: 'filter-box',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11,
            },
          },
          _react.default.createElement(_reactNative.Button, {
            testID: 'search-button',
            onPress: jest.fn(),
            title: 'press me',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12,
            },
          }),
        ),
      ),
    ),
    getByTestId = _render.getByTestId;

  (0, _.within)(getByTestId('filter-box')).getByTestId('search-button');
});
