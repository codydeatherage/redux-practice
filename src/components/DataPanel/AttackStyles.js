import React, { Component } from 'react'
import {connect} from 'react-redux'
import AttackStyleItem from './AttackStyleItem'

class AttackStyles extends Component {
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);

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

        this.state = { data: styleImages }
    }
    
    handleSelect = (index, select) =>{
        let tempCopy = this.state.data;
        tempCopy[index].selected = !tempCopy[index].selected;

        for(let i = 0; i < this.state.data.length; i++){
            if(i !== index){
                tempCopy[i].selected = false;
            }
        }

        this.setState({data: tempCopy});
    }

    render() {

            return (
                <div className="styles-box">
                    <div className="row">
                        <AttackStyleItem onSelectStyle={this.handleSelect} data={this.state.data[0]} id="0" ></AttackStyleItem>
                        <AttackStyleItem onSelectStyle={this.handleSelect} data={this.state.data[1]} id="1"></AttackStyleItem>
                    </div>
                 {this.state.data.length >= 3 ? 
                        <div className="row">
                            <AttackStyleItem onSelectStyle={this.handleSelect} data={this.state.data[2]} id="2"></AttackStyleItem>
                           
                            {this.state.data.length === 4 ?
                             <AttackStyleItem onSelectStyle={this.handleSelect} data={this.state.data[3]} id="3"></AttackStyleItem>
                             :
                             <div className="attack-style-img"></div>
                            }
                        </div> : null}
                </div>
            )
        
    }
}

const mapStateToProps = state => {
    return {
        equippedWeapon: state.equippedWeapon
    }
  }
  
  export default connect(
    mapStateToProps
  )(AttackStyles)