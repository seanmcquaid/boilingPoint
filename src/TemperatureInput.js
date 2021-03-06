import React, {Component} from "react";

class TemperatureInput extends Component {

    render(){
        return(
            <div>
                <legend>Scale: {this.props.scale}</legend>
                <input onChange={this.props.onChange} value={this.props.temperature}/>
            </div>
        )
    }
}

export default TemperatureInput;