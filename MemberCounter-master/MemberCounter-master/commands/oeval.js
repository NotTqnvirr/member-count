const Discord = require('discord.js');

module.exports.run = (msg, args, client) => {
    if (msg.author.id == 403269713368711190) {
        try {
            msg.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + eval(args.join("")) + "```")
                .catch((err) => console.error("[ ERROR ] ", err));
        } catch(err) {
            msg.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + err + "```")
                .catch((err) => console.error("[ ERROR ] ", err));
        }  
    }
};