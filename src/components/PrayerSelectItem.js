import React, {Component} from 'react';
import {connect} from 'react-redux';

class PrayerSelectItem extends Component{
    constructor(props){
        super(props);
        
        this.updatePrayers = this.updatePrayers.bind(this);
        this.prayers = [//len = 16
            {name: "Clarity of Thought", boost: 1.05, type: 'atk', icon:'https://oldschool.runescape.wiki/images/e/e1/Clarity_of_Thought.png?8d584'},
            {name: "Improved Reflexes", boost: 1.10, type: 'atk', icon:'https://oldschool.runescape.wiki/images/7/7e/Improved_Reflexes.png?e38b5'},
            {name: "Incredible Reflexes", boost: 1.15, type: 'atk', icon:'https://oldschool.runescape.wiki/images/8/85/Incredible_Reflexes.png?ecf9c'},
            {name: "Burst of Strength", boosts: 1.05, type: 'str', icon:'https://oldschool.runescape.wiki/images/7/7b/Burst_of_Strength.png?18c47'},
            {name: "Superhuman Strength", boost: 1.10, type: 'str', icon:'https://oldschool.runescape.wiki/images/0/08/Superhuman_Strength.png?d2621'},
            {name: "Ultimate Strength", boost: 1.15, type: 'str', icon:'https://oldschool.runescape.wiki/images/3/3d/Ultimate_Strength.png?510a8'},
            {name: "Sharp Eye", boost: 1.05, type: 'range', icon:'https://oldschool.runescape.wiki/images/a/a3/Sharp_Eye.png?18c47'},
            {name: "Hawk Eye", boost: 1.10, type: 'range', icon:'https://oldschool.runescape.wiki/images/8/8b/Hawk_Eye.png?54ee9'},
            {name: "Eagle Eye", boost: 1.15, type: 'range', icon:'https://oldschool.runescape.wiki/images/d/d5/Eagle_Eye.png?4a200'},
            {name: "Mystic Will", boost: 1.05, type: 'magic', icon:'https://oldschool.runescape.wiki/images/2/23/Mystic_Will.png?20461'},
            {name: "Mystic Lore", boost: 1.10, type: 'magic', icon:'https://oldschool.runescape.wiki/images/d/d1/Mystic_Lore.png?097d2'},
            {name: "Mystic Might", boost: 1.15, type: 'magic', icon:'https://oldschool.runescape.wiki/images/0/03/Mystic_Might.png?b0218'},
            {name: "Chivalry", atk_boost: 1.15, str_boost: 1.18, type:'atk/str', icon:'https://oldschool.runescape.wiki/images/1/16/Chivalry.png?58bc5'},
            {name: "Piety", atk_boost: 1.20, str_boost: 1.23, type:'atk/str', icon:'https://oldschool.runescape.wiki/images/a/a2/Piety.png?58239'},
            {name: "Rigour", range_atk_boost: 1.20, range_str_boost: 1.23, type:'range', icon:'https://oldschool.runescape.wiki/images/5/5b/Rigour.png?159e1'},
            {name: "Augury", boost: 1.25, type: 'magic', icon:'https://oldschool.runescape.wiki/images/9/93/Augury.png?f234e'}
        ]
    }

    updatePrayers(){
        console.log(this.props.name);
        let prayInfo = this.prayers.find(p => p.name === this.props.name)
        console.log(prayInfo);
        const {atk, str, magic, range} = this.props.activePrayers;
        let payload = {atk:atk, str: str, magic: magic, range: range};
        switch(this.props.slot){
            case 'atk_level' : payload.atk = prayInfo; break;
            case 'str_level' : payload.str = prayInfo; break;                  
            case 'magic_level' : payload.magic = prayInfo; break;
            case 'ranged_level' : payload.range = prayInfo; break;
            default: console.log('Error modifying player stat ', this.props.slot);                                                       
        }
        this.props.dispatch({
            type: 'UPDATE_PRAYERS',
            payload: payload
        })
        

    }

    render(){
        return(
            <img onClick={this.updatePrayers} className="prayer-img" src={this.props.icon} alt=""></img>
        )
    }
}

const mapStateToProps = state => {
    return {
        activePrayers: state.activePrayers
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PrayerSelectItem)
