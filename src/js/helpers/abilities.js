export function arrayContains(array, needle) {
  for (const i in array) {
    if (array[i] === needle) return true;
  }
  return false;
}

export function getAbilityType(category) {
  let abilityType = '';
  switch (category) {
    case 'Ability':
      abilityType = 'standard';
      break;
    case 'Morale':
      abilityType = 'morale';
      break;
    case 'CareerTactic':
      abilityType = 'tactic';
      break;
    case 'TomeTactic':
      abilityType = 'tomeTactic';
      break;
    default :
      break;
  }
  return abilityType;
}
