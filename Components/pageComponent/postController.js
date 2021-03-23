App.component("post",{
  templateUrl: "./Components/pageComponent/postComponent.html",
  controller: function ($scope) {
    $scope.category = $scope.$parent.category;
    $scope.start = $scope.$parent.currentPage * 12 - 12;
    // console.log("Post Rendered!");
  }
})