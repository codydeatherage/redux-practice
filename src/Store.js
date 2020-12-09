import { createStore } from 'redux'

const initialState = {
  posts: [{id: 1, title: 'Test Post'}],
  allWeapons: [{name: '',  slot:'weapon', id: ''}],
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
  allBosses: [{name: '', id: ''}],
  loginModal: {
    open: false
  },
  selectedBoss: {name:"", cmblvl: '1'},
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
      case 'CHANGE_HAND': return{
                              ...state,
                              equippedHands: payload
                            }
      case 'CHANGE_FEET': return{
                              ...state,
                              equippedFeet: payload
                            }                                                        
                            

      case 'ADD_WEAPON': return{
                            ...state,
                            allWeapons: state.allWeapons.concat(payload)
                          }
      case 'ADD_HEAD': return{
                            ...state,
                            allHelms: state.allHelms.concat(payload)
                          }
      case 'ADD_CAPE': return{
                            ...state,
                            allCapes: state.allCapes.concat(payload)
                          }
      case 'ADD_NECK': return{
                            ...state,
                            allNecks: state.allNecks.concat(payload)
                          }
      case 'ADD_AMMO': return{
                            ...state,
                            allAmmo: state.allAmmo.concat(payload)
                          }
      case 'ADD_BODY': return{
                            ...state,
                            allBodies: state.allBodies.concat(payload)
                          }
      case 'ADD_SHIELD': return{
                            ...state,
                            allShields: state.allShields.concat(payload)
                          }
      case 'ADD_LEGS': return{
                            ...state,
                            allLegs: state.allLegs.concat(payload)
                          }
      case 'ADD_HANDS': return{
                            ...state,
                            allHands: state.allHands.concat(payload)
                          }  
      case 'ADD_FEET': return{
                            ...state,
                            allFeet: state.allFeet.concat(payload)
                          } 
      case 'ADD_RING': return{
                            ...state,
                            allRings: state.allRings.concat(payload)
                          }
      case 'ADD_NECK': return{
                            ...state,
                            allNecks: state.allNecks.concat(payload)
                          }
      case 'ADD_BOSS': return{
                          ...state, 
                          allBosses: state.allBosses.concat(payload)
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