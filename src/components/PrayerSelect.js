import React, { Component } from 'react'
import PrayerSelectItem from './PrayerSelectItem';

class PrayerSelect extends Component {

    render() {
        return (
            <>
                <div class="prayer-box">
                    {this.props.prayersToDisplay.map((pray, index) => {
                        return (
                            <PrayerSelectItem
                                icon={pray.icon}
                                name={pray.name}
                                type={pray.type}
                                slot={this.props.slot}
                            ></PrayerSelectItem>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default PrayerSelect;