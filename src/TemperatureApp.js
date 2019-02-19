import React, {Component} from "react";

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

class TemperatureApp extends Component {
    constructor(){
        super();
        this.state = {
            temperature: 18,
            scale: "c"
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(value){
        // console.log("Someone changed the Celsius temp to" + value)
        if(value.target.value.match(/^\d*$/)){
            this.setState({
                temperature : value.target.value,
                scale: "c"
            })
        }
    }

    handleFahrenheitChange(value){
        console.log("Someone changed the Fahrenheit temp to" +value)
        if(value.target.value.match(/^\d*.*\d*$/)){
            this.setState({
                temperature : value.target.value,
                scale: "f"
            })
        }
    }

    render(){
        const scale = this.state.scale;
        const temp = this.state.temperature;
        let fTemp = "";
        let cTemp = "";
        if(scale === "c"){
            // convert the celsius to fahrenheit
            fTemp = (temp * 9 / 5) + 32;
            // no need to convert to c bc it's already c
            cTemp = temp;
        } else if (scale === "f"){
            fTemp = temp;
            cTemp = (temp - 32) * (5 / 9)
        }
        return(
            <div id="temp-app">
                <TemperatureInput scale="c" temperature={fTemp} onChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={cTemp} onChange={this.handleFahrenheitChange}/>
                <BoilingVerdict temperature={cTemp}/>
            </div>
        )
    }
}

export default TemperatureApp;