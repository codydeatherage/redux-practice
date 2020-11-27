import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Container from './components/Container'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
  dispatcher(slot, item){
    this.props.dispatch({
      type: `ADD_${slot}`,
      payload: {
        name: item,
        stats: item,
        slot: item
      }
    });
  }
//store.getState().allWeapons[store.getState().allWeapons.findIndex(i=>i.name === 'Elder maul')].stats
  async componentDidMount() {
    console.log('mounted');
    let pageNumber = 1;
    const eMax_Pages = 146;
    for(let i = pageNumber; i <= eMax_Pages; i++){
      await fetch(`https://api.osrsbox.com/equipment?page=${i}`)
        .then(response => response.json())
        .then(json => {
          for (let j = 0; j < json._items.length; j++) {
            const {name, equipment} = json._items[j];
            switch(json._items[j].equipment.slot){
              case '2h':
              case 'weapon': this.props.dispatch({
                              type: 'ADD_WEAPON',
                              payload: {
                                name: name,
                                stats: equipment,
                                slot: equipment.slot
                              }
                            });
                            break;
              case 'head': this.props.dispatch({
                            type: 'ADD_HELM',
                            payload: {
                              name: json._items[j].name,
                              stats: json._items[j].equipment
                            }
                          });
                          break;
              case 'cape' : this.props.dispatch({
                              type: 'ADD_CAPE',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            });
                            break;
              case 'body' : this.props.dispatch({
                              type: 'ADD_BODY',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            });
                            break;
              case 'legs' : this.props.dispatch({
                              type: 'ADD_LEGS',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            });
                            break;
              case 'hands' : this.props.dispatch({
                              type: 'ADD_HANDS',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            });
                            break;
              case 'feet' : this.props.dispatch({
                              type: 'ADD_BOOTS',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            });
                            break;
              case 'shield' : this.props.dispatch({
                                type: 'ADD_OFFHAND',
                                payload: {
                                  name: json._items[j].name,
                                  stats: json._items[j].equipment
                                }
                              });
                              break;   
              case 'neck' : this.props.dispatch({
                              type: 'ADD_NECK',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            });
                            break;
              case 'ring' : this.props.dispatch({
                              type: 'ADD_RING',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            })
                            break;
              case 'ammo' : this.props.dispatch({
                              type: 'ADD_AMMO',
                              payload: {
                                name: json._items[j].name,
                                stats: json._items[j].equipment
                              }
                            })
                            break;                                
              default: console.log('NO MATCH FOUND', json._items[j].equipment.slot); break;   
            }

          }
        })
    }
  }

  render() {
    return (
      <div className="App">
       <Container></Container>
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