const {MessageEmbed} = require('discord.js')
const ms = require ('ms')
module.exports={
name: 'giveaway',
  description: 'create a giveaway',
  usage: '<time> <channel> <prize>',
  category: 'fun',
  run: async(bot,message,args)=>{
if(!args[0]) return message.channel.send('you did not say the time')
    if(!args[0].endsWith("d")&&!args[0]
  