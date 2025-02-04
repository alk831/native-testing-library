var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.queryAllByRole = queryAllByRole;
exports.findByRole = exports.findAllByRole = exports.getAllByRole = exports.getByRole = exports.queryByRole = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray'),
);

var _allUtils = require('./all-utils');

var validRoles = [
  'adjustable',
  'button',
  'header',
  'image',
  'imagebutton',
  'keyboardKey',
  'link',
  'none',
  'search',
  'summary',
  'text',
];
var validTraits = [
  'adjustable',
  'allowsDirectInteraction',
  'button',
  'disabled',
  'frequentUpdates',
  'header',
  'image',
  'key',
  'link',
  'none',
  'pageTurn',
  'plays',
  'search',
  'selected',
  'startsMedia',
  'summary',
  'text',
];

function queryAllByRole(container, value) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$filter = _ref.filter,
    filter =
      _ref$filter === void 0
        ? function(n) {
            return n;
          }
        : _ref$filter;

  var roleElements = container.findAll(function(c) {
    return c.getProp('accessibilityRole');
  });
  var traitElements = container.findAll(function(c) {
    return c.getProp('accessibilityTraits');
  });
  return []
    .concat(
      (0, _toConsumableArray2.default)(roleElements),
      (0, _toConsumableArray2.default)(traitElements),
    )
    .filter(filter)
    .filter(function(node) {
      var role = node.getProp('accessibilityRole');
      var traits = node.getProp('accessibilityTraits');

      if (role === value) {
        if (!validRoles.includes(value)) {
          throw new Error(
            'Found a match for accessibilityRole: "' +
              value +
              '", but "' +
              value +
              '" is not a valid accessibilityRole.',
          );
        }

        return true;
      } else if (traits) {
        var arrayTraits = Array.isArray(traits) ? traits : [traits];
        var arrayValue = Array.isArray(value) ? value : [value];
        var traitMatch = arrayTraits.every(function(i) {
          return arrayValue.indexOf(i) > -1 && validTraits.includes(i);
        });

        if (traitMatch) {
          console.warn(
            'Found elements matching accessibilityTraits: `' +
              JSON.stringify(arrayValue) +
              '`, which will soon be deprecated. Please transition to using accessibilityRoles.',
          );
        }

        return traitMatch;
      }

      return false;
    });
}

var getMultipleError = function getMultipleError(c, role) {
  return 'Found multiple elements with the accessibilityRole of: ' + role;
};

var getMissingError = function getMissingError(c, role) {
  return 'Unable to find an element with the accessibilityRole of: ' + role;
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByRole, getMultipleError, getMissingError),
  _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
  queryByRole = _buildQueries2[0],
  getAllByRole = _buildQueries2[1],
  getByRole = _buildQueries2[2],
  findAllByRole = _buildQueries2[3],
  findByRole = _buildQueries2[4];

exports.findByRole = findByRole;
exports.findAllByRole = findAllByRole;
exports.getByRole = getByRole;
exports.getAllByRole = getAllByRole;
exports.queryByRole = queryByRole;
