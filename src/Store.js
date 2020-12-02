import { createStore } from 'redux'

const initialState = {
  posts: [{id: 1, title: 'Test Post'}],
  allWeapons: [{name: '',  slot:'weapon', id: ''}],
  allHelms: [{name: '', id: ''}],
  allNecks: [{name: '', id: ''}],
  allCapes: [{name: '', id: ''}],
  allAmmo: [{name: '', id: ''}],
  allBodies: [{name: '', id: ''}],
  allOffhands: [{name: '', id: ''}],
  allLegs: [{name: '', id: ''}],
  allHands: [{name: '', id: ''}],
  allFeet: [{name: '', id: ''}],
  allRings: [{name: '', id: ''}],
  loginModal: {
    open: false
  },
  equippedHead: {name:""/* , icon:"" */},
  equippedCape: {name:""/* , icon:"" */},
  equippedNeck: {name:""/* , icon:"" */},
  equippedAmmo: {name:""/* , icon:"" */},
  equippedWeapon: {name:""/* , icon:"" */},
  equippedOffhand: {name:""/* , icon:"" */},
  equippedLegs: {name:""/* , icon:"" */},
  equippedHands: {name:""/* , icon:"" */},
  equippedFeet: {name:""/* , icon:"" */},
  equippedRing: {name:""/* , icon:"" */},
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
      case 'CHANGE_WEAPON': return{
                              ...state,
                              equippedWeapon: payload
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
      case 'ADD_NECKS': return{
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
                            allOffhands: state.allOffhands.concat(payload)
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
      default: console.log('NO REDUCER MATCH:', payload);                                                                                                                                                         
      
    }
    return state;
}
  

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store