App.component("navigation",{
  templateUrl: "./Reusable/navigationComponent/navigation.html",
  controller: function ($http, $getData, $rootScope) {
    const url = `https://ndthinh48-angularjs.herokuapp.com/api/category`
    $getData($http, url, (err, data) => {
      $rootScope.category = data;
      // Add JavaScripts
      NavigationController()
    })
    // console.log("Navigation Rendered!");
  }
})


function NavigationController() {
  // Menu Sticky
  window.addEventListener("scroll", () => {
    let nav = $(".menu_nav");
    let width = document.documentElement.clientWidth;
    if (document.body.scrollTop > 67 || document.documentElement.scrollTop > 67) {
      // Chỉ Sticky khi width lớn 768
      width >= 768 ? nav.classList.add("is-sticky") : nav.classList.remove("is-sticky")
    } else {
      nav.classList.remove("is-sticky");
    }
  });


  // Show-Close Menu
  const menuShow = $(".menu_nav_navbar_collapsed");
  let isShow = false;
  menuShow.addEventListener("click", () => {
    const menuItem = $(".menu_nav_navbar_items");
    if (isShow === false) {
      menuItem.style.display = "flex";
      isShow = true;
    } else {
      menuItem.style.display = "none";
      isShow = false;
    }
  })

  // Dropdown Menu
  const dropdownButtons = $$(".fas.fa-angle-double-down");
  const dropdownMenu = $$(".dropdown--menu");
  dropdownButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      let width = document.documentElement.clientWidth;
      const dropdown = btn.parentElement;
      const submenu = dropdown.children[2];
      if (width < 768) {
        submenu.classList.toggle("dropdown--active")
      }
    })

  })

  window.addEventListener("resize", () => {
    let width = document.documentElement.clientWidth;
    if (width > 768) {
      // Style flex cho Dropdown Menu trán style = none ở event "Dropdown Menu"
      dropdownMenu.forEach(ele => ele.classList.remove("dropdown--active"));
    }
  })

}
