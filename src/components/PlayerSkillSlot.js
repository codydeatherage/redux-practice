import React, {Component} from 'react'
import {connect} from 'react-redux'

class PlayerSkillSlot extends Component{
    render(){
        return(
            <div className="form-input player-stat">
                <div className="stat-icon my-auto" id={this.props.slot}></div>
                <div className="player-stat-info">
                    <div className="boosted-stat">86</div>
                    <div className="stat-slash">/</div>
                    <input type="text" className="player-stat-input"></input>
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
  )(PlayerSkillSlot)