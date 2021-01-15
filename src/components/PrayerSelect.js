import React, {Component} from 'react'
import PrayerSelectItem from './PrayerSelectItem';

class PrayerSelect extends Component{

    render(){
        return (
            <>
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                <div className="dropdown-menu">                       
                    <div class="prayer-box">
                        {this.props.prayersToDisplay.map( (pray, index) => {
                            return  (
                                <PrayerSelectItem 
                                    icon={pray.icon}
                                    name={pray.name}
                                    type={pray.type}
                                    slot={this.props.slot}
                                ></PrayerSelectItem>
                            )
                        })}
                    </div> 
                </div>
            </>
        );
    }
}

export default PrayerSelect;