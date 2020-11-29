import React, {Component} from 'react';
import EquipmentDropDown from './EquipmentDropDown';

class PlayerInfoCard extends Component{
/*For future reference:
* https://oldschool.runescape.wiki/w/Legs_slot_table
*/
    render(){
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
                        <div className = "card-slot equip-slot" id="weapon">
                            <EquipmentDropDown></EquipmentDropDown>
                        </div>
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

export default PlayerInfoCard;