import React, {Component} from 'react';
import EquipSlotCard from './EquipSlotCard'
import {connect} from 'react-redux';
import allHelms from '../items/head_data.json'
import allCapes from '../items/cape_data.json'
import allNecks from '../items/neck_data.json'
import allAmmo from '../items/ammo_data.json'
import allWeapons from '../items/weapon_data.json'
import allBodies from '../items/body_data.json'
import allOffhands from '../items/shield_data.json'
import allLegs from '../items/legs_data.json'
import allHands from '../items/hands_data.json'
import allFeet from '../items/feet_data.json'
import allRings from '../items/ring_data.json'
import allBosses from '../monsters/boss_data.json'


class PlayerInfoCard extends Component{
    constructor(props){
        super(props);
        let bossList = [];
        for(let boss of allBosses.monsters){
            bossList.push(boss.name);
        }
        this.state = {selected: '', list: bossList}
   

        this.handleChange = this.handleChange.bind(this);
        
    }
    async handleChange(event){
        await this.setState({selected: event.target.innerText});
        console.log(this.state.selected);     
    }

    render(){
        return(
            <div className="card player-card">
                <div className="player-equip-card">
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedHead}
                            listAll={allHelms.items}
                            type="helm"> 
                        </EquipSlotCard>
                    </div>
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedCape}
                            listAll={allCapes.items}
                            type="cape"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedNeck}
                            listAll={allNecks.items}
                            type="neck"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedAmmo}
                            listAll={allAmmo.items}
                            type="ammo"> 
                        </EquipSlotCard>
                    </div>
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedWeapon}
                            listAll={allWeapons.items}
                            type="weapon"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedBody}
                            listAll={allBodies.items}
                            type="body"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedOffhand}
                            listAll={allOffhands.items}
                            type="offhand"> 
                        </EquipSlotCard>
                    </div>             
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedLegs}
                            listAll={allLegs.items}
                            type="legs"> 
                        </EquipSlotCard>
                    </div>                
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedHands}
                            listAll={allHands.items}
                            type="hands"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedFeet}
                            listAll={allFeet.items}
                            type="feet"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedRing}
                            listAll={allRings.items}
                            type="ring"> 
                        </EquipSlotCard>         
                    </div>
                </div>
                <div className="monster-select">    
                        <button type="button" className="boss-select btn-default" data-toggle="dropdown">Select A Boss</button>
                        <ul className="dropdown-menu scrollable-menu" role="menu">
                            <input type="search" onChange={this.filterList} className="search-bar"></input>  
                                {this.state.list.map((item, index) =>{
                                    return(<li onClick={this.handleChange} key={index}>{item}</li>)
                                }) }
                        </ul>
                 
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
        equippedBody: state.equippedBody,
        equippedWeapon: state.equippedWeapon,
        equippedOffhand: state.equippedOffhand,
        equippedLegs: state.equippedLegs,
        equippedHands: state.equippedHands,
        equippedFeet: state.equippedFeet,
        equippedRing: state.equippedRing 
    }
  }
  export default connect(
    mapStateToProps
  )(PlayerInfoCard)