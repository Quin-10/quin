// inside a command, event listener, etc.


var prefix = "E/" || "e/"
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
  if (message.content === `E/`) {
    message.channel.send(
      `${message.author}  umm I hate to burst your bubble but... there's a command missing`
    );
  } else if (message.content === `e/`) {
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
      return;
    }
    if (message.channel.type == "text") {
      return;
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
  const infoWords = ["@yahoo.com", "@gmail.com"];
  if (infoWords.some(word => message.content.includes(word))) {
    return;
    message.delete();
    message.member.send("are you trying to leak your account?");
  }
});

// expected output : seconds elapsed = 2
bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}say`)) {
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
  if (message.content.startsWith(`${prefix}someboy`)) {
    const someone = message.guild.members.random();
    message.channel.send(`the random person is${someone}`);
  }
});

bot.on("message", message => {
  
  if (message.content.startsWith`${prefix}mine`) {
    const Minesweeper = require("discord.js-minesweeper");

    const minesweeper = new Minesweeper({
      returnType: "emoji"
    });
    var mines = minesweeper.start();
    message.channel.send(mines);
  }
});
bot.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
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

      .setTitle(`${message.author.username} ooh lets see what you got`)
      .setDescription(`\n🟦🟦🟦🟦\n🟦${output3}🟦\n🟦${output2}🟦\n🟦${output}🟦\n🟦🟦🟦🟦`);
    message.channel.send(slotEmbed);
  }
});
bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}8ball`)) {
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
      );
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

  if (message.content.startsWith(`${prefix}announce`)) {
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
      .setTitle("<:Announce:731965302971302000>`NEW ANNOUNCMENT`")
      .setDescription(announcelel)
      .setColor("49328");
    channel.send(anEmbed);
  }
});
bot.on("message", message => {
  if (message.content.startsWith(`${prefix}reactroles`)) {
    return;
    if (!message.member.hasPermission(["ADMINISTRATOR"])) {
      return message.channel.send(
        "you need the permission: `ADMINISTRATOR` to make a reaction role message"
      );
    }

    var channel = message.mentions.channels.first();
    var announcelely = message.content
      .split(`${prefix}reactroles ${channel}`)
      .slice(1)
      .join(" ");
    const role = message.mentions.roles.first();
    const anEmbed = new Discord.MessageEmbed()
      .setTitle("<:Announce:731965302971302000>`NEW ROLE REACTIONS`")
      .setDescription(announcelely)
      .setColor("49328");
    channel.send(anEmbed).then(sentMessage => {
      sentMessage.react("🟣");
    });
  }
});

