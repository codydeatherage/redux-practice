import React, {Component} from 'react'
import DropDownList from './DropDownList'
import {connect} from 'react-redux';

class SingleSlot extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayItems : []
        }
        this.filterList = this.filterList.bind(this);
    }

    filterList(event){
        console.log('SINGLE SLOT FILTER', this.props.listType);
        let currList = this.props.listAll;
        //console.log(this.props.listAll);
        let newList = [];
        for(let item of currList){
            newList.push(item.name.toLowerCase());
        }

        let displayList = [];
        for(let item of newList){
            if(item.includes(event.target.value.toLowerCase())){
                displayList.push(item.charAt(0).toUpperCase() + item.slice(1));
            }
        }
        console.log('++++', displayList);
        this.setState({displayItems: displayList});
    }

    render(){
        return(     
        <div>
            <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
            {this.props.icon ? <img className="test" src={`data:image/png;base64,${this.props.icon}`} alt=""></img> : null}
            <ul className="dropdown-menu scrollable-menu" role="menu">
                <input type="search" onChange={this.filterList} className="search-bar"></input>  
                    <DropDownList 
                        type={this.props.listType} 
                        items={this.state.displayItems} 
                        listAll={this.props.listAll}>
                    </DropDownList>
            </ul> 
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
        equippedBody: state.equippedBody,
        equippedWeapon: state.equippedWeapon,
        equippedOffhand: state.equippedOffhand,
        equippedLegs: state.equippedLegs,
        equippedHands: state.equippedHands,
        equippedFeet: state.equippedFeet,
        equippedRing: state.equippedRing 
    }
  }

export default connect(
    mapStateToProps
)(SingleSlot)