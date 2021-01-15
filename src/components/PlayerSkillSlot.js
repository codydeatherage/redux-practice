import React, {Component} from 'react'
import {connect} from 'react-redux'
import PrayerSelect from './PrayerSelect'

class PlayerSkillSlot extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
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
        this.prayersToDisplay = [];
        switch(this.props.slot){
            case 'atk_level' : for(let pray of this.prayers){
                                    if(pray.type === 'atk' || pray.type === 'atk/str'){
                                        this.prayersToDisplay.push(pray);
                                    }
                                }; break;
            case 'str_level' : for(let pray of this.prayers){
                                    if(pray.type === 'str' || pray.type === 'atk/str'){
                                        this.prayersToDisplay.push(pray);
                                    }
                                }; break;                 
            case 'magic_level' : for(let pray of this.prayers){
                                    if(pray.type === 'magic'){
                                        this.prayersToDisplay.push(pray);
                                    }
                                }; break;
            case 'ranged_level' : for(let pray of this.prayers){
                                    if(pray.type === 'range'){
                                        this.prayersToDisplay.push(pray);
                                    }
                                }; break;
            default: console.log('Error displaying prayers...', this.props.slot);                                                       
        }
    }
    updatePrayers(){
        console.log(this);
    }
    handleChange(event){
        if(event.target.value.length > 2){
            event.target.value = event.target.value.substr(0, 2);
        }
        const{atk, str, range, magic} = this.props.playerStats;
        let payload = {atk: atk, str: str, magic: magic, range: range};
        const input = parseInt(event.target.value);
        switch(this.props.slot){
            case 'atk_level' : event.target.value !== '' ? payload.atk = input : payload.atk = 1; break;
            case 'str_level' : event.target.value !== '' ? payload.str = input : payload.str = 1; break;                  
            case 'magic_level' : event.target.value !== '' ? payload.magic = input : payload.magic = 1; break;
            case 'ranged_level' : event.target.value !== '' ? payload.range = input : payload.range = 1; break;
            default: console.log('Error modifying player stat ', this.props.slot);                                                       
        }
        this.props.dispatch({
            type: 'CHANGE_PLAYER_STAT',
            payload: payload
        });    
    }

    render(){
        return(
            <div className="form-input player-stat dropright">
                <div className="stat-icon my-auto" id={this.props.slot}></div>
                <div className="player-stat-info">
                    {this.props.bonuses.potion === 1 ? 
                        <div className="boosted-stat">{this.props.value - 1}</div> 
                        :
                         <div className="boosted-stat">{this.props.value}</div>
                    }
                    <div className="stat-slash">/</div>
                    <input onChange={this.handleChange} type="text" className="player-stat-input"></input>

                </div>
                <PrayerSelect prayersToDisplay={this.prayersToDisplay} slot={this.props.slot}></PrayerSelect>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bonuses: state.bonuses,
        selectedBoss: state.selectedBoss,
        playerStats: state.playerStats
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
  )(PlayerSkillSlot)