var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _react = _interopRequireDefault(require('react'));

var _reactNative = require('react-native');

var _ = require('../../');

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\lib\\__tests__\\wait-for-element.js';
afterEach(_.cleanup);
test('waits for element to appear', function _callee() {
  var _render, rerender, getByTestId, promise, element;

  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          (_render = (0, _.render)(
            _react.default.createElement(_reactNative.View, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
              },
            }),
          )),
            (rerender = _render.rerender),
            (getByTestId = _render.getByTestId);
          promise = (0, _.waitForElement)(function() {
            return getByTestId('test');
          });
          setTimeout(function() {
            return rerender(
              _react.default.createElement(_reactNative.View, {
                testID: 'test',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                },
              }),
            );
          });
          _context.next = 5;
          return _regenerator.default.awrap(promise);

        case 5:
          element = _context.sent;
          expect(element).toBeTruthy();

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  });
});
test('can time out', function _callee2() {
  var promise;
  return _regenerator.default.async(function _callee2$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          jest.useFakeTimers();
          promise = (0, _.waitForElement)(function() {});
          jest.advanceTimersByTime(4600);
          _context2.next = 5;
          return _regenerator.default.awrap(expect(promise).rejects.toThrow(/timed out/i));

        case 5:
          jest.useRealTimers();

        case 6:
        case 'end':
          return _context2.stop();
      }
    }
  });
});
test('can specify our own timeout time', function _callee3() {
  var promise, handler;
  return _regenerator.default.async(function _callee3$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          jest.useFakeTimers();
          promise = (0, _.waitForElement)(function() {}, {
            timeout: 4700,
          });
          handler = jest.fn();
          promise.then(handler, handler);
          jest.advanceTimersByTime(4600);
          expect(handler).toHaveBeenCalledTimes(0);
          jest.advanceTimersByTime(150);
          _context3.next = 9;
          return _regenerator.default.awrap(expect(promise).rejects.toThrow(/timed out/i));

        case 9:
          jest.useRealTimers();

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  });
});
test('throws last thrown error', function _callee4() {
  var _render2, rerender, error, promise;

  return _regenerator.default.async(function _callee4$(_context4) {
    while (1) {
      switch ((_context4.prev = _context4.next)) {
        case 0:
          (_render2 = (0, _.render)(
            _react.default.createElement(_reactNative.View, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40,
              },
            }),
          )),
            (rerender = _render2.rerender);
          setTimeout(function() {
            error = new Error('first error');
            rerender(
              _react.default.createElement(
                _reactNative.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                  },
                },
                'first',
              ),
            );
          }, 10);
          setTimeout(function() {
            error = new Error('second error');
            rerender(
              _react.default.createElement(
                _reactNative.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                  },
                },
                'second',
              ),
            );
          }, 20);
          promise = (0, _.waitForElement)(
            function() {
              throw error;
            },
            {
              timeout: 50,
            },
          );
          _context4.next = 6;
          return _regenerator.default.awrap(expect(promise).rejects.toThrow(error));

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  });
});
test('waits until callback does not return null', function _callee5() {
  var _render3, rerender, queryByTestId, promise, element;

  return _regenerator.default.async(function _callee5$(_context5) {
    while (1) {
      switch ((_context5.prev = _context5.next)) {
        case 0:
          (_render3 = (0, _.render)(
            _react.default.createElement(_reactNative.View, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60,
              },
            }),
          )),
            (rerender = _render3.rerender),
            (queryByTestId = _render3.queryByTestId);
          promise = (0, _.waitForElement)(function() {
            return queryByTestId('text');
          });
          rerender(
            _react.default.createElement(_reactNative.View, {
              testID: 'text',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62,
              },
            }),
          );
          _context5.next = 5;
          return _regenerator.default.awrap(promise);

        case 5:
          element = _context5.sent;
          expect(element).toBeTruthy();

        case 7:
        case 'end':
          return _context5.stop();
      }
    }
  });
});
test('throws error if no callback is provided', function _callee6() {
  return _regenerator.default.async(function _callee6$(_context6) {
    while (1) {
      switch ((_context6.prev = _context6.next)) {
        case 0:
          _context6.next = 2;
          return _regenerator.default.awrap(
            expect((0, _.waitForElement)()).rejects.toThrow(/callback/i),
          );

        case 2:
        case 'end':
          return _context6.stop();
      }
    }
  });
});
