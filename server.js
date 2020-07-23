// inside a command, event listener, etc.
//circle
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
  bot.user.setActivity('with my bot friends!', {type: '' });
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

var prefix = "E/"

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
  const meanWords = [
    "your a dumb bot", 
    "I hate Mr circle",
    "<@711610924489769078> you suck",
    "boo",
    "I hate you",
    "you suck",
    "your the worst bot",
    "I don't like you",
    "dumb bot"
  ];
  if (meanWords.some(word => message.content.includes(word))) {
    if (!message.channel.type == "dm") {
    return
    }
    if (message.channel.type == "text") {
    return
    }

    message.author.send(`${message.author} humans like you have low iQs`);
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
    }, 1000 * 120);
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
var someone = (message.guild.members.random())  
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
  
 if (message.content.startsWith(`${prefix}8ball`)) {
   if (!message.content.split(' ').slice(1).join(' ')) {
return message.channel.send('say something in the 8ball stupid')
  }
   if (!message.content.endsWith(`?`)) {
     return message.channel.send('please put `?` at the end of your question.')
   }
   if (message.channel.type == "dm") {
      return
   }
    var choices = [
      "no",
      "depends",
      "perhaps, I think so",
      "yes",
      "you must be stupid to ask a question like that",
      "over my dead body",
      "maybe",
      "depends, can you breath air",
      "OH HECK NO! THAT’S MORE THAN STUPID!!!1!",
      "why not",
      "sadly yes",
      "sadly no",
      "umm",
      `even if that were possible, it would still be a no`,
      'that’s physicaly impossible',
     'idk'
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];
const ballEmbed = new Discord.MessageEmbed()
.setColor('9AF8FF')
.setTitle(`**8BALL**`)
.setDescription(`The 8ball says: **${output}**`)
.setFooter(`requested by ${message.author.username}`)
message.channel.send(ballEmbed)
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
        return message.channel.send('you need the permission: `ADMINISTRATOR` to make an announcment ')
      }
    
    var channel = message.mentions.channels.first()
    var announcelel = message.content.split(`${prefix}announce ${channel}`).slice(1).join(' ');
    
    var $L = (`\n`)
      const anEmbed = new Discord.MessageEmbed()
      .setTitle('\<:Announce:731965302971302000>`NEW ANNOUNCMENT`')
      .setDescription(announcelel)
      .setColor('49328')
      channel.send(anEmbed)
}
}
       )



bot.on('message', message => {   
if (message.content === 'propro') {
  message.delete()
bot.user.setAvatar('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FF0826EC9-3966-4B08-899B-3DC9653F517D.png?v=1595110044169');
}}
)
bot.on('message', message => {
if (message.content.startsWith(`${prefix}ban`)) {
  
 const user = message.mentions.users.first();
  if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send('you don’t have those perms, you need to have the `KICK_MEMBERS` and `BAN_MEMBERS` permissions')
  let reason = message.content.split(`${prefix}ban ${user}`).slice(1).join(' ');
  if(reason === undefined) reason = ''
  if(user.id === message.author.id) return message.channel.send ('are you crazy? you cannot ban yourself bruh')
message.guild.members.ban(user)
  const channel = bot.channels.cache.get('728762042974076960');
  const exampleEmbedlol = new Discord.MessageEmbed()
      .setColor("#FF5541")
  .setTitle("he/she got banned")
      .setAuthor("from: Think bot")
  .addField('banned for:',reason)
  .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F3699BA8D-4C6F-493A-85DB-547F84B7C1F6.gif?v=1593739244463',)
  .setFooter(`requested by ${message.author.username}`)
message.channel.send(exampleEmbedlol)
  channel.send(exampleEmbedlol)
  
}
})
bot.on('message', message => {
  if (message.content.startsWith(`${prefix}serversCircle`)) {
    const statusEmbed = new Discord.MessageEmbed()
    .setTitle('bot stats')
  message.channel.send(`**Mr Circle** server count: **${bot.guilds.cache.size}** servers! `);
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
  const totaldnd = fetchedMembers.filter(member => member.presence.status === 'dnd');
  const totalbot = fetchedMembers.filter(member => bot.user.presence.status === 'online');
  const all = fetchedMembers
  
  
    
    const statusEmbed = new Discord.MessageEmbed()
      .setColor('303136')
      .setTimestamp()
      .setTitle(`**STATS**`)
    .setDescription(`\<:Idle:729453479919353867>IDLE: **${totalidle.size}** \n\<:Offline:729453722500857947>OFFLINE: **${totalOffline.size}** \n\<:Online:729453404375613462>ONLINE: **${totalOnline.size}** \n\<:Donotdisturb:729453626421936190> DON'T DISTURB: **${totaldnd.size}** \n\<:check:719733159079575710> ALL: **${all.size}** `)
    message.channel.send(statusEmbed)
})
}
}
)
bot.on("message", message => {
if (message.content.startsWith(`${prefix}channel`)) {
  const name = message.content.split('channel').slice(1).join(' ')
  const type = message.content.split(`${type}`).slice(1).join(' ')
message.guild.channels.create(`${name}`, { type: `${type}`,  reason: 'New channel added for fun!' });
}
})
bot.on("message", message => {
if (message.content.startsWith(`${prefix}avatar`)) {
  const avaEmbed = new Discord.MessageEmbed()
  .setTitle('this is your ava')
.setImage
  message.channel.send(avaEmbed)
}
})
  





  bot.on("message", message => {
if (message.content.startsWith(`${prefix}nuking`)) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) {return message.channel.send("you do not have permissons")}
        let clearchannel = message.channel.mentions.first()
        message.clearAll();
  
}})
  
