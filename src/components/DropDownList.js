import React, { useState } from 'react'

const DropDownList = props => {
    const [currList, setDisplayList] = useState({ items: ['one', 'two', 'three'] });
    const filterList = (event) => {
        console.log('DropDown FILTER', props.listType);
        /*      let currList = props.listAll;
             let newList = [];
             for (let item of currList) {
                 newList.push(item.name.toLowerCase());
             }
     
             let displayList = [];
             for (let item of newList) {
                 if (item.includes(event.target.value.toLowerCase())) {
                     displayList.push(item.charAt(0).toUpperCase() + item.slice(1));
                 }
             } */
        /*  setDisplayList({ items: displayList }); */
    }

    const handleChange = (event) => {
        /*         let itemList = this.props.listAll;
                const itemID = itemList.find(item => item.name === event.target.innerText).id;
                await this.setState({equipped: event.target.innerText});
                console.log('NEW ITEM SELECTED:', this.state.equipped, itemID);
                await fetch(`https://api.osrsbox.com/equipment/${itemID}`)
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
                    return (<li key={index}>{item}</li>)
                })}
        </>
    )

}

export default DropDownList