var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\stopwatch.js';
afterEach(_.cleanup);

var StopWatch = (function(_React$Component) {
  (0, _inherits2.default)(StopWatch, _React$Component);

  function StopWatch() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, StopWatch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(
      this,
      (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StopWatch)).call.apply(
        _getPrototypeOf2,
        [this].concat(args),
      ),
    );
    _this.state = {
      lapse: 0,
      running: false,
    };

    _this.handleRunClick = function() {
      _this.setState(function(state) {
        if (state.running) {
          clearInterval(_this.timer);
        } else {
          var startTime = Date.now() - _this.state.lapse;

          _this.timer = setInterval(function() {
            _this.setState({
              lapse: Date.now() - startTime,
            });
          });
        }

        return {
          running: !state.running,
        };
      });
    };

    _this.handleClearClick = function() {
      clearInterval(_this.timer);

      _this.setState({
        lapse: 0,
        running: false,
      });
    };

    return _this;
  }

  (0, _createClass2.default)(StopWatch, [
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.timer);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$state = this.state,
          lapse = _this$state.lapse,
          running = _this$state.running;
        return _react.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
            },
          },
          _react.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
              },
            },
            lapse,
            'ms',
          ),
          _react.default.createElement(_reactNative.Button, {
            onPress: this.handleRunClick,
            title: running ? 'Stop' : 'Start',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
            },
          }),
          _react.default.createElement(_reactNative.Button, {
            onPress: this.handleClearClick,
            title: 'Clear',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
            },
          }),
        );
      },
    },
  ]);
  return StopWatch;
})(_react.default.Component);

var wait = function wait(time) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, time);
  });
};

test('unmounts a component', function _callee() {
  var _render, unmount, getByTitle, container;

  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          jest.spyOn(console, 'error').mockImplementation(function() {});
          (_render = (0, _.render)(
            _react.default.createElement(StopWatch, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
              },
            }),
          )),
            (unmount = _render.unmount),
            (getByTitle = _render.getByTitle),
            (container = _render.container);

          _.fireEvent.press(getByTitle('Start'));

          unmount();
          expect((0, _.prettyPrint)(container)).toBe('null');
          _context.next = 7;
          return _regenerator.default.awrap(
            wait(function() {
              return expect(console.error).not.toHaveBeenCalled();
            }),
          );

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  });
});
