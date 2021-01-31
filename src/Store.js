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
  prayers : [//len = 16
    {name: "Clarity of Thought", boost: 1.05, type: 'atk', icon:'https://oldschool.runescape.wiki/images/e/e1/Clarity_of_Thought.png?8d584'},
    {name: "Improved Reflexes", boost: 1.10, type: 'atk', icon:'https://oldschool.runescape.wiki/images/7/7e/Improved_Reflexes.png?e38b5'},
    {name: "Incredible Reflexes", boost: 1.15, type: 'atk', icon:'https://oldschool.runescape.wiki/images/8/85/Incredible_Reflexes.png?ecf9c'},
    {name: "Burst of Strength", boosts: 1.05, type: 'str', icon:'https://oldschool.runescape.wiki/images/7/7b/Burst_of_Strength.png?18c47'},
    {name: "Superhuman Strength", boost: 1.10, type: 'str', icon:'https://oldschool.runescape.wiki/images/0/08/Superhuman_Strength.png?d2621'},
    {name: "Ultimate Strength", boost: 1.15, type: 'str', icon:'https://oldschool.runescape.wiki/images/3/3d/Ultimate_Strength.png?510a8'},
    {name: "Sharp Eye", boost: 1.05, type: 'range', icon:'https://oldschool.runescape.wiki/images/a/a3/Sharp_Eye.png?18c47'},
    {name: "Hawk Eye", boost: 1.10, type: 'range', icon:'https://oldschool.runescape.wiki/images/8/8b/Hawk_Eye.png?54ee9'},
    {name: "Eagle Eye", boost: 1.15, type: 'range', icon:'https://oldschool.runescape.wiki/images/d/d5/Eagle_Eye.png?4a200'},
    {name: "Mystic Will", boost: 1.05, type: 'magic', icon:'https://oldschool.runescape.wiki/images/2/23/Mystic_Will.png?20461'},
    {name: "Mystic Lore", boost: 1.10, type: 'magic', icon:'https://oldschool.runescape.wiki/images/d/d1/Mystic_Lore.png?097d2'},
    {name: "Mystic Might", boost: 1.15, type: 'magic', icon:'https://oldschool.runescape.wiki/images/0/03/Mystic_Might.png?b0218'},
    {name: "Chivalry", atk_boost: 1.15, str_boost: 1.18, type:'atk/str', icon:'https://oldschool.runescape.wiki/images/1/16/Chivalry.png?58bc5'},
    {name: "Piety", atk_boost: 1.20, str_boost: 1.23, type:'atk/str', icon:'https://oldschool.runescape.wiki/images/a/a2/Piety.png?58239'},
    {name: "Rigour", range_atk_boost: 1.20, range_str_boost: 1.23, type:'range', icon:'https://oldschool.runescape.wiki/images/5/5b/Rigour.png?159e1'},
    {name: "Augury", boost: 1.25, type: 'magic', icon:'https://oldschool.runescape.wiki/images/9/93/Augury.png?f234e'}
  ],
  equippedBody: {name:"", icon:"", stats: ""},
  equippedHead: {name:"", icon:"", stats: ""},
  equippedCape: {name:"", icon:"", stats: ""},
  equippedNeck: {name:"", icon:"", stats: ""},
  equippedAmmo: {name:"", icon:"", stats: ""},
  equippedWeapon: {name:"", icon:"", stats: "", stances:"", weapon_type:""},
  equippedOffhand: {name:"", icon:"", stats: ""},
  equippedLegs: {name:"", icon:"", stats: ""},
  equippedHands: {name:"", icon:"", stats: ""},
  equippedFeet: {name:"", icon:"", stats: ""},
  equippedRing: {name:"", icon:"", stats: ""},
  playerStats:{atk: 1, str: 1, magic: 1, range: 1},
  activePrayers:{atk: "", str:"", magic:"", range:""},
  bonuses:{potion: 1, prayer:1, style: 1, other: 0}
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
      case 'UPDATE_PRAYERS': return{
                              ...state,
                              activePrayers: payload
                              }
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