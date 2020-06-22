const discord = require("discord.js")
module.exports = {
name: "ban lol",
  category: "moderation",
  description: " bannig someone so XD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
if(message.member.hasPermission("BAN_MEMBERS")) {
return message.channel.send(`**${message.author.username}**, You do not have the permission to ban a member. only the ser `)