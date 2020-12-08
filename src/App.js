import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import PlayerInfoCard from './components/PlayerInfoCard'
import MonsterInfoCard from './components/MonsterInfoCard'
import DataPanel from './components/DataPanel'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dispatcher = this.dispatcher.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })

    this.setState({ postId: this.state.postId + 1 })
  }
  dispatcher(slot, payload, icon){
    if(slot === 'weapon' || slot === '2h'){
      if(!this.props.allWeapons.find(item => item.name === payload.name)){ /* &&
         !this.props.allWeapons.find(item=>item.name === payload.name.slice(0, -3)) &&
         !this.props.allWeapons.find(item=>item.name === payload.name.slice(0, -4)) */
          if(!payload.name.includes('(p)') && !payload.name.includes('(p+)') && !payload.name.includes('(p++)')
            && !payload.name.includes('(nz)') && !payload.name.includes('(kp)') && !payload.name.includes('corrupted')
            && !payload.name.includes('crystal staff') && !payload.name.includes('(basic)') && !payload.name.includes('(attuned)')
            && !payload.name.includes('(perfected)')){   
            this.props.dispatch({
                type: 'ADD_WEAPON',
                payload: payload
              })
          }
      }
      
    }

    switch(slot){
      case 'ring':
          if(!this.props.allRings.find(item => 
            item.name === payload.name
            ) /* && !this.props.allRings.find(item=>item.name.slice(0, -3) === payload.name.slice(0, -3) */
              && !this.props.allRings.find(item=>item.icon === icon)){

              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });
            }
          else if(this.props.allRings.find(item => 
            item.name === payload.name
            ) || this.props.allRings.find(item=>item.name.slice(0, -3) === payload.name.slice(0, -3))){
             /*  console.log('DUPLICATE RING FOUND: ', payload.name) */
            } break;
      case 'cape':
          if(!this.props.allCapes.find(item =>item.name === payload.name) 
            && !payload.name.includes('team-') && !payload.name.includes('fremennik ')){
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });
            }
          else if(this.props.allCapes.find(item => 
            item.name === payload.name
            )){
              /* console.log('DUPLICATE CAPE FOUND: ', payload.name) */
            } break;
      case 'head':
        if(!this.props.allHelms.find(item => item.name === payload.name)){
          this.props.dispatch({
            type: `ADD_${slot.toUpperCase()}`,
            payload: payload
          }); break;
        }
      case 'neck':
        if(!this.props.allNecks.find(item => item.name === payload.name)){
          if(!payload.name.includes('(') || payload.name.includes('(e)') || payload.name.includes('(ei)')){ 
            this.props.dispatch({
              type: `ADD_${slot.toUpperCase()}`,
              payload: payload
            }); break;
          }
        }
      case 'ammo':
        if(!this.props.allAmmo.find(item => item.name === payload.name)){
          if(!payload.name.includes('(') || payload.name.includes('(e)' 
            || payload.name.includes('fire') || payload.name.includes('brutal'))){ 
            this.props.dispatch({
              type: `ADD_${slot.toUpperCase()}`,
              payload: payload
            }); break;
          }
        }
      case 'body':
        if(!this.props.allBodies.find(item => item.name === payload.name)){
          /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
            || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
            this.props.dispatch({
              type: `ADD_${slot.toUpperCase()}`,
              payload: payload
            }); break;   
        }
        case 'legs':
          if(!this.props.allLegs.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              }); break;   
          }
        case 'shield':
          if(!this.props.allShields.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              }); break;   
          }
        case 'hands':
          if(!this.props.allHands.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              }); break;   
          }
        case 'feet':
          if(!this.props.allFeet.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              }); break;   
          }             
      default: 
      
    }
  }
//store.getState().allWeapons[store.getState().allWeapons.findIndex(i=>i.name === 'Elder maul')].stats
  async componentDidMount() {
    console.log('mounted');
    let pageNumber = 1;
    const eMax_Pages = 146;
    let a = new Date();
    console.log('Beginning fetch....');
    for(let i = pageNumber; i <= eMax_Pages; i++){
      await fetch(`https://api.osrsbox.com/equipment?page=${i}`)
        .then(response => response.json())
        .then(json => {
          for (let j = 0; j < json._items.length; j++) {
            const {name, equipment, id, icon} = json._items[j];
            if(json._items[j].equipable_by_player === false || json._items[j].equipable === false){
                 console.log('UNEQUIPPABLE:::>> ', name);
               }
            //filter out items that give minimal bonuses *prayer is omitted*
            if(equipment.attack_stab > 5 || equipment.attack_slash > 5 || equipment.attack_crush > 5
               || equipment.attack_magic > 5 || equipment.attack_ranged > 5 || equipment.defence_stab > 5
               || equipment.defence_slash > 5 || equipment.defence_crush > 5 || equipment.defence_magic > 5
               || equipment.defence_ranged > 5 || equipment.melee_strength > 5|| equipment.ranged_strength > 5
               || equipment.magic_damage > 5
              ){
                
                if(equipment.slot === 'weapon' || equipment.slot === '2h'){
                  this.dispatcher(
                    equipment.slot,
                    {name: name.toLowerCase(), slot: equipment.slot, id: id},
                    icon
                  );
                }
                else{
                  this.dispatcher(
                    equipment.slot,
                    {name: name.toLowerCase(), id:id},
                    icon
                  ); 
                }
              }
/*               else{
                console.log('---DISCARDED STATLESS ITEM---', name);
              } */

          }
     
        })
    }
    let b = new Date();
    console.log('DATA FETCH COMPLETE!');
    console.log('Time to Complete(ms)', b - a );
  }

  render() {
    return (
      <div className="App">
        <div className="col-lg-4">
          <DataPanel></DataPanel>
        </div>
        <div className="col-lg-4">
          <PlayerInfoCard></PlayerInfoCard>
        </div>
        <div className="col-lg-4">
          <MonsterInfoCard></MonsterInfoCard>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allWeapons: state.allWeapons,
    allAmmo: state.allAmmo,
    allBodies: state.allBodies,
    allCapes: state.allCapes,
    allNecks: state.allNecks,
    allShields: state.allShields,
    allLegs: state.allLegs,
    allHands: state.allHands,
    allFeet: state.allFeet,
    allRings: state.allRings,
    allHelms: state.allHelms,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)