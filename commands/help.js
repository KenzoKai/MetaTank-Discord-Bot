var helpText = `
    This is a test of the help text...

    >>> Hello World! <<<
    
`;

module.exports = {
    name: '!help',
    description: 'Help module.',
        execute(msg, args) {
            if (msg.content.toLowerCase().startsWith("!help")) {
                msg.author.send(helpText)
            }
        },
};