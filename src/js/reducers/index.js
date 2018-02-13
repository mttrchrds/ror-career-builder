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
import ReducerCurrentPoints from './reducerCurrentPoints';
import ReducerCoreAbilities from './reducerCoreAbilities';
import ReducerCoreMorale1 from './reducerCoreMorale1';
import ReducerCoreMorale2 from './reducerCoreMorale2';
import ReducerCoreMorale3 from './reducerCoreMorale3';
import ReducerCoreMorale4 from './reducerCoreMorale4';
import ReducerCoreTactics from './reducerCoreTactics';
import ReducerAbilitiesObject from './reducerAbilitiesObject';
import ReducerSelectedMorale1 from './reducerSelectedMorale1';
import ReducerSelectedMorale2 from './reducerSelectedMorale2';
import ReducerSelectedMorale3 from './reducerSelectedMorale3';
import ReducerSelectedMorale4 from './reducerSelectedMorale4';
import ReducerSelectedTactics from './reducerSelectedTactics';
import ReducerPathMeterA from './reducerPathMeterA';
import ReducerPathMeterB from './reducerPathMeterB';
import ReducerPathMeterC from './reducerPathMeterC';
import ReducerMasteryAbilities from './reducerMasteryAbilities';
import ReducerMasteryTactics from './reducerMasteryTactics';
import ReducerMasteryMorales from './reducerMasteryMorales';
import ReducerModal from './reducerModal';

const rootReducer = combineReducers({
  careers: ReducerCareers,
  abilities: ReducerAbilities,
  abilitiesObject: ReducerAbilitiesObject,
  sidebar: ReducerSidebar,
  overlayShow: ReducerOverlayShow,
  slug: ReducerSlug,
  level: ReducerLevel,
  renown: ReducerRenown,
  tacticLimit: ReducerTacticLimit,
  points: ReducerPoints,
  currentPoints: ReducerCurrentPoints,
  coreAbilities: ReducerCoreAbilities,
  coreTactics: ReducerCoreTactics,
  coreMorale1: ReducerCoreMorale1,
  coreMorale2: ReducerCoreMorale2,
  coreMorale3: ReducerCoreMorale3,
  coreMorale4: ReducerCoreMorale4,
  selectedMorale1: ReducerSelectedMorale1,
  selectedMorale2: ReducerSelectedMorale2,
  selectedMorale3: ReducerSelectedMorale3,
  selectedMorale4: ReducerSelectedMorale4,
  selectedTactics: ReducerSelectedTactics,
  pathMeterA: ReducerPathMeterA,
  pathMeterB: ReducerPathMeterB,
  pathMeterC: ReducerPathMeterC,
  masteryAbilities: ReducerMasteryAbilities,
  masteryTactics: ReducerMasteryTactics,
  masteryMorales: ReducerMasteryMorales,
  modal: ReducerModal
});

export default rootReducer;