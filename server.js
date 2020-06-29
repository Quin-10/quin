// inside a command, event listener, etc.

var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
//the discord login bot
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.once("ready", () => {
  console.log("ready!");
  bot.user.setActivity("lol 2020 is a bad year lol");
});
//hello command
bot.on("message", message => {
  if (message.content === "Hello") {
    if (message.channel.type == "dm") {
      return;
    }
    message.channel.send("it was fun while it lasted :[");
  }
});
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}emotes`)) {
    message.channel.send(
      "<:SURPRISED:719733158509281370><:LIKE:719733158332858499><:EYES:719733159608057866><:happy:719733157099733056><:check:719733159079575710><:K_:719733159297679400>these are my favorite emotes lol"
    );
  }
});
var prefix = "E/";
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}nitro`)) {
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
  if (message.content.startsWith(`${prefix}delete`)) {
    message.delete();
  }
});
bot.on("message", message => {
  if (message.content === "E/") {
    message.channel.send(
      `${message.author}  umm I hate to burst your bubble but... there's a command missing`
    );
  }
});

bot.on("message", message => {
  if (message.content.startsWith(`${prefix}dm`)) {
    message.member.send("there, I gave you a direct message, happy now?");
  }
});
bot.on("message", message => {
  const swearWords = ["dammit", "damn", "fuck", "nigga", "9202993$329"];
  if (swearWords.some(word => message.content.includes(word))) {
    message.delete()
    message.member.send(
      `${message.author},bruh watch the profanity or... get the hammer \<:HAMMERTIME:721185435573026816>`
)
  }
})
bot.on("message", message => {
  const meanWords = [
    "your a dumb bot", 
    "I hate mr circle",
    "<@711610924489769078> you suck",
    "boo"
  ];
  if (meanWords.some(word => message.content.includes(word))) {
    if (message.channel.type == "dm") {
      message.member.send("that command cannot be dmed");
    }

    message.member.send(`${message.author} humans like you have low iQs`);
  }
});
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}roast`)) {
    message.channel.send(
      `you suck\n \n this is why your gf dumped you, oh wait, you don't have one lol\n \n listen kid, why are you talking to a bot I'm not a real person, do you have not a social life??`
    );
  }
});
bot.on("message", message => {
  

bot.on("message", message => {
  if (message.content.startsWith(`${prefix}yate`)) {
    
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#FF5541")
      .setImage("https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F81C8E5B9-D7EF-4C56-8F95-5B7174AC0923.gif?v=1593336009258")
      .setTimestamp()
      .setTitle("Favorite colors")
      .setAuthor("mr circle")
      .setThumbnail("https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FCA5E5A4B-9855-44FE-8391-124EF36E8850.png?v=1592968948396")
      


    message.channel.send(exampleEmbed).then(sentMessage => {
      sentMessage.react("🔴");
      sentMessage.react("🟠");
      sentMessage.react("🟡");
      sentMessage.react("🟢");
      sentMessage.react("🔵");
      sentMessage.react("🟣");
      sentMessage.react("🟤");
      sentMessage.react("⚫");
      sentMessage.react("⚪");
    });
  }
});
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}lol`)) {
    message.channel
      .send("lol")
      .then(message => {
        message.author.edit("hello");
      })
      .then(message => {
        message.react("🟡");
      });
  }
});
bot.on("message", message => {
  const infoWords = ["@yahoo.com", "@gmail.com"];
  if (infoWords.some(word => message.content.includes(word))) {
    message.delete();
    message.member.send("are you trying to leak your account?");
   
  }
})
bot.on("message", function(message) {
  // Now, you can use the message variable inside
  if (message.content === "E/interval") {
    var interval = setInterval(function() {
      // use the message's channel (TextChannel) to send a new message
      message.channel.send("123").catch(console.error); // add error handling here
    }, 1 * 10000);
  }
});

bot.on("message", function(message) {
  // Now, you can use the message variable inside
  if (message.content.startsWith(`${prefix}daily`)) {
    var interval = setInterval(function() {
      // use the message's channel (TextChannel) to send a new message

      message.channel.send("!d bump").catch(console.error); // add error handling here
    }, 1 * 120);
  }
});

const start = Date.now();

console.log("starting timer...");
// expected output: starting timer...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output : seconds elapsed = 2
}, 2000);
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}say`)) {
    
    
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!text) return message.reply("what do you want to say?");
    message.channel.send(`${text}, is what you wanted to say?`)
    
  }}
)
})
bot.on('message', message => {
  if (message.content.startsWith(`${prefix}someone`)) {
bot.users.get(message.guild.members.random())
    message.channel.send(``)

}
})
bot.on("message", message => {
if(message.content.startsWith(`${prefix}mine`)) {
  const Minesweeper = require('discord.js-minesweeper');
    
    const minesweeper = new Minesweeper({
      returnType: 'emoji'
    });
    var mines = minesweeper.start()
    message.channel.send(mines)
}
})
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}number`)) {
  var choices = [
    `\n [**01**]`,
`\n [**02**]`,
`\n [**03**]`,
`\n [**04**]`,
`\n [**05**]`,
`\n [**06**]`,
`\n [**07**]`,
`\n [**08**]`,
`\n [**09**]`,
`\n [**10**]`,


    ];
var output = choices[Math.floor(Math.random() * choices.length)]; 
    message.channel.send(`${message.author}${output}`);
  }
})
bot.login(TOKEN);
