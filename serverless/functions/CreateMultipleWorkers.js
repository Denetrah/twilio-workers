const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.handler = function(context, event, callback) {
 // Define the number of workers to create
 const numWorkers = 10;
 // Define the worker attributes
 const workerAttributes = {
  "type": "support"
 };
 // Create an array to store the worker SIDs
 const workerSids = [];
 // Create the workers
 for (let i = 0; i < numWorkers; i++) {
  client.taskrouter.workspaces(context.TWILIO_WORKSPACE_SID)
   .workers.create({
       attributes: JSON.stringify(workerAttributes),
    friendlyName: `Support Worker ${i+1}`
   })
   .then(worker => {
        workerSids.push(worker.sid);
        console.log(`Worker ${worker.sid} created`);
    if (workerSids.length === numWorkers) {
        callback(null, workerSids);
    }
   })
   .catch(err => {
    callback(err);
   });
 }
};


// Function works . Use case would be a new hires 



