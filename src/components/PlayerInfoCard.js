import React, {Component} from 'react';
import EquipSlotCard from './EquipSlotCard'
import {connect} from 'react-redux';

class PlayerInfoCard extends Component{
    render(){
        return(
            <div className="card player-card">
                <div className="player-equip-card">
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedHead}
                            listAll={this.props.allHelms}
                            type="helm"> 
                        </EquipSlotCard>
                    </div>
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedCape}
                            listAll={this.props.allCapes}
                            type="cape"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedNeck}
                            listAll={this.props.allNecks}
                            type="neck"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedAmmo}
                            listAll={this.props.allAmmo}
                            type="ammo"> 
                        </EquipSlotCard>
                    </div>
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedWeapon}
                            listAll={this.props.allWeapons}
                            type="weapon"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedBody}
                            listAll={this.props.allBodies}
                            type="body"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedOffhand}
                            listAll={this.props.allShields}
                            type="offhand"> 
                        </EquipSlotCard>
                    </div>             
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedLegs}
                            listAll={this.props.allLegs}
                            type="legs"> 
                        </EquipSlotCard>
                    </div>                
                    <div className = "row">
                        <EquipSlotCard 
                            list={this.props.equippedHands}
                            listAll={this.props.allHands}
                            type="hand"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedFeet}
                            listAll={this.props.allFeet}
                            type="feet"> 
                        </EquipSlotCard>
                        <EquipSlotCard 
                            list={this.props.equippedRing}
                            listAll={this.props.allRings}
                            type="ring"> 
                        </EquipSlotCard>         
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allWeapons: state.allWeapons,
        allAmmo: state.allAmmo,
        allBodies: state.allBodies,
        allCapes: state.allCapes,
        allNecks: state.allNecks,
        allShields: state.allShields,
        allLegs: state.allLegs,
        allHands: state.allHands,
        allFeet: state.allFeet,
        allRings: state.allRings,
        allHelms: state.allHelms,
        equippedHead: state.equippedHead,
        equippedCape: state.equippedCape,
        equippedNeck: state.equippedNeck,
        equippedAmmo: state.equippedAmmo,
        equippedBody: state.equippedBody,
        equippedWeapon: state.equippedWeapon,
        equippedOffhand: state.equippedOffhand,
        equippedLegs: state.equippedLegs,
        equippedHands: state.equippedHands,
        equippedFeet: state.equippedFeet,
        equippedRing: state.equippedRing 
    }
  }
  export default connect(
    mapStateToProps
  )(PlayerInfoCard)