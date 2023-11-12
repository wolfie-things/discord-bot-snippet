const { ContextMenuCommandBuilder } = require("@discordjs/builders");
const {
  ApplicationCommandType,
  ContextMenuCommandInteraction,
} = require("discord.js");

module.exports = {
  command: new ContextMenuCommandBuilder()
    .setName("Say Hi")
    .setType(ApplicationCommandType.User),

  /**
   * This function will handle context menu interaction
   * @param {import("../lib/DiscordMusicBot")} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction, options) => {
    interaction.reply(`<@${interaction.options.getUser("user").id}>, Hello!`);
  },
};
