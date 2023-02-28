const twilio = require('twilio');
const workerSid = 'WKb8b8ac30dd0d50e3a25deae169e3728a'

exports.handler = function(context, event, callback) {
    
    const client = new twilio(context.TWILIO_ACCOUNT_SID, context.TWILIO_AUTH_TOKEN);

    client.taskrouter.v1.workspaces(context.TWILIO_WORKSPACE_SID)
    .workers(workerSid)
    .remove(workerSid)
    .then(() => {
    callback(null, { message: 'Worker deleted successfully' });
 })
    .catch(error => {
    callback(error);
 });
};

// Function works . How can I delete multiple workers ? Add a GET request