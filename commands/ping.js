
/**
 * Simple ping pong responses.
 */
module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg, args) {
    msg.reply(' pong');
  },
};
