const { ContextMenuCommandBuilder } = require("@discordjs/builders");
const {
  CommandInteraction,
  CommandInteractionOptionResolver,
} = require("discord.js");
const DiscordBot = require("./Main");

class ContextCommand extends ContextMenuCommandBuilder {
  constructor() {
    super();
    this.type = 1;
    return this;
  }

  /**
   * Set Execution of the command
   * @param {(client: DiscordBot, interaction: CommandInteraction, options: CommandInteractionOptionResolver) => Promise<any>} callback
   */
  setRun(callback) {
    this.run = callback;
    return this;
  }
}

module.exports = ContextCommand;
