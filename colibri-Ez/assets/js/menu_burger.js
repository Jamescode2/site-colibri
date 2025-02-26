const menu = document.querySelector("#menu_burger");
const close = document.querySelector("#btn_close");
const open = document.querySelector("#btn_open");

function ouvrirmenu() {
    if (open.style.display = "block") {
        open.style.display = "none"
        close.style.display = "block";
        menu.style.display = "block";
    } else {
        return false;
    }
}

function fermermenu() {
    if (close.style.display = "block") {
    open.style.display = "block"    
    close.style.display = "none";
    menu.style.display = "none";
  } else {
    return false;
  }
}

open.addEventListener("click", ouvrirmenu);
close.addEventListener("click", fermermenu);

function Function1(largeScreen) {
    if (largeScreen.matches) {
        menu.style.display = 'none';
        open.style.display = "none";
        close.style.display = "none";
    } else {
        open.style.display = "block";
        menu.style.display = "none";
    }
};

let largeScreen = window.matchMedia("(min-width: 882px)")
largeScreen.addListener(Function1)


const chevron = document.querySelector(".scroll");
chevron.addEventListener('click', () => {
  // Récupérer la hauteur totale du document (la hauteur de la page)
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // Faire défiler vers le bas
  window.scrollTo({
    top: documentHeight,
    left: 0,
    behavior: "smooth"
  });
});

const chevron2 = document.querySelector(".scroll2");
chevron2.addEventListener('click', () => {
  // Récupérer la hauteur totale du document (la hauteur de la page)
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // Faire défiler vers le bas
  window.scrollTo({
    top: documentHeight,
    left: 0,
    behavior: "smooth"
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  // Afficher/masquer la flèche en fonction de la position de défilement
  window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
          scrollToTopButton.classList.add("visible");
      } else {
          scrollToTopButton.classList.remove("visible");
      }
  });

  // Faire défiler la page vers le haut lorsque la flèche est cliquée
  scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});


