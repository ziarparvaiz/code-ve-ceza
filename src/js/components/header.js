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
    const hamburgerIcon = document.querySelector(".hamburger-menu");
    const drawerMenu = document.querySelector(".drawer-menu-background");
    const myWallet = document.querySelector("#my-wallet");
    const mobileNav = document.querySelector("#mobile-nav");
    const backArrow = document.querySelector(
      ".drawer-menu-wrapper .back-arrow"
    );
    const homeNav = document.querySelector("#home-nav");
    const backHomeNav = document.querySelectorAll(".sub-menu .wrapper-header");
    const subMenus = document.querySelectorAll(".sub-menu");
    const subExplore = document.querySelector("#sub-explore");
    const goExploreMenu = document.querySelector("#goExplore");
    const subStats = document.querySelector("#sub-stats");
    const goStatsMenu = document.querySelector("#goStats");
    const subResources = document.querySelector("#sub-resources");
    const goResourcesMenu = document.querySelector("#goResources");

    drawerChecker(); // Check whether drawerMenu is active or not when DOM is loaded.
    window.addEventListener("resize", () => {
      mobileNav.classList.remove("active");
      drawerChecker();
    });
    walletIcon.addEventListener("click", () => {
      myWallet.classList.toggle("active");
      mobileNav.classList.remove("active");
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("active");
      });
      homeNav.classList.add("active");
      drawerChecker();
      hamburgerIcon.firstElementChild.textContent = "menu";
    });

    hamburgerIcon.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      myWallet.classList.remove("active");
      drawerChecker();
    });

    drawerMenu.addEventListener("click", () => {
      myWallet.classList.remove("active");
      mobileNav.classList.remove("active");
      drawerChecker();
    });

    backArrow.addEventListener("click", () => {
      drawerMenuWrapper.classList.toggle("active");
      drawerChecker();
    });

    backHomeNav.forEach((item) => {
      item.addEventListener("click", () => {
        subMenus.forEach((subMenu) => {
          subMenu.classList.remove("active");
          homeNav.classList.add("active");
        });
      });
    });

    goExploreMenu.addEventListener("click", () => {
      subExplore.classList.add("active");
      homeNav.classList.remove("active");
    });

    goStatsMenu.addEventListener("click", () => {
      subStats.classList.add("active");
      homeNav.classList.remove("active");
    });

    goResourcesMenu.addEventListener("click", () => {
      subResources.classList.add("active");
      homeNav.classList.remove("active");
    });

    function drawerChecker() {
      if (
        myWallet.classList.contains("active") ||
        mobileNav.classList.contains("active")
      ) {
        //Prevents the user from scrolling the page while the drawer menu is on the screen.
        document.body.style.overflow = "hidden";
        drawerMenu.style.visibility = "visible";
        hamburgerIcon.firstElementChild.textContent = "close";
      } else {
        drawerMenu.style.visibility = "hidden";
        document.body.style.overflowY = "auto";
        hamburgerIcon.firstElementChild.textContent = "menu";
      }
    }
  }
}

export default header();
