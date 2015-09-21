// require all specs
var testsContext = require.context('./specs', true, /Spec\.js$/);

testsContext.keys().forEach(testsContext);

// require all src
var componentsContext = require.context('./resources', true, /\.js$/);

componentsContext.keys().forEach(componentsContext);
