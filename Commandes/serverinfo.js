const Discord = require('discord.js');

module.exports.run = async (client, message) => {
  let icon = message.guild.iconURL({ format: 'png', dynamic: true, size: 2048 })
  if(!icon) icon = ""


  const embed = new Discord.MessageEmbed()
    .setColor(0xff7300)
    .setAuthor(message.guild.name, icon)
    .setThumbnail(icon)
    .addFields(
      { name: "Propriétaire du serveur :", value: `${message.guild.owner}`, inline: true },
      { name: "Identifiant :", value: `${message.guild.owner.id}`, inline: true },
      { name: '\u200B', value: '\u200B' },
    )
    .addFields(
      { name: "Nombre de membre :", value: `\`${message.guild.memberCount}\``, inline: true },
      { name: "Création du serveur :", value: `\`${message.guild.createdAt}\``, inline: true },
    )
    .setTimestamp()
    .setFooter(message.guild.name)
    .setImage("https://media.giphy.com/media/ObPt9xSdJaF68/giphy.gif")
    return message.channel.send(embed)
    };

module.exports.help = {
  name:"serverinfo",
}