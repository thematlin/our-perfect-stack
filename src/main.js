require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    text: '..//bower_components/requirejs-text/text',
    durandal:'../bower_components/durandal/js',
    plugins : '../bower_components/durandal/js/plugins',
    transitions : '../bower_components/durandal/js/transitions',
    knockout: '../bower_components/knockout.js/knockout',
    modules: 'modules'
  }
});

define(function(require) {
  var system = require('durandal/system'),
      app = require('durandal/app'),
      viewLocator = require('durandal/viewLocator');

  system.debug(true);
 
  app.title = 'Sweet perfect stack';
 
  app.configurePlugins({
    router:true,
    dialog: true
  });

  console.log('asd');
  app.start().then(function() {
    viewLocator.useConvention('assets/modules', 'assets/modules');

    app.setRoot('assets/modules/shell');
  });
});