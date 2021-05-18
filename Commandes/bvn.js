const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Merci de mentionner une personne !**");
    if (member) { const embed = new Discord.MessageEmbed()
        .setTitle(`**${message.author.username}** souhaite le bienvenue à **${member.user.username}**`)
        .setColor(0x2f3136)
        .setImage ("https://media.giphy.com/media/eqCaSzU2sDe8g/giphy.gif")
        return message.channel.send(embed);
    }
}


module.exports.help = {
    name:"bvn",
  }