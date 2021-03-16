import { useDispatch, useSelector } from 'react-redux';

const PrayerSelectItem = (props) => {
    const activePrayers = useSelector(state => state.activePrayers);
    const dispatch = useDispatch();

    const updatePrayers = () => {
        let payload = activePrayers;
        const { name } = props;
        switch (name) {
            case 'Clarity of Thought':
            case 'Improved Reflexes':
            case 'Incredible Reflexes': payload = { atk: name, str: payload.str, range: '', magic: '' };
                break;
            case 'Burst of Strength':
            case 'Superhuman Strength':
            case 'Ultimate Strength': payload = { atk: payload.atk, str: name, range: '', magic: '' };
                break;
            case 'Sharp Eye':
            case 'Hawk Eye':
            case 'Eagle Eye':
            case 'Rigour': payload = { atk: '', str: '', range: name, magic: '' };
                break;
            case 'Mystic Will':
            case 'Mystic Lore':
            case 'Mystic Might':
            case 'Augury': payload = { atk: '', str: '', range: '', magic: name };
                break;
            case 'Chivalry':
            case 'Piety': payload = { atk: name, str: name, range: '', magic: '' };
                break;
        }
        dispatch({
            type: 'UPDATE_PRAYERS',
            payload: payload
        })
    }

    return (
        <img onClick={updatePrayers} className="prayer-img" src={props.icon} alt=""></img>
    )
}

export default PrayerSelectItem
