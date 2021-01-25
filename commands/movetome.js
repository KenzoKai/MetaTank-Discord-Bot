module.exports = {
    name: '!movetome',
    description: 'Moves all members to the channel of the user.',
    execute(msg, args) {

        
    if (msg.content.toLowerCase().startsWith("!movetome")) {
        const channel = msg.member.voice.channel;
        if (msg.member.hasPermission("ADMINISTRATOR")) {
            msg.guild.members.cache.forEach(member => {
            //guard clause, early return
            if(member.id === msg.member.id || !member.voice.channel) return;
            member.voice.setChannel(channel);
            });
        }
    }
        
    },
  };