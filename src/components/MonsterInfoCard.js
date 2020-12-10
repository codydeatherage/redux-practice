import React, {Component} from 'react';
import {connect} from 'react-redux';
import image from './../zulrah.png'

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
                const {hitpoints, combat_level} = json;
                this.props.dispatch({
                    type: `SELECTED_BOSS`,
                    payload: {name: this.state.selected, cmblvl: combat_level}
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
        return(
            <div className="card monster-card">
                <div className="row">      
                    <button type="button" className="boss-select btn-default" data-toggle="dropdown">{this.state.selected}</button>
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
{/*             "hitpoints": 255, "defence_level": 300, "magic_level": 150,
                "attack_magic": 0, "defence_stab": 50,"defence_slash": 50, 
                "defence_crush": 10, "defence_magic": 100, "defence_ranged": 100 */}
                <div className="row stats-row">
                        <div className="card form-card">
                            <div className="row">
                                <div className="form-input">
                                    <div className="stat-icon"></div>
                                    <input className="boss-stat-input" type="search"></input>
                                </div>
                                <div className="form-input"></div>
                                <div className="form-input"></div>
                            </div>
                            <div className="row">
                                <div className="form-input"></div>
                                <div className="form-input"></div>
                                <div className="form-input"></div>
                            </div>                            
                            <div className="row">
                                <div className="form-input"></div>
                                <div className="form-input"></div>
                                <div className="form-input"></div>
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
