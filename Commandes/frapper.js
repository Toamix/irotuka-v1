const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args, tools) => {
    let member = message.mentions.members.first();
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    if (member) { const embed = new Discord.MessageEmbed()
    .setColor(0xff7300)
    .setTitle(`**${message.author.username}** viens de frapper **${member.user.username}** !`)
    .setImage(body.url) 
    message.channel.send(embed)
} else message.reply(`Tu dois mentionner quelqu'un !`);
};


module.exports.help = {
    name:"frapper",
  }