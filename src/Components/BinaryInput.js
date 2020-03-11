import React from 'react'

import './css/Input.css'

export default class BinaryInput extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         value: this.props.value
    //     }
    // }

    handleOnChange = (event) => {
        var newValue = event.target.value
        var newValueLength = newValue.length
        // if(newValueLength <= 8 && newValueLength >= 0) {
        if(newValueLength >= 0) {
            for(var i = 0; i < newValueLength; i++) {
                if(newValue[i] === "1" || newValue[i] === "0") {
                    this.props.alertOff()
                    
                } else {
                    this.props.alertOn()
                    return
                }
            }

            this.props.setValue(newValue)
            this.props.convert(newValue)
        }
        //  else {
        //     this.props.alertOutOfRange()
        // }
    }

    render() {
        return(
            <>
                <input id='binInput' type='text' onChange={this.handleOnChange} value={this.props.value}></input>
            </>
        )
    }
}