import React from 'react'

import BinaryInput from './BinaryInput'
import Alert from './Alert'
import Result from './Result'
import Limit from './Limit'

import './css/Converter.css'
import Button from './Button'

export default class Converter extends React.Component {
    constructor() {
        super()
        this.state = {
            alertState: false,
            alertText: '',
            resultText: 0,
            value: '',
            limit: 8,
            limitValue: ''
        }
    }

    setLimitValue = (newLimitValue) => {
        this.setState({
            limitValue: newLimitValue
        })
    }

    handleLimitChange = (newLimit) => {
        this.handleClear()
        this.setState({
            limit: newLimit
        })
    }

    convert = (value) => {
        var result = 0
        var factor = 0
        var valueLength = value.length-1
        for(var i = valueLength; i >= 0; i--){
            if(value[i] === '1') {
                result = result + Math.pow(2, factor)
            }
            factor++
        }
        this.setResultText(result)
    }

    handleClear = () => {
        this.setState({
            resultText: 0,
            value: '',
            limit: 8,
            limitValue: ''
        })
        this.alertOff()
    }

    setResultText = (text) => {
        this.setState({
            resultText: text
        })
    }

    setValue = (text) => {
        this.setState({
            value: text
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
            alertText: ''
        })
    }

    alertOutOfRange = () => {
        this.setState({
            alertState: true,
            alertText: 'Only up to ' + this.state.limit + ' digit binaries are allowed.'
        })
    }

    alertInvalidLimit = () => {
        this.setState({
            alertState: true,
            alertText: 'You can only type a number greater than 0.'
        })
    }

    render(){
        return(
            <div id='converter'>
                <h1>React Binary to Decimal Converter</h1>
                <p>Type your Binary: </p>
                <BinaryInput
                    limit={this.state.limit}
                    setValue={this.setValue}
                    alertOn={this.alertOn}
                    alertOff={this.alertOff}
                    alertOutOfRange={this.alertOutOfRange}
                    convert={this.convert}
                    value={this.state.value}
                />
                <p>Your Decimal Result: </p>
                <Result resultText={this.state.resultText}/>
                <Alert
                    alertState={this.state.alertState}
                    alertText={this.state.alertText}
                />
                <Limit
                    alertInvalidLimit={this.alertInvalidLimit}
                    alertOff={this.alertOff}
                    limit={this.state.limit}
                    limitValue={this.state.limitValue}
                    handleLimitChange={this.handleLimitChange}
                    setLimitValue={this.setLimitValue}
                />
                <Button
                    text='Clear Fields'
                    onClick={() => this.handleClear()} 
                />
            </div>
        )
    }
}