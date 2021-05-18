const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const sayMessage = args.join(" ");
    if(!sayMessage)
    return message.channel.send("Erreur de syntaxe, **ir.say <message>**")
    
    if(message.author.id === "696825029945720913") return
    message.delete()
    const embed = new Discord.MessageEmbed()
        .setTitle("Message de " + message.author.username)
        .setDescription(sayMessage)
        .setColor(0xff7300)
        return message.channel.send(embed);

};

module.exports.help = {
    name:"say",
  }