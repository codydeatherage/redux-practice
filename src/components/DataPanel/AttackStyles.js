import React, { Component } from 'react'
import {connect} from 'react-redux'
import img1 from './../../assets/attackStyles/axe/axe_hack_crop.png'
import img2 from './../../assets/attackStyles/axe/axe_chop_crop.png'
import img3 from './../../assets/attackStyles/axe/axe_smash_sel_crop.png'
import img4 from './../../assets/attackStyles/axe/axe_block_crop.png'

class AttackStyles extends Component {

    render() {
        let styles = [];
        for(let style of this.props.equippedWeapon.stances){
            styles.push(style.combat_style);
        }
        console.log('Styles', styles);
        return (
            <div className="styles-box">
                <div className="row">
                    <img src={img1} className="attack-style-img mr-0.5" alt=""></img>
                    <img src={img2} className="attack-style-img " alt=""></img>
                </div>
                <div className="row">
                    <img src={img3} className="attack-style-img mr-0.2" alt=""></img>
                    <img src={img4} className="attack-style-img " alt=""></img>
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