module.exports = {
name: '!muteall',
description: 'Mutes everyone in current voice channel',
    execute(msg, args) {
        var prefix = "!";
        if (msg.content.toLowerCase().startsWith(prefix + "muteall")) {
            if (msg.member.hasPermission("ADMINISTRATOR")) {
            let channel = msg.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(true),
                msg.channel.send(member[1] + ' MUTED!');
            }
            }
        }
    },
};

module.exports = {
name: '!no.muteall',
description: 'Mutes everyone in current voice channel',
    execute(msg, args) {
        var prefix = "!";
        if (msg.content.toLowerCase().startsWith(prefix + "no.muteall")) {
            if (msg.member.hasPermission("ADMINISTRATOR")) {
            let channel = msg.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false),
                msg.channel.send(member[1] + ' un-MUTED!');
            }
            }
        }
    },
};