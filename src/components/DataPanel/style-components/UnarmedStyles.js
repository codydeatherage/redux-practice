import React, {Component} from 'react';
import kick from './../../../assets/attackStyles/unarmed/unarmed_kick_crop.png'
import punch from './../../../assets/attackStyles/unarmed/unarmed_punch_crop.png'
import block from './../../../assets/attackStyles/unarmed/unarmed_block_crop.png'

import kick_sel from './../../../assets/attackStyles/unarmed/unarmed_kick_sel_crop.png'
import punch_sel from './../../../assets/attackStyles/unarmed/unarmed_punch_sel_crop.png'
import block_sel from './../../../assets/attackStyles/unarmed/unarmed_block_sel_crop.png'
class UnarmedStyles extends Component{
    render(){
        console.log('style info', this.props.styleInfo);
        return( 
           <>
                <div className="row">
                    <img onClick={this.handleSelect} src={punch} className="attack-style-img mr-0.5" alt=""></img>
                    <img onClick={this.handleSelect}  src={kick} className="attack-style-img " alt=""></img>
                </div>
                <div className="row">
                    <img onClick={this.handleSelect}  src={block} className="attack-style-img mr-0.2" alt=""></img>
                    <div  className="attack-style-img" ></div>
                </div> 
            </>
       )
    }
}

export default UnarmedStyles