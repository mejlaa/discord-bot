module.exports = {
  name: "quote",
  aliases: ["pong", "pulse"],
  description: "Random quote from internet!",
  cooldown: 5,
  guildOnly: true,
  args: false,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  async execute(msg, args) {
    const author = args[0];
    const response = await fetch(
      `https://api.quotable.io/random?${author ? `?author=${author}` : ""}`
    );
    const result = await response.json();
    msg.reply(result.content + "; autor: " + result.author);
  },
};
