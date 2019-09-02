var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\__tests__\\forms.js';
afterEach(_.cleanup);

function Login(_ref) {
  var onSubmit = _ref.onSubmit,
    user = _ref.user;
  return _react.default.createElement(
    _reactNative.View,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
      },
    },
    _react.default.createElement(_reactNative.TextInput, {
      accessibilityLabel: 'Username',
      placeholder: 'Username...',
      textContentType: 'username',
      value: user.username,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
      },
    }),
    _react.default.createElement(_reactNative.TextInput, {
      accessibilityLabel: 'Password',
      placeholder: 'Password...',
      textContentType: 'password',
      value: user.password,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
      },
    }),
    _react.default.createElement(_reactNative.Button, {
      title: 'Submit',
      onPress: function onPress() {
        return onSubmit(user);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
      },
    }),
  );
}

test('login form submits', function() {
  var fakeUser = {
    username: 'bcarroll',
    password: 'starboy',
  };
  var handleSubmit = jest.fn();

  var _render = (0, _.render)(
      _react.default.createElement(Login, {
        onSubmit: handleSubmit,
        user: fakeUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
        },
      }),
    ),
    getByTitle = _render.getByTitle;

  var submitButtonNode = getByTitle('Submit');

  _.fireEvent.press(submitButtonNode);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
});
