import React, { Component } from 'react'
import {connect} from 'react-redux'
import UnarmedStyles from './style-components/UnarmedStyles'

import img1 from './../../assets/attackStyles/unarmed/unarmed_punch_crop.png'
import img1_sel from './../../assets/attackStyles/axe/axe_hack_sel_crop.png'

import img2 from './../../assets/attackStyles/axe/axe_chop_crop.png'
import img2_sel from './../../assets/attackStyles/axe/axe_chop_sel_crop.png'

import img3 from './../../assets/attackStyles/axe/axe_smash_crop.png'
import img3_sel from './../../assets/attackStyles/axe/axe_smash_sel_crop.png'

import img4 from './../../assets/attackStyles/axe/axe_block_crop.png'
import img4_sel from './../../assets/attackStyles/axe/axe_block_sel_crop.png'

class AttackStyles extends Component {
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            selected: [0,0,0,0]
        }
    }
    handleSelect = () =>{
        console.log(this);
    }
    render() {
        let styles = [];
        for(let style of this.props.equippedWeapon.stances){
            styles.push(style.combat_style);
        }
        console.log('Styles', styles);
        let weapState= [];
        for(let i = 0; i < styles.length; i++){
            weapState.push({style: styles[i], selected: false})
        }
        let styleImages = [];
        for(let state of weapState){
            let path = `./../../assets/attackStyles/${this.props.weaponType}/${this.props.weaponType}_${state.style}`;
            if(state.selected === true){
                path += '_sel_crop.png';
            }
            else{
                path += '_crop.png';
            }
            styleImages.push({style: state.style, img: path, selected: false});
            
        }
        console.log(styleImages);
/*         if(this.props.weaponType === 'unarmed'){
    
            console.log(weapState);
            return(
                <div className="styles-box">
                    <UnarmedStyles styleInfo={weapState}></UnarmedStyles>
                </div>
            )
        } */
        
            return (
                <div className="styles-box">
                    <div className="row">
                        <img onClick={this.handleSelect} src={styleImages[0].img} className="attack-style-img mr-0.5" alt=""></img>
                        <img onClick={this.handleSelect}  src={styleImages[1].img} className="attack-style-img " alt=""></img>
                    </div>
                    <div className="row">
                        <img onClick={this.handleSelect}  src={styleImages[2].img} className="attack-style-img mr-0.2" alt=""></img>
                        <img onClick={this.handleSelect} src="./../../assets/attackStyles/unarmed/unarmed_block_crop.png" className="attack-style-img " alt=""></img>
                    </div> 
                </div>
            )
        
    }
}

const mapStateToProps = state => {
    return {
        equippedWeapon: state.equippedWeapon
    }
  }
  
  export default connect(
    mapStateToProps
  )(AttackStyles)