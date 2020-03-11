import React from 'react'

import './css/Alert.css'

export default class Alert extends React.Component {
    render (){
        return(
            <>
                <div id="alert">
                    <p className={this.props.alertState ? 'showAlert' : 'notShowAlert'}>{this.props.alertText}</p>
                </div>
            </>
        )
    }
}