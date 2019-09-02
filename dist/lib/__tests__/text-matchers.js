var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _jestInCase = _interopRequireDefault(require('jest-in-case'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\text-matchers.js';
afterEach(_.cleanup);
(0, _jestInCase.default)(
  'matches find case-sensitive full strings by default',
  function(_ref) {
    var tree = _ref.tree,
      query = _ref.query,
      queryFn = _ref.queryFn;
    var queries = (0, _.render)(tree);
    var queryString = query;
    var queryRegex = new RegExp(query);

    var queryFunc = function queryFunc(text) {
      return text === query;
    };

    expect(queries[queryFn](queryString)).toBeTruthy();
    expect(queries[queryFn](queryRegex)).toBeTruthy();
    expect(queries[queryFn](queryFunc)).toBeTruthy();
    expect(queries[queryFn](query.toUpperCase())).toBeFalsy();
    expect(queries[queryFn](query.slice(0, 1))).toBeFalsy();
  },
  {
    queryByTestId: {
      tree: _react.default.createElement(
        _reactNative.TouchableOpacity,
        {
          testID: 'link',
          onPress: jest.fn(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
          },
        },
        'Link',
      ),
      query: 'link',
      queryFn: 'queryByTestId',
    },
    queryByHintText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityHint: 'Finding Nemo poster',
        src: '/finding-nemo.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
        },
      }),
      query: 'Finding Nemo poster',
      queryFn: 'queryByHintText',
    },
    queryByLabelText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityLabel: 'Finding Nemo poster',
        src: '/finding-nemo.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
        },
      }),
      query: 'Finding Nemo poster',
      queryFn: 'queryByLabelText',
    },
    queryByPlaceholderText: {
      tree: _react.default.createElement(_reactNative.TextInput, {
        placeholder: "Dwayne 'The Rock' Johnson",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
        },
      }),
      query: "Dwayne 'The Rock' Johnson",
      queryFn: 'queryByPlaceholderText',
    },
    queryByText: {
      tree: _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
          },
        },
        'Some content',
      ),
      query: 'Some content',
      queryFn: 'queryByText',
    },
    queryByTitle: {
      tree: _react.default.createElement(_reactNative.Button, {
        title: ' link ',
        onPress: jest.fn(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
        },
      }),
      query: 'link',
      queryFn: 'queryByTitle',
    },
  },
);
(0, _jestInCase.default)(
  'queries trim leading, trailing & inner whitespace by default',
  function(_ref2) {
    var tree = _ref2.tree,
      query = _ref2.query,
      queryFn = _ref2.queryFn;
    var queries = (0, _.render)(tree);
    expect(queries[queryFn](query)).toBeTruthy();
    expect(
      queries[queryFn](query, {
        normalizer: (0, _.getDefaultNormalizer)({
          collapseWhitespace: false,
          trim: false,
        }),
      }),
    ).toBeFalsy();
  },
  {
    queryByTestId: {
      tree: _react.default.createElement(
        _reactNative.TouchableOpacity,
        {
          testID: ' link ',
          onPress: jest.fn(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
          },
        },
        'Link',
      ),
      query: 'link',
      queryFn: 'queryByTestId',
    },
    queryByHintText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityHint: ' Finding Nemo poster ',
        src: '/finding-nemo.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
        },
      }),
      query: 'Finding Nemo poster',
      queryFn: 'queryByHintText',
    },
    queryByLabelText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityLabel: ' Finding Nemo poster ',
        src: '/finding-nemo.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
        },
      }),
      query: 'Finding Nemo poster',
      queryFn: 'queryByLabelText',
    },
    queryByPlaceholderText: {
      tree: _react.default.createElement(_reactNative.TextInput, {
        placeholder: "  Dwayne 'The Rock' Johnson  ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
        },
      }),
      query: "Dwayne 'The Rock' Johnson",
      queryFn: 'queryByPlaceholderText',
    },
    queryByText: {
      tree: _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
          },
        },
        '\n            Content \n            with \n            linebreaks \n            is \n            ok\n          ',
      ),
      query: 'Content with linebreaks is ok',
      queryFn: 'queryByText',
    },
    queryByTitle: {
      tree: _react.default.createElement(_reactNative.Button, {
        title: ' link ',
        onPress: jest.fn(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
        },
      }),
      query: 'link',
      queryFn: 'queryByTitle',
    },
  },
);
(0, _jestInCase.default)(
  '{ exact } option toggles case-insensitive partial matches',
  function(_ref3) {
    var tree = _ref3.tree,
      query = _ref3.query,
      queryFn = _ref3.queryFn;
    var queries = (0, _.render)(tree);
    var queryString = query;
    var queryRegex = new RegExp(query);

    var queryFunc = function queryFunc(text) {
      return text === query;
    };

    expect(queries[queryFn](query)).toHaveLength(1);
    expect(
      queries[queryFn](queryString, {
        exact: false,
      }),
    ).toHaveLength(1);
    expect(
      queries[queryFn](queryRegex, {
        exact: false,
      }),
    ).toHaveLength(1);
    expect(
      queries[queryFn](queryFunc, {
        exact: false,
      }),
    ).toHaveLength(1);
    expect(
      queries[queryFn](query.split(' ')[0], {
        exact: false,
      }),
    ).toHaveLength(1);
    expect(
      queries[queryFn](query.toLowerCase(), {
        exact: false,
      }),
    ).toHaveLength(1);
  },
  {
    queryAllByPlaceholderText: {
      tree: _react.default.createElement(_reactNative.TextInput, {
        placeholder: "Dwayne 'The Rock' Johnson",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
        },
      }),
      query: "Dwayne 'The Rock' Johnson",
      queryFn: 'queryAllByPlaceholderText',
    },
    queryAllByDisplayValue: {
      tree: _react.default.createElement(_reactNative.TextInput, {
        value: "Dwayne 'The Rock' Johnson",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
        },
      }),
      query: "Dwayne 'The Rock' Johnson",
      queryFn: 'queryAllByDisplayValue',
    },
    queryAllByHintText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityHint: 'Finding Nemo poster ',
        src: '/finding-nemo.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
        },
      }),
      query: 'Finding Nemo poster',
      queryFn: 'queryAllByHintText',
    },
    queryAllByLabelText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityLabel: 'Finding Nemo poster ',
        src: '/finding-nemo.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
        },
      }),
      query: 'Finding Nemo poster',
      queryFn: 'queryAllByLabelText',
    },
    queryAllByText: {
      tree: _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
          },
        },
        '\n            Content \n            with \n            linebreaks \n            is \n            ok\n          ',
      ),
      query: 'Content with linebreaks is ok',
      queryFn: 'queryAllByText',
    },
    queryAllByTitle: {
      tree: _react.default.createElement(_reactNative.Button, {
        title: ' link ',
        onPress: jest.fn(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
        },
      }),
      query: 'link',
      queryFn: 'queryAllByTitle',
    },
  },
);
var LRM = '\u200E';

