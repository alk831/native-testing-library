var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.queryAllByDisplayValue = queryAllByDisplayValue;
exports.findByDisplayValue = exports.findAllByDisplayValue = exports.getAllByDisplayValue = exports.getByDisplayValue = exports.queryByDisplayValue = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _allUtils = require('./all-utils');

function queryAllByDisplayValue(container, value) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
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

  var matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
  var matchNormalizer = (0, _allUtils.makeNormalizer)({
    collapseWhitespace: collapseWhitespace,
    trim: trim,
    normalizer: normalizer,
  });
  return Array.from(
    container.findAll(function(node) {
      return (0, _allUtils.validComponentFilter)(node, 'displayValueComponents');
    }),
  )
    .filter(filter)
    .filter(function(node) {
      if (node.type === 'Picker') {
        return matcher(node.getProp('selectedValue'), node, value, matchNormalizer);
      }

      return matcher(node.getProp('value'), node, value, matchNormalizer);
    });
}

var getMultipleError = function getMultipleError(c, value) {
  return 'Found multiple elements with the value: ' + value + '.';
};

var getMissingError = function getMissingError(c, value) {
  return 'Unable to find an element with the value: ' + value + '.';
};

var _buildQueries = (0, _allUtils.buildQueries)(
    queryAllByDisplayValue,
    getMultipleError,
    getMissingError,
  ),
  _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
  queryByDisplayValue = _buildQueries2[0],
  getAllByDisplayValue = _buildQueries2[1],
  getByDisplayValue = _buildQueries2[2],
  findAllByDisplayValue = _buildQueries2[3],
  findByDisplayValue = _buildQueries2[4];

exports.findByDisplayValue = findByDisplayValue;
exports.findAllByDisplayValue = findAllByDisplayValue;
exports.getByDisplayValue = getByDisplayValue;
exports.getAllByDisplayValue = getAllByDisplayValue;
exports.queryByDisplayValue = queryByDisplayValue;
