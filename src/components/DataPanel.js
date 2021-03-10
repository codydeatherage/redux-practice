import React, {Component} from 'react'
import {connect} from 'react-redux'
import PlayerSkillSlot from './PlayerSkillSlot'
import './../stylesheets/PlayerInfo.css'
import AttackStyles from './DataPanel/AttackStyles'/* 
import img1 from './../assets/attackStyles/axe/axe_hack_crop.png'
import img2 from './../assets/attackStyles/axe/axe_chop_crop.png'
import img3 from './../assets/attackStyles/axe/axe_smash_sel_crop.png'
import img4 from './../assets/attackStyles/axe/axe_block_crop.png' */

class DataPanel extends Component{
    constructor(props){
        super(props);
        const {level, potion, prayer, style, other} = this.props.bonuses;
   
          /*   this.changeStyle = this.changeStyle.bind(this);
    
            let styles = [];
            for(let style of this.props.equippedWeapon.stances){
                styles.push(style.combat_style);
            }
            console.log('Styles', styles);
    
            let weapState= [];
            for(let i = 0; i < styles.length; i++){
                weapState.push({style: styles[i], selected: false})
            }
    
            let styleImages = [];
            for(let state of weapState){
                styleImages.push({style: state.style, selected: false, weaponType: this.props.weaponType}); 
            } 
    
            this.state = { data: styleImages } */
        


        /*https://oldschool.runescape.wiki/w/Damage_per_second/Melee#Step_two:_Calculate_the_maximum_hit*/
    }

    changeStyle = () => {
        console.log()
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
                //console.log(slot.stats);
                if(slot.stats !== ""){
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
       // console.log('Effective Strength', effective_strength);
        let maxHit = Math.floor(1.3 + (effective_strength / 10) + (equipment_str / 80) + Math.floor((effective_strength * equipment_str) / 640));
        let effective_attack = Math.floor(((this.props.playerStats.atk * atkPrayerBoost) + 1));
        //console.log('Effective Attack ', effective_attack);
        //need to modify to factor in selected atk style
        let attackRoll = effective_attack * (equipment_atk.slash + 64);
        let defenceRoll = Math.floor((this.props.selectedBoss.defence_level + 9) * (this.props.selectedBoss.defence_slash + 64));
        let hitChance = 0;
        if(attackRoll > defenceRoll){
            hitChance = (1 - ((defenceRoll + 2) / (2 * attackRoll + 1)));
        }else{
            hitChance = (attackRoll / (2  * defenceRoll + 1));
        }
    
        let avgHit = ((maxHit * hitChance) /2).toFixed(2);
        hitChance = (hitChance * 100).toFixed(2);
        let dps = (avgHit/ 2.4).toFixed(2);


        //this.changeStyle = this.changeStyle.bind(this);
    
        let styles = [];
        for(let style of this.props.equippedWeapon.stances){
            styles.push(style.combat_style);
        }
        console.log('Styles', styles, this.props.equippedWeapon.weapon_type);

        let weapState= [];
        for(let i = 0; i < styles.length; i++){
            weapState.push({style: styles[i], selected: false})
        }
        const {weapon_type} = this.props.equippedWeapon;
        let styleImages = [];
        for(let state of weapState){
            let path = `/assets/attackStyles/${weapon_type}/${weapon_type}_${state.style}_crop.png`;
            styleImages.push({style: state.style, img: path, selected: false, weaponType: this.props.equippedWeapon.weapon_type}); 
        } 
        if(styleImages.length < 4){
            styleImages.push({style: '', img: '', selected: false, weaponType: weapon_type})
        }
        
        return(
            <div className="card panel-card">
                {/*  <h1>PLAYER STATS</h1> */}
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
                   {/*                  <div className="styles-box">
                                        <div className="row">
                                                <img src={img2} className="attack-style-img mr-0.5" alt=""></img>
                                                <img src={img1} className="attack-style-img " alt=""></img>
                                        </div>
                                        <div className="row">
                                           <img src={img3} className="attack-style-img mr-0.2" alt=""></img>
                                           <img src={img4} className="attack-style-img " alt=""></img>
                                        </div> 
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="test-options">
                                <div className="options-label">
                                    Stat-Reducing Specs
                                </div>
                                <div className="test-box">
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/ea/Dragon_warhammer.png?27308" alt=""></img>
                                    </div>
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                        <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6c/Bandos_godsword.png?0f871" alt=""></img>
                                    </div>
                                    <div className="container">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
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

                    </div>
                </div>
                {/* <div className="row">
                    <PlayerSkillSlot slot={'atk_level'} value={this.props.playerStats.atk + this.props.bonuses.potion}></PlayerSkillSlot>
                    <div className="test-options">   
                        <div className="options-label">
                        Stat-Reducing Specs
                        </div>
                        <div className="test-box">
                            <div className="container">
                                <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/e/ea/Dragon_warhammer.png?27308" alt=""></img>
                            </div>
                            <div className="container">
                                <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6c/Bandos_godsword.png?0f871" alt=""></img>
                            </div>
                            <div className="container">
                                <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/1/16/Arclight.png?3d34e" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <PlayerSkillSlot slot="str_level" value={this.props.playerStats.str + this.props.bonuses.potion}></PlayerSkillSlot>
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
                    <PlayerSkillSlot slot="magic_level" value={this.props.playerStats.magic + this.props.bonuses.potion}></PlayerSkillSlot>
                    <div className="styles-container attack-styles">  
                        <div className="test-options" data-toggle="dropdown">
                            <div className="options-label">
                                Attack Style
                            </div>
                            <div className="test-box no-bg" >
                                <img className="combat-styles" src="https://oldschool.runescape.wiki/images/8/8f/Combat_icon.png?93d63" alt=""></img>
                            </div> 
                        </div>
                        <ul className="dropdown-menu scrollable-menu" role="menu">
                                        {this.props.equippedWeapon.stances ? this.props.equippedWeapon.stances.map((item, index) =>{
                                            return(<li onClick={console.log('click')} key={index}>{`${item.combat_style} --${item.attack_style}`}</li>)
                                        }) :null}
                        </ul>
                        <div className="test-options" data-toggle="dropdown">
                            <div className="options-label">
                                Spell
                            </div>
                            <div className="test-box  no-bg spellbook-img">
                                <img className="spellbook" src="https://oldschool.runescape.wiki/images/0/0d/Spellbook.png?78262" alt=""></img>
        
                            </div> 
                        </div>
                        <ul className="dropdown-menu scrollable-menu" role="menu">
                                        {this.props.equippedWeapon.stances ? this.props.equippedWeapon.stances.map((item, index) =>{
                                            return(<li onClick={console.log('click')} key={index}>{`${item.combat_style} --${item.attack_style}`}</li>)
                                        }) :null}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <PlayerSkillSlot slot="ranged_level" value={this.props.playerStats.range + this.props.bonuses.potion}></PlayerSkillSlot>
                    <div className="test-options">   
                        <div className="options-label">
                            Prayer
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
                                <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                            </div>
                            <div className="container">
                                <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                            </div>
                            <div className="container">
                                <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                                <img className="checkbox-image" src="https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div> */}
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
