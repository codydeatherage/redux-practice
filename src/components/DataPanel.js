import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerSkillSlot from './PlayerSkillSlot'
import './../stylesheets/PlayerInfo.css'
import AttackStyles from './DataPanel/AttackStyles'
import PrayerSelect from './PrayerSelect'

class DataPanel extends Component {
    constructor(props) {
        super(props);
        const { level, potion, prayer, style, other } = this.props.bonuses;
    }

    getPrayersToDisplay = () => {
        const prayers = [//len = 16
            { name: "Clarity of Thought", boost: 1.05, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/e/e1/Clarity_of_Thought.png?8d584' },
            { name: "Improved Reflexes", boost: 1.10, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/7/7e/Improved_Reflexes.png?e38b5' },
            { name: "Incredible Reflexes", boost: 1.15, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/8/85/Incredible_Reflexes.png?ecf9c' },
            { name: "Burst of Strength", boosts: 1.05, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/7/7b/Burst_of_Strength.png?18c47' },
            { name: "Superhuman Strength", boost: 1.10, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/0/08/Superhuman_Strength.png?d2621' },
            { name: "Ultimate Strength", boost: 1.15, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/3/3d/Ultimate_Strength.png?510a8' },
            { name: "Sharp Eye", boost: 1.05, type: 'range', icon: 'https://oldschool.runescape.wiki/images/a/a3/Sharp_Eye.png?18c47' },
            { name: "Hawk Eye", boost: 1.10, type: 'range', icon: 'https://oldschool.runescape.wiki/images/8/8b/Hawk_Eye.png?54ee9' },
            { name: "Eagle Eye", boost: 1.15, type: 'range', icon: 'https://oldschool.runescape.wiki/images/d/d5/Eagle_Eye.png?4a200' },
            { name: "Mystic Will", boost: 1.05, type: 'magic', icon: 'https://oldschool.runescape.wiki/images/2/23/Mystic_Will.png?20461' },
            { name: "Mystic Lore", boost: 1.10, type: 'magic', icon: 'https://oldschool.runescape.wiki/images/d/d1/Mystic_Lore.png?097d2' },
            { name: "Mystic Might", boost: 1.15, type: 'magic', icon: 'https://oldschool.runescape.wiki/images/0/03/Mystic_Might.png?b0218' },
            { name: "Chivalry", atk_boost: 1.15, str_boost: 1.18, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/1/16/Chivalry.png?58bc5' },
            { name: "Piety", atk_boost: 1.20, str_boost: 1.23, type: 'melee', icon: 'https://oldschool.runescape.wiki/images/a/a2/Piety.png?58239' },
            { name: "Rigour", range_atk_boost: 1.20, range_str_boost: 1.23, type: 'range', icon: 'https://oldschool.runescape.wiki/images/5/5b/Rigour.png?159e1' },
            { name: "Augury", boost: 1.25, type: 'magic', icon: 'https://oldschool.runescape.wiki/images/9/93/Augury.png?f234e' }
        ];
        let prayersToDisplay = [];
        let attackType = '';
        switch (this.props.equippedWeapon.weapon_type) {
            case '2h_sword':
            case 'axe':
            case 'bladed_stave':
            case 'blunt':
            case 'claw':
            case 'pickaxe':
            case 'polearm':
            case 'polestave':
            case 'scythe':
            case 'slashing_sword':
            case 'spear':
            case 'spiked_weapon':
            case 'stave':
            case 'unarmed':
            case 'whip': attackType = 'melee'; break;
            case 'bow':
            case 'crossbow':
            case 'thrown': attackType = 'range'; break;
            case 'trident': attackType = 'magic'; break;
        }
        for (let prayer of prayers) {
            if (prayer.type === attackType) {
                prayersToDisplay.push(prayer);
            }
        }
        return prayersToDisplay;
    }

    render() {
        const { level, potion, prayer, style, other } = this.props.bonuses;
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
        let {
            equippedBody, equippedHead, equippedCape, equippedNeck,
            equippedAmmo, equippedWeapon, equippedOffhand, equippedLegs,
            equippedHands, equippedFeet, equippedRing
        } = this.props;
        let allEquipped = [equippedBody, equippedHead, equippedCape,
            equippedNeck, equippedAmmo, equippedWeapon,
            equippedOffhand, equippedLegs, equippedHands,
            equippedFeet, equippedRing
        ];

        let equipment_str = 0;
        let equipment_atk = { slash: 0, stab: 0, crush: 0 };
        for (let slot of allEquipped) {
            if (slot !== undefined) {
                //console.log(slot.stats);
                if (slot.stats !== "") {
                    equipment_str += slot.stats.melee_strength;
                    equipment_atk.slash += slot.stats.attack_slash;
                    equipment_atk.stab += slot.stats.attack_stab;
                    equipment_atk.crush += slot.stats.attack_crush;
                }
            }
        }
        let atkPrayerBoost = 1;
        let strPrayerBoost = 1;
        let magicPrayerBoost = 1;
        let rangePrayerBoost = 1;
        if (this.props.activePrayers.atk) {
            if (this.props.activePrayers.atk.name === "Chivalry" || this.props.activePrayers.atk.name === "Piety") {
                atkPrayerBoost = this.props.activePrayers.atk.atk_boost;
                strPrayerBoost = this.props.activePrayers.atk.str_boost;
            }
            else {
                atkPrayerBoost = this.props.activePrayers.atk.boost;
            }
        }
        if (this.props.activePrayers.str) {
            if (this.props.activePrayers.str.name === "Chivalry" || this.props.activePrayers.str.name === "Piety") {
                atkPrayerBoost = this.props.activePrayers.str.atk_boost;
                strPrayerBoost = this.props.activePrayers.str.str_boost;
            }
            else {
                strPrayerBoost = this.props.activePrayers.str.boost;
            }
        }

        let effective_strength = Math.floor(((this.props.playerStats.str * strPrayerBoost) + /*style*/3));
        // console.log('Effective Strength', effective_strength);
        let maxHit = Math.floor(1.3 + (effective_strength / 10) + (equipment_str / 80) + Math.floor((effective_strength * equipment_str) / 640));
        let effective_attack = Math.floor(((this.props.playerStats.atk * atkPrayerBoost) + 1));
        //console.log('Effective Attack ', effective_attack);
        //need to modify to factor in selected atk style
        let attackRoll = effective_attack * (equipment_atk.slash + 64);
        let defenceRoll = Math.floor((this.props.selectedBoss.defence_level + 9) * (this.props.selectedBoss.defence_slash + 64));
        let hitChance = 0;
        if (attackRoll > defenceRoll) {
            hitChance = (1 - ((defenceRoll + 2) / (2 * attackRoll + 1)));
        } else {
            hitChance = (attackRoll / (2 * defenceRoll + 1));
        }

        let avgHit = ((maxHit * hitChance) / 2).toFixed(2);
        hitChance = (hitChance * 100).toFixed(2);
        let dps = (avgHit / 2.4).toFixed(2);

        let styles = [];
        for (let style of this.props.equippedWeapon.stances) {
            styles.push(style.combat_style);
        }
        console.log('Styles', styles, this.props.equippedWeapon.weapon_type);

        let weapState = [];
        for (let i = 0; i < styles.length; i++) {
            weapState.push({ style: styles[i], selected: false })
        }
        const { weapon_type } = this.props.equippedWeapon;
        let styleImages = [];
        for (let state of weapState) {
            let path = `/assets/attackStyles/${weapon_type}/${weapon_type}_${state.style}_crop.png`;
            styleImages.push({ style: state.style, img: path, selected: false, weaponType: this.props.equippedWeapon.weapon_type });
        }
        if (styleImages.length < 4) {
            styleImages.push({ style: '', img: '', selected: false, weaponType: weapon_type })
        }

        let prayersToDisplay = this.getPrayersToDisplay();
        return (
            <div className="card panel-card">
                <div className="input-container">
                    <div className="skills-container">
                        <div className="row">
                            <PlayerSkillSlot slot={'atk_level'} value={this.props.playerStats.atk + this.props.bonuses.potion}></PlayerSkillSlot>
                        </div>
                        <div className="row">
                            <PlayerSkillSlot slot="str_level" value={this.props.playerStats.str + this.props.bonuses.potion}></PlayerSkillSlot>
                        </div>
                        <div className="row">
                            <PlayerSkillSlot slot="magic_level" value={this.props.playerStats.magic + this.props.bonuses.potion}></PlayerSkillSlot>
                        </div>
                        <div className="row">
                            <PlayerSkillSlot slot="ranged_level" value={this.props.playerStats.range + this.props.bonuses.potion}></PlayerSkillSlot>
                        </div>
                    </div>
                    <div className="options-container">
                        <div className="row style-select-row">
                            <div className="styles-container attack-styles">
                                <div className="test-options style-select">
                                    <AttackStyles data={styleImages} equipped={this.props.equippedWeapon} weaponType={this.props.equippedWeapon.weapon_type} ></AttackStyles>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="test-options">
                                <div className="options-label">
                                    Stat-Reducing Specs
                                </div>
                                <div className="test-box ">
                                    <div className="spec-input-container ">
                                        <input className="spec-input" type="number" step="1" min="0"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/ea/Dragon_warhammer.png?27308" alt=""></img>
                                    </div>
                                    <div className="spec-input-container">
                                        <input className="spec-input" type="text" ></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6c/Bandos_godsword.png?0f871" alt=""></img>
                                    </div>
                                    <div className="spec-input-container">
                                        <input className="spec-input" type="number" step="1"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/1/16/Arclight.png?3d34e" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="test-options">
                                <div className="options-label">
                                    Potion Boosts
                                </div>
                                <div className="test-box">
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                                    </div>
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/8/82/Super_combat_potion%284%29.png?dc66c" alt=""></img>
                                    </div>
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/e5/Overload_%28%2B%29%284%29.png?6b1dd" alt=""></img>
                                    </div>
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/f/fe/Imbued_heart.png?b33a3" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="prayers">
                                <div className="options-label">
                                    Prayers
                                </div>
                                <PrayerSelect 
                                    prayersToDisplay={prayersToDisplay}
                                    type={prayersToDisplay[0].type}
                                ></PrayerSelect>
                            </div>

                        </div>

                    </div>
                </div>
{/*                 <div className="row">
                    <h1>Attack Bonuses</h1>
                </div> */}
                
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
                            <div className="atk-bonus">{`ACCURACY: ${hitChance}`}</div>
                        </div>
                        <div className="row">
                            <div className="atk-bonus">{`DPS: ${dps}`} </div>
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
