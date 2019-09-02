var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf4 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName =
  'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\wait-for-element-to-be-removed.js';
afterEach(_.cleanup);
test('resolves only when the element is removed', function _callee() {
  var MutatedElement, _render, queryAllByTestId;

  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          MutatedElement = (function(_React$Component) {
            (0, _inherits2.default)(MutatedElement, _React$Component);

            function MutatedElement() {
              var _getPrototypeOf2;

              var _this;

              (0, _classCallCheck2.default)(this, MutatedElement);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (_getPrototypeOf2 = (0, _getPrototypeOf4.default)(MutatedElement)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args),
                ),
              );
              _this.state = {
                text: 'original',
                visible: true,
              };
              return _this;
            }

            (0, _createClass2.default)(MutatedElement, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var _this2 = this;

                  this.setState({
                    text: 'mutated',
                  });
                  setTimeout(function() {
                    _this2.setState({
                      visible: false,
                    });
                  }, 100);
                },
              },
              {
                key: 'render',
                value: function render() {
                  return this.state.visible
                    ? _react.default.createElement(
                        _reactNative.View,
                        {
                          testID: 'view',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                          },
                        },
                        this.state.text,
                      )
                    : null;
                },
              },
            ]);
            return MutatedElement;
          })(_react.default.Component);

          (_render = (0, _.render)(
            _react.default.createElement(MutatedElement, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30,
              },
            }),
          )),
            (queryAllByTestId = _render.queryAllByTestId);
          _context.next = 4;
          return _regenerator.default.awrap(
            (0, _.waitForElementToBeRemoved)(
              function() {
                return queryAllByTestId('view');
              },
              {
                timeout: 250,
              },
            ),
          );

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  });
});
test('resolves on mutation if callback throws an error', function _callee2() {
  var MutatedElement, _render2, getByTestId;

  return _regenerator.default.async(function _callee2$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          MutatedElement = (function(_React$Component2) {
            (0, _inherits2.default)(MutatedElement, _React$Component2);

            function MutatedElement() {
              var _getPrototypeOf3;

              var _this3;

              (0, _classCallCheck2.default)(this, MutatedElement);

              for (
                var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2] = arguments[_key2];
              }

              _this3 = (0, _possibleConstructorReturn2.default)(
                this,
                (_getPrototypeOf3 = (0, _getPrototypeOf4.default)(MutatedElement)).call.apply(
                  _getPrototypeOf3,
                  [this].concat(args),
                ),
              );
              _this3.state = {
                visible: true,
              };
              return _this3;
            }

            (0, _createClass2.default)(MutatedElement, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var _this4 = this;

                  setTimeout(function() {
                    _this4.setState({
                      visible: false,
                    });
                  });
                },
              },
              {
                key: 'render',
                value: function render() {
                  return this.state.visible
                    ? _react.default.createElement(_reactNative.View, {
                        testID: 'view',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                        },
                      })
                    : null;
                },
              },
            ]);
            return MutatedElement;
          })(_react.default.Component);

          (_render2 = (0, _.render)(
            _react.default.createElement(MutatedElement, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57,
              },
            }),
          )),
            (getByTestId = _render2.getByTestId);
          _context2.next = 4;
          return _regenerator.default.awrap(
            (0, _.waitForElementToBeRemoved)(
              function() {
                return getByTestId('view');
              },
              {
                timeout: 250,
              },
            ),
          );

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  });
});
