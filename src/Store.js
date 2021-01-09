import { createStore } from 'redux'

const initialState = {
  selectedBoss: {
    name:"Select A Boss",  
    id: '',
    hitpoints: '',
    defence_level: '',
    magic_level:'',
    magic_defence_level: ''
  },
  equippedBody: {name:"", icon:"", stats: ""},
  equippedHead: {name:"", icon:"", stats: ""},
  equippedCape: {name:"", icon:"", stats: ""},
  equippedNeck: {name:"", icon:"", stats: ""},
  equippedAmmo: {name:"", icon:"", stats: ""},
  equippedWeapon: {name:"", icon:"", stats: ""},
  equippedOffhand: {name:"", icon:"", stats: ""},
  equippedLegs: {name:"", icon:"", stats: ""},
  equippedHands: {name:"", icon:"", stats: ""},
  equippedFeet: {name:"", icon:"", stats: ""},
  equippedRing: {name:"", icon:"", stats: ""},
  playerStats:{atk: 1, str: 1, magic: 1, range: 1},
  bonuses:{potion: 1, prayer:1, style: 1, other: 0}
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
      case 'CHANGE_PLAYER_STAT' : return{
                                  ...state,
                                  playerStats: payload
                                }
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