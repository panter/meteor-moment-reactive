Package.describe({
  name: 'panter:moment-reactive',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'momentjs, but reactive. \'nuff said',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-moment-reactive',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('tracker', 'client');
  api.use('momentjs:moment@2.11.2');
  api.addFiles('moment-reactive.js');
  api.export("momentReactive");
});

