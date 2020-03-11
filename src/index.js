import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Converter from './Components/Converter'

ReactDOM.render(<Converter />, document.getElementById('root'))

var windowHeight = window.innerHeight

document.getElementById('root').style.height = windowHeight+'px'

