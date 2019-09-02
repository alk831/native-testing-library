var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\render.js';
afterEach(_.cleanup);
test('renders View', function() {
  var _render = (0, _.render)(
      _react.default.createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
        },
      }),
    ),
    container = _render.container;

  expect(container).not.toBeNull();
});
test('returns container', function() {
  var _render2 = (0, _.render)(
      _react.default.createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
        },
      }),
    ),
    container = _render2.container;

  expect(container).toBeTruthy();
});
it('supports fragments', function() {
  var Test = (function(_React$Component) {
    (0, _inherits2.default)(Test, _React$Component);

    function Test() {
      (0, _classCallCheck2.default)(this, Test);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Test).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Test, [
      {
        key: 'render',
        value: function render() {
          return _react.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22,
              },
            },
            _react.default.createElement(
              _reactNative.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                },
              },
              'Fragments are pretty cool!',
            ),
          );
        },
      },
    ]);
    return Test;
  })(_react.default.Component);

  var _render3 = (0, _.render)(
      _react.default.createElement(Test, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
        },
      }),
    ),
    asJSON = _render3.asJSON,
    unmount = _render3.unmount;

  expect(asJSON()).toMatchSnapshot();
  unmount();
  expect(asJSON()).toBeNull();
});
test('renders options.wrapper around node', function() {
  var WrapperComponent = function WrapperComponent(_ref) {
    var children = _ref.children;
    return _react.default.createElement(
      _reactNative.SafeAreaView,
      {
        testID: 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
        },
      },
      children,
    );
  };

  var _render4 = (0, _.render)(
      _react.default.createElement(_reactNative.View, {
        testID: 'inner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
        },
      }),
      {
        wrapper: WrapperComponent,
      },
    ),
    container = _render4.container,
    getByTestId = _render4.getByTestId;

  expect(getByTestId('wrapper')).toBeTruthy();
  expect(container).toMatchInlineSnapshot(
    '\n    <View\n      collapsable={true}\n      pointerEvents="box-none"\n      style={\n        Object {\n          "flex": 1,\n        }\n      }\n    >\n      <SafeAreaView\n        testID="wrapper"\n      >\n        <View\n          testID="inner"\n        />\n      </SafeAreaView>\n    </View>\n  ',
  );
});
