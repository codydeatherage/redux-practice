import PrayerSelectItem from './PrayerSelectItem';

const PrayerSelect = (props) => {
    let row1 = [];
    let row2 = [];
    if (props.type === 'melee') {
        row1 = []; row2 = [];
        for (let i = 0; i < props.prayersToDisplay.length; i++) {
            let prayer = props.prayersToDisplay[i];
            i <= 3 ? row1.push(prayer) : row2.push(prayer);
        }
        return (
            <>
                <div className="row">
                    <div className="prayer-box">
                        {row1.map((pray, index) => {
                            return (
                                <PrayerSelectItem
                                    icon={pray.icon}
                                    name={pray.name}
                                    type={pray.type}
                                    slot={props.slot}
                                    key={index}
                                ></PrayerSelectItem>
                            )
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="prayer-box">
                        {row2.map((pray, index) => {
                            return (
                                <PrayerSelectItem
                                    icon={pray.icon}
                                    name={pray.name}
                                    type={pray.type}
                                    slot={props.slot}
                                    key={index}
                                ></PrayerSelectItem>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="prayer-box">
                {props.prayersToDisplay.map((pray, index) => {
                    return (
                        <PrayerSelectItem
                            icon={pray.icon}
                            name={pray.name}
                            type={pray.type}
                            slot={props.slot}
                            key={index}
                        ></PrayerSelectItem>
                    )
                })}
            </div>
        </>
    )
}

export default PrayerSelect;