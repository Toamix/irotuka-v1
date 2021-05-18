const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let member = message.mentions.members.first();
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hug");
    
    if (member) { const embed = new Discord.MessageEmbed()
    .setColor(0xff7300)
    .setTitle(`**${message.author.username}** fait un calin à **${member.user.username}** !`)
    .setImage(body.url) 
    message.channel.send({embed})
} else message.reply(`Tu dois mentionner quelqu'un !`);
};



module.exports.help = {
    name:"calin",
  }