/* eslint no-console: "off" */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import express from 'express';
import ExampleComponent from './index';

const app = express();
const port = 3000;

app.use('/build', express.static('./build'));

app.get('/', (req, res) => {
  const md = new MobileDetect(req.headers['user-agent']);

  let serverSideScreenClass = 'xl';
  if (md.phone() !== null) serverSideScreenClass = 'xs';
  if (md.tablet() !== null) serverSideScreenClass = 'md';

  const content = ReactDomServer.renderToString(
    <ExampleComponent serverSideScreenClass={serverSideScreenClass} />
  );
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>react-grid-system example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="build/bundle.js"></script>
      </body>
    </html>
  `);
  console.info('react-grid-system example rendered server-side.');
});

app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
