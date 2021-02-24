import React, { Component } from 'react'

class AttackStyles extends Component {
    render() {
        return (
            <div className="styles-box">
                <div className="row">
                    <img src={img1} className="attack-style-img mr-0.5" alt=""></img>
                    <img src={img2} className="attack-style-img " alt=""></img>
                </div>
                <div className="row">
                    <img src={img3} className="attack-style-img mr-0.2" alt=""></img>
                    <img src={img4} className="attack-style-img " alt=""></img>
                </div> 
            </div>
        )
    }
}

export default AttackStyles