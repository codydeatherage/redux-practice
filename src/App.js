import React, { Component } from 'react'
import './App.css'
import PlayerInfoCard from './components/PlayerInfoCard'
import DataPanel from './components/DataPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="player-container">
          <div className="player-info">
              <DataPanel></DataPanel>       
              <PlayerInfoCard></PlayerInfoCard>       
          </div>
        </div>
{/*           <div className="col-lg-4">
            <MonsterInfoCard></MonsterInfoCard>
          </div> */}
      </div>
    )
  }
}

export default App