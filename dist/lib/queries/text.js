var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.queryAllByText = queryAllByText;
exports.findByText = exports.findAllByText = exports.getAllByText = exports.getByText = exports.queryByText = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _allUtils = require('./all-utils');

function queryAllByText(container, text) {
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
      return (0, _allUtils.validComponentFilter)(node, 'textComponents');
    }),
  )
    .filter(filter)
    .filter(function(node) {
      return matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer);
    });
}

var getMultipleError = function getMultipleError(c, text) {
  return 'Found multiple elements with the text: ' + text;
};

var getMissingError = function getMissingError(c, text) {
  return (
    'Unable to find an element with the text: ' +
    text +
    '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
  );
};

var _buildQueries = (0, _allUtils.buildQueries)(queryAllByText, getMultipleError, getMissingError),
  _buildQueries2 = (0, _slicedToArray2.default)(_buildQueries, 5),
  queryByText = _buildQueries2[0],
  getAllByText = _buildQueries2[1],
  getByText = _buildQueries2[2],
  findAllByText = _buildQueries2[3],
  findByText = _buildQueries2[4];

exports.findByText = findByText;
exports.findAllByText = findAllByText;
exports.getByText = getByText;
exports.getAllByText = getAllByText;
exports.queryByText = queryByText;
