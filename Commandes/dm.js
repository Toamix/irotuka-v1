const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.get("770795546817462297")) {
        let permissionnotfound = new Discord.MessageEmbed()
        .setColor(0xff7300)
        .setDescription(`**Vous n'avez pas la permission d'effectuer cette commande ou vous n'êtes pas administrateur sur le serveur irotuka**`)
        .setTimestamp()
    return message.channel.send(permissionnotfound)
}
    let member = message.guild.member(message.mentions.members.first())
    if(!member) {
        let idnotfound = new Discord.MessageEmbed()
        .setColor(0xff7300)
        .setDescription(`**Vous devez mentionner la personne**`)
        .setTimestamp()
    return message.channel.send(idnotfound)
    }
    let messageprive = args.slice(1).join(' ');
    if(!messageprive) { 
        let textenotfound = new Discord.MessageEmbed()
        .setColor(0xff7300)
        .setDescription(`**Vous devez mettre un texte, voici des exemples de texte :**
        \`\`\`Bonjour @test, votre candidature a été accepté, je vous invite donc à nous communiquer les horaires en ouvrant un ticket dans #support !\`\`\`
        \`\`\`Bonjour @test, votre candidature a été refusé, malheureusement vous ne respectez pas nos conditions de recrutement. Je vous invite donc à repostuler lorsque vous respecterez les conditions de recrutement.\`\`\``)
        .setTimestamp()
    return message.channel.send(textenotfound)
}
    let dmmessage = new Discord.MessageEmbed()
    .setColor(0xff7300)
    .setTitle(`<:irotukanotif:778608614201622559> Vous avez reçu un message privé de l'administration de irotuka !`)
    .setDescription(messageprive)
    .setTimestamp()
    member.send(dmmessage).catch(err => message.channel.send("**Impossible pour moi d'envoyer un mp !**")) 
};



module.exports.help = {
    name:"dm",
}