function removeUCC(str) {
  return str.replace(/[\u200e]/g, '');
}

(0, _jestInCase.default)(
  '{ normalizer } option allows custom pre-match normalization',
  function(_ref4) {
    var tree = _ref4.tree,
      queryFn = _ref4.queryFn;
    var queries = (0, _.render)(tree);
    var query = queries[queryFn];
    expect(
      query(/user n.me/i, {
        normalizer: removeUCC,
      }),
    ).toHaveLength(1);
    expect(
      query('User name', {
        normalizer: removeUCC,
      }),
    ).toHaveLength(1);
    expect(query(/user n.me/i)).toHaveLength(0);
    expect(query('User name')).toHaveLength(0);
  },
  {
    queryAllByPlaceholderText: {
      tree: _react.default.createElement(_reactNative.TextInput, {
        placeholder: 'User ' + LRM + 'name',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
        },
      }),
      queryFn: 'queryAllByPlaceholderText',
    },
    queryAllByText: {
      tree: _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
          },
        },
        'User ' + LRM + 'name',
      ),
      queryFn: 'queryAllByText',
    },
    queryAllByHintText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityHint: 'User ' + LRM + 'name',
        src: 'username.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
        },
      }),
      queryFn: 'queryAllByHintText',
    },
    queryAllByLabelText: {
      tree: _react.default.createElement(_reactNative.Image, {
        accessibilityLabel: 'User ' + LRM + 'name',
        src: 'username.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
        },
      }),
      queryFn: 'queryAllByLabelText',
    },
    queryAllByDisplayValue: {
      tree: _react.default.createElement(_reactNative.TextInput, {
        value: 'User ' + LRM + 'name',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
        },
      }),
      queryFn: 'queryAllByDisplayValue',
    },
  },
);
test('normalizer works with both exact and non-exact matching', function() {
  var _render = (0, _.render)(
      _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
          },
        },
        'MiXeD ' + LRM + 'CaSe',
      ),
    ),
    queryAllByText = _render.queryAllByText;

  expect(
    queryAllByText('mixed case', {
      exact: false,
      normalizer: removeUCC,
    }),
  ).toHaveLength(1);
  expect(
    queryAllByText('mixed case', {
      exact: true,
      normalizer: removeUCC,
    }),
  ).toHaveLength(0);
  expect(
    queryAllByText('MiXeD CaSe', {
      exact: true,
      normalizer: removeUCC,
    }),
  ).toHaveLength(1);
  expect(
    queryAllByText('MiXeD CaSe', {
      exact: true,
    }),
  ).toHaveLength(0);
});
test('top-level trim and collapseWhitespace options are not supported if normalizer is specified', function() {
  var _render2 = (0, _.render)(
      _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
          },
        },
        ' abc def ',
      ),
    ),
    queryAllByText = _render2.queryAllByText;

  var normalizer = function normalizer(str) {
    return str;
  };

  expect(function() {
    return queryAllByText('abc', {
      trim: false,
      normalizer: normalizer,
    });
  }).toThrow();
  expect(function() {
    return queryAllByText('abc', {
      trim: true,
      normalizer: normalizer,
    });
  }).toThrow();
  expect(function() {
    return queryAllByText('abc', {
      collapseWhitespace: false,
      normalizer: normalizer,
    });
  }).toThrow();
  expect(function() {
    return queryAllByText('abc', {
      collapseWhitespace: true,
      normalizer: normalizer,
    });
  }).toThrow();
});
test('getDefaultNormalizer returns a normalizer that supports trim and collapseWhitespace', function() {
  expect((0, _.getDefaultNormalizer)()('  abc  def  ')).toEqual('abc def');
  expect(
    (0, _.getDefaultNormalizer)({
      trim: false,
    })('  abc  def  '),
  ).toEqual(' abc def ');
  expect(
    (0, _.getDefaultNormalizer)({
      collapseWhitespace: false,
    })('  abc  def  '),
  ).toEqual('abc  def');
  expect(
    (0, _.getDefaultNormalizer)({
      trim: false,
      collapseWhitespace: false,
    })('  abc  def  '),
  ).toEqual('  abc  def  ');
});
test('we support an older API with trim and collapseWhitespace instead of a normalizer', function() {
  var _render3 = (0, _.render)(
      _react.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270,
          },
        },
        '  x  y  ',
      ),
    ),
    queryAllByText = _render3.queryAllByText;

  expect(queryAllByText('x y').length).toBe(1);
  expect(
    queryAllByText('x y', {
      trim: false,
    }).length,
  ).toBe(0);
  expect(
    queryAllByText(' x y ', {
      trim: false,
    }).length,
  ).toBe(1);
  expect(
    queryAllByText('x y', {
      collapseWhitespace: false,
    }).length,
  ).toBe(0);
  expect(
    queryAllByText('x  y', {
      collapseWhitespace: false,
    }).length,
  ).toBe(1);
});
