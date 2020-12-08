import React, {Component} from 'react';
import EquipSlotCard from './EquipSlotCard'
import {connect} from 'react-redux';

class PlayerInfoCard extends Component{
    render(){
        return(
            <div className="card player-card">
                <div className="player-equip-card">
                    <div className = "row">
                        <EquipSlotCard list={this.props.equippedHead} type="helm"></EquipSlotCard>
                    </div>
                    <div className = "row">
                        <EquipSlotCard list={this.props.equippedCape} type="cape"></EquipSlotCard>
                        <EquipSlotCard list={this.props.equippedNeck} type="neck"></EquipSlotCard>
                        <EquipSlotCard list={this.props.equippedAmmo} type="ammo"></EquipSlotCard>
                    </div>
                    <div className = "row">
                        <EquipSlotCard list={this.props.equippedWeapon} type="weapon"></EquipSlotCard>
                        <EquipSlotCard list={this.props.equippedBody} type="body"></EquipSlotCard>
                        <EquipSlotCard list={this.props.equippedOffhand} type="offhand"></EquipSlotCard>
                    </div>             
                    <div className = "row">
                        <EquipSlotCard list={this.props.equippedLegs} type="legs"></EquipSlotCard>          
                    </div>                
                    <div className = "row">
                        <EquipSlotCard list={this.props.equippedHands} type="hand"></EquipSlotCard>
                        <EquipSlotCard list={this.props.equippedFeet} type="feet"></EquipSlotCard>
                        <EquipSlotCard list={this.props.equippedRing} type="ring"></EquipSlotCard>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        equippedBody: state.equippedBody,
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
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