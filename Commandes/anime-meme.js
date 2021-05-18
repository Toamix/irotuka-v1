const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = (client, message, args) => {
    randomPuppy('animememes')
    .then(url => {
        const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor(0xff7300)
        return message.channel.send(embed);
   })
   }

module.exports.help = {
    name:"anime-meme",
}