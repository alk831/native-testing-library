var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\to-json.js';
afterEach(_.cleanup);
test('it converts to json', function() {
  function ParentComponent(_ref) {
    var children = _ref.children;
    return _react.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
        },
      },
      children,
    );
  }

  function MiddleComponent(_ref2) {
    var children = _ref2.children;
    return _react.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
        },
      },
      _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
          },
        },
        children,
      ),
    );
  }

  var _render = (0, _.render)(
      _react.default.createElement(
        ParentComponent,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
          },
        },
        _react.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
            },
          },
          _react.default.createElement(
            MiddleComponent,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24,
              },
            },
            'hello',
          ),
          _react.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25,
              },
            },
            _react.default.createElement(
              _reactNative.Text,
              {
                onPress: jest.fn(),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                },
              },
              'world',
            ),
            _react.default.createElement(
              _reactNative.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                },
              },
              'foo bar',
            ),
          ),
          _react.default.createElement(_reactNative.View, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
            },
          }),
        ),
      ),
    ),
    baseElement = _render.baseElement,
    container = _render.container;

  expect((0, _.prettyPrint)(container)).toMatchSnapshot();
  expect((0, _.prettyPrint)(baseElement)).toMatchSnapshot();
});
test('it handles an no argument', function() {
  expect((0, _.toJSON)()).toBeNull();
});
test('it handles hidden nodes', function() {
  expect(
    (0, _.toJSON)({
      _fiber: {
        stateNode: {
          isHidden: true,
        },
      },
    }),
  ).toBeNull();
});
test('it handles invalid nodes', function() {
  expect(function() {
    return (0, _.toJSON)({
      _fiber: {
        stateNode: {
          tag: 'FAKE',
        },
      },
    });
  }).toThrow();
});
