// inside a command, event listener, etc.

var prefix = "E/" || "e/";
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
});
//hello command
bot.on("message", message => {
  if (message.content === "Hello") {
    if (!message.channel.type === "dm") {
      return;
    }
    if (message.channel.type === "text") {
      return;
    }
    message.member.send("it was fun while it lasted :[");
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `emotes`) {
    message.channel.send(
      "<:SURPRISED:719733158509281370><:LIKE:719733158332858499><:EYES:719733159608057866><:happy:719733157099733056><:check:719733159079575710><:K_:719733159297679400>these are my favorite emotes lol"
    );
  }
});


bot.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `${prefix}delete`) {
    message.delete();
  }
});


bot.on("message", message => {
  if (message.content.startsWith(`${prefix}dm`)) {
    message.member.send("there, I gave you a direct message, happy now?");
  }
});


// expected output : seconds elapsed = 2
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `say`) {
    if (message.author.bot) {
      return;
    }
    var tex = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!tex) return message.reply("what do you want to say?");
    
    message.channel.send(tex);
  }
});



bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `mine`) {
    const Minesweeper = require("discord.js-minesweeper");

    const minesweeper = new Minesweeper({
      returnType: "emoji"
    });
    var mines = minesweeper.start();
    message.channel.send(mines);
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `slots`) {
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
      ` [**10**]`
    ];
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
      ` [**02**]`
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
      ` [**08**]`
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];
    const slotEmbed = new Discord.MessageEmbed()
    .setColor('27999')
.setAuthor('A Slot Machine!')
      .setTitle(`${message.author.tag} Let's See What You Got`)
    .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FCA5E5A4B-9855-44FE-8391-124EF36E8850.png?v=1592968948396')
      .setDescription(`\n🟦🟦🟦🟦\n🟦${output3}🟦\n🟦${output2}🟦\n🟦${output}🟦\n🟦🟦🟦🟦`)
    .setFooter('a slot machine')
    .setTimestamp()
    message.channel.send(slotEmbed);
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `8ball`) {
    if (
      !message.content
        .split(" ")
        .slice(1)
        .join(" ")
    ) {
      return message.channel.send("say something in the 8ball stupid");
    }
    if (!message.content.endsWith(`?`)) {
      return message.channel.send(
        "please put `?` at the end of your question."
      ); //propro
    }
    if (message.channel.type == "dm") {
      return;
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
      "that’s physicaly impossible",
      "idk"
    ];
    var output = choices[Math.floor(Math.random() * choices.length)];
    const ballEmbed = new Discord.MessageEmbed()
      .setColor("9AF8FF")
      .setTitle(`**8BALL**`)
      .setDescription(`The 8ball says: **${output}**`)
      .setFooter(`requested by ${message.author.username}`);
    message.channel.send(ballEmbed);
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `announce`) {
    if (message.author.bot) {
      return;
    }
    if (!message.member.hasPermission(["ADMINISTRATOR"])) {
      return message.channel.send(
        "you need the permission: `ADMINISTRATOR` to make an announcment "
      );
    }

    var channel = message.mentions.channels.first();
    var announcelel = message.content
      .split(`${prefix}announce ${channel}`)
      .slice(1)
      .join(" ");

    var $L = `\n`;
    const anEmbed = new Discord.MessageEmbed()
      .setTitle("<:Announce:731965302971302000>**NEW ANNOUNCMENT**")
      .setDescription(announcelel)
      .setColor("49328");
    channel.send(anEmbed);
  }
});

