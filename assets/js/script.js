window.onload = function () {
  const greeting = document.getElementById("greeting");
  const bookImage = document.getElementById("bookImage");
  const buttons = document.getElementById("buttons");

  // Fade-in animation for the greeting
  greeting.style.opacity = 1;

  // Fade-in animation for the book image after the greeting
  setTimeout(() => {
      bookImage.classList.remove("hidden");
      bookImage.style.opacity = 1;
  }, 2000); // 2 seconds

  // Delay the show of buttons
  setTimeout(() => {
      buttons.style.opacity = 1;
  }, 4000); // 4 seconds
};