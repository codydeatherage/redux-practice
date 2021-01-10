import React, {Component} from 'react'
import {connect} from 'react-redux'

class PlayerSkillSlot extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log('ATK: ', event.target.value, '---');
        const{atk, str, range, magic} = this.props.playerStats;
        let payload = {};
        if(event.target.value !== ''){
            const input = parseInt(event.target.value);
            switch(this.props.slot){
                case 'atk_level' : payload = {atk: input, str: str, magic: magic, range: range}; break;
                case 'str_level' : payload = {atk: atk, str: input, magic: magic, range: range}; break;                  
                case 'magic_level' : payload = {atk: atk, str: str, magic: input, range: range}; break;
                case 'ranged_level' : payload = {atk: atk, str: str, magic: magic, range: input}; break;
                default: console.log('NO MATCH FOR PLAYER STAT');                                                       
            }
        }
        else{
            switch(this.props.slot){
                case 'atk_level' :  payload = {atk: 1, str: str, magic: magic, range: range}; break;
                case 'str_level' : payload ={atk: atk, str: 1, magic: magic, range: range}; break;
                case 'magic_level' : payload = {atk: atk, str: str, magic: 1, range: range}; break;
                case 'ranged_level' : payload = {atk: atk, str: str, magic: magic, range: 1}; break;
                default: console.log('NO MATCH FOR PLAYER STAT');                                                                        
            }  
        }
        if(payload){
            this.props.dispatch({
                type: 'CHANGE_PLAYER_STAT',
                payload: payload
            });
        }
    }

    render(){
        return(
            <div className="form-input player-stat">
                <div className="stat-icon my-auto" id={this.props.slot}></div>
                <div className="player-stat-info">
                    {this.props.bonuses.potion === 1? 
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