import React from 'react'

import './css/Result.css'

export default class Result extends React.Component {
    render() {
        return(
            <>
                <div id='result'>
                    <p>{this.props.resultText}</p>
                </div>
            </>
        )
    }
}