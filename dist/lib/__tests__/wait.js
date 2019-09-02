var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _ = require('../../');

test('it waits for the data to be loaded', function _callee() {
  var spy, randomTimeout;
  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          spy = jest.fn();
          randomTimeout = Math.floor(Math.random() * 60);
          setTimeout(spy, randomTimeout);
          _context.next = 5;
          return _regenerator.default.awrap(
            (0, _.wait)(function() {
              return expect(spy).toHaveBeenCalledTimes(1);
            }),
          );

        case 5:
          expect(spy).toHaveBeenCalledWith();

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  });
});
test('wait defaults to a noop callback', function _callee2() {
  var handler;
  return _regenerator.default.async(function _callee2$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          handler = jest.fn();
          Promise.resolve().then(handler);
          _context2.next = 4;
          return _regenerator.default.awrap((0, _.wait)());

        case 4:
          expect(handler).toHaveBeenCalledTimes(1);

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  });
});
