import React, {Component} from 'react'
import DropDownList from './DropDownList'
import {connect} from 'react-redux';

class SingleSlot extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayItems : []
        }
        this.filterList = this.filterList.bind(this);
    }
    async filterList(event){
        let currList = [];
        console.log('SINGLE SLOT FUILTER', this.props.listType);
        switch(this.props.listType){
            case 'weapon' : currList = this.props.allWeapons; break;
            case 'helm' : currList = this.props.allHelms; break;
            case 'cape' : currList = this.props.allCapes; break;
            case 'neck' : currList = this.props.allNecks; break;
            case 'ammo' : currList = this.props.allAmmo; break;
            case 'body' : currList = this.props.allBodies; break;
            case 'offhand' : currList = this.props.allShields; break;
            case 'legs' : currList = this.props.allLegs; break;
            case 'hand' : currList = this.props.allHands; break;
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
        return(     
        <div>
            <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
            {this.props.icon ? <img className="test" src={`data:image/png;base64,${this.props.icon}`} alt=""></img> : null}
            <ul className="dropdown-menu scrollable-menu" role="menu">
                <input type="search" onChange={this.filterList} className="search-bar"></input>  
                    <DropDownList type={this.props.listType} items={this.state.displayItems}></DropDownList>
            </ul> 
        </div>
        );
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
  )(SingleSlot)