import React from 'react'

import './css/Alert.css'

export default class Alert extends React.Component {
    render (){
        return(
            <>
                <p id="alert" className={this.props.alertState ? 'showAlert' : 'notShowAlert'}>{this.props.alertText}</p>
            </>
        )
    }
}