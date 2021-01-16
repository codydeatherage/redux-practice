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
        const prayers = [//len = 16
                {name: "Clarity of Thought", boost: 1.05, type: 'atk'},
                {name: "Improved Reflexes", boost: 1.10, type: 'atk'},
                {name: "Incredible Reflexes", boost: 1.15, type: 'atk'},
                {name: "Burst of Strength", boosts: 1.05, type: 'str'},
                {name: "Superhuman Strength", boost: 1.10, type: 'str'},
                {name: "Ultimate Strength", boost: 1.15, type: 'str'},
                {name: "Sharp Eye", boost: 1.05, type: 'range'},
                {name: "Hawk Eye", boost: 1.10, type: 'range'},
                {name: "Eagle Eye", boost: 1.15, type: 'range'},
                {name: "Mystic Will", boost: 1.05, type: 'magic'},
                {name: "Mystic Lore", boost: 1.10, type: 'magic'},
                {name: "Mystic Might", boost: 1.15, type: 'magic'},
                {name: "Chivalry", atk_boost: 1.15, str_boost: 1.18},
                {name: "Piety", atk_boost: 1.20, str_boost: 1.23},
                {name: "Rigour", range_atk_boost: 1.20, range_str_boost: 1.23},
                {name: "Augury", boost: 1.25, type: 'magic'}
        ];
        
        let {
           equippedBody, equippedHead, equippedCape,equippedNeck,
            equippedAmmo, equippedWeapon,equippedOffhand, equippedLegs, 
            equippedHands,equippedFeet, equippedRing
           } = this.props;
        let allEquipped = [equippedBody, equippedHead, equippedCape,
                            equippedNeck, equippedAmmo, equippedWeapon,
                            equippedOffhand, equippedLegs, equippedHands,
                            equippedFeet, equippedRing
                        ];
        
        let equipment_str = 0;
        let equipment_atk = {slash: 0, stab: 0, crush: 0};                     
        for(let slot of allEquipped){
            if(slot !== undefined){
                console.log(slot.stats);
                if(slot.stats !== ""){
                    equipment_str += slot.stats.melee_strength;
                    equipment_atk.slash += slot.stats.attack_slash;
                    equipment_atk.stab += slot.stats.attack_stab;
                    equipment_atk.crush += slot.stats.attack_crush;
                } 
            }
        }
        console.log('Equipment Strength', equipment_str);
        console.log('Equipment Atk Bonuses', equipment_atk);
        let atkPrayerBoost = 1;
        let strPrayerBoost = 1;
        let magicPrayerBoost = 1;
        let rangePrayerBoost = 1;
        if(this.props.activePrayers.atk){
            if(this.props.activePrayers.atk.name === "Chivalry"||this.props.activePrayers.atk.name === "Piety"){
                atkPrayerBoost = this.props.activePrayers.atk.atk_boost;
                strPrayerBoost = this.props.activePrayers.atk.str_boost;
            }
            else{
                atkPrayerBoost = this.props.activePrayers.atk.boost;
            }
        }
        if(this.props.activePrayers.str){
            if(this.props.activePrayers.str.name === "Chivalry"||this.props.activePrayers.str.name === "Piety"){
                atkPrayerBoost = this.props.activePrayers.str.atk_boost;
                strPrayerBoost = this.props.activePrayers.str.str_boost;
            }
            else{
                strPrayerBoost = this.props.activePrayers.str.boost;
            }
        }

        let effective_strength = Math.floor(((this.props.playerStats.str * strPrayerBoost) + /*style*/3));
        console.log('Effective Strength', effective_strength);
        let maxHit = Math.floor(1.3 + (effective_strength / 10) + (equipment_str / 80) + Math.floor((effective_strength * equipment_str) / 640));
        let effective_attack = Math.floor(((this.props.playerStats.atk * atkPrayerBoost) + 1));
        console.log('Effective Attack ', effective_attack);
        //need to modify to factor in selected atk style
        let attackRoll = effective_attack * (equipment_atk.slash + 64);
        return(
            <div className="card panel-card">
                <h1>PLAYER STATS</h1>
                <div className="row">
                    <PlayerSkillSlot slot={'atk_level'} value={this.props.playerStats.atk + this.props.bonuses.potion}></PlayerSkillSlot>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/8/82/Super_combat_potion%284%29.png?dc66c" alt=""></img>
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/e5/Overload_%28%2B%29%284%29.png?6b1dd" alt=""></img>
                    </div>

                </div>
                <div className="row">
                    <PlayerSkillSlot slot="str_level" value={this.props.playerStats.str + this.props.bonuses.potion}></PlayerSkillSlot>
                    <div className="radio-potion">
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/f/fe/Imbued_heart.png?b33a3" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <PlayerSkillSlot slot="magic_level" value={this.props.playerStats.magic + this.props.bonuses.potion}></PlayerSkillSlot>
       
                </div>
                <div className="row">
                    <PlayerSkillSlot slot="ranged_level" value={this.props.playerStats.range + this.props.bonuses.potion}></PlayerSkillSlot>
                </div>
                <div className="row">
                    <h1>Attack Bonuses</h1>
                </div>
                <div className="atk-bonus-container">
                    <div className="equip-bonus-container">
                        <div className="row">
                            <div className="atk-bonus">{`STAB: ${equipment_atk.stab}`}</div>
                            <div className="atk-bonus">{`SLASH: ${equipment_atk.slash}`}</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">{`CRUSH: ${equipment_atk.crush}`}</div>
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
                            <div className="atk-bonus">{`MAX HIT: ${maxHit}`}</div>
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
        activePrayers: state.activePrayers,
        bonuses: state.bonuses
    }
  }
  
  export default connect(
    mapStateToProps
  )(DataPanel)