bot.on("message", message => {
  if (message.content === "propro") {
    message.delete();
    bot.user.setAvatar(
      "https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FF0826EC9-3966-4B08-899B-3DC9653F517D.png?v=1595110044169"
    );
  }
});
bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}ban`)) {
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
  
  if (message.content.startsWith(`${prefix}serverscircle`)) {
    message.channel.send(
      `**Mr Circle** server count: **${bot.guilds.cache.size}** servers! `
    );
  }
});
bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}giverole`)) {
    if (message.author.bot) {
      return;
    }
    const role = message.mentions.roles.first();
    const member = message.mentions.members.first();
    member.roles.add(role).then;
    message.channel.send("ok I gave the role to the user you mentioned");
  }
});
bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}memberstatus`)) {
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

      message.guild.bots.fetch().then(fetchedBots => {
        const totalbot = fetchedBots;

        const statusEmbed = new Discord.MessageEmbed()
          .setColor("303136")
          .setTimestamp()
          .setTitle(`**STATS**`)
          .setDescription(
            `\<:Idle:729453479919353867>IDLE: **${totalidle.size}** \n\<:Offline:729453722500857947>OFFLINE: **${totalOffline.size}** \n\<:Online:729453404375613462>ONLINE: **${totalOnline.size}** \n\<:Donotdisturb:729453626421936190> DON'T DISTURB: **${totaldnd.size}** \n\<:check:719733159079575710> ALL: **${all.size}** `
          );
        message.channel.send(statusEmbed);
      });
    });
  }
});
bot.on("message", message => {
  
  if (message.content.startsWith(`textChannel`)) {
    message.guild.channels.create("new-channel", {
      type: "text",
      reason: "New channel added for fun!"
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
  if (message.content.startsWith(`${prefix}nuking`)) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send("you do not have permissons");
    }
    let clearchannel = message.channel.mentions.first();
    message.clearAll();
  }
});

bot.on("message", message => {
  
  const moment = require("moment");
  if (message.content.startsWith(`${prefix}userprofile`)) {
    const member = message.mentions.members.first();
    const user = message.mentions.members.first();
    const picture = member.user.displayAvatarURL();
    const createdate = moment
      .utc(user.createdAt)
      .format("dddd, MMMM Do YYYY, HH:mm:ss");
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
        `NAME:${member.user.tag} \nSTATUS: ${member.presence.status} \nBOT: ${member.user.bot} \nCREATED: ${createdate}`
      );
    message.channel.send(picEmbed);
  }
});
bot.on("message", message => {
  
  
  if (message.content.startsWith(`${prefix}botprofile`)) {
    const member = message.mentions.members.first();

    const user = message.mentions.members.first();
    const picture = member.user.displayAvatarURL();
    if (!member.user.bot) {
      return;
    }
    if (!member.user.bot) {
      return;
    }

    const picEmbed = new Discord.MessageEmbed()
      .setColor("303136")
      .setTitle(`${member.user.username}`, "card", true)
      .setThumbnail(picture)
      .setDescription(
        `NAME:${member.user.tag} \nSTATUS: ${member.presence.status} \nBOT: ${member.user.bot}  `
      );
    message.channel.send(picEmbed);
  }
});
bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}pinned`)) {
    const pin = message.channel.messages.fetchPinned();
  }
});

bot.on("message", async message => {
  
  
  if (message.content.startsWith(`${prefix}lead`)) {
    var high = message.guildMember.roles.highest;
    message.channel.send(high);
  }
});

bot.on("message", message => {
  const swearWords2 = ["19202993$329"];

  if (swearWords2.some(word => message.content.includes(word))) {
    message.channel.send("ok");
  }
});
bot.on("message", message => {
  
  let x = Date.now() - message.guild.createdAt;
  let h = Math.floor(x / 86400000); // 86400000, 5 digits-zero.
  let created = message.guild.createdAt; // Install "dateformat" first.

  if (message.content.startsWith(`serverinfo`)) {
    const choices = [
      "<:Sweat:735651779152314376>",
      "<:Eyes:735650818983985222>",
      "<:Blushing:735650993731272735>",
      "<:Lolz:735651656817049701>",
      "<:Happy:735650561952710718>"
    ];
    var output1 = choices[Math.floor(Math.random() * choices.length)];
    const infoEmbed = new Discord.MessageEmbed()

      .setTitle(`SERVER INFO`)
      .setColor("363940")
      .setDescription(
        ` NAME: **${message.guild.name}** \n  CHANNELS: **${message.guild.channels.cache.size}** \n  SERVER ID: **${message.guild.id}** \n ${output1} EMOJIS: **${message.guild.emojis.cache.size}** \n REGION: **${message.guild.region}** \n  ROLES: **${message.guild.roles.cache.size}** \n Owner: **${message.guild.owner.user.tag}** \n DATE CREATED: **${created} since ${h} day(s)**`
      );
    message.channel.send(infoEmbed);
    message.channel.send("");
  }
});

bot.on("message", message => {
  
  if (message.content.startsWith(`${prefix}mail`)) {
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
  
  
  if (message.content.startsWith(`${prefix}coolSize`)) {
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
      .setTitle("**COOL POWER MACHINE**")
      .setDescription(`this is how cool ${user} is:`)
      .addField("cool power machine results:", `${square}`, true);

    message.channel.send(coolEmbed);
  }
});

bot.on("message", message => {
  if (message.content.startsWith(`${prefix}messageReact`)) {
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
  
  const user = message.mentions.users.first();

  if (message.content.startsWith(`${prefix}kill`)) {
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
      .setTitle(`**${user.tag}** died \<:Knife:738090560316768266> `)
      .setFooter(`reason: ${deaths}`);
    message.channel.send(deathEmbed);
  }
});
bot.on("message", message => {
  

  if (message.content.startsWith(`varif`)) {
    message.channel.send("ok");
    message.react("👍").then(() => message.react("👎"));

    const filter = (reaction, user) => {
      return (
        ["👍", "👎"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      );
    };

    message
      .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
      .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === "👍") {
          message.reply("you reacted with a thumbs up.");
        } else {
          message.reply("you reacted with a thumbs down.");
        }
      })
      .catch(collected => {
        message.reply(
          "you reacted with neither a thumbs up, nor a thumbs down."
        );
      });
  }
});

bot.on("message", async message => {
  

  if (message.content.startsWith(`${prefix}varif1`)) {
    const role = message.mentions.roles.first();
    const rules = message.content
      .split(`${prefix}varif1 ${role}`)
      .slice(1)
      .join(" ");
    if (
      !message.content
        .split(`${prefix}varif1 ${role}`)
        .slice(1)
        .join(" ")
    ) {
      return message.channel.send("what is the description of the role");
    }
    if (!role) {
      return message.channel.send("the role isn`t specified");
    }
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("you do not have permissons");
    }
    message.delete;
    var embed2 = new Discord.MessageEmbed()
      .setColor("#add8e6")
      .setAuthor("Reaction role")
      .setDescription(`${rules}`);

    let hi = await message.channel.send(embed2);
    hi.react("🌱");
    if (message.reaction.emoji.name === "🌱") {
      await message.guild.members.cache.get(message.author.id).roles.add(role);
    }
    sentMessage => {
      sentMessage.delete();
      message.channel.send(embed2);
    };
  }
});

