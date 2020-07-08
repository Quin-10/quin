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
    return  message.member.send("that command cannot be dmed");
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
  if (message.content.startsWith(`${prefix}colorReact`)) {
    
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#FF5541")
      .setImage("https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F81C8E5B9-D7EF-4C56-8F95-5B7174AC0923.gif?v=1593336009258")
      .setTimestamp()
      .setTitle("Favorite colors")
      .setAuthor("mr circle")
      .setDescription("please chose your favorite color")
    .addField('red = 🔴', true)
    .addField('orange = 🟠', true)
    .addField('yellow = 🟡', true)
    .addField('green = 🟢', true)
    .addField('blue = 🔵', true)
    .addField('purple = 🟣', true)
    .addField('brown = 🟤', true)
    .addField('black = ⚫', true)
    .addField('white = ⚪', true)
      .setThumbnail("https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FCA5E5A4B-9855-44FE-8391-124EF36E8850.png?v=1592968948396")
      .setFooter('<:Diamondgemtoken:723417011094552656>')
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
    return
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
    }, 1000 * 1);
  }
});


  // expected output : seconds elapsed = 2
  bot.on("message", message => {
if(message.content.startsWith(`${prefix}say`)) {
  var tex = message.content.split(' ').slice(1).join(' ');
  if(!tex) return message.reply("what do you want to say?");
   message.channel.send(tex);
 }})

