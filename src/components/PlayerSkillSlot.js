import { useDispatch, useSelector } from 'react-redux'

const PlayerSkillSlot = ({ slot, value }) => {
    const stats = useSelector(state => {
        return { boss: state.selectedBoss, player: state.playerStats, bonuses: state.bonuses }
    });
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.value.length > 2) {
            event.target.value = event.target.value.substr(0, 2);
        }
        const { atk, str, range, magic } = stats.player;
        let payload = { atk: atk, str: str, magic: magic, range: range };
        const input = parseInt(event.target.value);
        switch (slot) {
            case 'atk_level': event.target.value !== '' ? payload.atk = input : payload.atk = 1; break;
            case 'str_level': event.target.value !== '' ? payload.str = input : payload.str = 1; break;
            case 'magic_level': event.target.value !== '' ? payload.magic = input : payload.magic = 1; break;
            case 'ranged_level': event.target.value !== '' ? payload.range = input : payload.range = 1; break;
            default: console.log('Error modifying player stat ', slot);
        }
        dispatch({
            type: 'CHANGE_PLAYER_STAT',
            payload: payload
        });
    }

    return (
        <div className="form-input player-stat dropright">
            <div className="stat-icon my-auto" id={slot}></div>
            <div className="player-stat-info">
                {stats.bonuses.potion === 1 ?
                    <div className="boosted-stat">{value - 1}</div>
                    :
                    <div className="boosted-stat">{value}</div>
                }
                <div className="stat-slash">/</div>
                <input onChange={handleChange} type="text" className="player-stat-input"></input>
            </div>
        </div>
    )
}

export default PlayerSkillSlot