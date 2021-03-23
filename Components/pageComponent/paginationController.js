App.component("pagination",{
  templateUrl: "./Components/pageComponent/paginationComponent.html",
  controller: function ($scope) {
    $scope.search = $scope.$parent.search;
    $scope.category = $scope.$parent.category;
    $scope.tag =  $scope.$parent.tag;
    $scope.currentPage = $scope.$parent.currentPage;
    $scope.path = $scope.$parent.path;
    $scope.skip = 0;
    if($scope.$parent.currentPage % 5 === 0){
      $scope.skip += $scope.$parent.currentPage - 3;
    }
    else if($scope.$parent.currentPage > 5){
      $scope.skip += $scope.$parent.currentPage - 3;
    }
    // console.log("pagination Rendered!");
  }
})