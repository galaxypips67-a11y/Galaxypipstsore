const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Open or close the menu when the ☰ button is clicked
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Close the menu after a link is tapped
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
  }
});