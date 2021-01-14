import React, {Component} from 'react';


class PrayerSelectItem extends Component{
    constructor(props){
        super(props);
        
        this.updatePrayers = this.updatePrayers.bind(this);
    }

    updatePrayers(){
        console.log(this.props.name);
    }

    render(){
        return(
            <img onClick={this.updatePrayers} className="prayer-img" src={this.props.icon} alt=""></img>
        )
    }
}

export default PrayerSelectItem;