//serverscircle
bot.on("message", message => {
  if (message.content === "propro") {
    message.delete();
    bot.user.setAvatar(
      "https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FF0826EC9-3966-4B08-899B-3DC9653F517D.png?v=1595110044169"
    );
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `ban`) {
    if (message.author.bot) {
      return;
    }
    const user = message.mentions.users.first();
    if (!message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"]))
      return message.channel.send(
        "you don’t have those perms, you need to have the `KICK_MEMBERS` and `BAN_MEMBERS` permissions"
      );
    let reason = message.content
      .split(`${prefix}ban ${user}`)
      .slice(1)
      .join(" ");
    if (!reason)
      return message.channel.send(
        "you need a specific reason to ban someone, nincompoop"
      );
    if (user.id === message.author.id)
      return message.channel.send(
        "are you crazy? you cannot ban yourself bruh"
      );
    message.guild.members.ban(user);
    const channel = bot.channels.cache.get("728762042974076960");
    const exampleEmbedlol = new Discord.MessageEmbed()
      .setColor("#FF5541")
      .setTitle("he/she got banned")
      .setAuthor("from: Mr Circle bot")
      .addField("banned for:", reason)
      .setThumbnail(
        "https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F3699BA8D-4C6F-493A-85DB-547F84B7C1F6.gif?v=1593739244463"
      )
      .setFooter(`requested by ${message.author.username}`);
    message.channel.send(exampleEmbedlol);
    channel.send(exampleEmbedlol);
    user.send(exampleEmbedlol);
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `serverscircle`) {
    const mr = new Discord.MessageEmbed()
      .setColor("F9A61A")
      .setTitle(`**MR CIRCLE GUILD STATS**`)
      .setDescription(
        `**Mr Circle** server count: **${bot.guilds.cache.size}** servers!\n**Mr Circle** channel count: **${bot.channels.cache.size}** channels!\n**Mr Circle** user count: **${bot.users.cache.size}** users!\n**Mr Circle** emoji count: **${bot.emojis.cache.size}** emojis!`
      );

    message.channel.send(mr);
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `giverole`) {
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) {
      return message.channel.send(
        "you need the permission(s) `MANAGE_MESSAGES` to use this command"
      );
    }

    if (message.author.bot) {
      return message.channel.send("no");
    }
    const role = message.mentions.roles.first();
    const member = message.mentions.members.first();
    member.roles.add(role).then;
    message.channel.send("ok I gave the role to the user you mentioned");
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `memberstatus`) {
    message.guild.members.fetch().then(fetchedMembers => {
      const totalOnline = fetchedMembers.filter(
        member => member.presence.status === "online"
      );
      const totalOffline = fetchedMembers.filter(
        member => member.presence.status === "offline"
      );
      const totalidle = fetchedMembers.filter(
        member => member.presence.status === "idle"
      );
      const totaldnd = fetchedMembers.filter(
        member => member.presence.status === "dnd"
      );

      const all = fetchedMembers;

      const statusEmbed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTimestamp()
        .setTitle(`**STATS**`)
        .setDescription(
          `\<:Idle:729453479919353867>IDLE: **${totalidle.size}** \n\<:Offline:729453722500857947>OFFLINE: **${totalOffline.size}** \n\<:Online:729453404375613462>ONLINE: **${totalOnline.size}** \n\<:Donotdisturb:729453626421936190> DON'T DISTURB: **${totaldnd.size}** \n\<:check:719733159079575710> ALL: **${all.size}** `
        );
      message.channel.send(statusEmbed);
    });
  }
});

  

bot.on("message", message => {
  if (message.content.startsWith(`avatar`)) {
    const avaEmbed = new Discord.MessageEmbed()
      .setTitle("this is your avatar")
      .setImage(
        message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 2048
        })
      );
    message.channel.send(avaEmbed);
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  const moment = require("moment");
  if (command === `userprofile`) {
    const dateformat = require("date-format");
    const member = message.mentions.members.first();
    const user = message.mentions.members.first();
    const picture = member.user.displayAvatarURL();
    let joindate = moment
      .utc(member.joinedAt)
      .format("dddd, MMMM Do YYYY, HH:mm:ss");
    let nickname =
      member.nickname !== undefined && member.nickname !== null
        ? member.nickname
        : "None";

    if (member.user.bot) {
      return;
    }
    if (member.user.bot) {
      return;
    }
    const picEmbed = new Discord.MessageEmbed()
      .setColor("303136")
      .setTitle(`${member.user.username}`, "card", true)
      .setThumbnail(picture)
      .setDescription(
        `NAME:**${member.user.tag}** \nSTATUS: **${member.presence.status}** \nBOT: **${member.user.bot}** \nNICKNAME: **${nickname}** \nJOINDATE: **${joindate}** \nHIGHEST ROLE: **${member.roles.highest.name}** \nROLES: **${member.roles.cache.size}** 
`
      );
    message.channel.send(picEmbed);
  }
});



bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `highest role`) {
    const member = message.mentions.members.first;
    var high = member.roles.highest.name;
    message.channel.send(high);
  }
});
//clap
bot.on("message", message => {
  const swearWords2 = ["19202993$329"];

  if (swearWords2.some(word => message.content.includes(word))) {
    message.channel.send("ok");
  }
});
bot.on("message", message => {
  const dateformat = require("date-format");
  let x = Date.now() - message.guild.createdAt;
  let h = Math.floor(x / 86400000);
  let created = dateformat(message.guild.createdAt); // 86400000, 5 digits-zero.
  // Install "dateformat" first.
  let icon = message.guild.iconURL({ size: 2048 });
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `serverinfo`) {
    const choices = [
      "<:Sweat:735651779152314376>",
      "<:Eyes:735650818983985222>",
      "<:Blushing:735650993731272735>",
      "<:Lolz:735651656817049701>",
      "<:Happy:735650561952710718>"
    ];
    const emo = message.guild.emojis.cache.random();
    var output1 = choices[Math.floor(Math.random() * choices.length)];
    const infoEmbed = new Discord.MessageEmbed()

      .setTitle(`SERVER INFO`)
      .setThumbnail(icon)
      .setColor("363940")
      .setDescription(
        ` NAME: **${message.guild.name}** \n  CHANNELS: **${message.guild.channels.cache.size}** \n  SERVER ID: **${message.guild.id}** \n ${emo} EMOJIS: **${message.guild.emojis.cache.size}** \n REGION: **${message.guild.region}** \n  ROLES: **${message.guild.roles.cache.size}**\n HIGHEST ROLE: **${message.guild.roles.highest.name}**\n OWNER: **${message.guild.owner.user.tag}** \n DATE CREATED: ${created}`
      );
    message.channel.send(infoEmbed);
    message.channel.send("");
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `mail`) {
    var user = message.mentions.members.first();
    var hm = message.content
      .split(`${user}`)
      .slice(1)
      .join(" ");
    const mailEmbed = new Discord.MessageEmbed()
      .setTitle(`**YOU GOT MAIL!**`)
      .setColor("FE615E")
      .setDescription("Someone delivered mail to you :)")
      .setThumbnail(
        "https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F278C5B76-AE6C-4317-BAB4-F6125F717FF7.gif?v=1595260274009"
      )
      .addField(`FROM **${message.author.tag}:**`, `\n \n ${hm}`, true)
      .setTimestamp()
      .setFooter(
        "this is an email",
        `https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FE3479A13-7EC9-4D6A-A767-61897E20FA9F.png?v=1595260810009`
      );
    user.send(mailEmbed);
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `coolsize`) {
    let user = message.mentions.members.first();
    if (user === undefined) {
      user = message.author;
    }
    if (user.bot) {
      return message.channel.send(
        "I don`t need a machine to tell how cool I am, I`m LEGENDARY"
      );
    }

    const clel = ["you aren`t even cool at all"];
    const c1 = ["I`m not mad, I`m just dissapointed"];
    const c2 = ["that`s kinda average, but it`s something we can work on"];
    const c3 = ["That`s pretty cool!"];
    const c4 = ["WOW YOU ARE MORE THAN JUST COOL. YOU ARE SUPER EPIC"];
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
      `🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 100% \n ${c4}`
    ];

    var square = choices[Math.floor(Math.random() * choices.length)];
    const coolEmbed = new Discord.MessageEmbed()
      .setColor("303136")
      .setTitle("**COOL POWER MACHINE**")
      .setDescription(`this is how cool ${user} is:`)
      .addField("cool power machine results:", `${square}`, true);

    message.channel.send(coolEmbed);
  }
});
//serverscircle
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `messageReact`) {
    var emote = message.content
      .split(`messageReact`)
      .slice(1)
      .join(" ");
    message.channel.send(`ayo`).then(sentMessage => {
      sentMessage.react(`${emote}`);
    });
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `pinme`) {
    const pinning = message.content
      .split(`pinme`)
      .slice(1)
      .join(" ");
    if (!pinning) {
      return message.channel.send("what?");
    }
    if (pinning) {
      message.delete();
    }
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) {
      return message.channel.send(
        "you need the permission(s) `MANAGE_MESSAGES` to use this command"
      );
    }
    message.channel
      .send(`From: ${message.author.tag} \n\n${pinning}`)
      .then(sentMessage => {
        sentMessage.pin();
      });
  }
});
//using quick.db package

