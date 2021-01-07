import React, {Component} from 'react'
import {connect} from 'react-redux'

class PlayerSkillSlot extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const input = parseInt(event.target.value);
        const{atk, str, range, magic} = this.props.playerStats;
        switch(this.props.slot){
            case 'atk_level' : this.props.dispatch({
                                    type: 'CHANGE_PLAYER_STAT',
                                    payload: ({atk: input, str: str, magic: magic, range: range})
                                }); break;
            case 'str_level' : this.props.dispatch({
                                type: 'CHANGE_PLAYER_STAT',
                                payload: ({atk: atk, str: input, magic: magic, range: range})
                                }); break;
            case 'magic_level' : this.props.dispatch({
                                type: 'CHANGE_PLAYER_STAT',
                                payload: ({atk: atk, str: str, magic: input, range: range})
                                }); break;
            case 'ranged_level' : this.props.dispatch({
                                type: 'CHANGE_PLAYER_STAT',
                                payload: ({atk: atk, str: str, magic: magic, range: input})
                                }); break;
            default: console.log('NO MATCH FOR PLAYER STAT');                                                                        
        }
    }

    render(){
        return(
            <div className="form-input player-stat">
                <div className="stat-icon my-auto" id={this.props.slot}></div>
                <div className="player-stat-info">
                    <div className="boosted-stat">86</div>
                    <div className="stat-slash">/</div>
                    <input onChange={this.handleChange} type="text" className="player-stat-input"></input>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
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