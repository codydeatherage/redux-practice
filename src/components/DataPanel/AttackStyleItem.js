import React, {useState} from 'react'

const AttackStyleItem = (props) => {
    const [item, setSelection] = useState({selected: false})
    const handleSelect = () =>{
        setSelection({selected: !item.selected});
    }
    return (
        <>  
            {item.selected ? 
                <img onClick={handleSelect} src={props.img} className="attack-style-img mr-0.5" alt=""></img>
            :
                <img onClick={handleSelect} src={props.img} className="attack-style-img mr-0.5" alt=""></img>
            }
            
        </>
    )
}

export default AttackStyleItem