import React, {Component} from 'react'
import {connect} from 'react-redux'
import PlayerSkillSlot from './PlayerSkillSlot'
import './../stylesheets/PlayerInfo.css'

class DataPanel extends Component{
    constructor(props){
        super(props);
        const {level, potion, prayer, style, other} = this.props.bonuses;
        /*https://oldschool.runescape.wiki/w/Damage_per_second/Melee#Step_two:_Calculate_the_maximum_hit*/
        /*From wiki
            1. Effective strength level
            2. Multiply by (Equipment Melee Strength + 64)
            3. Add 320
            4. Divide by 640
            5. Round down to nearest integer
            6. Multiply by gear bonus
            7. Round down to nearest integer
        */
/*        const {equippedBody, equippedHead, equippedCape,
            equippedNeck, equippedAmmo, equippedWeapon,
            equippedOffhand, equippedLegs, equippedHands,
            equippedFeet, equippedRing
        } = this.props;
        let allEquipped = [equippedBody, equippedHead, equippedCape,
                            equippedNeck, equippedAmmo, equippedWeapon,
                            equippedOffhand, equippedLegs, equippedHands,
                            equippedFeet, equippedRing
                        ];
        
        let equipment_str = 0;                        
        for(let slot of allEquipped){
            
            if(slot) console.log(slot.stats);

        }
        let effective_strength = Math.floor((Math.floor((this.props.playerStats.str + potion) * prayer) + 3 + 8));

        let maxHit = effective_strength * (equipment_str + 64);
        maxHit += 320;
        maxHit = Math.floor(maxHit / 640);
        if(this.props.bonuses.other !== "" && this.props.bonuses.other > 0){
            maxHit = Math.floor(effective_strength * this.props.bonuses.other);
        }
        this.maxHit = maxHit; */
    }
    render(){
        const {level, potion, prayer, style, other} = this.props.bonuses;
        /*https://oldschool.runescape.wiki/w/Damage_per_second/Melee#Step_two:_Calculate_the_maximum_hit*/
        /*From wiki
            1. Effective strength level
            2. Multiply by (Equipment Melee Strength + 64)
            3. Add 320
            4. Divide by 640
            5. Round down to nearest integer
            6. Multiply by gear bonus
            7. Round down to nearest integer
        */
       let {equippedBody, equippedHead, equippedCape,
            equippedNeck, equippedAmmo, equippedWeapon,
            equippedOffhand, equippedLegs, equippedHands,
            equippedFeet, equippedRing
        } = this.props;
        let allEquipped = [equippedBody, equippedHead, equippedCape,
                            equippedNeck, equippedAmmo, equippedWeapon,
                            equippedOffhand, equippedLegs, equippedHands,
                            equippedFeet, equippedRing
                        ];
        
        let equipment_str = 0;                        
        for(let slot of allEquipped){
            if(slot !== undefined){
                console.log(slot.stats);
                if(slot.stats !== ""){
                    equipment_str += slot.stats.melee_strength;
                } 
            }

                //console.log(slot);
            //if(slot.stats) console.log(slot); 
/*             if(slot.stats) console.log(slot.stats);
            if(slot.stats && slot.stats !== ""){
                equipment_str += slot.stats.melee_strength;
            } */
        }
        let effective_strength = Math.floor((Math.floor((this.props.playerStats.str + potion) * prayer) + /*style*/3 + 8));

        let maxHit = effective_strength * (equipment_str + 64);
        maxHit += 320;
        maxHit = Math.floor(maxHit / 640);
        if(this.props.bonuses.other !== "" && this.props.bonuses.other > 0){
            maxHit = Math.floor(effective_strength * this.props.bonuses.other);
        }
        return(
            <div className="card panel-card">
                <h1>PLAYER STATS</h1>
                <div className="row">
                    <PlayerSkillSlot slot={'atk_level'}></PlayerSkillSlot>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/8/82/Super_combat_potion%284%29.png?dc66c" alt=""></img>
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/e5/Overload_%28%2B%29%284%29.png?6b1dd" alt=""></img>
                    </div>

                </div>
                <div className="row">
                    <PlayerSkillSlot slot="str_level"></PlayerSkillSlot>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/f/fe/Imbued_heart.png?b33a3" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <PlayerSkillSlot slot="magic_level"></PlayerSkillSlot>
                    <PlayerSkillSlot slot="ranged_level"></PlayerSkillSlot>
                </div>
                <div className="row">
                    
                </div>
                <div className="row">
                    <h1>Attack Bonuses</h1>
                </div>
                <div className="atk-bonus-container">
                    <div className="equip-bonus-container">
                        <div className="row">
                            <div className="atk-bonus">STAB: </div>
                            <div className="atk-bonus">SLASH: </div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">CRUSH: </div>
                            <div className="atk-bonus">{`MELEE_STR: ${equipment_str}`}</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">MAGIC: </div>
                            <div className="atk-bonus">MAGIC_DMG: </div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">RANGED: </div>
                            <div className="atk-bonus">RANGED_STR: </div>
                        </div>
                    </div>
                    <div className="data-output">
                        <div className="row">
                            <div className="atk-bonus">MAX HIT: </div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">ACCURACY: </div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">DPS: </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        equippedBody: state.equippedBody,
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
        equippedWeapon: state.equippedWeapon,
        equippedOffhand: state.equippedOffhand,
        equippedLegs: state.equippedLegs,
        equippedHands: state.equippedHands,
        equippedFeet: state.equippedFeet,
        equippedRing: state.equippedRing, 
        selectedBoss: state.selectedBoss,
        playerStats: state.playerStats,
        bonuses: state.bonuses
    }
  }
  
  export default connect(
    mapStateToProps
  )(DataPanel)
