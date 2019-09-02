var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\debug.js';
beforeEach(function() {
  jest.spyOn(console, 'log').mockImplementation(function() {});
});
afterEach(function() {
  (0, _.cleanup)();
  console.log.mockRestore();
});
test('debug pretty prints the baseElement', function() {
  var HelloWorld = function HelloWorld() {
    return _react.default.createElement(
      _reactNative.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
        },
      },
      'Hello World',
    );
  };

  var _render = (0, _.render)(
      _react.default.createElement(HelloWorld, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
        },
      }),
    ),
    debug = _render.debug;

  debug();
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Hello World'));
});
