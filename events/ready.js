/**
 *
 * @param {import("../lib/Main")} client
 */
module.exports = (client) => {
	client.user.setPresence(client.config.presence);
	client.log("Successfully Logged in as " + client.user.tag);

};
