(function() {
  (function() {
    var app, gem;
    app = angular.module("puton", []);
    gem = {
      name: "user",
      id: "1827",
      bio: "bio of user blah"
    };
    return app.controller("DataController", function() {
      return this.user = gem;
    });
  })();

}).call(this);
