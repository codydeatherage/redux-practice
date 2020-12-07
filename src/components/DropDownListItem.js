import React, {Component} from 'react'

class DropDownListItem extends Component{


    render(){
        return(
            this.props.items.map((item, index) =>{
                return(<li /* onClick={this.handleChange} */ key={index}>{item}</li>)
            }) 
        )
    }
}

export default DropDownListItem