import React, { useState } from 'react'

const AttackStyleItem = (props) => {
    
    const handleSelect = async () => {
        if(props.data.selected){
            props.onSelectStyle(parseInt(props.id));
        }
        else{
            props.onSelectStyle(parseInt(props.id));
        }
    }

    return (
        <>
            {props.data.selected ?
                <img onClick={handleSelect} src={props.data.img} className="attack-style-img mr-0.5" alt=""></img>
            :
                <img onClick={handleSelect} src={props.data.img} className="attack-style-img mr-0.5" alt=""></img>
            }

        </>
    )
}

export default AttackStyleItem