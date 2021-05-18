# BOT IROTUKA V1
Bonjour à tous, après la sortie du irotuka v2, je vous propose enfin le repositories du bot irotuka v2.
Il est important de le rappeler mais le bot a été fait il y a assez longtemps, rien ne garantit qu'il fonctionne toujours, j'ai patché rapidement les erreurs basiques, et j'ai supprimé toutes les commandes qui comportait une database.

# INSTALLATION DU BOT

- Module utilisé : `discord.js` `fs` `random-puppy` `superagent`.
- API utilisé : https://nekos.life/api/v2/endpoints (attention au nsfw sur l'api lors de la génération des images).
- Un launch.json a été ajouté pour facilité le lancement du bot avec F5.

# CONFIGURATION

```
const config = {
    "TOKEN" : "", // <- Votre token
    "PREFIX" : "", // <- Votre prefix
  }
module.exports = config;
```
