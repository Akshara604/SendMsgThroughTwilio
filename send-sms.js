require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to:process.env.MY_PHONE_NUMBER,
    from:process.env.TWILIO_PHONE_NUMBER,
    body: "Love you 3000!"
})

.then((message) => console.log(message.sid));