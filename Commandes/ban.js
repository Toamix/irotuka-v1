const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let embedmember = new Discord.MessageEmbed()
    .setDescription(":x: **Merci de mentionner une personne !**")
    .setColor(0xff7300)
    
    let embedyouself = new Discord.MessageEmbed()
    .setDescription(":x: **Vous ne pouvez pas vous mentionnez !**")
    .setColor(0xff7300)
    

    if(!message.member.hasPermission("BAN_MEMBERS")) {
        let error_permissions = new Discord.MessageEmbed()
        .setDescription(":x: **Vous ne disposez pas les permissions nécessaires pour bannir un utilisateur !**")
        .setColor(0xff7300)
        return message.channel.send(error_permissions)
};

    if(message.member.hasPermission("BAN_MEMBERS")) {
        let member = message.guild.member(message.mentions.members.first()) || message.guild.members.cache.get(args[0]);
        let raison = args.slice(1).join(' ');
        let raisonfix = raison.substr(0, 600);
        if(!raisonfix) raisonfix = "Pas de raison fournie"
        if(!member) return message.channel.send(embedmember)
        if(member.user === message.author) return message.channel.send(embedyouself)

        member.ban().then(member => {
           let embed = new Discord.MessageEmbed()
           .setDescription(`L'utilisateur **${member.user.tag}** a été ban du serveur pour **${raisonfix}**.`)
           .setColor(0xff7300)
       return message.channel.send(embed);
    })
    }
    message.delete();
}


module.exports.help = {
    name:"ban",
  }