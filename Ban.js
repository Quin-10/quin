const discord = require("discord.js")
module.exports = {
name: "ban lol",
  category: "moderation",
  description: " bannig someone so XD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) {
return message.channel.send(`**${message.author}**, You do not have the permission to ban a member.`)
}
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
return message.channel.send(`**${message.author}**, I am do not have perms to bam someone`)
  }
   
const target = message.mentions.members.first();
    if(!target) {
return message.channel.send(`${message.author.username} please mention the person who you want to ban.`)
    }

if(target.id === message.author.id) {
return message.channel.send(`${message.author} are you like, dumb(jk) but you cannot ban yourself `)
}
    let embed = discord.MessageEmbed()
    .setTitle("Action")
  