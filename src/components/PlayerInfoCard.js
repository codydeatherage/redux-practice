import React, {Component} from 'react';
import EquipmentDropDown from './EquipmentDropDown';
import {connect} from 'react-redux';
import image from './../blank-equip2.png'

class PlayerInfoCard extends Component{
/*For future reference:
* https://oldschool.runescape.wiki/w/Legs_slot_table
*/  
    constructor(){
        super()
        this.blankCard = this.blankCard.bind(this);
    }
    blankCard(){
    console.log('bankasdfknew');
    return(
        <div className = "card-slot equip-slot" id="blank">
            <EquipmentDropDown listType="weapon"></EquipmentDropDown>
        </div>
    )
    }
    render(){
        console.log(`equipped Weapon: ${this.props.equippedWeapon.name}`);
        return(
            <div className="card player-card">
                <div className="player-equip-card">
                    <div className = "row">
                        <div className = "card-slot equip-slot" id="helm">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "card-slot equip-slot" id="cape">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                        <div className = "card-slot equip-slot small-gap" id="neck">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                        <div className = "card-slot equip-slot" id="ammo">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                    </div>
                    <div className = "row">
                        {
                            this.props.equippedWeapon.name === '' ? console.log('equipped: NO')
                                                           : console.log('equipped: YES')
                        }
                         {this.props.equippedWeapon.name === '' ?  
                                    <div className = "card-slot equip-slot" id="weapon">
                                        <EquipmentDropDown listType="weapon"></EquipmentDropDown>
                                    </div>
                                    :
                                    <div className = "card-slot equip-slot" id="blank">
                                        {/* <img src={image} className="test" alt=""></img> */}
                                        <EquipmentDropDown listType="weapon"></EquipmentDropDown>
                                    </div>     
                        } 
                        
                    {/*     <div className = "card-slot equip-slot" id="weapon">
                            <EquipmentDropDown listType="weapon"></EquipmentDropDown>
                        </div> */}

                        <div className = "card-slot equip-slot md-gap" id="body">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                        <div className = "card-slot equip-slot" id="offhand">
                            <EquipmentDropDown></EquipmentDropDown></div>                                                 
                    </div>                
                    <div className = "row">
                        <div className = "card-slot equip-slot" id="legs">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>                    
                    </div>                
                    <div className = "row">
                        <div className = "card-slot equip-slot" id="gloves">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                        <div className = "card-slot equip-slot md-gap" id="boots">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
                        <div className = "card-slot equip-slot" id="ring">
                        <   EquipmentDropDown></EquipmentDropDown></div>                                                 
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