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
        let itemList = [];
        switch(this.props.type){
            case 'weapon' : itemList = this.props.allWeapons; break;
            case 'helm' : itemList = this.props.allHelms; break;
            case 'cape' : itemList = this.props.allCapes; break;
            case 'neck' : itemList = this.props.allNecks; break;
            case 'ammo' : itemList = this.props.allAmmo; break;
            case 'body' : itemList = this.props.allBodies; break;
            case 'offhand' : itemList = this.props.allShields; break;
            case 'legs' : itemList = this.props.allLegs; break;
            case 'hands' : itemList = this.props.allHands; break;
            case 'feet' : itemList = this.props.allFeet; break;
            case 'ring' : itemList = this.props.allRings; break;
            default: itemList = [];
        }
        const itemID = itemList.find(item => item.name === event.target.innerText).id;
    
        await this.setState({equipped: event.target.innerText});
        console.log('NEW ITEM SELECTED:', this.state.equipped);
        await fetch(`https://api.osrsbox.com/equipment/${itemID}`)
            .then(response => response.json())
            .then(json => {
                const {equipment, icon} = json;
                let dispatchType = this.props.type.toUpperCase();
                console.log('DISPATCH: ', dispatchType);
                this.setState({icon: icon});
                this.props.dispatch({
                    type: `CHANGE_${dispatchType}`,
                    payload: {name: this.state.equipped, icon: icon}
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
        allWeapons: state.allWeapons,
        allCapes: state.allCapes,
        allRings: state.allRings,
        allHelms: state.allHelms,
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
        equippedWeapon: state.equippedWeapon,
        equippedOffhand: state.equippedOffhand,
        equippedLegs: state.equippedLegs,
        equippedHands: state.equippedHands,
        equippedFeet: state.equippedFeet,
        equippedRing: state.equippedRing 
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