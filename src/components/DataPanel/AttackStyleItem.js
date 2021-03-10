import React, { useState } from 'react'

const AttackStyleItem = (props) => {

    const handleSelect = async () => {
        if(props.data.selected){
            props.onSelectStyle(parseInt(props.id), true);
        }
        else{
            props.onSelectStyle(parseInt(props.id), false);
        }
    }

    let path = `/assets/attackStyles/${props.data.weaponType}/${props.data.weaponType}_${props.data.style}`;
    if(props.data.selected){
        path += '_sel_crop.png';
    }
    else{
        path += '_crop.png';
    }

    return (
        <>
            {props.data.selected ?
                <img onClick={handleSelect} src={path} className="attack-style-img mr-0.5" alt=""></img>
            :
                <img onClick={handleSelect} src={path} className="attack-style-img mr-0.5" alt=""></img>
            }

        </>
    )
}

export default AttackStyleItem