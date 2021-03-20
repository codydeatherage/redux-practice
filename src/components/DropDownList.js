import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import allHelms from '../items/head_data.json'
import allCapes from '../items/cape_data.json'
import allNecks from '../items/neck_data.json'
import allAmmo from '../items/ammo_data.json'
import allWeapons from '../items/weapon_data.json'
import allBodies from '../items/body_data.json'
import allOffhands from '../items/shield_data.json'
import allLegs from '../items/legs_data.json'
import allHands from '../items/hands_data.json'
import allFeet from '../items/feet_data.json'
import allRings from '../items/ring_data.json'

const DropDownList = props => {
    const [currList, setDisplayList] = useState({ items: [''] });
    const dispatch = useDispatch();
    const filterList = (event) => {
        console.log('DropDown FILTER', props.listType);
            let curr = props.items;
             let newList = [];
             for (let item of curr) {
                 newList.push(item.name.toLowerCase());
             }
     
             let displayList = [];
             for (let item of newList) {
                 if (item.includes(event.target.value.toLowerCase())) {
                     displayList.push(item.charAt(0).toUpperCase() + item.slice(1));
                 }
             } 
          setDisplayList({ items: displayList }); 
    }

    const handleChange = async (event) => {
                let itemList = props.items;
                const itemID = itemList.find(item => item.name === event.target.innerText).id;
                console.log(event.target.innerText);
                
                /* await fetch(`https://api.osrsbox.com/equipment/${itemID}`)
                    .then(response => response.json())
                    .then(json => {
                        const {equipment, icon, } = json;
                        let dispatchType = this.props.type.toUpperCase();
                        console.log('DISPATCH: ', dispatchType);
                        this.setState({icon: icon});
                        if(json.weapon){
                            this.props.dispatch({
                            type: `CHANGE_${dispatchType}`,
                            payload: {name: this.state.equipped, icon: icon, stats: equipment, stances: json.weapon.stances, weapon_type: json.weapon.weapon_type}
                        })
                    }else{
                        this.props.dispatch({
                            type: `CHANGE_${dispatchType}`,
                            payload: {name: this.state.equipped, icon: icon, stats: equipment}
                        })
                    }
                    }
                )  */ 
    }


    return (
        <>
            <input type="search" onChange={filterList} className="search-bar"></input>
            {
                currList.items.map((item, index) => {
                    return (<li onClick={handleChange} key={index}>{item}</li>)
                })}
        </>
    )

}

export default DropDownList