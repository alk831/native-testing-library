var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var asyncAct;
jest.mock('react-test-renderer', function() {
  return {
    act: function act(cb) {
      return cb();
    },
  };
});
beforeEach(function() {
  jest.resetModules();
  asyncAct = require('../act-compat').asyncAct;
  jest.spyOn(console, 'error').mockImplementation(function() {});
});
afterEach(function() {
  console.error.mockRestore();
});
test('async act works when it does not exist (older versions of react)', function _callee3() {
  var callback;
  return _regenerator.default.async(function _callee3$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          callback = jest.fn();
          _context3.next = 3;
          return _regenerator.default.awrap(
            asyncAct(function _callee() {
              return _regenerator.default.async(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return _regenerator.default.awrap(Promise.resolve());

                    case 2:
                      _context.next = 4;
                      return _regenerator.default.awrap(callback());

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              });
            }),
          );

        case 3:
          expect(console.error).toHaveBeenCalledTimes(0);
          expect(callback).toHaveBeenCalledTimes(1);
          callback.mockClear();
          console.error.mockClear();
          _context3.next = 9;
          return _regenerator.default.awrap(
            asyncAct(function _callee2() {
              return _regenerator.default.async(function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return _regenerator.default.awrap(Promise.resolve());

                    case 2:
                      _context2.next = 4;
                      return _regenerator.default.awrap(callback());

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              });
            }),
          );

        case 9:
          expect(console.error).toHaveBeenCalledTimes(0);
          expect(callback).toHaveBeenCalledTimes(1);

        case 11:
        case 'end':
          return _context3.stop();
      }
    }
  });
});
test('async act recovers from errors', function _callee5() {
  return _regenerator.default.async(
    function _callee5$(_context5) {
      while (1) {
        switch ((_context5.prev = _context5.next)) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _regenerator.default.awrap(
              asyncAct(function _callee4() {
                return _regenerator.default.async(function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        _context4.next = 2;
                        return _regenerator.default.awrap(null);

                      case 2:
                        throw new Error('test error');

                      case 3:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                });
              }),
            );

          case 3:
            _context5.next = 8;
            break;

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5['catch'](0);
            console.error('call console.error');

          case 8:
            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error.mock.calls).toMatchInlineSnapshot(
              '\n    Array [\n      Array [\n        "call console.error",\n      ],\n    ]\n  ',
            );

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    },
    null,
    null,
    [[0, 5]],
  );
});
test('async act recovers from sync errors', function _callee6() {
  return _regenerator.default.async(
    function _callee6$(_context6) {
      while (1) {
        switch ((_context6.prev = _context6.next)) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _regenerator.default.awrap(
              asyncAct(function() {
                throw new Error('test error');
              }),
            );

          case 3:
            _context6.next = 8;
            break;

          case 5:
            _context6.prev = 5;
            _context6.t0 = _context6['catch'](0);
            console.error('call console.error');

          case 8:
            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error.mock.calls).toMatchInlineSnapshot(
              '\n    Array [\n      Array [\n        "call console.error",\n      ],\n    ]\n  ',
            );

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    },
    null,
    null,
    [[0, 5]],
  );
});
