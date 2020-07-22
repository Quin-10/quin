const Discord = require("discord.js")
module.exports.run = async(bot,message,args) => {
  bot.on("message", message => {
  if (message.content === "bing") {
    message.channel.send('bong')
}
  })
}


