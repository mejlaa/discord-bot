module.exports = {
	name: 'add',
	aliases: [],
	description: 'Add two numbers.',
	cooldown: 5,
	guildOnly: true,
	args: true,
	usage: false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		// const now = Date.now();
		// const duration = (now - msg.createdTimestamp) / 1000;
		// msg.reply(`Pong! Time needed: ${duration.toFixed(3)}s`);
        var a = parseInt(args[0]);
        var b = parseInt(args[1]);

        console.log(msg);

        if (args.length < 2) {
            return msg.reply("You didnt provide 2 arguments.")
        }

        msg.reply(`Result of two numbers is ${a + b}`);
	},
};