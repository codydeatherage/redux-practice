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


class PlayerInfoCard extends Component{
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