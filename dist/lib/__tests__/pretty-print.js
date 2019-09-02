var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\pretty-print.js';
afterEach(_.cleanup);
test('it prints correctly with no children', function() {
  var _render = (0, _.render)(
      _react.default.createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
        },
      }),
    ),
    container = _render.container;

  expect((0, _.prettyPrint)(container)).toMatchInlineSnapshot(
    '\n    "\x1B[36m<View\x1B[39m\n      \x1B[33mcollapsable\x1B[39m=\x1B[32m{true}\x1B[39m\n      \x1B[33mpointerEvents\x1B[39m=\x1B[32m\\"box-none\\"\x1B[39m\n      \x1B[33mstyle\x1B[39m=\x1B[32m{\n        Object {\n          \\"flex\\": 1,\n        }\n      }\x1B[39m\n    \x1B[36m>\x1B[39m\n      \x1B[36m<View />\x1B[39m\n    \x1B[36m</View>\x1B[39m"\n  ',
  );
});
test('it prints correctly with one child', function() {
  var _render2 = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
            },
          },
          'Hello World!',
        ),
      ),
    ),
    container = _render2.container;

  expect((0, _.prettyPrint)(container)).toMatchInlineSnapshot(
    '\n    "\x1B[36m<View\x1B[39m\n      \x1B[33mcollapsable\x1B[39m=\x1B[32m{true}\x1B[39m\n      \x1B[33mpointerEvents\x1B[39m=\x1B[32m\\"box-none\\"\x1B[39m\n      \x1B[33mstyle\x1B[39m=\x1B[32m{\n        Object {\n          \\"flex\\": 1,\n        }\n      }\x1B[39m\n    \x1B[36m>\x1B[39m\n      \x1B[36m<View>\x1B[39m\n        \x1B[36m<Text>\x1B[39m\n          \x1B[0mHello World!\x1B[0m\n        \x1B[36m</Text>\x1B[39m\n      \x1B[36m</View>\x1B[39m\n    \x1B[36m</View>\x1B[39m"\n  ',
  );
});
test('it prints correctly with multiple children', function() {
  var _render3 = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
            },
          },
          'Hello',
        ),
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
            },
          },
          'World!',
        ),
      ),
    ),
    container = _render3.container;

  expect((0, _.prettyPrint)(container)).toMatchInlineSnapshot(
    '\n    "\x1B[36m<View\x1B[39m\n      \x1B[33mcollapsable\x1B[39m=\x1B[32m{true}\x1B[39m\n      \x1B[33mpointerEvents\x1B[39m=\x1B[32m\\"box-none\\"\x1B[39m\n      \x1B[33mstyle\x1B[39m=\x1B[32m{\n        Object {\n          \\"flex\\": 1,\n        }\n      }\x1B[39m\n    \x1B[36m>\x1B[39m\n      \x1B[36m<View>\x1B[39m\n        \x1B[36m<Text>\x1B[39m\n          \x1B[0mHello\x1B[0m\n        \x1B[36m</Text>\x1B[39m\n        \x1B[36m<Text>\x1B[39m\n          \x1B[0mWorld!\x1B[0m\n        \x1B[36m</Text>\x1B[39m\n      \x1B[36m</View>\x1B[39m\n    \x1B[36m</View>\x1B[39m"\n  ',
  );
});
test('it supports truncating the output length', function() {
  var _render4 = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
            },
          },
          'Hello World!',
        ),
      ),
    ),
    container = _render4.container;

  expect((0, _.prettyPrint)(container, 5)).toMatch(/\.\.\./);
});
