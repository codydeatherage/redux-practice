import { createStore } from 'redux'

const initialState = {
/*   allWeapons: [{name: '',  slot:'weapon', id: ''}],
  allHelms: [{name: '', id: ''}],
  allNecks: [{name: '', id: ''}],
  allCapes: [{name: '', id: ''}],
  allAmmo: [{name: '', id: ''}],
  allBodies: [{name: '', id: ''}],
  allShields: [{name: '', id: ''}],
  allLegs: [{name: '', id: ''}],
  allHands: [{name: '', id: ''}],
  allFeet: [{name: '', id: ''}],
  allRings: [{name: '', id: ''}],
  allBosses: [{name: '', id: ''}], */
  /*             "hitpoints": 255, "defence_level": 300, "magic_level": 150,
                 "defence_stab": 50,"defence_slash": 50,"defence_crush": 10, 
                 "defence_magic": 100, "defence_ranged": 100 */
  selectedBoss: {
    name:"Select A Boss", 
    cmblvl: '1', 
    id: '', 
    hitpoints: '-',         
    defence_level: '-', 
    magic_level: '-', 
    defence_stab: '-',           
    defence_slash: '-', 
    defence_crush: '-', 
    defence_magic: '-',              
    defence_ranged: '-'
  },
  equippedBody: {name:"", icon:""},
  equippedHead: {name:"", icon:""},
  equippedCape: {name:"", icon:""},
  equippedNeck: {name:"", icon:""},
  equippedAmmo: {name:"", icon:""},
  equippedWeapon: {name:"", icon:""},
  equippedOffhand: {name:"", icon:""},
  equippedLegs: {name:"", icon:""},
  equippedHands: {name:"", icon:""},
  equippedFeet: {name:"", icon:""},
  equippedRing: {name:"", icon:""},
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
      case 'SELECTED_BOSS': return{
                              ...state,
                              selectedBoss: payload
                            }
      case 'CHANGE_WEAPON': return{
                              ...state,
                              equippedWeapon: payload
                            }
      case 'CHANGE_CAPE': return{
                              ...state,
                              equippedCape: payload
                            }      
      case 'CHANGE_RING': return{
                              ...state,
                              equippedRing: payload
                            }           
      case 'CHANGE_HELM': return{
                              ...state,
                              equippedHead: payload
                            }
      case 'CHANGE_NECK': return{
                              ...state,
                              equippedNeck: payload
                            }
      case 'CHANGE_OFFHAND': return{
                              ...state,
                              equippedOffhand: payload
                            }                          
      case 'CHANGE_AMMO': return{
                              ...state,
                              equippedAmmo: payload
                            }
      case 'CHANGE_BODY': return{
                              ...state,
                              equippedBody: payload
                            }
      case 'CHANGE_LEGS': return{
                              ...state,
                              equippedLegs: payload
                            }
      case 'CHANGE_HANDS': return{
                              ...state,
                              equippedHands: payload
                            }
      case 'CHANGE_FEET': return{
                              ...state,
                              equippedFeet: payload
                            }                                                        
      default: console.log('NO REDUCER MATCH:', payload);                                                                                                                                                         
    }
    return state;
}
  

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store