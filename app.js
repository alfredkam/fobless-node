if (process.env.NEWRELIC_KEY) {
    require('newrelic');
}

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var twilioSID = process.env.TWILIO_ACCOUNT_SID || '';
var numbers = (process.env.AUTHORIZED_NUMBERS || '').split(",");
var validNumbers = {};
var forwardNumber = process.env.FORWARD_NUMBER || null;
var smsNumber = process.env.SMS_NUMBER || null;

for (var i in numbers) {
    validNumbers[numbers[i]] = true;
}

app.get('/twilio/voice', function (req, res) {
    var query = req.query;
    if (query.AccountSid == twilioSID && validNumbers[query.From]) {
        res.send('<?xml version="1.0" encoding="UTF-8"?>' +
                 '<Response>' +
                     '<Play digits="www9"/>' +
                     (smsNumber ? '<Sms to="'+ smsNumber + '">Door opened.</Sms>' : '')+
                     '</Response>');
    } else if (query.AccountSid == twilioSID && forwardNumber) {
      res.send('<?xml version="1.0" encoding="UTF-8"?>' +
               '<Response>' +
                   '<Dial>'+ forwardNumber + '</Dial>' +
                   '</Response>');
    }
});

app.get('/heartbeat', function (req, res) {
    res.send('alive');
});

var server = app.listen(port, function () {
    console.log('Listening on port ' + server.address().port);
});
