import React from 'react';
import { useSelector } from 'react-redux';
import SingleSlot from './SingleSlot'

const EquipmentDropDown = props => {
    const gear = useSelector(state => {
        return {
            weapon: state.equippedWeapon, helm: state.equippedHead, cape: state.equippedCape,
            neck: state.equippedNeck, ammo: state.equippedAmmo, body: state.equippedBody,
            offhand: state.equippedOffhand, legs: state.equippedLegs, hands: state.equippedHands,
            feet: state.equippedFeet, ring: state.equippedRing
        }
    });

    return (
        <SingleSlot
            icon={gear[`${props.listType}`].icon}
            listType={props.listType}
            listAll={props.listAll}>
        </SingleSlot>
    )
}

export default EquipmentDropDown