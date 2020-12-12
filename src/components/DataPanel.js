import React, {Component} from 'react'
import hiscores from 'osrs-json-hiscores'

class DataPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            stats:[]
        }
    /*     this.score = hiscores.getStats('IronFbl')
        .then(res=>console.log(res)); */
    }
    render(){
        return(
            <div className="card panel-card">
                
                <h1>PLAYER STATS</h1>
            </div>
        )
    }
}

export default DataPanel;