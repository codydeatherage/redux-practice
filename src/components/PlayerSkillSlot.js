import React, {Component} from 'react'
import {connect} from 'react-redux'

class PlayerSkillSlot extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
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