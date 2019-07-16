import express from 'express';
import html from './test/server/html';
import React from 'react';
import { renderToString  } from 'react-dom/server';
import App from './test/tsx/App';

let app = express();


app.use('/public', express.static('public'));

app.get('/', (req, resp) => {
	const msg = "Esperandoooo....";

	const body = renderToString( <App msg={msg} /> );
	resp.send(html(
		{
			body,
			msg
		}
	));
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listen in port: ${PORT}`);
});