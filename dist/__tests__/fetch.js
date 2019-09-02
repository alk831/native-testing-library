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

require('@testing-library/jest-native/extend-expect');

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\fetch.js';
afterEach(_.cleanup);
global.fetch = require('jest-fetch-mock');

var Fetch = (function(_React$Component) {
  (0, _inherits2.default)(Fetch, _React$Component);

  function Fetch() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Fetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(
      this,
      (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Fetch)).call.apply(
        _getPrototypeOf2,
        [this].concat(args),
      ),
    );
    _this.state = {};

    _this.fetch = function _callee() {
      var response, json;
      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _regenerator.default.awrap(fetch(_this.props.url));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return _regenerator.default.awrap(response.json());

            case 5:
              json = _context.sent;

              _this.setState({
                data: json.data,
              });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Fetch, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
          this.fetch();
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var data = this.state.data;
        return _react.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
            },
          },
          _react.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: this.fetch,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27,
              },
            },
            _react.default.createElement(
              _reactNative.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                },
              },
              'Fetch',
            ),
          ),
          data
            ? _react.default.createElement(
                _reactNative.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                },
                data.greeting,
              )
            : null,
        );
      },
    },
  ]);
  return Fetch;
})(_react.default.Component);

test('Fetch makes an API call and displays the greeting when load-greeting is clicked', function _callee2() {
  var url, _render, container, getByText;

  return _regenerator.default.async(function _callee2$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          fetch.mockResponseOnce(
            JSON.stringify({
              data: {
                greeting: 'hello there',
              },
            }),
          );
          url = '/greeting';
          (_render = (0, _.render)(
            _react.default.createElement(Fetch, {
              url: url,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39,
              },
            }),
          )),
            (container = _render.container),
            (getByText = _render.getByText);

          _.fireEvent.press(getByText('Fetch'));

          _context2.next = 6;
          return _regenerator.default.awrap((0, _.wait)());

        case 6:
          expect(fetch).toHaveBeenCalledTimes(1);
          expect(fetch).toHaveBeenCalledWith(url);
          expect(getByText('hello there')).toHaveTextContent('hello there');
          expect(container).toMatchSnapshot();

        case 10:
        case 'end':
          return _context2.stop();
      }
    }
  });
});
