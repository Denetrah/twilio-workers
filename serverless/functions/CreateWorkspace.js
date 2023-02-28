exports.handler = function(context, event, callback) {
   const client = context.getTwilioClient();
   const friendlyName = event.friendlyName;
   client.taskrouter.v1.workspaces.create({
    friendlyName: friendlyName
   })
   .then(workspace => {
   callback(null, workspace);
    })
    .catch(err => {
   callback(err);
    });
   };

   // additional workspace  , but likley not to use 
   