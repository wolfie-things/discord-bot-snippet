const SlashCommand = require("../../lib/SlashCommand");
const command = new SlashCommand()
  .setName("ping")
  .setDescription("pong")
  .setRun(async (client, interaction, options) => {
    return await interaction.reply({
      content: `pong`,
      ephemeral: true,
    });
  });

module.exports = command;
