var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.queryAllByTitle = queryAllByTitle;
exports.findByTitle = exports.findAllByTitle = exports.getAllByTitle = exports.getByTitle = exports.queryByTitle = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _allUtils = require('./all-utils');

function queryAllByTitle(container, value) {
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
      return (0, _allUtils.validComponentFilter)(node, 'titleComponents');
    }),
  )
    .filter(filter)
    .filter(function(node) {
      return matcher(node.getProp('title'), node, value, matchNormalizer);
    });
}

var getMultipleError = function getMultipleError(c, title) {
  return 'Found multiple elements with the title: ' + title;
};

var getMissingError = function getMissingError(c, title) {
  return 'Unable to find an element with the title: ' + title;
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByTitle, getMultipleError, getMissingError),
  _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
  queryByTitle = _buildQueries2[0],
  getAllByTitle = _buildQueries2[1],
  getByTitle = _buildQueries2[2],
  findAllByTitle = _buildQueries2[3],
  findByTitle = _buildQueries2[4];

exports.findByTitle = findByTitle;
exports.findAllByTitle = findAllByTitle;
exports.getByTitle = getByTitle;
exports.getAllByTitle = getAllByTitle;
exports.queryByTitle = queryByTitle;
