var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

require('@testing-library/jest-native/extend-expect');

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\rerender.js';
afterEach(_.cleanup);
test('rerender will re-render the element', function() {
  var Greeting = function Greeting(props) {
    return _react.default.createElement(
      _reactNative.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
        },
      },
      props.message,
    );
  };

  var _render = (0, _.render)(
      _react.default.createElement(Greeting, {
        message: 'hi',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
        },
      }),
    ),
    getByText = _render.getByText,
    rerender = _render.rerender;

  var message = getByText('hi');
  expect(message).toHaveTextContent('hi');
  rerender(
    _react.default.createElement(Greeting, {
      message: 'hey',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
      },
    }),
  );
  expect(message).toHaveTextContent('hey');
});
