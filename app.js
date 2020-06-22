const container = document.querySelector(".container");
const coffees = [
  {
    name: "REACT",
    image: "/React_Native_Logo.png"
  },
  {
    name: "ANGULAR",
    image: "/461803-angular-JavaScript-HTML.jpg"
  },
  {
    name: "JAVASCRIPT",
    image: "/JavaScript-Wallpapers-Wallpaper-Cave.jpg"
  },
  {
    name: "Vue.js",
    image: "/maxresdefault.jpg"
  },
  {
    name: "SPRING BOOT",
    image: "/0_Rmf52gWzf3hoj4eW.jpg"
  },
  {
    name: "JAVA",
    image: "/383133.jpg"
  },
  {
    name: "Inventore",
    image: "/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
