import { createStore } from 'redux'

const initialState = {
  posts: [{id: 1, title: 'Test Post'}],
  allWeapons: [{name: '', stats:{str: 1, atk: 1}, slot:'weapon'}],
  allHelms: [{name: '', stats:{def: 1}}],
  allNecks: [{name: '', stats:{neck: 1}}],
  allCapes: [{name: '', stats:{cape: 1}}],
  allAmmo: [{name: '', stats:{ammo: 1}}],
  allBodies: [{name: '', stats:{body: 1}}],
  allOffhands: [{name: '', stats:{offhand: 1}}],
  allLegs: [{name: '', stats:{legs: 1}}],
  allHands: [{name: '', stats:{hands: 1}}],
  allFeet: [{name: '', stats:{feet: 1}}],
  allRings: [{name: '', stats:{ring: 1}}],
  loginModal: {
    open: false
  }
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
      case 'ADD_WEAPON': return{
                            ...state,
                            allWeapons: state.allWeapons.concat(payload)
                          }
      case 'ADD_HELM': return{
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
      case 'ADD_OFFHAND': return{
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
      case 'ADD_BOOTS': return{
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