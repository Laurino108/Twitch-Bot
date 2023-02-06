const tmi = require("tmi.js"),
    {channel, username} = require("./settings.json");
    require('dotenv').config();

var password = process.env.password

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username,
        password,
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on("connected", () => {
    client.say(channel, "MODBOT hast connected!");
});

client.on("message", (channel, user, message, self) => {
    if(self) return;

    if(message == "!hello") {
        client.say(channel, `@${user.username}, hello!`)
    }
})