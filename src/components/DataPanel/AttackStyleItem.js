import React, { useState } from 'react'

const AttackStyleItem = (props) => {
    const [item, setSelection] = useState({ selected: false})
   /*  const [img, setImage] = useState({ src: props.img }); */

    const handleSelect = async () => {
        let str = props.img.slice(0, props.img.indexOf('_crop')) + '_sel_crop.png';
        
        if(item.selected === true){
            setSelection({ selected: false});
        }else{
            setSelection({ selected: true});
        }
       
    }

   // let str = props.img.slice(0, props.img.indexOf('_crop')) + '_sel_crop.png';

    return (
        <>
            {item.selected ?
             <img onClick={handleSelect} src={props.img.slice(0, props.img.indexOf('_crop')) + '_sel_crop.png'} className="attack-style-img mr-0.5" alt=""></img>
             :
            <img onClick={handleSelect} src={props.img} className="attack-style-img mr-0.5" alt=""></img>
            }

        </>
    )
}

export default AttackStyleItem