let categories = [
  {
    category: "Action & Adventure",
    subcategories: [
      { name: "Asian Action Movies", id: 77232 },
      { name: "Classic Action & Adventure", id: 46576 },
      { name: "Action Comedies", id: 43040 },
      { name: "Action Thrillers", id: 43048 },
      { name: "Adventures", id: 7442 },
      { name: "Comic Book and Superhero Movies", id: 10118 },
      { name: "Westerns", id: 7700 },
      { name: "Spy Action & Adventure", id: 10702 },
      { name: "Crime Action & Adventure", id: 9584 },
      { name: "Foreign Action & Adventure", id: 11828 },
      { name: "Martial Arts Movies", id: 8985 },
      { name: "Military Action & Adventure", id: 2125 },
    ],
  },
  {
    category: "Anime",
    subcategories: [
      { name: "Adult Animation", id: 11881 },
      { name: "Anime Action", id: 2653 },
      { name: "Anime Comedies", id: 9302 },
      { name: "Anime Dramas", id: 452 },
      { name: "Anime Features", id: 3063 },
      { name: "Anime Sci-Fi", id: 2729 },
      { name: "Anime Horror", id: 10695 },
      { name: "Anime Fantasy", id: 11146 },
      { name: "Anime Series", id: 6721 },
    ],
  },
  {
    category: "Children & Family Movies",
    subcategories: [
      { name: "Movies for ages 0 to 2", id: 6796 },
      { name: "Movies for ages 2 to 4", id: 6218 },
      { name: "Movies for ages 5 to 7", id: 5455 },
      { name: "Movies for ages 8 to 10", id: 561 },
      { name: "Movies for ages 11 to 12", id: 6962 },
      { name: "Education for Kids", id: 10659 },
      { name: "Disney", id: 67673 },
      { name: "Movies based on children's books", id: 10056 },
      { name: "Family Features", id: 51056 },
      { name: "TV Cartoons", id: 11177 },
      { name: "Kids' TV", id: 27346 },
      { name: "Kids Music", id: 52843 },
      { name: "Animal Tales", id: 5507 },
    ],
  },
  {
    category: "Classic Movies",
    subcategories: [
      { name: "Classic Comedies", id: 31694 },
      { name: "Classic Dramas", id: 29809 },
      { name: "Classic Sci-Fi & Fantasy", id: 47147 },
      { name: "Classic Thrillers", id: 46588 },
      { name: "Film Noir", id: 7687 },
      { name: "Classic War Movies", id: 48744 },
      { name: "Epics", id: 52858 },
      { name: "Classic Foreign Movies", id: 32473 },
      { name: "Silent Movies", id: 53310 },
      { name: "Classic Westerns", id: 47465 },
    ],
  },
  {
    category: "Comedies",
    subcategories: [
      { name: "Dark Comedies", id: 869 },
      { name: "Foreign Comedies", id: 4426 },
      { name: "Late Night Comedies", id: 1402 },
      { name: "Mockumentaries", id: 26 },
      { name: "Political Comedies", id: 2700 },
      { name: "Screwball Comedies", id: 9702 },
      { name: "Sports Comedies", id: 5286 },
      { name: "Stand-up Comedy", id: 11559 },
      { name: "Teen Comedies", id: 3519 },
      { name: "Satires", id: 4922 },
      { name: "Romantic Comedies", id: 5475 },
      { name: "Slapstick Comedies", id: 10256 },
    ],
  },
  {
    category: "Cult Movies",
    subcategories: [
      { name: "B-Horror Movies", id: 8195 },
      { name: "Campy Movies", id: 1252 },
      { name: "Cult Horror Movies", id: 10944 },
      { name: "Cult Sci-Fi & Fantasy", id: 4734 },
      { name: "Cult Comedies", id: 9434 },
    ],
  },
  {
    category: "Documentaries",
    subcategories: [
      { name: "Biographical Documentaries", id: 3652 },
      { name: "Crime Documentaries", id: 9875 },
      { name: "Foreign Documentaries", id: 5161 },
      { name: "Historical Documentaries", id: 5349 },
      { name: "Military Documentaries", id: 4006 },
      { name: "Sports Documentaries", id: 180 },
      { name: "Music & Concert Documentaries", id: 90361 },
      { name: "Travel & Adventure Documentaries", id: 1159 },
      { name: "Political Documentaries", id: 7018 },
      { name: "Religious Documentaries", id: 10005 },
      { name: "Science & Nature Documentaries", id: 2595 },
      { name: "Social & Cultural Documentaries", id: 3675 },
    ],
  },
  {
    category: "Dramas",
    subcategories: [
      { name: "Biographical Dramas", id: 3179 },
      { name: "Classic Dramas", id: 29809 },
      { name: "Courtroom Dramas", id: 528582748 },
      { name: "Crime Dramas", id: 6889 },
      { name: "Dramas based on Books", id: 4961 },
      { name: "Dramas based on real life", id: 3653 },
      { name: "Tearjerkers", id: 6384 },
      { name: "Foreign Dramas", id: 2150 },
      { name: "Sports Dramas", id: 7243 },
      { name: "Gay & Lesbian Dramas", id: 500 },
      { name: "Independent Dramas", id: 384 },
      { name: "Teen Dramas", id: 9299 },
      { name: "Military Dramas", id: 11 },
      { name: "Period Pieces", id: 12123 },
      { name: "Political Dramas", id: 6616 },
      { name: "Romantic Dramas", id: 1255 },
      { name: "Showbiz Dramas", id: 5012 },
      { name: "Social Issue Dramas", id: 3947 },
    ],
  },
  {
    category: "Faith & Spirituality",
    subcategories: [
      { name: "Faith & Spirituality Movies", id: 52804 },
      { name: "Spiritual Documentaries", id: 2760 },
      { name: "Kids Faith & Spirituality", id: 751423 },
    ],
  },
  {
    category: "Foreign Movies",
    subcategories: [
      { name: "Art House Movies", id: 29764 },
      { name: "Foreign Action & Adventure", id: 11828 },
      { name: "Classic Foreign Movies", id: 32473 },
      { name: "Foreign Comedies", id: 4426 },
      { name: "Foreign Documentaries", id: 5161 },
      { name: "Foreign Dramas", id: 2150 },
      { name: "Foreign Gay & Lesbian Movies", id: 8243 },
      { name: "Foreign Horror Movies", id: 8654 },
      { name: "Foreign Sci-Fi & Fantasy", id: 6485 },
      { name: "Foreign Thrillers", id: 10306 },
      { name: "Romantic Foreign Movies", id: 7153 },
      { name: "African Movies", id: 3761 },
      { name: "Australian Movies", id: 5230 },
      { name: "Belgian Movies", id: 262 },
      { name: "Korean Movies", id: 5685 },
      { name: "Latin American Movies", id: 1613 },
      { name: "Middle Eastern Movies", id: 5875 },
      { name: "New Zealand Movies", id: 63782 },
      { name: "Russian", id: 11567 },
      { name: "Scandinavian Movies", id: 9292 },
      { name: "Southeast Asian Movies", id: 9196 },
      { name: "Spanish Movies", id: 58741 },
      { name: "Greek Movies", id: 61115 },
      { name: "German Movies", id: 58886 },
      { name: "French Movies", id: 58807 },
      { name: "Eastern European Movies", id: 5254 },
      { name: "Dutch Movies", id: 10606 },
      { name: "Irish Movies", id: 58750 },
      { name: "Japanese Movies", id: 10398 },
      { name: "Italian Movies", id: 8221 },
      { name: "Indian Movies", id: 10463 },
      { name: "Chinese Movies", id: 3960 },
      { name: "British Movies", id: 10757 },
    ],
  },
  {
    category: "LGBTQ+ Movies",
    subcategories: [
      { name: "LGBTQ+ Comedies", id: 7120 },
      { name: "LGBTQ+ Dramas", id: 500 },
      { name: "Romantic LGBTQ+ Movies", id: 3329 },
      { name: "Foreign LGBTQ+ Movies", id: 8243 },
      { name: "LGBTQ+ Documentaries", id: 4720 },
      { name: "LGBTQ+ TV Shows", id: 65263 },
    ],
  },
  {
    category: "Horror Movies",
    subcategories: [
      { name: "B-Horror Movies", id: 8195 },
      { name: "Creature Features", id: 6895 },
      { name: "Cult Horror Movies", id: 10944 },
      { name: "Deep Sea Horror Movies", id: 45028 },
      { name: "Foreign Horror Movies", id: 8654 },
      { name: "Horror Comedy", id: 89585 },
      { name: "Monster Movies", id: 947 },
      { name: "Slasher and Serial Killer Movies", id: 8646 },
      { name: "Supernatural Horror Movies", id: 42023 },
      { name: "Teen Screams", id: 52147 },
      { name: "Vampire Horror Movies", id: 75804 },
      { name: "Werewolf Horror Movies", id: 75930 },
      { name: "Zombie Horror Movies", id: 75405 },
      { name: "Satanic Stories", id: 6998 },
    ],
  },
  {
    category: "Independent Movies",
    subcategories: [
      { name: "Experimental Movies", id: 11079 },
      { name: "Independent Action & Adventure", id: 11804 },
      { name: "Independent Thrillers", id: 3269 },
      { name: "Romantic Independent Movies", id: 9916 },
      { name: "Independent Comedies", id: 4195 },
      { name: "Independent Dramas", id: 384 },
    ],
  },
];

