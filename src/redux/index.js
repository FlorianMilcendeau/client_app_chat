import { createStore, combineReducers } from 'redux';

import { channelReducer } from './reducers/channelReducer';
import { socketReducer } from './reducers/socketReducer';
import { uiReducer } from './reducers/uiReducer';
import { userReducer } from './reducers/userReducer';
import { viewsReducer } from './reducers/viewsReducer';

export default createStore(
  combineReducers({
    user: userReducer,
    ui: uiReducer,
    views: viewsReducer,
    channels: channelReducer,
    socket: socketReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
