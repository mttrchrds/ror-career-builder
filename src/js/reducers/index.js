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
import reducerCoreMorale1 from './reducerCoreMorale1';
import reducerCoreMorale2 from './reducerCoreMorale2';
import reducerCoreMorale3 from './reducerCoreMorale3';
import reducerCoreMorale4 from './reducerCoreMorale4';
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
  coreMorale1: reducerCoreMorale1,
  coreMorale2: reducerCoreMorale2,
  coreMorale3: reducerCoreMorale3,
  coreMorale4: reducerCoreMorale4
});

export default rootReducer;