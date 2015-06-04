(->
  app = angular.module("puton", [])
  gem =
    name: "user"
    id: "1827"
    bio: "bio of user blah"

  app.controller "DataController", ->
    @user = gem
)()