bot.on("message", message => {
  if (message.content.startsWith(`${prefix}killme`)) {
    const user = message.mentions.members.first();
    message.guild.members.ban(user);
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  if (command === `kill`) {
    if (!user) {
      message.channel.send("please specify the user you want to kill");
    }

    if (user == message.author) {
      const suicidEmbed = new Discord.MessageEmbed()
        .setColor(`8B0B0B`)
        .setTitle(`**${user.tag}** died <:Bloodyknife:738090624326041711>`)
        .setFooter(`reason: suicide`);
      return message.channel.send(suicidEmbed);
    }
    if (user.bot) {
      return message.channel.send("bots don`t die");
    }
    const choices = [
      `swimming in lava`,
      `slipping on a soap bar`,
      `drinking corona`,
      `having to many homework assignments`,
      `not subscribing to my owner: Quin10 Animates`,
      `liking morgz`,
      `poking her/himself in the eye`,
      `getting hit by my hammer`,
      `saying club penguin is kill`,
      `dying`,
      `getting hit by a car`,
      `not getting his/her picture in 3d`,
      `shining a flashlight in their eyes`,
      `being called a simp`,
      `waisting money on discord nitro 𝓒𝓵𝓪𝓼𝓼𝓲𝓬`,
      `being crucified`,
      `being a furry`,
      `not being thicc`,
      `being a simp`,
      `being an introvert`,
      `being a gachatuber`,
      `hating paper mario TOK`,
      `being a tik toker`,
      `drinking acid`,
      `stepping on nails`,
      `burning`,
      `choking`,
      `B E L T`,
      `stabbed`,
      `kissing someone`,
      `waisting money on discord nitro`
    ];

    var deaths = choices[Math.floor(Math.random() * choices.length)];
    var colorCho = ["yellow"];
    var colors10 = colorCho[Math.floor(Math.random() * choices.length)];
    const deathEmbed = new Discord.MessageEmbed()
      .setColor(`YELLOW`)
      .setTitle(`**${user.tag}** died \<:Y_:742229584816242730> `)
      .setFooter(`reason: ${deaths}`);
    message.channel.send(deathEmbed);
  }
});



bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    try {
      const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
        .addField(
          "⌛ Latency",
          `**${m.createdTimestamp - message.createdTimestamp}ms**`
        )
        .addField("💓 API", `**${Math.floor(bot.ws.ping)}ms**`); // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
      return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
      // Restart the bot as usual.
    }
  }
}); // easy way.
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `killmyself`) {
    const suicideEmbed = new Discord.MessageEmbed()
      .setColor(`8B0B0B`)
      .setTitle(`**${message.author.tag}** died \<:Y_:742229584816242730>`)
      .setFooter(`reason: suicide`);
    return message.channel.send(suicideEmbed);
  }
});

bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `meme`) {
    const got = require("got");

    got("https://www.reddit.com/r/meme/random/.json")
      .then(response => {
        let content = JSON.parse(response.body),
          image = content[0].data.children[0].data.url,
          Memembed = new Discord.MessageEmbed()
            .setColor("00B0F5")
            .setTitle(`here is your meme sir`)
            .setAuthor("`MEME`")
            .setImage(image)
            .addField(
              "↓**Reminder**↓",
              "remember, I do not have any control of what memes I send <:Smugyes:735651807551946773>",
              true
            )
            .setFooter("from r/memes")
            .setTimestamp();
        message.channel.send(Memembed);
      })
      .catch(console.log);
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `time`) {
    const dates = new Date();
    message.channel.send(`${dates}`);
  }
});

