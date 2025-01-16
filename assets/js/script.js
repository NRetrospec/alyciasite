window.onload = function () {
  const greeting = document.getElementById("greeting");
  const bookImage = document.getElementById("bookImage");
  const buttons = document.getElementById("buttons");

  // Fade-in animation for the greeting
  greeting.style.opacity = 1;

  // Delay the fade-in of the book image after the greeting
  setTimeout(() => {
      bookImage.classList.remove("hidden");
      bookImage.style.opacity = 1;
  }, 2000); // 2 seconds for greeting to fade in

  // Delay the show of buttons
  setTimeout(() => {
      buttons.style.opacity = 1;
  }, 4000); // 4 seconds in total for buttons
};