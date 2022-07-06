//Install express server
const express = require('express');
const path = require('path');
const app = express();
const myBotList = rendertron.botUserAgents.concat(['googlebot', 'yolobot']);
const rendertron = require('rendertron-middleware');

app.use(
  rendertron.makeMiddleware({
    // use the extended bot list:
    userAgentPattern: new RegExp(myBotList.join('|'), 'i'),
    // replace this with the web address of your rendertron instance
    proxyUrl: 'https://render-tron.appspot.com/render',
  })
);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/seo'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/seo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);