bot.on("message", async message => {
  if (message.content.startsWith(`${prefix}circledate`)) {
    const moment = require("moment");
    const date = require("date");

    const user = message.mentions.members.first();
    const timer = moment.utc(bot.user.createdAt).format("dddd MMMM Do YYYY");
    message.channel.send(`I was created **${timer}*`);
  }
});
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `pong`) {
    const fetch = require("node-fetch");
    function QuinBot() {
      fetch("https://mr-circle.glitch.me");
      console.log("pong");
    }
    setInterval(QuinBot, 60000).then;
    const onbed = new Discord.MessageEmbed()
      .setTitle(`pinging...`)
      .setDescription(`•••`)
      .setFooter(`wait...`)
      .setTimestamp();
const m = await message.channel.send(onbed)
    const pingbee = new Discord.MessageEmbed()
      .setAuthor(`succsesfully pinged!`)
      .setTitle(`Pinged \<:Yes:735651799435968644>`)
      .setDescription(`now the bot will appear online more often`)
      .setFooter(`pinged`)
      .setTimestamp();
    m.edit(pingbee);
  }
});//Activity
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `prune`) {
    const numba = message.content
      .split(`${prefix}prune`)
      .slice(1)
      .join(" "); // You can make an aliases. Just like that.
    if (numba > 99) return message.channel.send(`too many messages to delete`);
    if (numba < 2) return message.channel.send(`too little messages to delete`);

    message.channel.bulkDelete(numba);
  }
});
bot.on("message", async message => {
  const bot1 = message.mentions.members.first();
  const ms = require("ms");
  let days = Math.floor(bot.uptime / 86400000);
  let hours = Math.floor(bot.uptime / 3600000) % 24;
  let minutes = Math.floor(bot.uptime / 60000) % 60;
  let seconds = Math.floor(bot.uptime / 1000) % 60;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `uptime`) {
    const uptimebed = new Discord.MessageEmbed()
      .setAuthor(bot.user.tag, bot.user.avatarURL())
      .setColor("43B581")
      .setThumbnail(
        "https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FB127D091-527A-4151-A780-168585DFF6D7.png?v=1596317347762"
      )
      .setFooter(`The bot's uptime`)
      .setTimestamp()
      .setDescription(
        `**Days:** ${days} \n**Hours:** ${hours} \n**Minutes:** ${minutes} \n**Seconds:** ${seconds}`
      );
    message.channel.send(uptimebed);
  }
});

bot.on("message", async message => {
  if (message.content.startsWith(`${prefix}newdate`)) {
    const ms = require("ms");
    const Date = require("date");
    let days = Math.floor(message.author.createdAt / 86400000);
    let hours = Math.floor(message.author.createdAt / 3600000) % 24;
    let minutes = Math.floor(message.author.createdAt / 60000) % 60;
    let seconds = Math.floor(message.author.createdAt / 1000) % 60;
    const m = await message.channel.send(
      `Days ${days}\nHours ${hours}\nMinutes ${minutes}\nSeconds ${seconds}`
    );

    var interal = setInterval(function() {
      m.edit(
        `Days ${days}\nHours ${hours}\nMinutes ${minutes}\nSeconds ${seconds}`
      );
    }, 1 * 1000);
  }
});
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `setted`) {
    const channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) {
      return message.channel.send(
        "you need the permission(s) `MANAGE_MESSAGES` to use this command"
      );
    }

    //Now we gonna use quick.db

    db.set(`welchannel_${message.guild.id}`, channel.id); //set id in var

    message.channel.send(`Welcome Channel is seted as ${channel}`); //send success message
  }
});

const db = require("quick.db"); //using quick.db package

bot.on("guildMemberAdd", member => {
  //usageof welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var

  if (chx === null) {
    //check if var have value or not
    return;
  }//shot

  let wembed = new Discord.MessageEmbed() //define embed
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(
      `Welcome to **${member.guild.name}**, **${member.user.tag}**`
    )
    .addField(`Member Number`, `**#${member.guild.members.cache.size}**`, true)
    .setFooter(`Welcome`)
    .setTimestamp();

  bot.channels.cache.get(chx).send(wembed); //get channel and send embed
});
bot.on("guildMemberRemove", member => {
  //usageof welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var

  if (chx === null) {
    //check if var have value or not
    return;
  }

  let wembed = new Discord.MessageEmbed() //define embed
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(`bye bye **${member.user.username}**`)
    .setFooter("goodbye")
    .setTimestamp();

  bot.channels.cache.get(chx).send(wembed); //get channel and send embed
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `gaysize`) {
    const gaz = [Math.floor(Math.random() * 100 + 0)];
    const gabe = new Discord.MessageEmbed()
      .setTitle("THIS IS HOW GAY YOU ARE")
      .setColor("FF95A1")
      .addField(`Gay Machine`, `**${gaz}%**`, true)
      .setFooter(``)
      .setTimestamp();
    message.channel.send(gabe);
  }
});

