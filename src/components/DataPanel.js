import React, {Component} from 'react'
import {connect} from 'react-redux'
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
                    <div className="form-input player-stat">
                        <div className="stat-icon my-auto" id="atk_level"></div>
                        <div className="player-stat-info">
                            <div className="boosted-stat">86</div>
                            <div className="stat-slash">/</div>
                            <input type="text" className="player-stat-input"></input>
                        </div>

                    </div>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/8/82/Super_combat_potion%284%29.png?dc66c" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="form-input player-stat">
                        <div className="stat-icon my-auto" id="str_level"></div>
                        <div className="player-stat-info">
                            <div className="boosted-stat">-</div>
                            <div className="stat-slash">/</div>
                            <input type="text" className="player-stat-input"></input>
                        </div>
                    </div>
                    <div className="radio-potion">
                    <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/e5/Overload_%28%2B%29%284%29.png?6b1dd" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="form-input player-stat">
                        <div className="stat-icon my-auto" id="magic_level"></div>
                        <div className="player-stat-info">
                            <div className="boosted-stat">-</div>
                            <div className="stat-slash">/</div>
                            <input type="text" className="player-stat-input"></input>
                        </div>
                    </div>
                    <div className="radio-potion">
                    <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="form-input player-stat">
                        <div className="stat-icon my-auto" id="ranged_level"></div>
                        <div className="player-stat-info">
                            <div className="boosted-stat">-</div>
                            <div className="stat-slash">/</div>
                            <input type="text" className="player-stat-input"></input>
                        </div>
                    </div>
                    <div className="radio-potion">
                    <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/f/fe/Imbued_heart.png?b33a3" alt=""></img>
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
