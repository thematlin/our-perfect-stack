require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    text: '..//bower_components/requirejs-text/text',
    durandal:'../bower_components/durandal/js',
    plugins : '../bower_components/durandal/js/plugins',
    transitions : '../bower_components/durandal/js/transitions',
    knockout: '../bower_components/knockout.js/knockout',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
  },
  shim: {
      "bootstrap": {
        deps: ["jquery"],
        exports: "$.fn.popover"
      }
  },
  enforceDefine: true
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

  app.start().then(function() {
    app.setRoot('assets/modules/shell', 'entrance');
  });
});