bot.on("message", message => {
  if (message.content.startsWith(`${prefix}help`)) {
    const finalembed = new Discord.MessageEmbed()
      .setTitle(`Help`)
      .setAuthor(bot.tag, bot.avatarURL, true)
      .addField(`FUN`, `8ball, kill, gaysize, coolsize, joke, talkkid, quote`);
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `fetchm`) {
    const channel = message.mentions.channels.first();
    channel.messages.fetch().then(messages => {
      if (messages.size == 50) {
        return message.channel.send(`**50+** messages are in that channel`);
      }
      if (messages.size == 0) {
        return message.channel.send(`No messages are in that channel`);
      }
      message.channel.send(`**${messages.size}** messages are in that channel`);
    });
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `randomnumber`) {
    const gaz = [Math.floor(Math.random() * 100 + 0)];
    message.channel.send(`${gaz}`);
  }
});
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === `lenny`) {
    const lemon = message.content
      .split(`${prefix}lenny`)
      .slice(1)
      .join("");
    if (!lemon) {
      return message.channel.send(
        `what sentence makes your face turn into this ( ͡° ͜ʖ ͡°)?`
      );
    }
    message.channel.send(
      `someone:${lemon}\n\n\ ${message.author.username}: ( ͡° ͜ʖ ͡°)`
    );
  }
  //fetch
  else if (command === `burn`) {
    const roastC = [
      "bruh you are so lonely that you made a bubble as a friend like spongebob spuarepants",
      "you suck so much that you were put up for adoption more than how many miliseconds earth existed",
      "you look like those bobble head toys",
      "your IQ is less then the number of people that are older than 1 googleplex",
      `you're the reason why people say "don't do drugs" `,
      "you‘re an idiot                 `look right`                 you’re stupid",
      "wow, imagine choking on your own spit",
      `you suck at being a modertator, an infant can do better`,
      `imagine being so lonely to the point that you're talking to a bot`,
      `you're a waste of 1000000 pounds`,
      `the best compliment you gotten was that you were mediocre`
    ];
    var burned = roastC[Math.floor(Math.random() * roastC.length)];
    message.channel.send(`${burned}`);
  } else if (command === `joke`) {
    const hmlol = [
      `\<:Uh:735651154209407036>\<:Uh:735651154209407036>\<:Uh:735651154209407036>\<:Uh:735651154209407036>\<:Uh:735651154209407036>\<:Uh:735651154209407036>\<:Uh:735651154209407036> \n they don't get the joke`,
      `\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117> \n could be better`,
      `\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117>\<:Smugno:735651807610536117> \n could be better`,
      `\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773> \n it was kinda funny`,
      `\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773> \n it was kinda funny`,
      `\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773> \n it was kinda funny`,
      `\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773>\<:Smugyes:735651807551946773> \n it was kinda funny`,
      `\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492> they didn't like the joke`,
      `\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492> \n they didn't like the joke`,
      `\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492>\<:Sleep:735651061804564492> \n ithey didn't like the joke`,
      `\<:MAD:735650742748053525> \<:Knife:738090560316768266>\<:MAD:735650742748053525> \<:Knife:738090560316768266>\<:MAD:735650742748053525> \<:Knife:738090560316768266>\<:MAD:735650742748053525> \<:Knife:738090560316768266>\<:MAD:735650742748053525> \<:Knife:738090560316768266>\<:MAD:735650742748053525> \<:Knife:738090560316768266>\<:MAD:735650742748053525> \<:Knife:738090560316768266> \n DANG! that joke was so bad that they want to kill you. not only is your comedy career over, but so is your time on earth`,
      `\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701> \n That joke was very funny, the audience is begging for more`,
      `\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701> \n That joke was very funny, the audience is begging for more`,
      `\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701> \n That joke was very funny, the audience is begging for more`,
      `\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701> \n That joke was very funny, the audience is begging for more`,
      `\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701>\<:Lolz:735651656817049701> \n That joke was very funny, the audience is begging for more`
    ];
    var bo = hmlol[Math.floor(Math.random() * hmlol.length)];
    const funi = message.content
      .split(`${prefix}joke`)
      .slice(1)
      .join(" ");
    if (!funi) return message.channel.send(`what’s so funny!?`);
    message.channel.send(
      `${message.author.username}: "${funi} "\n\n\n\neveryone:${bo}`
    );//servers
  } else if (command === `talkkid`) {
    const unamed = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!unamed)
      return message.channel.send(`what do you want to say to the stupid kid?`);
