import React, {Component} from 'react'
import {connect} from 'react-redux'

class MonsterSkillSlot extends Component{
    render(){
        return(
            <div className="form-input">
                <div className="stat-icon my-auto mx-1" id={this.props.stat}></div>
                <div className="boss-stat-input my-auto mx-1">{this.props.selectedBoss[`${this.props.stat}`]}</div>
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
  )(MonsterSkillSlot)
