var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

require('@testing-library/jest-native/extend-expect');

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\events.js';
afterEach(_.cleanup);
Object.keys(_.eventMap).forEach(function(key) {
  describe(key + ' events', function() {
    var config = _.eventMap[key];
    config.forEach(function(event) {
      var spy = jest.fn();
      var handlerName = (0, _.getEventHandlerName)(event);

      var _render = (0, _.render)(
          _react.default.createElement(key, (0, _defineProperty2.default)({}, handlerName, spy)),
        ),
        _render$container$chi = (0, _slicedToArray2.default)(_render.container.children, 1),
        target = _render$container$chi[0];

      _.fireEvent[event](target);

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
test('onChange works', function() {
  var handleChange = jest.fn();

  var _render2 = (0, _.render)(
      _react.default.createElement(_reactNative.TextInput, {
        onChange: handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
        },
      }),
    ),
    _render2$container$ch = (0, _slicedToArray2.default)(_render2.container.children, 1),
    input = _render2$container$ch[0];

  _.fireEvent.change(input, {
    target: {
      value: 'a',
    },
  });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
test('onChangeText works', function() {
  function OnChangeText() {
    var _React$useState = _react.default.useState('first'),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

    return _react.default.createElement(_reactNative.TextInput, {
      onChangeText: setText,
      value: text,
      testID: 'input',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
      },
    });
  }

  var _render3 = (0, _.render)(
      _react.default.createElement(OnChangeText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
        },
      }),
    ),
    getByTestId = _render3.getByTestId;

  var input = getByTestId('input');
  expect(input.props.value).toBe('first');

  _.fireEvent.changeText(input, 'second');

  expect(input.props.value).toBe('second');
});
test('assigns target properties', function _callee() {
  var MyComponent, spy, value, _render4, getByTestId, input;

  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          MyComponent = (function(_React$Component) {
            (0, _inherits2.default)(MyComponent, _React$Component);

            function MyComponent() {
              var _getPrototypeOf2;

              var _this;

              (0, _classCallCheck2.default)(this, MyComponent);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MyComponent)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args),
                ),
              );
              _this.state = {
                value: '',
              };

              _this.onChange = function(_ref) {
                var nativeEvent = _ref.nativeEvent;

                _this.setState({
                  value: nativeEvent.text,
                });

                _this.props.onChange();
              };

              return _this;
            }

            (0, _createClass2.default)(MyComponent, [
              {
                key: 'render',
                value: function render() {
                  return _react.default.createElement(_reactNative.TextInput, {
                    testID: 'input',
                    value: this.state.value,
                    onChange: this.onChange,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                    },
                  });
                },
              },
            ]);
            return MyComponent;
          })(_react.default.Component);

          spy = jest.fn();
          value = 'a';
          (_render4 = (0, _.render)(
            _react.default.createElement(MyComponent, {
              onChange: spy,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75,
              },
            }),
          )),
            (getByTestId = _render4.getByTestId);
          input = getByTestId('input');

          _.fireEvent.change(input, {
            nativeEvent: {
              text: value,
            },
          });

          expect(spy).toHaveBeenCalledTimes(1);
          _context.next = 9;
          return _regenerator.default.awrap(
            (0, _.wait)(function() {
              return expect(input.props.value).toBe(value);
            }),
          );

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  });
});
test('calling `fireEvent` directly works too', function() {
  var handleEvent = jest.fn();

  var _render5 = (0, _.render)(
      _react.default.createElement(_reactNative.Button, {
        onPress: handleEvent,
        title: 'test',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
        },
      }),
    ),
    container = _render5.container;

  (0, _.fireEvent)(container.children[0], new NativeTestEvent('press'));
  expect(handleEvent).toBeCalledTimes(1);
});
test('calling a custom event works as well', function() {
  var event = {
    nativeEvent: {
      value: 'testing',
    },
  };
  var onMyEvent = jest.fn(function(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    return expect(nativeEvent).toEqual({
      value: 'testing',
    });
  });

  var MyComponent = function MyComponent(_ref3) {
    var onMyEvent = _ref3.onMyEvent;
    return _react.default.createElement(_reactNative.TextInput, {
      value: 'test',
      onChange: onMyEvent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
      },
    });
  };

  var _render6 = (0, _.render)(
      _react.default.createElement(MyComponent, {
        onMyEvent: onMyEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
        },
      }),
    ),
    _render6$container$ch = (0, _slicedToArray2.default)(_render6.container.children, 1),
    input = _render6$container$ch[0];

  (0, _.fireEvent)(input, new NativeTestEvent('myEvent', event));
  expect(onMyEvent).toHaveBeenCalledWith({
    nativeEvent: {
      value: 'testing',
    },
  });
});
test('calling a handler when there is no valid target does not work', function() {
  var handleEvent = jest.fn();

  var _render7 = (0, _.render)(
      _react.default.createElement(_reactNative.Image, {
        onPress: handleEvent,
        testID: 'image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
        },
      }),
    ),
    getByTestId = _render7.getByTestId;

  expect(function() {
    return _.fireEvent.press(getByTestId('image'));
  }).not.toThrow();
  expect(handleEvent).toBeCalledTimes(0);
});
test('calling a handler if a Button is disabled does not work', function() {
  var handleEvent = jest.fn();

  var _render8 = (0, _.render)(
      _react.default.createElement(_reactNative.Button, {
        disabled: true,
        onPress: handleEvent,
        title: 'button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
        },
      }),
    ),
    getByText = _render8.getByText;

  expect(function() {
    return _.fireEvent.press(getByText('button'));
  }).not.toThrow();
  expect(handleEvent).toBeCalledTimes(0);
});
test('calling a handler if a Touchable is disabled does not work', function() {
  var handleEvent = jest.fn();

  var _render9 = (0, _.render)(
      _react.default.createElement(
        _reactNative.TouchableHighlight,
        {
          disabled: true,
          onPress: jest.fn(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124,
            },
          },
          'touchable',
        ),
      ),
    ),
    getByText = _render9.getByText;

  expect(function() {
    return _.fireEvent.press(getByText('touchable'));
  }).not.toThrow();
  expect(handleEvent).toBeCalledTimes(0);
});
test('calling an event that has no defined handler throws', function() {
  var _render10 = (0, _.render)(
      _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
          },
        },
        'test',
      ),
    ),
    getByText = _render10.getByText;

  expect(function() {
    return _.fireEvent.press(getByText('test'));
  }).not.toThrow();
});
test('calling an event sets nativeEvent properly', function() {
  var event = {
    nativeEvent: {
      value: 'testing',
    },
  };
  var onChange = jest.fn(function(_ref4) {
    var nativeEvent = _ref4.nativeEvent;
    return expect(nativeEvent).toEqual({
      value: 'testing',
    });
  });

  var _render11 = (0, _.render)(
      _react.default.createElement(_reactNative.TextInput, {
        value: 'test',
        onChange: onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
        },
      }),
    ),
    getByDisplayValue = _render11.getByDisplayValue;

  _.fireEvent.change(getByDisplayValue('test'), event);
});
