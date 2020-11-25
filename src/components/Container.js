import React, {Component} from 'react';

class Container extends Component{
/*For future reference:
* https://oldschool.runescape.wiki/w/Legs_slot_table
*/

    render(){
        return(
            <div className="card">
                <div className = "row row-1">
                    <div className = "card equip-slot" id="helm"></div>
                </div>
                <div className = "row">
                    <div className = "card equip-slot row-2" id="cape"></div>
                    <div className = "card equip-slot row-2" id="neck"></div>
                    <div className = "card equip-slot row-2" id="ammo"></div>
                </div>
                <div className = "row">
                    <div className = "card equip-slot row-3" id="weapon"></div>
                    <div className = "card equip-slot row-3" id="body"></div>
                    <div className = "card equip-slot row-3" id="offhand"></div>                                                 
                </div>                
                <div className = "row">
                    <div className = "card equip-slot" id="legs"></div>                    
                </div>                
                <div className = "row">
                    <div className = "card equip-slot row-3" id="gloves"></div>
                    <div className = "card equip-slot row-3" id="boots"></div>
                    <div className = "card equip-slot row-3" id="ring"></div>                                                 
                </div>

            </div>


        )
    }
}

export default Container;