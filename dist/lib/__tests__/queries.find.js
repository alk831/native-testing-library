var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\queries.find.js';
afterEach(_.cleanup);
test('find asynchronously finds elements', function _callee() {
  var _render,
    findAllByHintText,
    findAllByLabelText,
    findAllByRole,
    findAllByPlaceholderText,
    findAllByTestId,
    findAllByText,
    findAllByTitle,
    findAllByDisplayValue,
    findByHintText,
    findByLabelText,
    findByRole,
    findByPlaceholderText,
    findByTestId,
    findByText,
    findByTitle,
    findByDisplayValue;

  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_render = (0, _.render)(
            _react.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                },
              },
              _react.default.createElement(_reactNative.View, {
                accessibilityTraits: ['button'],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                },
              }),
              _react.default.createElement(_reactNative.View, {
                accessibilityTraits: 'none',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
              }),
              _react.default.createElement(
                _reactNative.Text,
                {
                  testID: 'test-id',
                  accessibilityRole: 'text',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                },
                'test text content',
              ),
              _react.default.createElement(_reactNative.Button, {
                title: 'button',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                },
              }),
              _react.default.createElement(_reactNative.TextInput, {
                placeholder: 'placeholder',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                },
              }),
              _react.default.createElement(_reactNative.TextInput, {
                value: 'value',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                },
              }),
              _react.default.createElement(_reactNative.TextInput, {
                accessibilityStates: ['disabled'],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                },
              }),
              _react.default.createElement(_reactNative.Image, {
                accessibilityLabel: 'test-label',
                src: '/lucy-ricardo.png',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                },
              }),
              _react.default.createElement(_reactNative.Image, {
                accessibilityHint: 'test-hint',
                src: '/lucy-ricardo.png',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                },
              }),
              _react.default.createElement(_reactNative.View, {
                accessibilityRole: 'dialog',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                },
              }),
              _react.default.createElement(_reactNative.View, {
                accessibilityRole: 'fake',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                },
              }),
            ),
          )),
            (findAllByHintText = _render.findAllByHintText),
            (findAllByLabelText = _render.findAllByLabelText),
            (findAllByRole = _render.findAllByRole),
            (findAllByPlaceholderText = _render.findAllByPlaceholderText),
            (findAllByTestId = _render.findAllByTestId),
            (findAllByText = _render.findAllByText),
            (findAllByTitle = _render.findAllByTitle),
            (findAllByDisplayValue = _render.findAllByDisplayValue),
            (findByHintText = _render.findByHintText),
            (findByLabelText = _render.findByLabelText),
            (findByRole = _render.findByRole),
            (findByPlaceholderText = _render.findByPlaceholderText),
            (findByTestId = _render.findByTestId),
            (findByText = _render.findByText),
            (findByTitle = _render.findByTitle),
            (findByDisplayValue = _render.findByDisplayValue);
          jest.spyOn(console, 'warn').mockImplementation(function() {});
          _context.next = 4;
          return _regenerator.default.awrap(
            expect(findByHintText('test-hint')).resolves.toBeTruthy(),
          );

        case 4:
          _context.next = 6;
          return _regenerator.default.awrap(
            expect(findAllByHintText('test-hint')).resolves.toHaveLength(1),
          );

        case 6:
          _context.next = 8;
          return _regenerator.default.awrap(
            expect(findByLabelText('test-label')).resolves.toBeTruthy(),
          );

        case 8:
          _context.next = 10;
          return _regenerator.default.awrap(
            expect(findAllByLabelText('test-label')).resolves.toHaveLength(1),
          );

        case 10:
          _context.next = 12;
          return _regenerator.default.awrap(
            expect(findByPlaceholderText('placeholder')).resolves.toBeTruthy(),
          );

        case 12:
          _context.next = 14;
          return _regenerator.default.awrap(
            expect(findAllByPlaceholderText('placeholder')).resolves.toHaveLength(1),
          );

        case 14:
          _context.next = 16;
          return _regenerator.default.awrap(
            expect(findByText('test text content')).resolves.toBeTruthy(),
          );

        case 16:
          _context.next = 18;
          return _regenerator.default.awrap(
            expect(findAllByText('test text content')).resolves.toHaveLength(1),
          );

        case 18:
          _context.next = 20;
          return _regenerator.default.awrap(expect(findByTitle('button')).resolves.toBeTruthy());

        case 20:
          _context.next = 22;
          return _regenerator.default.awrap(
            expect(findAllByTitle('button')).resolves.toHaveLength(1),
          );

        case 22:
          _context.next = 24;
          return _regenerator.default.awrap(expect(findByText('button')).resolves.toBeTruthy());

        case 24:
          _context.next = 26;
          return _regenerator.default.awrap(expect(findAllByText('button')).resolves.toBeTruthy());

        case 26:
          _context.next = 28;
          return _regenerator.default.awrap(
            expect(findByDisplayValue('value')).resolves.toBeTruthy(),
          );

        case 28:
          _context.next = 30;
          return _regenerator.default.awrap(
            expect(findAllByDisplayValue('value')).resolves.toHaveLength(1),
          );

        case 30:
          _context.next = 32;
          return _regenerator.default.awrap(expect(findByRole('text')).resolves.toBeTruthy());

        case 32:
          _context.next = 34;
          return _regenerator.default.awrap(expect(findAllByRole('text')).resolves.toHaveLength(1));

        case 34:
          _context.next = 36;
          return _regenerator.default.awrap(expect(findByRole('button')).resolves.toBeTruthy());

        case 36:
          _context.next = 38;
          return _regenerator.default.awrap(
            expect(findAllByRole('button')).resolves.toHaveLength(1),
          );

        case 38:
          _context.next = 40;
          return _regenerator.default.awrap(expect(findByRole(['button'])).resolves.toBeTruthy());

        case 40:
          _context.next = 42;
          return _regenerator.default.awrap(
            expect(findAllByRole(['button'])).resolves.toHaveLength(1),
          );

        case 42:
          _context.next = 44;
          return _regenerator.default.awrap(expect(findByRole('none')).resolves.toBeTruthy());

        case 44:
          _context.next = 46;
          return _regenerator.default.awrap(expect(findAllByRole('none')).resolves.toHaveLength(1));

        case 46:
          _context.next = 48;
          return _regenerator.default.awrap(expect(findByRole(['none'])).resolves.toBeTruthy());

        case 48:
          _context.next = 50;
          return _regenerator.default.awrap(
            expect(findAllByRole(['none'])).resolves.toHaveLength(1),
          );

        case 50:
          _context.next = 52;
          return _regenerator.default.awrap(
            expect(
              findByRole(
                'fake',
                {},
                {
                  timeout: 50,
                },
              ),
            ).rejects.toThrow(),
          );

        case 52:
          _context.next = 54;
          return _regenerator.default.awrap(expect(findByTestId('test-id')).resolves.toBeTruthy());

        case 54:
          _context.next = 56;
          return _regenerator.default.awrap(
            expect(findAllByTestId('test-id')).resolves.toHaveLength(1),
          );

        case 56:
          console.warn.mock.calls.forEach(function(_ref) {
            var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
              message = _ref2[0];

            expect(message).toMatch(/Found elements matching accessibilityTraits/);
          });

        case 57:
        case 'end':
          return _context.stop();
      }
    }
  });
});
test('find rejects when something cannot be found', function _callee2() {
  var _render2,
    findAllByHintText,
    findAllByLabelText,
    findAllByRole,
    findAllByPlaceholderText,
    findAllByTestId,
    findAllByText,
    findAllByTitle,
    findAllByDisplayValue,
    findByHintText,
    findByLabelText,
    findByRole,
    findByPlaceholderText,
    findByTestId,
    findByText,
    findByTitle,
    findByDisplayValue,
    qo,
    wo;

  return _regenerator.default.async(function _callee2$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          (_render2 = (0, _.render)(
            _react.default.createElement(_reactNative.View, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111,
              },
            }),
          )),
            (findAllByHintText = _render2.findAllByHintText),
            (findAllByLabelText = _render2.findAllByLabelText),
            (findAllByRole = _render2.findAllByRole),
            (findAllByPlaceholderText = _render2.findAllByPlaceholderText),
            (findAllByTestId = _render2.findAllByTestId),
            (findAllByText = _render2.findAllByText),
            (findAllByTitle = _render2.findAllByTitle),
            (findAllByDisplayValue = _render2.findAllByDisplayValue),
            (findByHintText = _render2.findByHintText),
            (findByLabelText = _render2.findByLabelText),
            (findByRole = _render2.findByRole),
            (findByPlaceholderText = _render2.findByPlaceholderText),
            (findByTestId = _render2.findByTestId),
            (findByText = _render2.findByText),
            (findByTitle = _render2.findByTitle),
            (findByDisplayValue = _render2.findByDisplayValue);
          qo = {};
          wo = {
            timeout: 10,
          };
          _context2.next = 5;
          return _regenerator.default.awrap(
            expect(findByHintText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 5:
          _context2.next = 7;
          return _regenerator.default.awrap(
            expect(findAllByHintText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 7:
          _context2.next = 9;
          return _regenerator.default.awrap(
            expect(findByLabelText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 9:
          _context2.next = 11;
          return _regenerator.default.awrap(
            expect(findAllByLabelText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 11:
          _context2.next = 13;
          return _regenerator.default.awrap(expect(findByRole('x', qo, wo)).rejects.toThrow('x'));

        case 13:
          _context2.next = 15;
          return _regenerator.default.awrap(
            expect(findAllByRole('x', qo, wo)).rejects.toThrow('x'),
          );

        case 15:
          _context2.next = 17;
          return _regenerator.default.awrap(
            expect(findByPlaceholderText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 17:
          _context2.next = 19;
          return _regenerator.default.awrap(
            expect(findAllByPlaceholderText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 19:
          _context2.next = 21;
          return _regenerator.default.awrap(expect(findByText('x', qo, wo)).rejects.toThrow('x'));

        case 21:
          _context2.next = 23;
          return _regenerator.default.awrap(
            expect(findAllByText('x', qo, wo)).rejects.toThrow('x'),
          );

        case 23:
          _context2.next = 25;
          return _regenerator.default.awrap(expect(findByTitle('x', qo, wo)).rejects.toThrow('x'));

        case 25:
          _context2.next = 27;
          return _regenerator.default.awrap(
            expect(findAllByTitle('x', qo, wo)).rejects.toThrow('x'),
          );

        case 27:
          _context2.next = 29;
          return _regenerator.default.awrap(
            expect(findByDisplayValue('x', qo, wo)).rejects.toThrow('x'),
          );

        case 29:
          _context2.next = 31;
          return _regenerator.default.awrap(
            expect(findAllByDisplayValue('x', qo, wo)).rejects.toThrow('x'),
          );

        case 31:
          _context2.next = 33;
          return _regenerator.default.awrap(expect(findByTestId('x', qo, wo)).rejects.toThrow('x'));

        case 33:
          _context2.next = 35;
          return _regenerator.default.awrap(
            expect(findAllByTestId('x', qo, wo)).rejects.toThrow('x'),
          );

        case 35:
        case 'end':
          return _context2.stop();
      }
    }
  });
});
test('actually works with async code', function _callee3() {
  var _render3, findByTestId, rerender;

  return _regenerator.default.async(function _callee3$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          (_render3 = (0, _.render)(
            _react.default.createElement(_reactNative.View, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142,
              },
            }),
          )),
            (findByTestId = _render3.findByTestId),
            (rerender = _render3.rerender);
          setTimeout(function() {
            return rerender(
              _react.default.createElement(
                _reactNative.Text,
                {
                  testID: 'text',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                  },
                },
                'correct tree',
              ),
            );
          }, 20);
          _context3.next = 4;
          return _regenerator.default.awrap(expect(findByTestId('text', {})).resolves.toBeTruthy());

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  });
});
