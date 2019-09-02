var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _snapshotDiff = require('snapshot-diff');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\misc.js';
afterEach(_.cleanup);
test('<Picker /> works', function() {
  function Wrapper() {
    var _React$useState = _react.default.useState('js'),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

    return _react.default.createElement(
      _reactNative.Picker,
      {
        selectedValue: value,
        onValueChange: function onValueChange(itemValue) {
          return setValue(itemValue);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
        },
      },
      _react.default.createElement(_reactNative.Picker.Item, {
        label: 'Java',
        value: 'java',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
        },
      }),
      _react.default.createElement(_reactNative.Picker.Item, {
        label: 'JavaScript',
        value: 'js',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
        },
      }),
    );
  }

  var _render = (0, _.render)(
      _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
        },
      }),
    ),
    findByDisplayValue = _render.findByDisplayValue,
    getByDisplayValue = _render.getByDisplayValue;

  _.fireEvent.valueChange(getByDisplayValue('js'), 'java');

  expect(function() {
    return findByDisplayValue('js');
  }).not.toThrow();
});
test('fragments can show diffs', function() {
  function TestComponent() {
    var _React$useState3 = _react.default.useState(0),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      count = _React$useState4[0],
      setCount = _React$useState4[1];

    return _react.default.createElement(_reactNative.Button, {
      onPress: function onPress() {
        return setCount(function(count) {
          return count + 1;
        });
      },
      title: 'Click to increase: ' + count,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
      },
    });
  }

  expect.extend({
    toMatchDiffSnapshot: _snapshotDiff.toMatchDiffSnapshot,
  });

  var _render2 = (0, _.render)(
      _react.default.createElement(TestComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
        },
      }),
    ),
    getByText = _render2.getByText,
    asJSON = _render2.asJSON;

  var firstRender = asJSON();

  _.fireEvent.press(getByText(/Click to increase/));

  expect(firstRender).toMatchDiffSnapshot(asJSON());
});
test('finds only valid children', function() {
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    return _react.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
        },
      },
      children,
    );
  };

  var _render3 = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
          },
        },
        _react.default.createElement(
          Wrapper,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
            },
          },
          _react.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54,
              },
            },
            'hey',
          ),
          _react.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55,
              },
            },
            'sup',
          ),
          _react.default.createElement(_reactNative.View, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
            },
          }),
        ),
      ),
    ),
    container = _render3.container;

  expect(container.children[0].children[0].children[0].children[0]).toBe('hey');
});
test('it finds only valid parents', function() {
  var Wrapper = function Wrapper(_ref2) {
    var children = _ref2.children;
    return _react.default.createElement(
      _reactNative.View,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
        },
      },
      children,
    );
  };

  var _render4 = (0, _.render)(
      _react.default.createElement(
        _reactNative.View,
        {
          testID: 'view',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
          },
        },
        _react.default.createElement(
          Wrapper,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76,
            },
          },
          _react.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77,
              },
            },
            'hey',
          ),
          _react.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78,
              },
            },
            'sup',
          ),
        ),
      ),
    ),
    baseElement = _render4.baseElement,
    getByText = _render4.getByText;

  expect(getByText('hey').parentNode.parentNode.props.testID).toBe('view');
  expect(baseElement.parentNode).toBeNull();
});
