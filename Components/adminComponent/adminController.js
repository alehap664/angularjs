App.controller("IndexAdmin", function ($getData, $rootScope, $http, $scope) {
  const urlGame = `https://ndthinh48-angularjs.herokuapp.com/api/game?tag=all-game`;
  const urlSoftWare = `https://ndthinh48-angularjs.herokuapp.com/api/software?tag=all-software`;
  $rootScope.currentPageGame = 1;
  $rootScope.currentPageSoftWare = 1;

  if ($rootScope.ADMIN_GAME == 0) {
    $getData($http, urlGame, (err, data) => {
      if(err) throw err
      $rootScope.ADMIN_GAME = data;
      $rootScope.ADMIN_GAME.reverse();
      
      let totalPage = Math.ceil(data.length / 5);
      for(let i = 1 ; $rootScope.ADMIN_GAME_PAGINATION.push(i++) < totalPage;);
  
      console.log("Get Data Game Completed");
    })
  }

  if ($rootScope.ADMIN_SOFTWARE == 0) {
    $getData($http, urlSoftWare, (err, data) => {
      if(err) throw err
      $rootScope.ADMIN_SOFTWARE = data;
      $rootScope.ADMIN_SOFTWARE.reverse();
      
      let totalPage = Math.ceil(data.length / 5);
      for(let i = 1 ; $rootScope.ADMIN_SOFTWARE_PAGINATION.push(i++) < totalPage;);
  
      console.log("Get Data Software Completed");
    })
  }

  $scope.skipGame = 0
  $rootScope.paginationGame = (index) => {
    $rootScope.currentPageGame = index;
    $scope.skipGame = (index-1) * 5;
  }
  $scope.skipSoftWare = 0
  $rootScope.paginationSoftWare = (index) => {
    $rootScope.currentPageSoftWare = index;
    $scope.skipSoftWare = (index-1) * 5;
  }
  Admin()
})

function Admin() {
  // Tab-active
  let tabsAdmin = $$(".tab__wrapper[role='tab-admin']>button");
  tabsAdmin.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabsContentAdmin = $$(".tab__contain[role='tab-admin']");
      // Clear active Tab
      tabsAdmin.forEach(btn => btn.classList.remove("tab-active"));
      // Hidden content
      tabsContentAdmin.forEach(content => content.classList.remove("tab__contain-active"));
      // Add active button
      btn.classList.add("tab-active");
      // Show content
      const id = btn.id;
      $(`.tab__contain#${id}`).classList.add("tab__contain-active");
    });
  })

}