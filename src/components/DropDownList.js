import React, {Component} from 'react'
import {connect} from 'react-redux';

class DropDownList extends Component{
    constructor(props){
        super(props);
        this.state ={
            equipped: '',
            icon: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event){
        let itemList = this.props.listAll;
        const itemID = itemList.find(item => item.name === event.target.innerText).id;
    
        await this.setState({equipped: event.target.innerText});
        console.log('NEW ITEM SELECTED:', this.state.equipped, itemID);
        await fetch(`https://api.osrsbox.com/equipment/${itemID}`)
            .then(response => response.json())
            .then(json => {
                const {equipment, icon} = json;
                let dispatchType = this.props.type.toUpperCase();
                console.log('DISPATCH: ', dispatchType);
                this.setState({icon: icon});
                this.props.dispatch({
                    type: `CHANGE_${dispatchType}`,
                    payload: {name: this.state.equipped, icon: icon, stats: equipment}
                })
            }
        ) 
    }

    render(){
        return(
            this.props.items.map((item, index) =>{
                return(<li onClick={this.handleChange} key={index}>{item}</li>)
            }) 
        )
    }
}

const mapStateToProps = state => {
    return {
        equippedBody: state.equippedBody,
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
        equippedWeapon: state.equippedWeapon,
        equippedOffhand: state.equippedOffhand,
        equippedLegs: state.equippedLegs,
        equippedHands: state.equippedHands,
        equippedFeet: state.equippedFeet,
        equippedRing: state.equippedRing, 
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
  )(DropDownList)