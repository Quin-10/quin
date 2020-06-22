var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.once("ready", () => {
  console.log("ready!");
});
bot.on("message", message => {
  if (message.content === "hello") {
    message.channel.send("goodbye");
  }
});
bot.on("message", message => {
  if (message.content === "E/emotes") {
    message.channel.send(
      "<:SURPRISED:719733158509281370><:LIKE:719733158332858499><:EYES:719733159608057866><:happy:719733157099733056><:check:719733159079575710><:K_:719733159297679400>these are my favorite emotes lol"
    );
  }
});
bot.on("message", message => {
  if (message.content === "E/ran") {
    var choices = [
      "<:Diamondgem:723417011094552656> AWESOME! you got 10 points!",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Rocks:723417089465122816> awww you just got a couple of rocks, how cute (:",
      "<:Goldgem:723416863429623888> nice! you got 3 points!",
      "<:Goldgem:723416863429623888> nice! you got 3 points!",
      "<:Bomb:723417161556557834> oh no! you lost 3 points!",
      "<:Bomb:723417161556557834> oh no! you lost 3 points!",
      "<:Bomb:723417161556557834> oh no! you lost 3 points!",
      "<:Bomb:723417161556557834> oh no! you lost 3 points!",
      "<:Bomb:723417161556557834> oh no! you lost 3 points!"
    ];

    var output = choices[Math.floor(Math.random() * choices.length)];

    message.channel.send(
      ` the thing you claimed**${output}**, ${message.author}`
    );
  }
});

bot.on("message", message => {
  if (message.content === "E/call") {
    var choices = [
      "stop annoying me, <@!639971658035363840>, help meee please",
      "ahh",
      "my owner won't be happy about this",
      "go away",
      "If you wanna see something ugly, go look in the mirror...  sorry I just had to, but y'know I was joking, you look pretty... ok to me but I'm hotter",
      "this should be illegal",
      "did you know everytime you do this... you're wasting your time",
      "you should really be more careful about avoiding my hammer hitting your face!",
      "hey there's a new thing that you can get. it's called a life",
      "lol watch this video it's very funny! https://youtu.be/wFmYHGJf9KI ",
      "Ima smack u",
      "do you hate tik tok? because I hate it, it's so cringe",
      "`OH FRICK BELLE DEPHINE IS BACK`",
      "this is my owner https://www.youtube.com/c/Quin10Animates"
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];

    message.channel.send(`mr circle says **${output}**!`);
  }
});
bot.on("message", message => {
  if (message.content === "sneeze") {
    message.channel.send("`uhm corona!`");
  }
});
bot.on("message", message => {
  if (message.content === "E/nitro") {
    var choices = [
      "nitro is too expensive",
      "10 dollars, just to make gif emojis!?",
      "I'm sueing discord",
      "I once had 3 invites on a server because that was the requirement for nitro, yet the owner of the server, didn't give me it"
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];

    message.channel.send(`${message.author}**${output}**!`);
  }
});
bot.on("message", message => {
  if (message.content === "E/delete") {
    message.delete();
  }
});
bot.on("message", message => {
  if (message.content === "E/") {
    message.channel.send(
      `${message.author} umm I hate to burst your bubble but... there's a command missing`
    );
  }
});

bot.on("message", message => {
  if (message.content === "E/dm") {
    message.member.send(
      "there, I gave you a direct message, happy now?") 
  }
});
bot.on('message', message => {
  
const swearWords = ['Ass', 'damn']
  if(swearWords.some(word => message.content.includes(word)) ) {
message.delete()

  message.member.send('That word is not allowed! wash your filthy mouth ')
  
}
})
bot.login(TOKEN);
