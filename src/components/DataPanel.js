import React, {Component} from 'react'
import {connect} from 'react-redux'
import PlayerSkillSlot from './PlayerSkillSlot'
import './../stylesheets/PlayerInfo.css'

class DataPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            player_atk: '',
            player_str: '',
            player_ranged: '',
            player_magic:''
        }
    }
    render(){
        return(
            <div className="card panel-card">
                <h1>PLAYER STATS</h1>
                <div className="row">
                    <PlayerSkillSlot slot={'atk_level'}></PlayerSkillSlot>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/8/82/Super_combat_potion%284%29.png?dc66c" alt=""></img>
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/e5/Overload_%28%2B%29%284%29.png?6b1dd" alt=""></img>
                    </div>

                </div>
                <div className="row">
                    <PlayerSkillSlot slot="str_level"></PlayerSkillSlot>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/f/fe/Imbued_heart.png?b33a3" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <PlayerSkillSlot slot="magic_level"></PlayerSkillSlot>
                    <PlayerSkillSlot slot="ranged_level"></PlayerSkillSlot>
                </div>
                <div className="row">
                    
                </div>
                <div className="row">
                    <h1>Attack Bonuses</h1>
                </div>
                <div className="atk-bonus-container">
                    <div className="equip-bonus-container">
                        <div className="row">
                            <div className="atk-bonus">STAB</div>
                            <div className="atk-bonus">SLASH</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">CRUSH</div>
                            <div className="atk-bonus">MELEE_STR</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">MAGIC</div>
                            <div className="atk-bonus">MAGIC_DMG</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">RANGED</div>
                            <div className="atk-bonus">RANGED_STR</div>
                        </div>
                    </div>
                    <div className="equip-bonus-container mx-0">
                        <div className="row">
                            <div className="atk-bonus">MAX HIT</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">ACCURACY</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">DPS</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedBoss: state.selectedBoss
    }
  }
  
  export default connect(
    mapStateToProps
  )(DataPanel)
