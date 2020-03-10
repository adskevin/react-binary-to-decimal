import React from 'react'

import BinaryInput from './BinaryInput'
import Alert from './Alert'
import Result from './Result'

import './css/Converter.css'

export default class Converter extends React.Component {
    constructor() {
        super()
        this.state = {
            alertState: false,
            alertText: '',
            resultText: 0,
            value: ''
        }
    }

    convert = (value) => {
        var result = 0
        var decimalValue = 0
        var valueLength = value.length-1
        for(var i = valueLength; i >= 0; i--){
            if(value[i] === '1') {
                result = result + Math.pow(2, decimalValue)
            }
            decimalValue++
        }
        this.setResultText(result)
    }

    setResultText = (text) => {
        this.setState({
            resultText: text
        })
    }

    alertOn = () => {
        this.setState({
            alertState: true,
            alertText: 'You can type only 0 or 1.'
        })
    }

    alertOff = () => {
        this.setState({
            alertState: false,
        })
    }

    alertOutOfRange = () => {
        this.setState({
            alertState: true,
            alertText: 'Only up to 8 digit binaries are allowed.'
        })
    }

    render(){
        return(
            <div id='converter'>
                <h1>React Binary to Decimal Converter</h1>
                <p>Type your Binary: </p>
                <BinaryInput alertOn={this.alertOn} alertOff={this.alertOff} alertOutOfRange={this.alertOutOfRange} convert={this.convert}/>
                <p>Your Decimal Result: </p>
                <Result resultText={this.state.resultText}/>
                <Alert alertState={this.state.alertState} alertText={this.state.alertText}/>
            </div>
        )
    }
}