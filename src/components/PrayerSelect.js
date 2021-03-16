import PrayerSelectItem from './PrayerSelectItem';

const PrayerSelect = (props) => {
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