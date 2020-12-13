import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import PlayerInfoCard from './components/PlayerInfoCard'
import MonsterInfoCard from './components/MonsterInfoCard'
import DataPanel from './components/DataPanel'

class App extends Component {
  constructor() {
    super();
    this.dispatcher = this.dispatcher.bind(this);
  }

  dispatcher(slot, payload, icon){
    if(slot === 'weapon' || slot === '2h'){
      if(!this.props.allWeapons.find(item => item.name === payload.name)){
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
        if(!this.props.allRings.find(item => item.name === payload.name)){
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });
        } 
        break;

      case 'cape':
        if(!this.props.allCapes.find(item =>item.name === payload.name) 
          && !payload.name.includes('team-') && !payload.name.includes('fremennik ')){
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });
        }
        break;

      case 'head':
        if(!this.props.allHelms.find(item => item.name === payload.name)){
          this.props.dispatch({
            type: `ADD_${slot.toUpperCase()}`,
            payload: payload
          });
        }
        break;

      case 'neck':
        if(!this.props.allNecks.find(item => item.name === payload.name)){
          if(!payload.name.includes('(or)') && !payload.name.includes('(t')){ 
            this.props.dispatch({
              type: `ADD_${slot.toUpperCase()}`,
              payload: payload
            });
          }
        }
        break;

      case 'ammo':
        if(!this.props.allAmmo.find(item => item.name === payload.name)){
          if(!payload.name.includes('(')
            && !payload.name.includes('fire') && !payload.name.includes('brutal')){ 
            this.props.dispatch({
              type: `ADD_${slot.toUpperCase()}`,
              payload: payload
            });
          }
        }
        break;

      case 'body':
        if(!this.props.allBodies.find(item => item.name === payload.name)){
          if(!payload.name.includes('100') && !payload.name.includes('75')
          && !payload.name.includes('50') && !payload.name.includes('25')
          && !payload.name.includes('(t)') && !payload.name.includes('(g)')
          && !payload.name.includes('basic') && !payload.name.includes('attuned')
          && !payload.name.includes('perfected') && !payload.name.includes('(l)')){ 
            this.props.dispatch({
              type: `ADD_${slot.toUpperCase()}`,
              payload: payload
            }); 
          }  
        }
        break;

        case 'legs':
          if(!this.props.allLegs.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });   
          }
          break;

        case 'shield':
          if(!this.props.allShields.find(item => item.name === payload.name)){
            if(!payload.name.includes('(l)')){ 
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });
            }  
          }
          break;
        case 'hands':
          if(!this.props.allHands.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });  
          }
          break;

        case 'feet':
          if(!this.props.allFeet.find(item => item.name === payload.name)){
            /* if(!payload.name.includes('(') || payload.name.includes('(e)' 
              || payload.name.includes('fire') || payload.name.includes('brutal'))){  */
              this.props.dispatch({
                type: `ADD_${slot.toUpperCase()}`,
                payload: payload
              });   
          }
          break; 

      default:  
    }
  }
//store.getState().allWeapons[store.getState().allWeapons.findIndex(i=>i.name === 'Elder maul')].stats
  async componentDidMount() {
    let pageNumber = 1;
  /*   const eMax_Pages = 146; */
    let eMax_Pages = 74;
    let a = new Date();
    console.log('Beginning fetch....');
    for(let i = pageNumber; i <= eMax_Pages; i++){
      await fetch(`https://api.osrsbox.com/equipment?max_results=50&&page=${i}`)
        .then(response => response.json())
        .then(json => {
          for (let j = 0; j < json._items.length; j++) {
            const {name, equipment, id, icon} = json._items[j];

            //filter out items that give minimal bonuses *prayer is omitted*
            if((equipment.attack_stab >= 4 || equipment.attack_slash >= 4 || equipment.attack_crush >= 4
               || equipment.attack_magic >= 4 || equipment.attack_ranged >= 4 || equipment.melee_strength >= 4 
               || equipment.ranged_strength >= 4 || equipment.magic_damage >= 4) || name.toLowerCase().includes('void')
               || name.toLowerCase().includes('slayer helm') //exceptions are made for slayer helm and void equipment
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
        <div className="player-container">
          <div className="player-info">
              <DataPanel></DataPanel>       
              <PlayerInfoCard></PlayerInfoCard>       
          </div>
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