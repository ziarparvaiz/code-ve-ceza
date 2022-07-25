function header() {
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

export default header();
