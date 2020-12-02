import React, {Component} from 'react';
import base64 from 'base-64';
import {connect} from 'react-redux';
import { isCompositeComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';

class EquipmentDropDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            head: '',
            cape: '',
            neck: '',
            ammo: '',
            weapon: '',
            body: '',
            offhand: '',
            legs: '',
            hands: '',
            feet: '',
            ring: ''
        }
        this.listType = props.listType;
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event){
        console.log('Prev state:', this.state.weapon);
        await this.setState({weapon: event.target.innerText}); //await important
        console.log('New state:', this.state.weapon);
        console.log(event.target.innerText);
     /*    console.log(this.props.allWeapons[`${this.state.weapon}`]); */
  /*       await fetch(`https://api.osrsbox.com/equipment/`)
        .then(response => response.json())
        .then(json => {
        
        
        }) */

        
/*         this.props.dispatch({
            type: 'CHANGE_EQUIP',
            payload: {name: this.state.head, icon:""}
        }) */

    }
    render(){
       /*  const {listType} = this.props; */
        return(
            <div>
                <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
                
                <ul className="dropdown-menu scrollable-menu" role="menu">
                    <input type="search" className=""></input>
                    {
                    this.listType === 'weapon' ?
                        this.props[`all${this.listType.charAt(0).toUpperCase() + this.listType.slice(1)}s`].map((weapon, index) =>{
                            return(<li onClick={this.handleChange} key={index}>{weapon.name}</li>)
                        }) : null
                    }

                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { 
        allWeapons: state.allWeapons,
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

  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EquipmentDropDown)