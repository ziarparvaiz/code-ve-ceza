function header() {
  searchBar();
  drawerMenu();

  function searchBar() {
    //Initialize elements
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".search-bar");
    const searchBarInput = document.querySelector(".search-bar > input");
    const backArrow = document.querySelector(".search-bar .back-arrow");

    //Add click behaviour to .search-icon in the nav.
    searchIcon.addEventListener("click", () => {
      searchBar.classList.add("active");
      searchBarInput.placeholder = "Search Opensea";
    });

    //Add click behaviour to .back-arrow inside the .search-bar element.
    backArrow.addEventListener("click", () => {
      searchBar.classList.remove("active");
      searchBarInput.placeholder = "Search items, collections, and accounts";
    });

    //Tracks window resizing.
    window.addEventListener("resize", () => {
      /* If user resizes window while .search-bar has .active class, then the placeholder of the search bar's input will be changed 
    and .active class will be removed from .search-bar's classList. */

      if (window.screen.width > "768")
        // 768 px equals MD screen size. So, it's a critic breakpoint for displaying the .search-bar element.
        searchBarInput.placeholder = "Search items, collections, and accounts";
      searchBar.classList.remove("active");
    });
  }

  function drawerMenu() {
    const walletIcon = document.querySelector(".wallet-icon");
    const drawerMenu = document.querySelector(".drawer-menu-background");
    const drawerMenuWrapper = document.querySelector(".drawer-menu-wrapper");
    const backArrow = document.querySelector(
      ".drawer-menu-wrapper .back-arrow"
    );
    drawerChecker();
    function drawerChecker() {
      if (drawerMenuWrapper.classList.contains("active")) {
        //Prevents the user from scrolling the page while the drawer menu is on the screen.
        document.body.style.overflow = "hidden";
        drawerMenu.style.visibility = "visible";
      } else {
        drawerMenu.style.visibility = "hidden";
      }
    }

    walletIcon.addEventListener("click", () => {
      drawerMenuWrapper.classList.toggle("active");
      drawerChecker();
    });

    drawerMenu.addEventListener("click", () => {
      drawerMenuWrapper.classList.toggle("active");
      drawerChecker();
    });

    backArrow.addEventListener("click", () => {
      drawerMenuWrapper.classList.toggle("active");
      drawerChecker();
    });
  }
}

export default header();
