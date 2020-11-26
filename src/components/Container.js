import React, {Component} from 'react';
import EquipmentDropDown from './EquipmentDropDown';

class Container extends Component{
/*For future reference:
* https://oldschool.runescape.wiki/w/Legs_slot_table
*/

    render(){
        return(
            <div className="card">
                <div className = "row row-1">
                    <div className = "card equip-slot" id="helm">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                </div>
                <div className = "row">
                    <div className = "card equip-slot row-2" id="cape">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                    <div className = "card equip-slot row-2" id="neck">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                    <div className = "card equip-slot row-2" id="ammo">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                </div>
                <div className = "row">
                    <div className = "card equip-slot row-3" id="weapon">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                    <div className = "card equip-slot row-3" id="body">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                    <div className = "card equip-slot row-3" id="offhand">
                        <EquipmentDropDown></EquipmentDropDown></div>                                                 
                </div>                
                <div className = "row">
                    <div className = "card equip-slot" id="legs">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>                    
                </div>                
                <div className = "row">
                    <div className = "card equip-slot row-3" id="gloves">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                    <div className = "card equip-slot row-3" id="boots">
                        <EquipmentDropDown></EquipmentDropDown>
                    </div>
                    <div className = "card equip-slot row-3" id="ring">
                    <   EquipmentDropDown></EquipmentDropDown></div>                                                 
                </div>

            </div>


        )
    }
}

export default Container;