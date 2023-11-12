module.exports = {
  cmdPerPage: 10, //- Number of commands per page of help command
  adminId: "", //- Replace UserId with the Discord ID of the admin of the bot
  token:
    "", //- Bot's Token
  clientId: "", //- ID of the bot
  clientSecret: "", //- Client Secret of the bot
  scopes: ["applications.commands"], //- Discord OAuth2 Scopes
  supportServer: "", //- Support Server Link
  permissions: 2205281600, //- Bot Inviting Permissions
  debug: true, //- Debug mode
  cookieSecret: "", //- Cookie Secret
  embedColor: "#2fffff", //- Color of the embeds, hex supported
  presence: {
    // PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", //- You can have online, idle, dnd and invisible (Note: invisible makes people think the bot is offline)
    activities: [
      {
        name: "", //- Status Text
        type: "", //- PLAYING, WATCHING, LISTENING, STREAMING
      },
    ],
  },
};