bot.on('message', message => {
  if(message.content.startsWith(`${prefix}someboy`)) {
const someone = (message.guild.members.random())  
  message.channel.send(someone)
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
  if (message.content.startsWith(`${prefix}slots`)) {
  var choices = [
    ` [**01**]`,
` [**02**]`,
` [**03**]`,
` [**04**]`,
` [**05**]`,
` [**06**]`,
` [**07**]`,
` [**08**]`,
` [**09**]`,
` [**10**]`,
    ]
    var output3 = choices[Math.floor(Math.random() * choices.length)]; 
  var choices = [
    ` [**05**]`,
` [**06**]`,
` [**03**]`,
` [**09**]`,
` [**07**]`,
` [**10**]`,
` [**01**]`,
` [**08**]`,
` [**10**]`,
` [**02**]`,


    ];
var output2 = choices[Math.floor(Math.random() * choices.length)];     
    var choices = [
    ` [**02**]`,
` [**10**]`,
` [**06**]`,
` [**07**]`,
` [**05**]`,
` [**01**]`,
` [**09**]`,
` [**04**]`,
` [**03**]`,
` [**08**]`,


    ];
var output = choices[Math.floor(Math.random() * choices.length)]; 
    
    message.channel.send(`${message.author} ooh lets see what you got\n🟦🟦🟦🟦\n🟦${output3}🟦\n🟦${output2}🟦\n🟦${output}🟦\n🟦🟦🟦🟦`);
  }
})
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}fortune`)) {
    var choices = [
      "2020 may be hard but if you come this far you’ll get passed that part",
      "If you ever are hated for no reason, just remember: only less than 1% of the world hates you. there are lots of opportunity",
      "there will probably be a bad thing that occurs every month of 2020 so be prepeard for the worst",
      "don't be afraid to try new things",
      "If someone's hates your opinion, they're probably not good people (unless if your opinion has anything to do with something bad and liking that bad thing)",
      "most of the things that you learn in school are probably useless but don't wory, a lot of people felt that way too",
      "if your a man and your reading this quote, if a woman pushes you and you feel offended and you just want to push her back, go for it, stand for your gender!",
      "not everyone has a good day",
      "anyone who dislike bombs someone's video, don't deserve there accounts",
      "at least `1` person can relate to you what your going through",
      "don't be toxic",
      "the previous fortune cookie is true",
      "everyone needs there day :)",
      "we all tend to be squidward someday",
      "at least one person loves you",
      '777 is lucky' 
     
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];

    message.channel.send(`${message.author}, here is your fortune: **${output}**!`);
  }
});
bot.on('message', message => {
  if (message.content.startsWith(`${prefix}time`)) {
    const exampleEmbed1 = new Discord.MessageEmbed()
.setTimestamp()

.setFooter('here is the time')
message.channel.send(exampleEmbed1)
  }
})
bot.on('message', message => {
  if (message.content.startsWith(`${prefix}announce`)) {
      if (!message.member.hasPermission(['ADMINISTRATOR'])) {
        return
      }
    var announce = message.content.split(' ').slice(1).join(' ');
    let channel = message.mentions.channels.first()
channel.send(announce)
  }
})
bot.on('message', message => {   
if (message.content.startsWith(`${prefix}avatar10292810289201ggok`)) {
  message.delete()
bot.user.setAvatar('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F5857818D-54B3-443D-BEED-5E13FE31B038.jpeg?v=1593643313203')
}}
)
bot.on('message', message => {
if (message.content.startsWith(`${prefix}ban`)) {
  
 const user = message.mentions.users.first();
  if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send('you don’t have those perms, you need to have the `KICK_MEMBERS` and `BAN_MEMBERS` permissions')
  let reason = message.content.split(' ').slice(1).join(' ');
  if(reason === undefined) reason = ''
  if(user.id === message.author.id) return message.channel.send ('are you crazy? you cannot ban yourself bruh')
message.guild.members.ban(user)
  const channel = bot.channels.cache.get('728762042974076960');
  const exampleEmbedlol = new Discord.MessageEmbed()
      .setColor("#FF5541")
  .setTitle("he/she got banned")
      .setAuthor("from: Mr circle")
  .addField('banned for:',reason)
  .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F3699BA8D-4C6F-493A-85DB-547F84B7C1F6.gif?v=1593739244463',)
  .setFooter(`requested by ${message.author.username}`)
message.channel.send(exampleEmbedlol)
  channel.send(exampleEmbedlol)
}
})
bot.on('message', message => {
  if (message.content.startsWith(`${prefix}stats1`)) {
  message.channel.send(`**Mr circle** server count: ${bot.guilds.cache.size} servers!`);
	}
})
bot.on('message', message => {
if (message.content.startsWith(`${prefix}GiveRole`)) {
const role = message.mentions.roles.first()
const member = message.mentions.members.first();
member.roles.add(role).then
  message.channel.send('ok I gave the role to the user you mentioned')
}
})
bot.on('message', message => {
if (message.content.startsWith(`${prefix}memberStats`)) {
message.guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
  const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline');
  const totalidle = fetchedMembers.filter(member => member.presence.status === 'idle');
  const totaldnd = fetchedMembers.filter(member => member.presence.status === 'Do Not Disrurb');
  const all = fetchedMembers
  
  
    
    const statusEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setTitle(`**STATS**`)
    .setDescription(`\<:Idle:729453479919353867>IDLE: **${totalidle.size}** \n\<:Offline:729453722500857947>OFFLINE: **${totalOffline.size}** \n\<:Online:729453404375613462>ONLINE: **${totalOnline.size}** \n\<:check:719733159079575710> ALL: **${all.size}**`)
    message.channel.send(statusEmbed)
})
}}
)
bot.on("message", message => {
if (message.content.startsWith(`${prefix}channel`)) {
message.guild.channels.create('new-channel', { type: 'text',  reason: 'New channel added for fun!' });
}
})
bot.on("message", message => {
if (message.content.startsWith(`${prefix}avatar`)) {
  const avaEmbed = new Discord.MessageEmbed()
  .setTitle('this is your ava')
.setImage(bot.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  message.channel.send(avaEmbed)
}
})
  bot.on('message', message => {
if (message.content = `Hello`) {
message.channel.send('Hi')
}
})
bot.on('message', message => {
if (message.content.startsWith(`${prefix}oof`)) {
  message.channel.send('what channel do you want the message sent to?').then
let filter = m => m.author.id === message.author.id;
let q1 = message.channel.createMessageCollector( { time: 15000 }).then


  q1.on("collect", async (message, collect) => {
        let channel = message.mentions.channels.first()
        message.channel.send('what do you want me to send in that channel?')
    q1.stop()
  
    let q2 = message.channel.createMessageCollector( { time: 15000 });
  q2.on("collect", async (message, collect) => {
    channel.send(message.content)
     message.react ('📩')
    message.channel.send(`look in ${channel}`)
    q2.stop()
  })
  })
}
})
bot.on('message', message => {
if (message.content = 'E/ok') {
const filter = m => m.content.includes('discord') &&  m.author.id === message.author.id;
const collector = message.channel.createMessageCollector(filter, { time: 15000 });
  const collector1 = message.channel.createMessageCollector( { time: 15000 });
collector.on('collect', m => {
	
  
collector1.on('collect', m => {
	
  
  collector.on('end', collected => {
	
  
    collector1.on('end', collected => {
	
    })
  })
})
})
}
})
bot.on('message', message => {
if (message.content.startsWith(`${prefix}discord`)) {

  message.channel.send('ok lol')
}
}
)
bot.on('message', message => {
if (message.content.startsWith(`${prefix}discord`)) {
  const command = (`Hello`)
if (!bot.commands.has(command)) return;

try {
bot.commands.get(Hello).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
}})
bot.login(TOKEN); 
