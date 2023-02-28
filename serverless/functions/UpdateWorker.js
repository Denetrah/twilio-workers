// const twilio = require('twilio');
const workerSid = 'WKb8b8ac30dd0d50e3a25deae169e3728a'

exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    // const workerSid = event.workerSid;
    const attributes = event.attributes;
    // Whatever needs to be adjusted
    client.taskrouter.v1.workspaces(context.TWILIO_WORKSPACE_SID)
        .workers(workerSid)
        .update({
        attributes: JSON.stringify(attributes)
    })
        .then(worker => {
        callback(null, worker);
    })
        .catch(err => {
        callback(err);
    });
   };


// Function Works . Would have to store SID in .env? Is there a way to update multiple workers ?If so what is the most secure way
// to store the multiple SIDs 