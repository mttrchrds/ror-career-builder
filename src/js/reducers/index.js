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
import reducerSelectedMorale1 from './reducerSelectedMorale1';
import reducerSelectedMorale2 from './reducerSelectedMorale2';
import reducerSelectedMorale3 from './reducerSelectedMorale3';
import reducerSelectedMorale4 from './reducerSelectedMorale4';
import reducerSelectedTactics from './reducerSelectedTactics';

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
  coreMorale4: reducerCoreMorale4,
  selectedMorale1: reducerSelectedMorale1,
  selectedMorale2: reducerSelectedMorale2,
  selectedMorale3: reducerSelectedMorale3,
  selectedMorale4: reducerSelectedMorale4,
  selectedTactics: reducerSelectedTactics
});

export default rootReducer;