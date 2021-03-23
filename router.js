App.config(($routeProvider) => {
  $routeProvider
  // Index
  .when("/",{
    templateUrl: "Components/indexComponent/index.html",
    controller: function ($scope) {
      $scope.category = "";
    }
  })
  // ADMIN
  .when("/admin",{
    templateUrl: "Components/adminComponent/indexComponent.html",
    css : ["assets/stylesheets/indexAdmin.css"],
    controller: "IndexAdmin"
  })
  // Search
  .when("/search",{
    templateUrl: "Components/pageComponent/indexComponent.html",
    css : ["assets/stylesheets/indexPage.css",
           "assets/stylesheets/responsivePage.css"],
    controller: "IndexPage"
  })

  // Game, SortWare, Movie
  .when("/:category/:tag",{
    templateUrl: "Components/pageComponent/indexComponent.html",
    css : ["assets/stylesheets/indexPage.css",
           "assets/stylesheets/responsivePage.css"],
    controller: "IndexPage" 
  })

  // Views Detail
  .when("/views/:category/:params",{
    templateUrl: "./Components/postComponent/indexComponent.html",
    css : ["assets/stylesheets/indexPost.css",
    "assets/stylesheets/responsivePost.css"],
    controller: "IndexPost"
  })

})