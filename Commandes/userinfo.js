const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if (!avatar) avatar = ""
    let userembed = new Discord.MessageEmbed()
        .setTitle(`**Information pour :** ${user.username}`)
        .setThumbnail(user.displayAvatarURL, true)
        .addField("**Pseudo :**", user.username, true)
        .addField("**ID :**", user.id, true)
        .addField("**Bot?**", user.bot, true)
        .addField("**Création du compte :**", user.createdAt, true)
        .setThumbnail(avatar)
        .setColor(0xff7300);
    return message.channel.send(userembed);
};


module.exports.help = {
    name:"userinfo",
  }