App.component("software",{
  templateUrl: "./Components/indexComponent/softWareComponent.html",
  controller: function ($http, $scope, $getData) {
    const urlNew = `https://ndthinh48-angularjs.herokuapp.com/api/software/new`;
    const urlTop = `https://ndthinh48-angularjs.herokuapp.com/api/software/top`;
    const urlUpdate = `https://ndthinh48-angularjs.herokuapp.com/api/software/update`;

    $getData($http, urlNew, (err, data) => {
      if(err) throw err;
      $scope.softWareNew = data;
    });
    $getData($http, urlTop, (err, data) => {
      if(err) throw err;
      $scope.softWareTop = data;
    });
    $getData($http, urlUpdate, (err, data) => {
      if(err) throw err;
      $scope.softWareUpdate = data;
    });
    // Add JavaScripts
    SoftWareController();
    // console.log("SoftWare Rendered!");
  }
})

function SoftWareController() {
  // Tab-active-game
  let tabsGame = $$(".tab__wrapper[role='tab-software']>button");
  tabsGame.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabsContentGame = $$(".tab__contain[role='tab-software-item']");
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