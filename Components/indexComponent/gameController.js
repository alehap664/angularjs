App.component("game",{
  templateUrl: "./Components/indexComponent/gameComponent.html",
  controller: function ($http, $scope, $getData) {
    const urlNew = `https://ndthinh48-angularjs.herokuapp.com/api/game/new`;
    const urlTop = `https://ndthinh48-angularjs.herokuapp.com/api/game/top`;
    const urlUpdate = `https://ndthinh48-angularjs.herokuapp.com/api/game/update`;

    $getData($http, urlNew, (err, data) => {
      if(err) throw err;
      $scope.gameNew = data;
    });
    $getData($http, urlTop, (err, data) => {
      if(err) throw err;
      $scope.gameTop = data;
    });
    $getData($http, urlUpdate, (err, data) => {
      if(err) throw err;
      $scope.gameUpdate = data;
    });
    // Add JavaScripts
    GameController()
    // console.log("Game Rendered!");
  }
})

function GameController() {
  // Tab-active-game
  let tabsGame = $$(".tab__wrapper[role='tab-games']>button");
  tabsGame.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabsContentGame = $$(".tab__contain[role='tab-game-item']");
      // Clear active Tab
      tabsGame.forEach(btn => btn.classList.remove("tab-active"));
      // Hidden content
      tabsContentGame.forEach(content => content.classList.remove("tab__contain-active"));
      // Add active button
      btn.classList.add("tab-active");
      // Show content
      const id = btn.id;
      $(`.tab__contain#${id}`).classList.add("tab__contain-active");
    });
  })
}