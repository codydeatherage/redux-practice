import React, { useState } from 'react'
import DropDownList from './DropDownList'

const SingleSlot = props => {
    const [currList, setDisplayList] = useState({ items: props.listAll });

    return (
        <div>
            <button type="button equip-slot" className="btn btn-default" data-toggle="dropdown"></button>
            {props.icon ? <img className="test" src={`data:image/png;base64,${props.icon}`} alt=""></img> : null}
            <ul className="dropdown-menu scrollable-menu" role="menu">
                <DropDownList
                    listType= {props.listType}
                    items={props.listAll} >
                </DropDownList>  
            </ul>
        </div>
    );

}

export default SingleSlot