const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log("Hello Dahling."); 
client.login(process.env.BOT_TOKEN);
});
client.on('message', msg => {
  if (msg.content == 'work') {
    msg.reply('Yes, words are useless. Gobble, gobble, gobble.');   
  } 
 });
 client.on('message', msg => {
  if (msg.content == 'drabble') {
    msg.reply('It will be bold. Dramatic! Heroic!'); 
  }
 });
 client.on('message', msg => {
  if (msg.content == 'help') {
    msg.reply('Go! Confront the problem! Fight! Win!');  
  }
 });
 client.on('message', msg => {
  if (msg.content == 'sads') {
    msg.reply('Simple, elegant, yet bold. You will die.');
  }  
 });
 client.on('message', msg => {
  if (msg.content == 'capes') {
    msg.reply('No capes!');
  }  
 });
 client.on('message', msg => {
  if (msg.content == 'brb') {
    msg.reply('And call me when you get back, darling. I enjoy our visits.');
  }  
 });
client.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'image') {
        message.channel.send('Pull yourself together!', {
            files: [
                "https://78.media.tumblr.com/deeaf86b0185c1cfb3d2d9da7e7d898e/tumblr_mksuwdxfpn1snsugqo1_500.gif"
            ]
        });
    }
});
