const Discord = require('discord.js');

module.exports.run = async (bot, message, args, client) => { 
    const sondage = args.join(" ");
    if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("⚠️ **Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.**");
    if(!sondage) {
    let embederreur = new Discord.MessageEmbed()
    .setColor(0xff7300)
    .setDescription(`**Commande :** \`ir.sondage\`
    **Usage :** \`ir.sondage <question>\`
    **Désactiver la commande :** \`ir.sondage false\`
    **Description :** Poser une question sous forme de sondage à votre communauté !`)
    .setTimestamp()
    .setFooter('Bot Irotuka By Toamix')
    return message.channel.send(embederreurembederreur)
}

    if(message.member.hasPermission("ADMINISTRATOR")) {
    message.delete().catch(O_o=>{}); 
    const embed = new Discord.MessageEmbed()
        .setTitle("Question de " + message.author.username)
        .setDescription(sondage)
        .setColor(0xff7300)
        message.channel.send({embed}).then(async (m) => {
            await m.react("👍")
            await m.react("👎")
            })
    
}};

module.exports.help = {
    name:"sondage",
  }