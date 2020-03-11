import React from 'react'

import Button from './Button'

import './css/Limit.css'

export default class Limit extends React.Component {
    handleApply() {
        this.props.handleLimitChange(this.props.limitValue)
    }

    handleOnChange(event) {
        var typedLimit = event.target.value
        var onlyNumbersRegex = /[0-9]/
        if(!((typedLimit.match(onlyNumbersRegex) && typedLimit > 0) || typedLimit === '')) {
            this.props.alertInvalidLimit()
            return
        }

        this.props.alertOff()
        this.props.setLimitValue(typedLimit)
    }

    render() {
        return(
            <div id="limit">
                <p>Active Limit:</p>
                <p>{this.props.limit ? this.props.limit : 'Unlimited'}</p>
                <p>Input new Limit: </p>
                <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.props.limitValue} placeholder='Unlimited'></input>
                <Button text='Apply Limit' onClick={() => this.handleApply()}/>
            </div>
        );
    }
}