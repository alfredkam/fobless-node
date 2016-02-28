# fobless-node


A functional twilio test app to open the front door without using a fob

### ENV FORMAT
FORWARD_NUMBER = xxx-xxx-xxxx <br>
AUTHORIZED_NUMBERS = +1xxxxxxxxxx, +1xxxxxxxxxx, +1xxxxxxxxxx, ... <br>
TWILIO_ACCOUNT_SID = string <br>
NEWRELIC_KEY = string <br>

<optional>
If sms number is provided - will send sms for door open notification <br>
SMS_NUMBER = +1xxxxxxxxxx <br>
if email is provided - will send (gmail - non 2fa) email for door open notification <br>
EMAIL_FROM = no-reply@gmail.com <br>
EMAIL_FROM_PASSWORD = PASSWORD <br>
EMAIL_TO = EMAIl_RECIPIENT
