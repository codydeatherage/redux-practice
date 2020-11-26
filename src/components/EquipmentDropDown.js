import React, {Component} from 'react';

class EquipmentDropDown extends Component{
    render(){
        return(
            <div>
                <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
                <ul className="dropdown-menu scrollable-menu" role="menu">
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li> 
                </ul>
            </div>
        );
    }
}

export default EquipmentDropDown;