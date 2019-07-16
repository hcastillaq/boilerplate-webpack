import React from 'react';
import ReactDOM from 'react-dom';

import App from './test/tsx/App';

ReactDOM
	.hydrate( <App msg={window.msg} />, document.getElementById("root"));