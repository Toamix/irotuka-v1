const Discord = require('discord.js');

module.exports.run = async (client, message, args, level) => {
  try {    
    let member = message.mentions.members.first();
    require('request')({url: 'https://nekos.life/api/kiss', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' **a embrassé** ' + member.user.username)
        .setColor(0xff7300)
        .setDescription(`**L'amour fou entre ces deux tourtereaux !**`)
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply(`Tu dois mentionner quelqu'un !`);
    });
    
  } catch (err) {
    message.channel.send('Erreur !\n' + err).catch();
  }
};

module.exports.help = {
  name:"kiss",
}