const Discord =  require('discord.js');

module.exports.run = (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if (!avatar) avatar = ""
    if (message.mentions.users.size > 0) {
      const embed = new Discord.MessageEmbed()
        .setColor(0xff7300)
        .setTitle(`Avatar de ${message.mentions.users.first().username} :`)
        .setImage(`${avatar}`)
        return message.channel.send(embed);
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff7300)
      .setTitle(`Avatar de ${message.author.username} :`)
      .setImage(`${avatar}`)
      return message.channel.send(embed);
    }
};

module.exports.help = {
  name:"avatar",
}