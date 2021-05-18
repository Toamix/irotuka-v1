const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
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
    randomPuppy('swordartonline')
    .then(url => {
        const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor(0xff7300)
        return message.channel.send(embed);
   })
};


module.exports.help = {
    name:"sao",
  }