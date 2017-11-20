import { combineReducers } from 'redux';
import ReducerCareers from './reducerCareers';
import ReducerSidebar from './reducerSidebar';
import ReducerOverlayShow from './reducerOverlayShow';
import ReducerAbilities from './reducerAbilities';
import ReducerSlug from './reducerSlug';
import ReducerLevel from './reducerLevel';
import ReducerRenown from './reducerRenown';

const rootReducer = combineReducers({
  careers: ReducerCareers,
  abilities: ReducerAbilities,
  sidebar: ReducerSidebar,
  overlayShow: ReducerOverlayShow,
  slug: ReducerSlug,
  level: ReducerLevel,
  renown: ReducerRenown
});

export default rootReducer;