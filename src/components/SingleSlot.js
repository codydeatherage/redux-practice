import React, { useState } from 'react'
import DropDownList from './DropDownList'

const SingleSlot = props => {
    const [currList, setDisplayList] = useState({ items: props.listAll });

    const filterList = (event) => {
        console.log('SINGLE SLOT FILTER', props.listType);
        let currList = props.listAll;
        let newList = [];
        for (let item of currList) {
            newList.push(item.name.toLowerCase());
        }

        let displayList = [];
        for (let item of newList) {
            if (item.includes(event.target.value.toLowerCase())) {
                displayList.push(item.charAt(0).toUpperCase() + item.slice(1));
            }
        }
        console.log('++++', displayList);
       /*  setDisplayList({ items: displayList }); */
    }

    return (
        <div>
            <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
            {props.icon ? <img className="test" src={`data:image/png;base64,${props.icon}`} alt=""></img> : null}
            <ul className="dropdown-menu scrollable-menu" role="menu">
                {/* <input type="search" onChange={filterList} className="search-bar"></input> */}
                <DropDownList
                    listType= {props.listType}
                    items={props.listAll} >
                </DropDownList>  
            </ul>
        </div>
    );

}

export default SingleSlot