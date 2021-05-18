const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let avatar = client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if(!avatar) avatar = ""

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Commande List :`, avatar)
    .setColor(message.member.displayHexColor)
    .setDescription('Voici le prefix du bot irotuka : `ir.`')
    .addField('🥢 - **All Anime Manga**', '`neko`, `nekogif`, `anime-meme`, `fgirl`, `moe`, `waifu`, `naruto`, `sao`, `jojo`, `konosuba`, `kaguya-sama`, `rezero`, `toradora`', false)
    .addField('🎲  - **Commandes Fun :**', '`kiss`, `love`, `baka`, `frapper`, `calin`, `manger`, `bvn`, `gg`, `8ball`, `smug`', false)
    .addField('🎈 - **Utilitaires :**', '`help`, `serverinfo`, `userinfo`, `say`, `avatar`', false)
    .addField('👮  - **Moderation :**', '`purge`, `ban`, `kick`', false)
    .setTimestamp()
    .setFooter('Bot Irotuka By Toamix', avatar)
    message.channel.send(embed);
        
};

module.exports.help = {
    name: "help",
  }