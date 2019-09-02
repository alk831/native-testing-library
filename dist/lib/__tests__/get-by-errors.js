var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _jestInCase = _interopRequireDefault(require('jest-in-case'));

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\get-by-errors.js';
afterEach(_.cleanup);
(0, _jestInCase.default)(
  'getBy* queries throw an error when there are multiple elements returned',
  function(_ref) {
    var name = _ref.name,
      query = _ref.query,
      tree = _ref.tree;
    var utils = (0, _.render)(tree);
    expect(function() {
      return utils[name](query);
    }).toThrow(/multiple elements/i);
  },
  {
    getByHintText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
          },
        },
        _react.default.createElement(_reactNative.View, {
          accessibilityHint: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          accessibilityHint: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
          },
        }),
      ),
    },
    getByLabelText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
          },
        },
        _react.default.createElement(_reactNative.View, {
          accessibilityLabel: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          accessibilityLabel: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
          },
        }),
      ),
    },
    getByRole: {
      query: 'button',
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
          },
        },
        _react.default.createElement(_reactNative.View, {
          accessibilityRole: 'button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          accessibilityRole: 'button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
          },
        }),
      ),
    },
    getByPlaceholderText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
          },
        },
        _react.default.createElement(_reactNative.TextInput, {
          placeholder: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
          },
        }),
        _react.default.createElement(_reactNative.TextInput, {
          placeholder: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
          },
        }),
      ),
    },
    getByTestId: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            testID: 'his',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
            },
          },
          'text',
        ),
        _react.default.createElement(
          _reactNative.Text,
          {
            testID: 'history',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
            },
          },
          'other',
        ),
      ),
    },
    getByText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
            },
          },
          'his',
        ),
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
            },
          },
          'history',
        ),
      ),
    },
    getByTitle: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
          },
        },
        _react.default.createElement(_reactNative.Button, {
          title: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
          },
        }),
        _react.default.createElement(_reactNative.Button, {
          title: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
          },
        }),
      ),
    },
    getByDisplayValue: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
          },
        },
        _react.default.createElement(_reactNative.TextInput, {
          value: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
          },
        }),
        _react.default.createElement(_reactNative.TextInput, {
          value: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
          },
        }),
      ),
    },
  },
);
(0, _jestInCase.default)(
  'queryBy* queries throw an error when there are multiple elements returned',
  function(_ref2) {
    var name = _ref2.name,
      query = _ref2.query,
      tree = _ref2.tree;
    var utils = (0, _.render)(tree);
    expect(function() {
      return utils[name](query);
    }).toThrow(/multiple elements/i);
  },
  {
    queryByHintText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
          },
        },
        _react.default.createElement(_reactNative.View, {
          accessibilityHint: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          accessibilityHint: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
          },
        }),
      ),
    },
    queryByLabelText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
          },
        },
        _react.default.createElement(_reactNative.View, {
          accessibilityLabel: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          accessibilityLabel: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
          },
        }),
      ),
    },
    queryByRole: {
      query: 'button',
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
          },
        },
        _react.default.createElement(_reactNative.View, {
          accessibilityRole: 'button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
          },
        }),
        _react.default.createElement(_reactNative.View, {
          accessibilityRole: 'button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
          },
        }),
      ),
    },
    queryByPlaceholderText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
          },
        },
        _react.default.createElement(_reactNative.TextInput, {
          placeholder: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
          },
        }),
        _react.default.createElement(_reactNative.TextInput, {
          placeholder: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
          },
        }),
      ),
    },
    queryByTestId: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            testID: 'his',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138,
            },
          },
          'text',
        ),
        _react.default.createElement(
          _reactNative.Text,
          {
            testID: 'history',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139,
            },
          },
          'other',
        ),
      ),
    },
    queryByText: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
          },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147,
            },
          },
          'his',
        ),
        _react.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148,
            },
          },
          'history',
        ),
      ),
    },
    queryByTitle: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
          },
        },
        _react.default.createElement(_reactNative.Button, {
          title: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
          },
        }),
        _react.default.createElement(_reactNative.Button, {
          title: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
          },
        }),
      ),
    },
    queryByDisplayValue: {
      query: /his/,
      tree: _react.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
          },
        },
        _react.default.createElement(_reactNative.TextInput, {
          value: 'his',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
          },
        }),
        _react.default.createElement(_reactNative.TextInput, {
          value: 'history',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166,
          },
        }),
      ),
    },
  },
);
