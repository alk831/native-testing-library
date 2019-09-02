var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

require('@testing-library/jest-native/extend-expect');

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\act.js';
afterEach(_.cleanup);
test('render calls useEffect immediately', function() {
  var effectCb = jest.fn();

  function MyUselessComponent() {
    _react.default.useEffect(effectCb);

    return null;
  }

  (0, _.render)(
    _react.default.createElement(MyUselessComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
      },
    }),
  );
  expect(effectCb).toHaveBeenCalledTimes(1);
});
test('fireEvent triggers useEffect calls', function() {
  var effectCb = jest.fn();

  function Counter() {
    _react.default.useEffect(effectCb);

    var _React$useState = _react.default.useState(0),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

    return _react.default.createElement(_reactNative.Button, {
      onPress: function onPress() {
        return setCount(count + 1);
      },
      title: '' + count,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
      },
    });
  }

  var _render = (0, _.render)(
      _react.default.createElement(Counter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
        },
      }),
    ),
    getByTitle = _render.getByTitle;

  var buttonNode = getByTitle('0');
  effectCb.mockClear();

  _.fireEvent.press(buttonNode);

  expect(buttonNode.props.title).toBe('1');
  expect(effectCb).toHaveBeenCalledTimes(1);
});
test('calls to hydrate will run useEffects', function() {
  var effectCb = jest.fn();

  function MyUselessComponent() {
    _react.default.useEffect(effectCb);

    return null;
  }

  (0, _.render)(
    _react.default.createElement(MyUselessComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
      },
    }),
    {
      hydrate: true,
    },
  );
  expect(effectCb).toHaveBeenCalledTimes(1);
});
