const {MessageEmbed2} = require('discord.js')
const ms = require('ms');
module.exports={
name: 'timer',
  description:'create your timer',
  usage: '<time> <channel> <prize>',
  category: 'fun',
  run: async(bot,message,args)=>{
if(!args[0]) return message.channel.send(`you did not specify your time`)
if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(`You did not use `)
    
  }
}