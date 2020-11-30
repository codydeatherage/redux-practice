import React, {Component} from 'react';
import {connect} from 'react-redux';

class EquipmentDropDown extends Component{
    render(){
        const {listType} = this.props;
        return(
            <div>
                <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
                <ul className="dropdown-menu scrollable-menu" role="menu">
                    {
                    listType === 'weapon' ?
                        this.props[`all${listType.charAt(0).toUpperCase() + listType.slice(1)}s`].map((weapon, index) =>{
                            return(<li key={index}>{weapon.name}</li>)
                        }) : null
                    }

                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { allWeapons: state.allWeapons }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EquipmentDropDown)