let headerul = document.getElementById("header-ul");

let menu = document.getElementById("menu");


const show = () => {

    if (headerul.style.display === "none") {
        headerul.style.display = "block";
      } else {
        headerul.style.display = "none";
      }
  };

var mql = window.matchMedia('(max-width: 800px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 800 pixels wide or less */
    headerul.style.display = "none";

  } else {
    headerul.style.display = "flex";

  }
}

mql.addListener(screenTest);
