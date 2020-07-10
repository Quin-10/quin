bot.on("message", message => {
if (message.content.startsWith(`${prefix}safeOn`)) {
const {Message3Embed} = require('discord.js')
const ms = require ('ms')
module.exports={
name: 'giveaway',
  description: 'create a giveaway',
  usage: '<time> <channel> <prize>',
  category: 'fun',
  run: async(bot,message,args)=>{
if(!args[0]) return message.channel.send('you did not say the time')
    if(!args[0].endsWith("d")&&!args[0].endsWith("m")) return('you did not use the correct formatting')
    if(isNaN(args[0][0])) return message.channel.send('that is not a number')
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send('I can’t find that channel')
    let prize = args.slice(2).join("")
    if(!prize) return message.channel.send('you did not say the prize!')
  }
}
}
})

  