bot.on("message", message => {
if (message.content.startsWith(`${prefix}userProfile`)) {
  const member = message.mentions.members.first() 
  const user = message.mentions.members.first() 
const picture = member.user.displayAvatarURL()
if (member.user.bot) {
return
  }
  if (member.user.bot) {
return
  }
  const picEmbed = new Discord.MessageEmbed()
  .setColor('303136')
  .setTitle(`${member.user.username}`, 'card', true)
  .setThumbnail(picture)
  .setDescription(`NAME:${member.user.tag} \nSTATUS: ${member.presence.status} \nBOT: ${member.user.bot}`)
  message.channel.send(picEmbed)
}
})
bot.on("message", message => {
if (message.content.startsWith(`${prefix}botProfile`)) {
  const member = message.mentions.members.first() 
  
  const user = message.mentions.members.first() 
const picture = member.user.displayAvatarURL()
if (!member.user.bot) {
return
  }
  if (!member.user.bot) {
return
  }
  const picEmbed = new Discord.MessageEmbed()
  .setColor('303136')
  .setTitle(`${member.user.username}`, 'card', true)
  .setThumbnail(picture)
  .setDescription(`NAME:${member.user.tag} \nSTATUS: ${member.presence.status} \nBOT: ${member.user.bot}`)
  message.channel.send(picEmbed)
}
})
bot.on("message", message => {
if (message.content.startsWith(`${prefix}pinned`)) {
 const pin = message.channel.messages.fetchPinned();
}
})

bot.on('messageDelete', async message => {
	if (message.content.startsWith(`${prefix}lead`)) {
 var high = message.guildMember.roles.highest;
    message.channel.send(high)
  }
})



bot.on("message", message => {
const swearWords1 = ["dammit", "damn", "fuck", "nigga", "9202993$329"]
  if (swearWords1.some(word => message.content.includes(word))) {
    message.delete()
    message.member.send(
      `${message.author},bruh watch the profanity or... get the hammer \<:HAMMERTIME:721185435573026816>`
)}
}
)
bot.on("message", message => {
const swearWords2 = ["19202993$329"]

  if (swearWords2.some(word => message.content.includes(word))) {
    message.channel.send('ok')
  }
}
)
bot.on("message", message => {
   if (message.content.startsWith(`${prefix}serverInfo`)) {
    const choices = [
'\<:Sweat:735651779152314376>',
'\<:Eyes:735650818983985222>',
'\<:Blushing:735650993731272735>',
'\<:Lolz:735651656817049701>',
'\<:Happy:735650561952710718>'
    ]
  var output1 = choices[Math.floor(Math.random() * choices.length)]
	const infoEmbed = new Discord.MessageEmbed()
     
     .setTitle(`SERVER INFO`)
  .setColor('363940')
  .setDescription(` NAME: **${message.guild.name}** \n  CHANNELS: **${message.guild.channels.cache.size}** \n  SERVER ID: **${message.guild.id}** \n ${output1} EMOJIS: **${message.guild.emojis.cache.size}** \n REGION: **${message.guild.region}** \n  ROLES: **${message.guild.roles.cache.size}** \n Owner: **${message.guild.owner.tag}**`)
  message.channel.send(infoEmbed)
     message.channel.send('')
}
   }
)

