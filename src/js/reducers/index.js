import { combineReducers } from 'redux';
import ReducerCareers from './reducerCareers';
import ReducerSidebar from './reducerSidebar';
import ReducerOverlayShow from './reducerOverlayShow';

const rootReducer = combineReducers({
  careers: ReducerCareers,
  sidebar: ReducerSidebar,
  overlayShow: ReducerOverlayShow
});

export default rootReducer;