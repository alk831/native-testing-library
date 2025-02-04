Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.buildQueries = buildQueries;
exports.getElementError = getElementError;
exports.getMultipleElementsFoundError = getMultipleElementsFoundError;
exports.makeFindQuery = makeFindQuery;
exports.makeGetAllQuery = makeGetAllQuery;
exports.makeSingleQuery = makeSingleQuery;
exports.queryAllByProp = queryAllByProp;
exports.queryByProp = queryByProp;
exports.proxyElement = proxyElement;
exports.validComponentFilter = validComponentFilter;

var _config = require('./config');

var _prettyPrint = require('./pretty-print');

var _waitForElement = require('./wait-for-element');

var _matches = require('./matches');

function debugTree(container) {
  var limit = process.env.DEBUG_PRINT_LIMIT || 7000;
  return (0, _prettyPrint.prettyPrint)(container, limit);
}

function getElementError(message, container) {
  return new Error([message, debugTree(container)].filter(Boolean).join('\n\n'));
}

function getMultipleElementsFoundError(message, container) {
  return getElementError(
    message +
      '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
    container,
  );
}

function validComponentFilter(node, key) {
  return key ? (0, _config.getConfig)(key).includes(node.type) : typeof node.type === 'string';
}

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function getChildren(node) {
  return node.children.map(function(child) {
    if (typeof child === 'string') {
      return child;
    } else if (validComponentFilter(child)) {
      return proxyElement(child);
    }

    return getChildren(child);
  });
}

function getParent(node) {
  if (node.parent) {
    return validComponentFilter(node.parent) ? proxyElement(node.parent) : getParent(node.parent);
  }

  return null;
}

function proxyElement(node) {
  return new Proxy(node, {
    get: function get(target, key) {
      var ref = target[key];

      switch (key) {
        case 'findAll':
          return function(cb) {
            var overrideCb = function overrideCb(n) {
              return cb(proxyElement(n));
            };

            return ref.apply(this, [overrideCb]);
          };

        case 'getProp':
          return function(prop) {
            return target.props[prop];
          };

        case 'children':
          return flatten(getChildren(target));

        case 'parentNode':
          return getParent(target);

        case '$$typeof':
          return (typeof Symbol === 'function' ? Symbol.for : '@@for')('ntl.element');

        case 'find':
        case 'findAllByProps':
        case 'findAllByType':
        case 'findByProps':
        case 'findByType':
        case 'instance':
          return undefined;

        default:
          return ref;
      }
    },
  });
}

function queryAllByProp(prop, container, match) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref$filter = _ref.filter,
    filter =
      _ref$filter === void 0
        ? function(n) {
            return n;
          }
        : _ref$filter,
    _ref$exact = _ref.exact,
    exact = _ref$exact === void 0 ? true : _ref$exact,
    collapseWhitespace = _ref.collapseWhitespace,
    trim = _ref.trim,
    normalizer = _ref.normalizer;

  var matcher = exact ? _matches.matches : _matches.fuzzyMatches;
  var matchNormalizer = (0, _matches.makeNormalizer)({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer,
  });
  return Array.from(
    container.findAll(function(c) {
      return c.getProp(prop);
    }),
  )
    .filter(filter)
    .filter(function(node) {
      var value = node.getProp(prop);
      return matcher(value, container, match, matchNormalizer);
    });
}

function queryByProp(prop, container, match) {
  for (
    var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3;
    _key < _len;
    _key++
  ) {
    args[_key - 3] = arguments[_key];
  }

  var els = queryAllByProp.apply(void 0, [prop, container, match].concat(args));

  if (els.length > 1) {
    throw getMultipleElementsFoundError(
      'Found multiple elements by [' + prop + '=' + match + ']',
      container,
    );
  }

  return els[0] || null;
}

function makeSingleQuery(allQuery, getMultipleError) {
  return function(container) {
    for (
      var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2 - 1] = arguments[_key2];
    }

    var els = allQuery.apply(void 0, [container].concat(args));

    if (els.length > 1) {
      throw getMultipleElementsFoundError(
        getMultipleError.apply(void 0, [container].concat(args)),
        container,
      );
    }

    return els[0] || null;
  };
}

function makeGetAllQuery(allQuery, getMissingError) {
  return function(container) {
    for (
      var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
      _key3 < _len3;
      _key3++
    ) {
      args[_key3 - 1] = arguments[_key3];
    }

    var els = allQuery.apply(void 0, [container].concat(args));

    if (!els.length) {
      throw getElementError(getMissingError.apply(void 0, [container].concat(args)), container);
    }

    return els;
  };
}

function makeFindQuery(getter) {
  return function(container, text, options, waitForElementOptions) {
    return (0, _waitForElement.waitForElement)(function() {
      return getter(container, text, options);
    }, waitForElementOptions);
  };
}

function buildQueries(queryAllBy, getMultipleError, getMissingError) {
  var queryBy = makeSingleQuery(queryAllBy, getMultipleError);
  var getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
  var getBy = makeSingleQuery(getAllBy, getMultipleError);
  var findAllBy = makeFindQuery(getAllBy);
  var findBy = makeFindQuery(getBy);
  return [queryBy, getAllBy, getBy, findAllBy, findBy];
}
