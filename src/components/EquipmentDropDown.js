import React, {Component} from 'react';
import {connect} from 'react-redux';
import DropDownList from './DropDownList'
import SingleSlot from './SingleSlot'

class EquipmentDropDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            head: {name: '', id: ''},
            cape: {name: '', id: ''},
            neck: {name: '', id: ''},
            ammo: {name: '', id: ''},
            weapon: {name: '', id: ''},
            body: {name: '', id: ''},
            offhand: {name: '', id: ''},
            legs: {name: '', id: ''},
            hands: {name: '', id: ''},
            feet: {name: '', id: ''},
            ring: {name: '', id: ''},
            image: '',
            displayItems: []
        }
        this.listType = props.listType;
        this.currList = [];
        let icon = '';
        switch(this.props.listType){
            case 'weapon' : this.currList = this.props.allWeapons; 
                            icon = this.props.equippedWeapon.icon;
                            break;
            case 'helm' : this.currList = this.props.allHelms; 
                            icon = this.props.equippedHead.icon;
                            break;
            case 'cape' : this.currList = this.props.allCapes; 
                            icon = this.props.equippedCape.icon;
                            break;
            case 'neck' : this.currList = this.props.allNecks; 
                            icon = this.props.equippedNeck.icon;
                            break;
            case 'ammo' : this.currList = this.props.allAmmo; 
                            icon = this.props.equippedAmmo.icon;
                            break;
            case 'body' : this.currList = this.props.allBodies; 
                            icon = this.props.equippedBody.icon;
                            break;
            case 'offhand' : this.currList = this.props.allShields; 
                            icon = this.props.equippedOffhand.icon;
                            break;
            case 'legs' : this.currList = this.props.allLegs; 
                            icon = this.props.equippedLegs.icon;
                            break;
            case 'hands' : this.currList = this.props.allHands; 
                            icon = this.props.equippedHands.icon;
                            break;
            case 'feet' : this.currList = this.props.allFeet; 
                            icon = this.props.equippedFeet.icon;
                            break;
            case 'ring' : this.currList = this.props.allRings; 
                            icon = this.props.equippedRing.icon;
                            break;
            default: this.currList = []; icon = '';
        }
        this.setState({image: icon});
        console.log('ICON:::', this.state.image, ':::');
        this.filterList = this.filterList.bind(this);
        this.setState({displayItems: this.props.currList});
    }

    async filterList(event){
        console.log('HEAD FILTER::', this.props.listType);
        let currList = [];
        switch(this.props.listType){
            case 'weapon' : currList = this.props.allWeapons; break;
            case 'helm' : currList = this.props.allHelms; break;
            case 'cape' : currList = this.props.allCapes; break;
            case 'neck' : currList = this.props.allNecks; break;
            case 'ammo' : currList = this.props.allAmmo; break;
            case 'body' : currList = this.props.allBodies; break;
            case 'offhand' : currList = this.props.allShields; break;
            case 'legs' : currList = this.props.allLegs; break;
            case 'hands' : currList = this.props.allHands; break;
            case 'feet' : currList = this.props.allFeet; break;
            case 'ring' : currList = this.props.allRings; break;
            default: currList = [];
        }
        let newList = [];
        //console.log('LISTED', currList);
        for(let item of currList){
            newList.push(item.name);
        }
       // console.log(newList);
        let displayList = [];
        for(let item of newList){
            if(item.includes(event.target.value.toLowerCase())){
                displayList.push(item);
            }
        }
        //console.log('Results: ', displayList);
        await this.setState({displayItems: displayList});
        //console.log('STATE ::', this.state.displayItems);
    }

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
            case 'hands' :              
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
        allWeapons: state.allWeapons,
        allCapes: state.allCapes,
        allHelms: state.allHelms,
        allRings: state.allRings,
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

  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EquipmentDropDown)