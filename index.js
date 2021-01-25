require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const consoleChat = require('./consoleChat.js')
var prefix = process.env.BOT_PREFIX;

/**
 * Help with adding modules that use client vs. bot.
 */
var client = bot;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

/**
 * Token used to authenticate bot.
 */
const TOKEN = process.env.DISCORD_BOT_TOKEN;

bot.login(TOKEN);

/**
 * Bot On. Some mudules initialized here.
 * - Bot Presence
 * - Console Chat
 */
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setPresence({ game: { name: 'MetaTank Bot' }, status: 'online' })
  consoleChat.startConsoleInput(client)
});

/**
 * Monitoring for commands.
 */
bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  consoleChat.onMessage(message)

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});

/**
 * Clearchat command. 
 * Clears the last 100 messages. Limited to messages sent within 14 days.
 */
bot.on("message", msg => {
  if (msg.content.toLowerCase().startsWith(prefix + "clearchat")) {
    if (msg.member.hasPermission("ADMINISTRATOR")) {
      try{
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
            try{
            console.log('User: '+ msg.member + ' ' +  msg.member.user.tag + ' used the clearchat command.' + ' In channel ' + msg.channel)
            }catch{ console.log(error) }
        }
        clear();
      }catch{ console.log(error) }
    }else{
      msg.reply('You are not an administrator. Your attempt to use this command has been logged...');
      console.log('User: '+ msg.member + '' + msg.username + ' Attempted to use the clearchat command.')
    }
  }
});


