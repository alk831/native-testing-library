var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toJSON = toJSON;

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

function toJSON() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$_fiber = _ref._fiber;

  _ref$_fiber = _ref$_fiber === void 0 ? {} : _ref$_fiber;
  var _ref$_fiber$stateNode = _ref$_fiber.stateNode,
    stateNode = _ref$_fiber$stateNode === void 0 ? null : _ref$_fiber$stateNode;
  if (!stateNode) return null;
  if (stateNode.rootContainerInstance && stateNode.rootContainerInstance.children.length === 0)
    return null;
  return _toJSON(stateNode);
}

function _toJSON(inst) {
  if (inst.isHidden) {
    return null;
  }

  switch (inst.tag) {
    case 'TEXT':
      return inst.text;

    case 'INSTANCE': {
      var _inst$props = inst.props,
        children = _inst$props.children,
        props = (0, _objectWithoutProperties2.default)(_inst$props, ['children']);
      var renderedChildren = inst.children.map(function(child) {
        return _toJSON(child);
      });
      var renderedProps = {};
      Object.keys(props).filter(function(name) {
        if (typeof props[name] !== 'function') {
          renderedProps[name] = props[name];
        }
      });
      var json = {
        type: inst.type,
        props: renderedProps,
        children: renderedChildren,
      };
      Object.defineProperty(json, '$$typeof', {
        value: (typeof Symbol === 'function' ? Symbol.for : '@@for')('react.test.json'),
      });
      return json;
    }

    default:
      throw new Error('Unexpected node type in toJSON: ' + inst.tag);
  }
}
