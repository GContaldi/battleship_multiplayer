var context = require.context('./specs', true, /Spec\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
console.log(context.keys());