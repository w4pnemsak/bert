Package.describe({
  name: "w4pnemsak:bert",
  version: "2.2.3",
  summary: "A fork of client side, multi-style alerts system for Meteor by themeteorchef.",
  git: "http://github.com/w4pnemsak/bert",
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.2");

  api.use(
    ["ecmascript", "templating", "session", "jquery", "fourseven:scss@4.12.0"],
    "client"
  );

  api.addFiles(
    [
      "templates/bert-alert.html",
      "templates/bert-alert.js",
      "templates/body.html",
      "stylesheets/colors.scss",
      "stylesheets/flexbox.scss",
      "stylesheets/bert.scss",
      "bert.js",
    ],
    "client"
  );

  api.export("Bert");
});

Package.onTest(function (api) {
  api.use(["tinytest", "session", "jquery"]);
  api.use("w4pnemsak:bert");
  api.addFiles("tests/client.js", "client");
});
