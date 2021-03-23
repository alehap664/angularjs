App.controller("IndexPost", function ($scope, $routeParams, $http, $sce, $getData) {
  $scope.category = $routeParams.category;

  const url = `https://ndthinh48-angularjs.herokuapp.com/api/${$scope.category}/${$routeParams.params}`;
  $getData($http, url, (err, data) => {
    if(err) throw err
    $scope.post = data[0];
    $scope.post.youtube = $sce.trustAsResourceUrl($scope.post.youtube);
    // console.log("Get data Completed");
    // Thêm Javascript sau khi đã render xong dữ liệu
    setTimeout(() => {
      Right()
      Left()
    }, 0);
  })
  
})