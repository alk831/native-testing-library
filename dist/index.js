var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  cleanup: true,
  fireEvent: true,
  render: true,
  NativeTestEvent: true,
  act: true,
};
exports.cleanup = cleanup;
exports.fireEvent = fireEvent;
exports.render = render;
Object.defineProperty(exports, 'NativeTestEvent', {
  enumerable: true,
  get: function get() {
    return _lib.NativeTestEvent;
  },
});
Object.defineProperty(exports, 'act', {
  enumerable: true,
  get: function get() {
    return _actCompat.default;
  },
});

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireDefault(require('react'));

var _reactTestRenderer = _interopRequireDefault(require('react-test-renderer'));

var _AppContainer = _interopRequireDefault(
  require('react-native/Libraries/ReactNative/AppContainer'),
);

var _lib = require('./lib');

Object.keys(_lib).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lib[key];
    },
  });
});

var _actCompat = _interopRequireDefault(require('./act-compat'));

var _jsxFileName = 'F:\\rtl\\native-testing-library\\src\\index.js';

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

var renderers = new Set();

function render(ui) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options,
    WrapperComponent = _ref.wrapper,
    queries = _ref.queries;

  var wrapUiIfNeeded = function wrapUiIfNeeded(innerElement) {
    return WrapperComponent
      ? _react.default.createElement(
          _AppContainer.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
            },
          },
          _react.default.createElement(
            WrapperComponent,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
              },
            },
            innerElement,
          ),
        )
      : _react.default.createElement(
          _AppContainer.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
          },
          innerElement,
        );
  };

  var testRenderer;
  (0, _actCompat.default)(function() {
    testRenderer = _reactTestRenderer.default.create(wrapUiIfNeeded(ui), options);
  });
  renderers.add(testRenderer);
  var wrappers = (0, _lib.proxyElement)(testRenderer.root).findAll(function(n) {
    return n.type === 'View';
  });
  var baseElement = wrappers[0];
  var container = wrappers[1];
  return _objectSpread(
    {
      baseElement: baseElement,
      container: container,
      debug: function debug() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseElement;
        return console.log((0, _lib.prettyPrint)(el));
      },
      unmount: function unmount() {
        return testRenderer.unmount();
      },
      rerender: function rerender(rerenderUi) {
        (0, _actCompat.default)(function() {
          testRenderer.update(wrapUiIfNeeded(rerenderUi));
        });
      },
      asJSON: function asJSON() {
        return (0, _lib.toJSON)(container);
      },
    },
    (0, _lib.getQueriesForElement)(baseElement, queries),
  );
}

function cleanup() {
  renderers.forEach(cleanupRenderer);
}

function cleanupRenderer(renderer) {
  renderer.unmount();
  renderers.delete(renderer);
}

function fireEvent() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var returnValue;
  (0, _actCompat.default)(function() {
    returnValue = _lib.fireEvent.apply(void 0, args);
  });
  return returnValue;
}

Object.keys(_lib.fireEvent).forEach(function(typeArg) {
  fireEvent[typeArg] = function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var returnValue;
    (0, _actCompat.default)(function() {
      returnValue = _lib.fireEvent[typeArg].apply(_lib.fireEvent, args);
    });
    return returnValue;
  };
});
