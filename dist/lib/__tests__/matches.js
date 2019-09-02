var _matches = require('../matches');

var node = null;

var normalizer = function normalizer(str) {
  return str;
};

test('matchers accept strings', function() {
  expect((0, _matches.matches)('ABC', node, 'ABC', normalizer)).toBe(true);
  expect((0, _matches.fuzzyMatches)('ABC', node, 'ABC', normalizer)).toBe(true);
});
test('matchers accept regex', function() {
  expect((0, _matches.matches)('ABC', node, /ABC/, normalizer)).toBe(true);
  expect((0, _matches.fuzzyMatches)('ABC', node, /ABC/, normalizer)).toBe(true);
});
test('matchers accept functions', function() {
  expect(
    (0, _matches.matches)(
      'ABC',
      node,
      function(text) {
        return text === 'ABC';
      },
      normalizer,
    ),
  ).toBe(true);
  expect(
    (0, _matches.fuzzyMatches)(
      'ABC',
      node,
      function(text) {
        return text === 'ABC';
      },
      normalizer,
    ),
  ).toBe(true);
});
test('matchers return false if text to match is not a string', function() {
  expect((0, _matches.matches)(null, node, 'ABC', normalizer)).toBe(false);
  expect((0, _matches.fuzzyMatches)(null, node, 'ABC', normalizer)).toBe(false);
});
