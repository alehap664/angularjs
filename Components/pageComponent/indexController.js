App.controller("IndexPage", function($routeParams, $http, $scope, $getData, $rootScope, $location) {
  // Hàm callback xử lý dữ liệu lấy về từ API
  $scope.path = $location.$$path;

  function handelData(err, data) {
    if(err) throw err
    $rootScope.GAMES_PAGE = data;
    $rootScope.GAMES_PAGE.reverse();
    
    $rootScope.PAGINATION = []
    let totalPage = Math.ceil(data.length / 15);
    for(let i = 1 ; $rootScope.PAGINATION.push(i++) < totalPage;);

    // Nếu dữ liệu = [] thì không tìm thấy
    if (data == 0) {
      $rootScope.found = false;
    }
    // console.log("Get data completed");
  }

  $rootScope.found = true;
  // Trang hiện tại, mặc định là 1
  $scope.currentPage = $routeParams.page === undefined ? 1 : parseInt($routeParams.page);
  // Category
  $scope.search = $routeParams.search;
  $scope.category = $routeParams.category;
  $scope.searchCategory = "";
  // Tag để hiển thị category
  $scope.tag = $routeParams.tag || "all";

  // Nếu khác tag thì lấy dữ liệu từ API
  if ($scope.tag !== $rootScope.OLD_TAG) {
    if ($scope.search !== undefined) {
      const url = `https://ndthinh48-angularjs.herokuapp.com/api/search?search=${$routeParams.search}&category=${$routeParams.category}`
      $getData($http, url, handelData)
    }else{
      const url = `https://ndthinh48-angularjs.herokuapp.com/api/${$routeParams.category}?tag=${$routeParams.tag}`
      $getData($http, url, handelData)
    }
  }
  
  // Tag của trang trước
  $rootScope.OLD_TAG = $routeParams.tag;
})