bot.on("message", message => {
   if (message.content.startsWith(`${prefix}mail`)) {
     var user = message.mentions.members.first()
     var hm = message.content.split(`${user}`).slice(1).join(" ")
     const mailEmbed = new Discord.MessageEmbed()
     .setTitle(`**YOU GOT MAIL!**`)
     .setColor('FE615E')
     .setDescription('Someone delivered mail to you :)')
     .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F278C5B76-AE6C-4317-BAB4-F6125F717FF7.gif?v=1595260274009')
     .addField(`FROM **${message.author.tag}:**`, `\n \n ${hm}`, true)
     .setTimestamp()
     .setFooter('this is an email',`https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FE3479A13-7EC9-4D6A-A767-61897E20FA9F.png?v=1595260810009`)
     user.send(mailEmbed)
   }
}) 

bot.on('message', message => {
	if (message.content.startsWith(`${prefix}coolSize`)) {
    let user = message.mentions.members.first()
    if (user === undefined) {
      
      user = message.author
    }
    if (user === `${bot}`) {
return message.channel.send('I don`t need a machine to tell how cool I am, I`m LEGENDARY')
    }
    
    const clel = [
'you aren`t even cool at all'
    ]
    const c1 = [
'I`m not mad, I`m just dissapointed'
    ]
    const c2 = [
      'that`s kinda average, but it`s something we can work on'
]
    const c3 = [
'That`s pretty cool!'
    ]
    const c4 = [
      'WOW YOU ARE MORE THAN JUST COOL. YOU ARE SUPER EPIC'
]
  const choices = [
    `⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ 0% \n ${clel}`,
    `🟦⬛⬛⬛⬛⬛⬛⬛⬛⬛ 10% \n ${c1}`,
    `🟦🟦⬛⬛⬛⬛⬛⬛⬛⬛ 20% \n ${c1}`,
    `🟦🟦🟦⬛⬛⬛⬛⬛⬛⬛ 30% \n ${c1}`,
    `🟦🟦🟦🟦⬛⬛⬛⬛⬛⬛ 40% \n ${c2}`,
    `🟦🟦🟦🟦🟦⬛⬛⬛⬛⬛ 50% \n ${c2}`,
    `🟦🟦🟦🟦🟦🟦⬛⬛⬛⬛ 60% \n ${c2}`,
    `🟦🟦🟦🟦🟦🟦🟦⬛⬛⬛ 70% \n ${c3}`,
    `🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛ 80% \n ${c3}`,
    `🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛ 90% \n ${c3}`,
    `🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 100% \n ${c4}`,

    ]
  
  var square = choices[Math.floor(Math.random() * choices.length)]
  const coolEmbed = new Discord.MessageEmbed()
  .setTitle('**COOL POWER MACHINE**')
  .setDescription(`this is how cool ${user} is:`)
  .addField('cool power machine results:',`${square}`, true)
  
  message.channel.send(coolEmbed)
  }
})

bot.on('message', message => {
	if (message.content.startsWith(`${prefix}channelDelete`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    if(!args[0]) return message.channel.send('but how many')
    if(parseInt(args[0]) > 99) return message.reply('too many')
   message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
message.channel.send(`cleared ${args[0]}`)
   })
  }
})


bot.on('message', message => {
	if (message.content.startsWith(`${prefix}messageReact`)) {
    var emote = message.content.split(`messageReact`).slice(1).join(" ")
 message.channel.send(`ayo`).then(sentMessage => {
	sentMessage.react(`${emote}`)
}
)}
})
bot.on('message', message => {
	if (message.content.startsWith(`${prefix}pinme`)) {
  const pinning = (message.content.split(`pinme`).slice(1).join(" ")) 
if (!pinning) {
return message.channel.send('what?')
}
    if (pinning) {
 message.delete()
}
    if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {
return message.channel.send('you need the permission(s) `MANAGE_MESSAGES` to use this command')
    }
    message.channel.send(`From: ${message.author.tag} \n\n${pinning}`).then
    (sentMessage => {
  sentMessage.pin()
    })
  }
})
bot.login(TOKEN)