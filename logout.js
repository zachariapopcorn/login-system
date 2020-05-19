const roblox = require('noblox.js');
const db = require('../db.js');

exports.run = async (client, message, args) => {
    if(message.author.id != "465362236693807115") {
        return message.channel.send("You don't have permission to run this command!");
    }
    try {
        await roblox.follow(1599545734);
    } catch {
        return message.channel.send("You are not logged in to a Roblox account!");
    }
    await roblox.unfollow(1599545734);
    try {
        await roblox.login("h", "h");
    } catch (err) {
        return message.channel.send("There was an error while logging out: " + err);
    }
    await db.set("username", null);
    await db.set("password", null);
    return message.channel.send("You have logged out of the account!");
}

exports.help = (client, message, args) => {
    message.channel.send({embed: {
        color: 7948427,
        description: `**Logout**\n`
        + `\`${client.config.prefix}logout\` - Logs outs of the logged in Roblox account, sadly only the onwer of the bot can use this.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}