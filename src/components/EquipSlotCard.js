import React, {Component} from 'react'
import EquipmentDropDown from './EquipmentDropDown';

class EquipSlotCard extends Component{
    render(){
        if(this.props.type === 'neck'){
            return(
                <>
                    {this.props.list.name === '' ?  
                        <div className = "card-slot equip-slot small-gap" id={this.props.type}>
                            <EquipmentDropDown listType={this.props.type}></EquipmentDropDown>
                        </div>
                    :
                        <div className = "card-slot equip-slot small-gap" id="blank">
                            <EquipmentDropDown listType={this.props.type}></EquipmentDropDown>
                        </div> 
                    }
                </>    
            )        
        }
        else if(this.props.type === 'body' || this.props.type === 'feet'){
            return(
                <>
                    {this.props.list.name === '' ?  
                        <div className = "card-slot equip-slot md-gap" id={this.props.type}>
                            <EquipmentDropDown listType={this.props.type}></EquipmentDropDown>
                        </div>
                    :
                        <div className = "card-slot equip-slot md-gap" id="blank">
                            <EquipmentDropDown listType={this.props.type}></EquipmentDropDown>
                        </div> 
                    }
                </>
            )
        }
        else{
            return(
                <>
                    {this.props.list.name === '' ?  
                        <div className = "card-slot equip-slot" id={this.props.type}>
                            <EquipmentDropDown listType={this.props.type}></EquipmentDropDown>
                        </div>
                    :
                        <div className = "card-slot equip-slot" id="blank">
                            <EquipmentDropDown listType={this.props.type}></EquipmentDropDown>
                        </div> 
                        }
                </>     
            );
        }
    }
}
  
export default EquipSlotCard