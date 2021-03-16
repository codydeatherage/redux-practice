import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrayerSelectItem extends Component {
    constructor(props) {
        super(props);
        this.updatePrayers = this.updatePrayers.bind(this);
    }

    updatePrayers() {
        let payload = this.props.activePrayers;
        const { name } = this.props;
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
