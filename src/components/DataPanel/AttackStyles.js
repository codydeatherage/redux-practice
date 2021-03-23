import React, {useEffect, useState} from 'react'
import AttackStyleItem from './AttackStyleItem'

const AttackStyles = (props) => {
    const [styleInfo, changeStyleInfo] = useState({data: props.data});

    useEffect(()=>{
        changeStyleInfo({data: props.data});
    }, [props.data])

    const handleSelect = (index) =>{
        let tempCopy = props.data;
        tempCopy[index].selected = !tempCopy[index].selected;
       
        for(let i = 0; i < props.data.length; i++){
            if(i !== index){
                tempCopy[i].selected = false;
            }
        }
    
        for(let i = 0; i < props.data.length; i++){
            let path = `/assets/attackStyles/${props.data[i].weaponType}/${props.data[i].weaponType}_${props.data[i].style}`;
            if(tempCopy[i].selected){
                path += '_sel_crop.png';
            }
            else{
                path += '_crop.png';
            }
            tempCopy[i].img = path;
        }
        changeStyleInfo({data: tempCopy});
    }

    return (
        <div className="styles-box">
            <div className="row">
                <AttackStyleItem onSelectStyle={handleSelect} data={styleInfo.data[0]} id="0" ></AttackStyleItem>
                <AttackStyleItem onSelectStyle={handleSelect} data={styleInfo.data[1]} id="1"></AttackStyleItem>
            </div>
            {props.data.length >= 3 ? 
                <div className="row">
                    <AttackStyleItem onSelectStyle={handleSelect} data={styleInfo.data[2]} id="2"></AttackStyleItem>
                    {console.log('werwerasdfasdfasdfawef', props.data.length)}
                    {props.data.length === 4 && props.data[3].style !== '' ?   
                        <AttackStyleItem onSelectStyle={handleSelect} data={styleInfo.data[3]} id="3"></AttackStyleItem>
                        :
                        <div className="attack-style-img"></div>
                    }
                </div> : null}
        </div>
    )  
}

  export default AttackStyles