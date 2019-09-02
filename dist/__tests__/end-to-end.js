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

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\end-to-end.js';
afterEach(_.cleanup);

var fetchAMessage = function fetchAMessage() {
  return new Promise(function(resolve) {
    var randomTimeout = Math.floor(Math.random() * 100);
    setTimeout(function() {
      resolve({
        returnedMessage: 'Hello World',
      });
    }, randomTimeout);
  });
};

var ComponentWithLoader = (function(_React$Component) {
  (0, _inherits2.default)(ComponentWithLoader, _React$Component);

  function ComponentWithLoader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ComponentWithLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(
      this,
      (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ComponentWithLoader)).call.apply(
        _getPrototypeOf2,
        [this].concat(args),
      ),
    );
    _this.state = {
      loading: true,
    };
    return _this;
  }

  (0, _createClass2.default)(ComponentWithLoader, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var data;
        return _regenerator.default.async(
          function componentDidMount$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return _regenerator.default.awrap(fetchAMessage());

                case 2:
                  data = _context.sent;
                  this.setState({
                    data: data,
                    loading: false,
                  });

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          },
          null,
          this,
        );
      },
    },
    {
      key: 'render',
      value: function render() {
        if (this.state.loading) {
          return _react.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27,
              },
            },
            'Loading...',
          );
        }

        return _react.default.createElement(
          _reactNative.Text,
          {
            testID: 'message',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
            },
          },
          'Loaded this message: ',
          this.state.data.returnedMessage,
          '!',
        );
      },
    },
  ]);
  return ComponentWithLoader;
})(_react.default.Component);

test('it waits for the data to be loaded', function _callee() {
  var _render, queryByText, queryByTestId;

  return _regenerator.default.async(function _callee$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          (_render = (0, _.render)(
            _react.default.createElement(ComponentWithLoader, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
              },
            }),
          )),
            (queryByText = _render.queryByText),
            (queryByTestId = _render.queryByTestId);
          expect(queryByText('Loading...')).toBeTruthy();
          _context2.next = 4;
          return _regenerator.default.awrap(
            (0, _.wait)(function() {
              return expect(queryByText('Loading...')).toBeNull();
            }),
          );

        case 4:
          expect(queryByTestId('message')).toHaveTextContent(/Hello World/);

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  });
});