if (unamed == "lol your mom") return message.channel.send(`${message.author.username}: "${unamed}"\n\n\nkid: "nani?! you found my weakness!?"`)
    message.channel.send(
      `${message.author.username}: "${unamed}"\n\n\nkid: "lol your mom"`
    );
  } else if (command === `topic`) {
    const choiceT = [
      `what do you wanna be when you grow up?`,
      `what's your favorite gaming console?`,
      `what's your favorite piece of candy?`,
      `do you like school?`,
      `do you hate school?`,
      `do you like discord?`,
      `are you underaged? don't worry I won't snitch`,
      `are you a bot developer?`,
      `what's your favorite season?`,
      `what device are you talking to me on?`,
      `what's your favorite show?`,
      `what school do you go to?`,
      `do you own a pet?`,
      `what's your favorite resturaunt?`,
      `how tall are you?`,
      `do you like me?`,
      `what's your favorite color?`,
      `are you right handed or left handed?`,
      `what does your name start with in the alphabet?`,
      `do you like your name?`,
      `where are you right now?`,
      `what's your favorite video game?`,
      `are you on break or you are still going to still?`,
      `what's your favorite cartoon show?`,
      `what's your best friends name?`,
      `are you an introvert or an extrovert?`,
      `how long are you asleep?`,
      `if you could live anywhere on the earth where would live?`,
      `if you won $1,000,000 what would you spend it on?`,
      `what do you do in your free time?`,
      `what's your worst subject to learn in school?`,
      `what's your favorite subject to learn in school?`,
      `what is your biggest fear?`,
      `what's the most expensive thing in your bedroom?`
    ];
    var topics = choiceT[Math.floor(Math.random() * choiceT.length)];
    const topicbed = new Discord.MessageEmbed()
      .setColor("#303136")
      .setTitle(
        `\<:Downvote:738090947186786366>**TOPIC**\<:Upvote:738090888353546311>`
      )
      .setDescription(`${topics}`);
    message.channel.send(topicbed);
  } else if (command === `quote`) {
    const quoted = message.content
      .split(`${prefix}quote`)
      .slice(0)
      .join(" ");
    const dat = message.content
      .split(`${prefix}quote ${quoted}`)
      .slice(1)
      .join(" ");
    if (!quoted) {
      return message.channel.send(`what do you want to quote`);
    }
    message.channel.send(
      ` "${quoted} "\n\n\n\n~${message.author.username}, 2420`
    );
  }
});
bot.on("message", async message => {
  if (message.content.startsWith(``)) {
    const fetch = require("node-fetch");
    function QunBot() {
      fetch("https://mr-circle.glitch.me");
      console.log("pong");
    }
    setInterval(QunBot, 60000);
  }
  
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "hi") {
    message.channel.send("hello");
    // the rest of
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "someone") {
    const rando = message.guild.members.cache.random();
    message.channel.send(`${rando.user.tag}`);
    message.channel.send(``);
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "shot") {
    bot.user.setActivity('my prefix is "E/"');
    message.channel.send(message);
  }
});
bot.on("message", async message => {
  //SWEAR WORD FILTER (episode 12)
  if (!message.guild.id === "728121511038156841") return;
  const swearWords = ["swear1", "swear2"];
  if (swearWords.some(word => message.content.includes(word))) {
    message.delete();

    message.member.send("That word is not allowed!");
  }
});

