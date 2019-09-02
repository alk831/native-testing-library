var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\bugs.js';
afterEach(_.cleanup);
test('returns the queries passed as options bound to the container', function() {
  var queryAllBySelectionColor = _.queryAllByProp.bind(null, 'selectionColor');

  var queries = {
    queryAllBySelectionColor: queryAllBySelectionColor,
  };

  var _render = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            selectionColor: 'blue',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17,
            },
          },
          'hello world',
        ),
      ),
      {
        queries: queries,
      },
    ),
    queryAllByImplementationDetail = _render.queryAllBySelectionColor;

  expect(queryAllByImplementationDetail('blue')).toHaveLength(1);
});
