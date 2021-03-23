App.component("right",{
  templateUrl: "./Components/postComponent/rightComponent.html",
  controller: function ($scope) {
    $scope.category = $scope.$parent.category;
    // console.log("Main right Rendered!");
  }
})

function Right() {
  // console.log("Right");
  // Tab-active-download
  let tabDownload = $$(".tab__wrapper[role='tab-download']>button");
  tabDownload.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabContentDownload = $$(".tab__contain[role='tab-download-item']");
      // Clear active Tab
      tabDownload.forEach(btn => btn.classList.remove("tab-active"));
      // Hidden content
      tabContentDownload.forEach(content => content.classList.remove("tab__contain-active"));
      // Add active button
      btn.classList.add("tab-active");
      // Show content
      const id = btn.id;
      $(`.tab__contain#${id}`).classList.add("tab__contain-active");
    });
  })
}