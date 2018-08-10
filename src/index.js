import React from 'react'
import {render} from 'react-dom'
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import './style/index.css';

render(<Root />, document.getElementById('container'))
