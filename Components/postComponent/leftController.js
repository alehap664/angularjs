App.component("left",{
  templateUrl: "./Components/postComponent/leftComponent.html",
  controller: function ($scope, $rootScope, $routeParams) {
    // console.log("Main left Rendered!");
  }
})
let count = 0;
let inter = null;
function Left() {
  // Slide Show
  // Select Div chứa ảnh chính
  let wrapperScreenShots = $(".slide__wrapper--screenshots");
  // Select Div chứa ảnh nhỏ
  let wrapperThumbs = $(".slide__wrapper--thumbs");
  // Select All ảnh chính
  let imgScreenshots = $$(".slide__img--screenshots");
  // Select All ảnh nhỏ
  let imgThumbs = $$(".slide__img--thumbs");

  wrapperScreenShots.style.width = 100 * imgScreenshots.length + "%";
  wrapperThumbs.style.width = 100 * (imgThumbs.length / 4) + "%";

  let INDEX = 0
  function next(index) {
    // console.log("Next running...");
    INDEX = index
    INDEX++
    wrapperScreenShots.style.transform = `translate(-${index * (100 / imgScreenshots.length)}%)`

    wrapperThumbs.style.transform = ((INDEX - 1) % 4 === 0 || INDEX === 1)
      ? wrapperScreenShots.style.transform
      : wrapperThumbs.style.transform

    if (INDEX >= imgScreenshots.length) {
      INDEX = 0
    }
    thumbsAcitve(index)
  }

  function thumbsAcitve(index) {
    imgThumbs.forEach(e => e.classList.remove("slide__img--thumbs-active"))
    imgThumbs[index].classList.add("slide__img--thumbs-active")
  }
  count++;
  if (count > 1) clearInterval(inter);

  next(INDEX)
  inter = setInterval(() => {
    next(INDEX)
  }, 3000);

  // Thêm sự kiện click cho các ảnh nhỏ
  imgThumbs.forEach( (element, index) => {
    element.addEventListener("click" , ()=>{
      next(index)
    })
  })
}