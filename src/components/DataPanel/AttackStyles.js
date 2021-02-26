import React, { Component } from 'react'
import {connect} from 'react-redux'
import AttackStyleItem from './AttackStyleItem'
import l from './../../assets/attackStyles/whip/whip_flick_crop.png'
import img1 from './../../assets/attackStyles/axe/axe_hack_crop.png'
import img2 from './../../assets/attackStyles/axe/axe_chop_crop.png'
import img3 from './../../assets/attackStyles/axe/axe_smash_sel_crop.png'
import img4 from './../../assets/attackStyles/axe/axe_block_crop.png'

class AttackStyles extends Component {
    render() {
/*         let styles = [];
        const {stances, weapon_type} = this.props
        for(let style of stances){
            styles.push(style.combat_style);
        }

        console.log('Styles', styles);

        let images = [];
        let defaultPath = `./../../assets/attackStyles/`;
        let path = '';
        for(let style of styles){
            path = `${weapon_type}/${weapon_type}_${style}_crop.png`;
            images.push(defaultPath + path);
        }

        console.log('IMG PATHS:', images); */
        return (
            <div className="styles-box">
                <div className="row">
                    <AttackStyleItem img={this.props.images[0]}></AttackStyleItem>
                    {this.props.images[0] ? <img src={`${this.props.images[0]}`} className="attack-style-img mr-0.5" alt=""></img>
                        : null}
                  {/*   <img src={images[1]} className="attack-style-img" alt=""></img> */}
                </div>
                <div className="row">
           {/*          <img src={images[2]} className="attack-style-img mr-0.2" alt=""></img>
                    {images[3] ? 
                        <img src={images[3]} className="attack-style-img" alt=""></img> 
                        :
                        <div className="attack-style-img" alt=""></div>
                    } */}
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