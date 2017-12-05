import { combineReducers } from 'redux';
import ReducerCareers from './reducerCareers';
import ReducerSidebar from './reducerSidebar';
import ReducerOverlayShow from './reducerOverlayShow';
import ReducerAbilities from './reducerAbilities';
import ReducerSlug from './reducerSlug';
import ReducerLevel from './reducerLevel';
import ReducerRenown from './reducerRenown';
import ReducerTacticLimit from './reducerTacticLimit';
import ReducerPoints from './reducerPoints';
import reducerCoreAbilities from './reducerCoreAbilities';
import reducerCoreMorales from './reducerCoreMorales';
import reducerCoreTactics from './reducerCoreTactics';
import reducerAbilitiesObject from './reducerAbilitiesObject';

const rootReducer = combineReducers({
  careers: ReducerCareers,
  abilities: ReducerAbilities,
  abilitiesObject: reducerAbilitiesObject,
  sidebar: ReducerSidebar,
  overlayShow: ReducerOverlayShow,
  slug: ReducerSlug,
  level: ReducerLevel,
  renown: ReducerRenown,
  tacticLimit: ReducerTacticLimit,
  points: ReducerPoints,
  coreAbilities: reducerCoreAbilities,
  coreTactics: reducerCoreTactics,
  coreMorales: reducerCoreMorales
});

export default rootReducer;