// The CSS that you want to apply
const css = `
  .my-select {
    position: relative;
    color: white;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;
    background-color: #EF476F; /*defaulted to dark theme color*/
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
    transform: skew(-10deg) rotate(-2deg);
    transition: all 0.3s ease;
    font-size: 10px;
    line-height: 1.2;
    margin: 0.5rem 0px;
    min-width: 100px;
    max-width: 150px;
    min-height: 10px;
    margin: 0 10px;
  }

  .my-select::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #06D6A0; /*defaulted to dark theme color*/
    z-index: -1;
    transform: skew(10deg) rotate(2deg);
  }
`;

// Create a new style element
const style = document.createElement("style");

// Add the CSS to the style element
style.appendChild(document.createTextNode(css));

// Add the style element to the head of the document
document.head.appendChild(style);

let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      let navigationMenu = document.querySelector(".navigation-tab");
      let selectClass = document.querySelector(".my-select");
      if (selectClass) return;
      if (navigationMenu && !selectClass) {
        let select = document.createElement("select");
        select.className = "my-select"; // This is the missing part

        // Create the default option element
        let defaultOption = document.createElement("option");
        defaultOption.textContent = "Categories";
        defaultOption.value = "";
        defaultOption.selected = true;
        select.appendChild(defaultOption);

        categories.forEach((category) => {
          let optgroup = document.createElement("optgroup");
          optgroup.label = category.category;

          category.subcategories.forEach((subcategory) => {
            let option = document.createElement("option");
            option.value = subcategory.id;
            option.textContent = subcategory.name;
            optgroup.appendChild(option);
          });

          try {
            // Get the current genre id from the URL
            let url = new URL(window.location.href);
            let pathSegments = url.pathname.split("/");

            // Define a flag to check if a valid genreId was found
            let validGenreIdFound = false;

            if (pathSegments.includes("genre")) {
              let genreId = pathSegments[pathSegments.indexOf("genre") + 1];

              // Check if the genreId is a number and is an available genre id
              if (
                !isNaN(genreId) &&
                Array.from(select.options).some(
                  (option) => option.value == genreId
                )
              ) {
                // Set the select's value to the current genre id
                select.value = genreId;
                validGenreIdFound = true;
              } else {
                // console.error(`Invalid genre ID: ${genreId}`);
              }
            } else {
              // console.error(`'genre' is not found in the URL`);
            }

            // If no valid genreId was found, set the select's value to the default option
            if (!validGenreIdFound) {
              select.value = ""; // Ensure that "" is the value for the default option
            }
          } catch (error) {
            // console.error("Error parsing the URL", error);

            // If there was an error parsing the URL, set the select's value to the default option
            select.value = ""; // Ensure that "" is the value for the default option
          }

          select.appendChild(optgroup);

          select.addEventListener("change", function () {
            let selectedGenre = this.value;
            if (selectedGenre)
              window.location.href = `https://netflix.com/browse/genre/${selectedGenre}`;
          });
        });

        navigationMenu.parentElement.appendChild(select);
        observer.disconnect(); // Disconnect observer once we found our element
      }
    }
  });
});

// Set up the observer to watch for DOM changes
observer.observe(document.body, { childList: true, subtree: true });