bot.on("message", async message => {
  if (message.guild.id == "728121511038156841") return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "lucksize") {
    const luckness = [Math.floor(Math.random() * 100 + 1)];
    const gabe = new Discord.MessageEmbed()

      .setColor("GREEN")
      .addField(
        `🍀**Luck Machine**🍀`,
        `${message.author.tag} is **${luckness}%** lucky!`,
        true
      )
      .setFooter(``)
      .setTimestamp();
    message.channel.send(gabe);
  }
});//onlin
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "gender") {
    const gend1 = [Math.floor(Math.random() * 100 + 1)];
    const gend2 = 100 - gend1;

    var x = 5;
    var y = 2;
    var z = x * y;

    const gabe = new Discord.MessageEmbed()

      .setColor(`PURPLE`)
      .addField(
        `♀**Gender Machine**♂`,
        `${message.author.tag} is **${gend1}%** boy! And **${gend2}%** girl!`,
        true
      )
      .setFooter(`girl? (or) boy`)
      .setTimestamp();
    message.channel.send(gabe);
  }
});
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "polo") {
    // We're gonna try an unicode emoji. Let's find it on emojipedia.com !
   const al = bot.users.cache.some(user => user.username === 'quin');
    message.channel.send(`${al}`)

    // We're gonna using an await, to make the react are right in order.

    // We're gonna using an await, to make the react are right in order.
  }
});

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (command === "rps") {
    var gamemsg;
    const hoices = ["rock", "paper", "scissors"];
    const compchoices = hoices[Math.floor(Math.random() * hoices.length)];
    var colour;
    const playerchoices = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (playerchoices == "rock") {
      if (compchoices == "paper") gamemsg = "you lose"; colour = "FF3846"
      if (compchoices == "scissors") gamemsg = "you win"; 
    }
    if (playerchoices == "paper") {
      if (compchoices == "scissors") gamemsg = "you lose"; colour = "FF3846"
      if (compchoices == "rock") gamemsg = "you win"; 
    }
    if (playerchoices == "scissors") {
      if (compchoices == "paper") gamemsg = "you win"; 
      if (compchoices == "rock") gamemsg = "you lose"; colour = "FF3846"
    } 
    if (compchoices == playerchoices) {
gamemsg = "its a tie"; colour = "FFC84A"

    }
if (gamemsg == undefined) return message.channel.send('The only choices are: `scissors` `rock` `paper`')
   //FFC84A
    var rps = new Discord.MessageEmbed()
      .setColor(`${colour}`)
    .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F8993D458-9276-4844-95D3-15F0D53619D6.png?v=1597170109761')
      .setTitle(`**Rock, Paper, Scissors**`)
      .setDescription(
        `\<:Player1:742961378318483537> **${message.author.tag}:** ${playerchoices} \n\<:Player2:742961465769590784> **${bot.user.tag}** ${compchoices}\n\<:Shock:742227974685851739> **Result:** ${gamemsg}`
      )
    .setFooter('did you win or lose?')
    .setTimestamp()
    message.channel.send(rps);
  }
});//60
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (command === "clap") {
    const clp = message.content.split(``).slice(6).join("👏")
    if (!clp) return message.channel.send('what do you want the message to say?')
    message.channel.send(`${clp}`)
  }
})
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (command === "space") {
    const clp = message.content.split(``).slice(7).join("   ")
    if (!clp) return message.channel.send('what do you want the message to say?')
    message.channel.send(`**${clp}**`)
  }
})
bot.on("message", message => {
  const Date = require("date")
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (command === "diceroll") {
    const dices = [6, 5, 4, 3, 2, 1]
    const diceso = [6, 5, 4, 3, 2, 1]
    const rollin = dices[Math.floor(Math.random() * dices.length)];
    const rollino = diceso[Math.floor(Math.random() * diceso.length)];
    const out = rollin + rollino
    const rolled = new Discord.MessageEmbed()
    .setAuthor('Roll dices!')
    .setColor('99571')
    .setTitle(`This Is What ${message.author.tag} Rolled!`)
    .addField(`\<:Thinking:742695359158943745>Output\<:Thinking:742695359158943745>`,`🎲 **Dice 1:** ${rollin} \n🎲 **Dice 2:** ${rollino} \n\<:Shock:742227974685851739>**Result:** ${out}`)
    .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2F678DAE04-C594-458B-9B9E-B86DD1180728.png?v=1597292301492')
    message.channel.send(rolled)
    
    }
})

bot.on("message", message => {
  const db = require("quick.db")
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command === "log") {
    const channel = message.mentions.channels.first()
    const logchannel = db.fetch(`logchannel_${message.guild.id}`)
    message.channl.send(`logchannel is setted in ${channel}`)
    db.set(`logchannel_${message.guild.id}`, channel.id)
    channel.send('this is my new log channel')
}})
       
bot.login(TOKEN);
