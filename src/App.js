import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import PlayerInfoCard from './components/PlayerInfoCard'
import MonsterInfoCard from './components/MonsterInfoCard'
import DataPanel from './components/DataPanel'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dispatcher = this.dispatcher.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })

    this.setState({ postId: this.state.postId + 1 })
  }
  dispatcher(slot, payload){
    if(slot === 'weapon' || slot === '2h'){
      this.props.dispatch({
        type: 'ADD_WEAPON',
        payload: payload
      })
    }
    else{
      this.props.dispatch({
        type: `ADD_${slot.toUpperCase()}`,
        payload: payload
      });
    }
  }
//store.getState().allWeapons[store.getState().allWeapons.findIndex(i=>i.name === 'Elder maul')].stats
  async componentDidMount() {
    console.log('mounted');
    let pageNumber = 1;
    const eMax_Pages = 146;
    let a = new Date();
    console.log('Beginning fetch....');
    for(let i = pageNumber; i <= eMax_Pages; i++){
      await fetch(`https://api.osrsbox.com/equipment?page=${i}`)
        .then(response => response.json())
        .then(json => {
          for (let j = 0; j < json._items.length; j++) {
            const {name, equipment} = json._items[j];
            if(equipment.slot === 'weapon' || equipment.slot === '2h'){
              this.dispatcher(
                equipment.slot,
                {name: name, stats: equipment, slot: equipment.slot}
              );
            }
            else{
              this.dispatcher(
                equipment.slot,
                {name: name, stats: equipment}
              ); 
            }
          }
        })
    }
    let b = new Date();
    console.log('DATA FETCH COMPLETE!');
    console.log('Time to Complete(ms)', b - a );
  }

  render() {
    return (
      <div className="App">
        <div className="col-lg-4">
          <DataPanel></DataPanel>
        </div>
        <div className="col-lg-4">
          <PlayerInfoCard></PlayerInfoCard>
        </div>
        <div className="col-lg-4">
          <MonsterInfoCard></MonsterInfoCard>
        </div>



      </div>
    )
  }
}

const mapStateToProps = state => {
  return { allWeapons: state.allWeapons }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)