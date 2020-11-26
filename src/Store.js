import { createStore } from 'redux'

const initialState = {
  posts: [{id: 1, title: 'Test Post'}],
  allWeapons: [{name: '', stats:{str: 1, atk: 1}}],
  loginModal: {
    open: false
  }
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_POST') {
      return Object.assign({}, state, {
        posts: state.posts.concat(action.payload)
      })
    }
    if(action.type === 'ADD_WEAPON'){
      return {
        ...state,
        allWeapons: state.allWeapons.concat(action.payload)
      }
    }
  
    if (action.type === 'LOAD_POSTS') {
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      }
    }
    return state;
}
  

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store