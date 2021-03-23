import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const DropDownList = props => {
    const dispatch = useDispatch();
    const [currList, setDisplayList] = useState({ items: [''] });
    const filterList = (event) => {
        console.log('DropDown FILTER', props.listType);
        let newList = [];
        for (let item of props.items) {
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

    const handleChange = (event) => {
        const item = props.items.find(item => item.name === event.target.innerText);
        console.log(item);
        dispatch({
            type: `CHANGE_${props.listType.toUpperCase()}`,
            payload: {name: item.name, icon: item.icon, stats: item.equipment, stances: item.weapon.stances,
                       weapon_type: item.weapon.weapon_type.slice(0, -1)}
        })
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