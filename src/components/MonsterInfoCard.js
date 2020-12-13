import React, {Component} from 'react';
import {connect} from 'react-redux';
import image from './../zulrah.png'
import MonsterSkillSlot from './MonsterSkillSlot'
import './../stylesheets/MonsterInfo.css'

class MonsterInfoCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayItems: [],
            selected: ''
        }
        this.filterList = this.filterList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    async componentDidMount(){
        let pageNumber = 1;
        let eMax_Pages = 57;
        let a = new Date();
        console.log('Beginning fetch....');
        for(let i = pageNumber; i <= eMax_Pages; i++){
        await fetch(`https://api.osrsbox.com/monsters?max_results=50&&page=${i}`)
            .then(response => response.json())
            .then(json => {
                for (let j = 0; j < json._items.length; j++) {
                    const {category, name, id} = json._items[j];
                    if(category.includes('boss')){
                        this.props.dispatch({
                            type: 'ADD_BOSS',
                            payload: {name: name.toLowerCase(), id: id}
                        })
                    }
                }
            })
        }
    }
    async handleChange(event){
        let itemList = this.props.allBosses;
        const itemID = itemList.find(item => item.name === event.target.innerText).id;
        await this.setState({selected: event.target.innerText});
        console.log('NEW ITEM SELECTED:', this.state.selected, itemID);
        await fetch(`https://api.osrsbox.com/monsters/${itemID}`)
            .then(response => response.json())
            .then(json => {
                const {
                    name,
                    hitpoints, 
                    combat_level, 
                    id,        
                    defence_level, 
                    magic_level, 
                    defence_stab,           
                    defence_slash, 
                    defence_crush, 
                    defence_magic,              
                    defence_ranged
                } = json;
                this.props.dispatch({
                    type: `SELECTED_BOSS`,
                    payload: {                    
                        name: name,
                        hitpoints: hitpoints,  
                        combat_level: combat_level, 
                        id: id,     
                        defence_level: defence_level, 
                        magic_level: magic_level, 
                        defence_stab: defence_stab,           
                        defence_slash: defence_slash, 
                        defence_crush: defence_crush, 
                        defence_magic: defence_magic,              
                        defence_ranged: defence_ranged
                    }
                })
            }
        ) 
    }
    async filterList(event){
        console.log('MONSTER CARD FILTER', event.target.value);
        let currList = this.props.allBosses;
        let newList = [];
        for(let item of currList){
            newList.push(item.name);
        }
        let displayList = [];
        for(let item of newList){
            if(item.includes(event.target.value.toLowerCase())){
                displayList.push(item);
            }
        }
        await this.setState({displayItems: displayList});
    }

    render(){
        let firstRow = ['hitpoints', 'defence_level', 'magic_level'];
        let secondRow = ['defence_stab', 'defence_slash', 'defence_crush'];
        let thirdRow = ['defence_magic', 'defence_ranged'];
        return(
            <div className="card monster-card">
                <div className="row">      
                    <button type="button" className="boss-select btn-default" data-toggle="dropdown">{this.props.selectedBoss.name}</button>
                    <ul className="dropdown-menu scrollable-menu" role="menu">
                        <input type="search" onChange={this.filterList} className="search-bar"></input>  
                            {this.state.displayItems.map((item, index) =>{
                                return(<li onClick={this.handleChange} key={index}>{item}</li>)
                            }) }
                    </ul>
                </div>
                <div className="row">
                    <div className="boss-img-card">
                        <img className="boss-img" src={image} alt=""></img>
                    </div>
                </div>
                <div className="row stats-row">
                        <div className="card form-card">
                            <div className="row">
                                {firstRow.map((stat, index)=>{
                                    return(<MonsterSkillSlot stat={stat} key={index}></MonsterSkillSlot>)
                                })}
                            </div>
                            <div className="row">
                                {secondRow.map((stat, index)=>{
                                    return(<MonsterSkillSlot stat={stat} key={index}></MonsterSkillSlot>)
                                })}
                            </div>                            
                            <div className="row">
                                {thirdRow.map((stat, index)=>{
                                    return(<MonsterSkillSlot stat={stat} key={index}></MonsterSkillSlot>)
                                })}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allBosses: state.allBosses,
        selectedBoss: state.selectedBoss
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
  )(MonsterInfoCard)
