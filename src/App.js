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

  componentDidMount() {
    console.log('mounted');
    fetch('https://api.osrsbox.com/weapons?where=equipment.ranged_strength>50')
      .then(response => response.json())
      .then(json => {
        console.log(json._items);
        for (let i = 0; i < json._items.length; i++) {
          console.log(json._items[i].name);
          this.props.dispatch({
            type: 'LOAD_POSTS',
            payload: { id: i + 2, title: json._items[i].name }
          })
        }
      })
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
  return { posts: state.posts }
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