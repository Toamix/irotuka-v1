const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.mentions.users.size === 0) return message.channel.send("Tu dois mentionner deux personnes !")
    let user1 = args[0];
    let user2 = args[1];
    if (!args[0] || args[0 == "null"]) return message.reply("Tu dois mentionner deux personnes !");
    if (!args[1] || args[1 == "null"]) return message.reply("Tu dois mentionner deux personnes !");
    let number = Math.floor(Math.random() * 99) + 1;
    let loveplusembed = new Discord.MessageEmbed()
    .setTitle("Love")
    .setDescription(`**Test de compatibilité amoureuse**`)
    .addField("Membres", `${user1} + ${user2}`)
    .addField("Resultat", `${number}% :two_hearts:`)
    .setColor(0xff7300)
    .setImage("https://media.giphy.com/media/5zTAf12zjtStW/giphy.gif")
    if (number > 90) return message.channel.send(loveplusembed), message.delete().catch();

    let loveembed = new Discord.MessageEmbed()
    .setTitle("Love")
    .setDescription(`**Test de compatibilité amoureuse**`)
    .addField("Membres", `${user1} + ${user2}`)
    .addField("Resultat", `${number}% :heart:`)
    .setColor(0xff7300)
    .setImage("https://media.giphy.com/media/5zTAf12zjtStW/giphy.gif")
    if (number < 90) return message.channel.send(loveembed), message.delete().catch();
    
}

module.exports.help = {
    name:"love",
  }