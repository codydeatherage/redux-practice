import React, {Component} from 'react';
import {connect} from 'react-redux';

class EquipmentDropDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            head: {name: '', id: ''},
            cape: {name: '', id: ''},
            neck: {name: '', id: ''},
            ammo: {name: '', id: ''},
            weapon: {name: '', id: ''},
            body: {name: '', id: ''},
            offhand: {name: '', id: ''},
            legs: {name: '', id: ''},
            hands: {name: '', id: ''},
            feet: {name: '', id: ''},
            ring: {name: '', id: ''},
            image: ''
        }
        this.listType = props.listType;
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event){
        console.log('ID:::::', this.props.allWeapons.
            find((item)=>
                item.name === event.target.innerText
            ).id
        );
        const itemID = this.props.allWeapons.find(item => item.name === event.target.innerText).id;
    
        await this.setState({weapon: {name: event.target.innerText, id: itemID}});
        await fetch(`https://api.osrsbox.com/equipment/${this.state.weapon.id}`)
            .then(response => response.json())
            .then(async json => {
                const {equipment, icon} = json;
                await this.setState({image: icon});
                console.log(this.state.image);
            }
        ) 

        this.props.dispatch({
            type: 'CHANGE_WEAPON',
            payload: {name: this.state.weapon.name, icon: this.state.weapon.id}
        })
    }
    render(){
        return(
            <div>
                <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
                {this.state.image ? <img className="test" src={`data:image/png;base64,${this.state.image}`} alt=""></img> : null}
            
                <ul className="dropdown-menu scrollable-menu" role="menu">
                    <input type="search" className="search-bar"></input>
                    {
                    this.listType === 'weapon' ?
                        this.props[`all${this.listType.charAt(0).toUpperCase() + this.listType.slice(1)}s`].map((weapon, index) =>{
                            return(<li onClick={this.handleChange} key={index}>{weapon.name}</li>)
                        }) : null
                    }

                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { 
        allWeapons: state.allWeapons,
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
  )(EquipmentDropDown)