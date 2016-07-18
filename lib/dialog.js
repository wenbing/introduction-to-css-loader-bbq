'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _ConnectedDialog = require('@mtfe/meishi-dialog/lib/ConnectedDialog');

var _ConnectedDialog2 = _interopRequireDefault(_ConnectedDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  dialog: _ConnectedDialog.dialogReducer
});
var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var Container = (0, _reactRedux.connect)(function (state) {
  return {};
}, {
  open: _ConnectedDialog.dialogActionCreators.open
})(function (_ref) {
  var open = _ref.open;

  var handleOpen = function handleOpen() {
    return open();
  };
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ConnectedDialog2.default, null),
    _react2.default.createElement(
      'button',
      { onClick: handleOpen },
      'Open Dialog'
    )
  );
});

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(Container, null)
  );
};

console.info(_server2.default.renderToString(_react2.default.createElement(App)));

var el = document.createElement('div');
document.body.appendChild(el);
_reactDom2.default.render(_react2.default.createElement(App), el);