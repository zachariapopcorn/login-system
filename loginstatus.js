const roblox = require('noblox.js');

exports.run = async (client, message, args) => {
    try {
        await roblox.follow(1599545734);
    } catch {
        return message.channel.send("You are not logged in to a Roblox account!");
    }
    const data = await roblox.getCurrentUser();
    return message.channel.send(`You are logged in to the Roblox account **${data.UserName}** that has the user id of **${data.UserID}**!`);
}

exports.help = (client, message, args) => {
    message.channel.send({embed: {
        color: 7948427,
        description: `**Login Status**\n`
        + `\`${client.config.prefix}loginstatus\` - Logs into a Roblox account using the supplied username and password (Onwer Only).`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}