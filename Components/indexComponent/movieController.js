App.component("movie",{
  templateUrl: "./Components/indexComponent/movieComponent.html",
  controller: function () {
    // Add JavaScripts
    MovieController()
    // console.log("Movie Rendered!");
  }
})

function MovieController() {
  // Tab-active-phim
  let tabsMovie = $$(".tab__wrapper[role='tab-movies']>button");
  tabsMovie.forEach(btn =>{
    btn.addEventListener("click", ()=>{
      const tabsContentMovie = $$(".tab__contain[role='tab-movie-item']");
      // Clear active Tab
      tabsMovie.forEach(btn=> btn.classList.remove("tab-active"));
      // Hidden content
      tabsContentMovie.forEach(content => content.classList.remove("tab__contain-active"));
      // Add active button
      btn.classList.add("tab-active");
      // Show content
      const id = btn.id;
      $(`.tab__contain#${id}`).classList.add("tab__contain-active");
    });
  })
}