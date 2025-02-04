var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.prettyPrint = prettyPrint;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireDefault(require('react'));

var _prettyFormat = _interopRequireDefault(require('pretty-format'));

var _toJson = require('./to-json');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var _prettyFormat$plugins = _prettyFormat.default.plugins,
  ReactTestComponent = _prettyFormat$plugins.ReactTestComponent,
  ReactElement = _prettyFormat$plugins.ReactElement;

function prettyPrint(element, maxLength, options) {
  var debugContent = (0, _prettyFormat.default)(
    (0, _toJson.toJSON)(element),
    _objectSpread(
      {
        plugins: [ReactTestComponent, ReactElement],
        printFunctionName: false,
        highlight: true,
      },
      options,
    ),
  );
  return maxLength !== undefined && debugContent && debugContent.toString().length > maxLength
    ? debugContent.slice(0, maxLength) + '...'
    : debugContent;
}
