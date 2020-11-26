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

  async componentDidMount() {
    console.log('mounted');
    let pageNumber = 1;
    const MAX_PAGES = 35;
    for(let i = pageNumber; i <= MAX_PAGES;i++){
      await fetch(`https://api.osrsbox.com/weapons?page=${i}`)
        .then(response => response.json())
        .then(json => {
          console.log('meta info', json._meta);
          console.log('"next" field', json._links.next);
          for (let i = 0; i < json._items.length; i++) {
            this.props.dispatch({
              type: 'ADD_WEAPON',
              payload: { name: json._items[i].name, stats: json._items[i].equipment }
            })
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