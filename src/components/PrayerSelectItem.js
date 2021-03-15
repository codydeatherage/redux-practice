import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrayerSelectItem extends Component {
    constructor(props) {
        super(props);
        this.updatePrayers = this.updatePrayers.bind(this);
    }

    updatePrayers() {
        console.log(this.props.name);
        let prayInfo = this.prayers.find(p => p.name === this.props.name)
        console.log(prayInfo);
        const { atk, str, magic, range } = this.props.activePrayers;
        let payload = { atk: atk, str: str, magic: magic, range: range };
        switch (this.props.slot) {
            case 'atk_level': payload.atk = prayInfo; break;
            case 'str_level': payload.str = prayInfo; break;
            case 'magic_level': payload.magic = prayInfo; break;
            case 'ranged_level': payload.range = prayInfo; break;
            default: console.log('Error modifying player stat ', this.props.slot);
        }
        this.props.dispatch({
            type: 'UPDATE_PRAYERS',
            payload: payload
        })
    }

    render() {
        return (
            <img onClick={this.updatePrayers} className="prayer-img" src={this.props.icon} alt=""></img>
        )
    }
}

const mapStateToProps = state => {
    return {
        activePrayers: state.activePrayers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrayerSelectItem)
