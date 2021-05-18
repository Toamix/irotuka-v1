const Discord = require('discord.js');
const superagent = require('superagent');
const talkedRecently = new Set();

module.exports.run = async (client, message) => {
    if (talkedRecently.has(message.author.id)) {
        let embed2 = new Discord.MessageEmbed()
        .setColor(0xff7300)
        .setDescription(`**Merci d'attendre 5 secondes !**`)
        return message.channel.send(embed2);
} else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
}
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/waifu");
    
    const embed = new Discord.MessageEmbed()
    .setColor(0xff7300)
    .setImage(body.url) 
    return message.channel.send(embed)
};

module.exports.help = {
    name:"waifu",
  }