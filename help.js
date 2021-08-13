message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
      },
      title: "Jancube alert",
      description: "Bot para alertas de sistema.",
      fields: [{
          name: "codigo basico.",
          value: "Pueden tener diferentes campos con pequeñas descripciones."
        },
        {
          name: "Campo2",
          value: "Puedes poner [Enlaces web](https://github.com/CraterMaik) dentro del embed."
        },
        {
          name: "Campo3",
          value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "github.com/CraterMaik"
      }
    }
});