import { createStore } from 'redux'

const initialState = {
  selectedBoss: {
    name:"Select A Boss",  
    id: '',
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