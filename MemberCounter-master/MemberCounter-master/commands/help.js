module.exports.run = (msg, args, client) => {
    let user = client.users.get('403269713368711190');
    msg.channel.send(client.embeds.help(user ? user.tag : "error2507", client.config.prefix));
};