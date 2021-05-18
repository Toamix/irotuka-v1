const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports.run = async (client, message, args) => {
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
    if(!args[0]) {
    let embed10 = new Discord.MessageEmbed()
      .setColor(0xff7300)
      .setDescription(`**Commande :** \`ir.8ball\`
      **Usage :** \`ir.8ball <question>\`
      **Description :** Pose une question au bot !`)
      .setTimestamp()
      .setFooter('Bot Irotuka By Toamix')
    return message.reply(embed10);
}
    let replies = [
        'Peut être.',
	    'Certainement pas.',
	    `J'espère`,
	    'Pas dans vos rêves les plus fous.',
	    'Plutôt probable.',
    	'Je pense donc',
    	`J'espère`,
    	`J'espère donc`,
    	'Jamais !',
    	'Pfft.',
    	'Putain, oui.',
    	'Absolument hors de question.',
    	`L'avenir est sombre.`,
	    'Le future est incertains.',
	    'Je préfère ne pas dire.',
    	`On s'en fout?`,
    	'Possible.',
    	'Jamais jamais jamais.',
    	'Il y a une petite chance.',
    	'Oui!',
    	'lol non.',
    	'Il y a une forte probabilité.',
    	'Quelle différence cela fait-il?',
    	`Ce n'est pas un problème`,
        `Demande à quelqu'un d'autre.`
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setTitle("Réponse à votre question :")
    .setColor(0xff7300)
    .addField("Q:", question)
    .addField("R:", replies[result])

    return message.channel.send(embed);
}

module.exports.help = {
    name:"8ball",
  }