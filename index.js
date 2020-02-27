const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const client = new Discord.Client();
let killcount = 0;

client.once('ready', () => {
    console.log('Ready!')
})
client.on('message', message => {
    if(message.content.includes(`test`)){
        if (killcount == 0){
        //let memeber = message.mentions.members.first();
        
        message.channel.send("please kill me");
        killcount++;
        }
        else if(killcount >= 1 && killcount <=5)
        {
            message.channel.send("im already dead you fuck");
            killcount++;
        }
        else if (killcount >=6)
            message.channel.send("stop it dummy");

        console.log(killcount);
    }
    if(message.content.includes("set that bitch to 4"))
    {
        killcount = 4;
        message.channel.send('consider it done, cunt');
    }

    if(message.content.includes("slug"))
    {
        message.channel.send('chloe meant it');
    }
})


client.login(token);
