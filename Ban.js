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
   
const