bot.on("message", async message => {
  if (message.content.startsWith(prefix + "ping")) {
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
  

  if (message.content.startsWith(`killmyself`)) {
    const suicideEmbed = new Discord.MessageEmbed()
      .setColor(`8B0B0B`)
      .setTitle(
        `**${message.author.tag}** died <:Bloodyknife:738090624326041711>`
      )
      .setFooter(`reason: suicide`);
    return message.channel.send(suicideEmbed);
  }
});

bot.on("message", async message => {
  

  if (message.content.startsWith(`${prefix}meme`)) {
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
  if (message.content.startsWith(`${prefix}time`)) {
    const dates = new Date()
    message.channel.send(`${dates}`);
  }
});


bot.on("message", async message => {
  if (message.content.startsWith(`${prefix}date`)) {
    const moment = require('moment')
    const Date = require('date')
        const timer = new Date
        message.channel.send(`Today is **${timer}**`);
  }
})
bot.on("message", async message => {
  if (message.content.startsWith(`${prefix}hapy`)) {
const fetch = require('node-fetch')
function QuinBot() { 
fetch('https://mr-circle.glitch.me')
console.log('pong')
} 
setInterval(QuinBot, 60000)
  

.then
message.channel.send('ok I ping')
}
})
bot.on("message", async message => {
if (message.content.startsWith(`${prefix}prune`)) { 
  const numba = message.content.split(`${prefix}prune`).slice(1).join(" ")// You can make an aliases. Just like that.
    
    
    message.channel.bulkDelete(numba)

  }
})
bot.on("message", async message => {
  const ms = require("ms")
  let days = Math.floor(bot.uptime / 86400000);
      let hours = Math.floor(bot.uptime / 3600000) % 24;
      let minutes = Math.floor(bot.uptime / 60000) % 60;
      let seconds = Math.floor(bot.uptime / 1000) % 60;

if (message.content.startsWith(`${prefix}uptime`)){
  const uptimebed = new Discord.MessageEmbed()
  .setAuthor(bot.user.tag, bot.user.avatarURL())
  .setColor('43B581')
  .setThumbnail('https://cdn.glitch.com/55924b02-3b4c-417c-80be-e9b40f99619e%2FB127D091-527A-4151-A780-168585DFF6D7.png?v=1596317347762')
  .setFooter(`The bot's uptime`)
  .setTimestamp()
  .setDescription(`**Days:** ${days} \n**Hours:** ${hours} \n**Minutes:** ${minutes} \n**Seconds:** ${seconds}`)
message.channel.send(uptimebed)
}
})
bot.on('message', message => {
    if (message.content.startsWith(`${prefix}loop`)) {
      const game = message.content.split(`${prefix}loop`)
      var interval = setInterval (function () {
        message.channel.send("123")
      }, 1 * game); 
    }
});
bot.on('message', message => {
    if (message.content.startsWith(`${prefix}mess`)) {
const types = message.guild.messages.cache.size
message.channel.send(`${types}`)
    }
})
bot.on('message', message => {
if (message.content.startsWith(`${prefix}counter`)) {
const messageCount = message.guild.i

// Send the message count in a message. The template literal (${}) adds an 's' if needed.
message.channel.send(`**${messageCount}** sent.`)
  .catch(console.error);
}
})
bot.on("message", async message => {
  if (message.content.startsWith(`${prefix}newdate`)) {
  const ms = require("ms")
  let days = Math.floor(Date.now() / 86400000);
      let hours = Math.floor(Date.now() / 3600000) % 24;
      let minutes = Math.floor(Date.now() / 60000) % 60;
      let seconds = Math.floor(Date.now() / 1000) % 60;
message.channel.send(`Days ${days}\nHours ${hours}\nMinutes ${minutes}\nSeconds ${seconds}`)
    var interal = setInterval (function () {
        message.edit(`:${hours}:${minutes}:${seconds}`)
      }, 1 * 1000); 
  }
})
const channel = message.mentions.channels.first()
return message.channel.send("Please Mention the channel first");
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
  }

  let wembed = new Discord.MessageEmbed() //define embed
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(`Welcome to **${member.guild.name}**, **${member.user.tag}**`)
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
    .setDescription(`bye bye **${member.user.username}** we will or won't miss you`)
    .setFooter("goodbye")
    .setTimestamp();

  bot.channels.cache.get(chx).send(wembed); //get channel and send embed
});

bot.login(TOKEN);
  

