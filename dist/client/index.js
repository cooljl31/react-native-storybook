'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storiesOf = exports.configure = undefined;

var _configure = require('./configure/');

Object.defineProperty(exports, 'configure', {
  enumerable: true,
  get: function get() {
    return _configure.configure;
  }
});
Object.defineProperty(exports, 'storiesOf', {
  enumerable: true,
  get: function get() {
    return _configure.storiesOf;
  }
});
exports.PreviewComponent = PreviewComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preview = require('./preview/components/Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _configure2 = require('./configure');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export the function to generate the preview component
function PreviewComponent(_ref) {
  var port = _ref.port;
  var _ref$host = _ref.host;
  var host = _ref$host === undefined ? 'localhost' : _ref$host;

  return function () {
    return _react2.default.createElement(_Preview2.default, { address: 'ws://' + host + ':' + port, stories: _configure2.stories });
  };
}