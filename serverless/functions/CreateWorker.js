// const { Twilio } = require('twilio');
const twilio = require('twilio');


exports.handler = function(context, event, callback) {

   
    const client = new twilio(context.TWILIO_ACCOUNT_SID, context.TWILIO_AUTH_TOKEN);
 client.taskrouter.v1.workspaces(context.TWILIO_WORKSPACE_SID)
    .workers.create({
    friendlyName: event.friendlyName,
    //title: event.title,
    attributes: JSON.stringify({"type": event.title})
    })
    .then(worker => {
    callback(null, { worker });
 })
    .catch(error => {
    callback(error);
    
 });
//  callback(null, response)
};



// Function works and creates 1 worker 