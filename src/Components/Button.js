import React from 'react'

import './css/Button.css'

export default class ClearButton extends React.Component {
    render() {
        return(
            <>
                <div className='button' onClick={this.props.onClick}>
                    {this.props.text}
                </div>
            </>
        )
    }
}