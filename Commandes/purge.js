const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports.run = async (client, message, args) => {
    if(talkedRecently.has(message.author.id)) {
        return;
} else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
}
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("**Vous ne disposez pas des autorisations suffisantes pour purger les messages.**");

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("**Je n'ai pas les autorisations suffisantes pour gérer les messages.**");

  if(isNaN(args[0]))
    return message.channel.send("**Fournissez un entier s'il vous plaît.**");

  if (args[0] > 100)
    return message.channel.send("**Je ne peux pas purger plus de 100 messages.**");

  message.channel.bulkDelete(args[0]);
  message.channel.send("**" + args[0] + " messages ont étaient supprimé avec succès.**")
};

module.exports.help = {
  name:"purge",
}