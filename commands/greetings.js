

module.exports = {
	name: 'greetings',
	aliases: ['hello'],
	description: 'The bot will greet you!',
	cooldown: 5,
	guildOnly: true,
	args: true,
	usage: false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        var randomNumber = Math.floor(Math.random() * 5);

        switch(randomNumber) {
            case 1:
                return msg.send(`Hello! ${msg.author.username}`);
            case 2: 
                return msg.send(`Hello hello! ${msg.author.username}`);
            case 3:
                return msg.send(`Hello hello hello! ${msg.author.username}`);
            case 4:
                return msg.send(`Hello hello hello hello! ${msg.author.username}`);
            case 5:
                return msg.send(`Hello hello hello hello hello! ${msg.author.username}`);
        }

        // msg.reply(`Hello! ${msg.author.username}`);
	},
};