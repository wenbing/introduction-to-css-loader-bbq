import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import ConnectedDialog, {
  dialogActionCreators,
  dialogReducer,
} from '@mtfe/meishi-dialog/lib/ConnectedDialog';

const reducer = combineReducers({
  dialog: dialogReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

const Container = connect((state) => ({
}), {
  open: dialogActionCreators.open,
})(({ open }) => {
  const handleOpen = () => {
    return open();
  };
  return (
    <div>
      <ConnectedDialog />
      <button onClick={handleOpen}>Open Dialog</button>
    </div>
  );
});

const App = () => <Provider store={store}><Container /></Provider>;

const el = document.createElement('div');
document.body.appendChild(el);
ReactDOM.render(React.createElement(App), el);
