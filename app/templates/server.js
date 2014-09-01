var express = require('express');
var jwt = require('jwt-simple');
var secret = '<%= secret %>';
var channel = '<%= id %>';
var app = express();

function hasChannelAccess(req) {
    return true;
}

app.get('/jwt', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*'); // for developing
    if (hasChannelAccess(req)) {
        console.log(req.query);
        var clientId = req.query.clientId,
            payload = {
                client: clientId, // the client that wants to connect
                channel: channel, // channel that the client want's to connect to
                permissions: {
                    '.*': { /* Regex matches everything */
                        publish: false, /* Forbids publishing to all channels */
                        subscribe: false /* Allows subscribing to all channels */
                    },
                    '^yo-room$': { /* Exact match to yo-room */
                        publish: true, /* Allows publishing in room1 */
                        subscribe: true
                    }
                },
                exp: Date.now() + 180000 // client can use this token for 3 minutes (UTC-0)
            },
            token = jwt.encode(payload, secret, 'HS256');
        res.send(token);
    } else {
        res.send(403, 'Sorry! You are not allowed.');
    }
});

console.log('Starting server on port 1234');
app.listen(1234);
console.log('Server is running..');