import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleSlot from './SingleSlot'

class EquipmentDropDown extends Component{
    render(){
        switch(this.props.listType){
            case 'weapon' :         
            return(
                <SingleSlot 
                    icon={this.props.equippedWeapon.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'helm' :
            return(
                <SingleSlot 
                    icon={this.props.equippedHead.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'cape' :             
            return(
                <SingleSlot 
                    icon={this.props.equippedCape.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'neck' : 
            return(
                <SingleSlot 
                    icon={this.props.equippedNeck.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'ammo' :
            return(
                <SingleSlot 
                    icon={this.props.equippedAmmo.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'body' :            
            return(
                <SingleSlot 
                    icon={this.props.equippedBody.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'offhand' :              
            return(
                <SingleSlot 
                    icon={this.props.equippedOffhand.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'legs' :              
            return(
                <SingleSlot 
                    icon={this.props.equippedLegs.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'hand' :              
            return(
                <SingleSlot 
                    icon={this.props.equippedHands.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'feet' :              
            return(
                <SingleSlot 
                    icon={this.props.equippedFeet.icon} 
                    listType={this.props.listType}>
                </SingleSlot>
            );
            case 'ring' :          
            return(
                <SingleSlot 
                    icon={this.props.equippedRing.icon} 
                    listType="ring">
                </SingleSlot>
            );
            default: 
            return(
                <SingleSlot 
                    icon="' '" 
                    listType={this.props.listType}>
                </SingleSlot>
            );
        } 
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

  export default connect(mapStateToProps)(EquipmentDropDown)