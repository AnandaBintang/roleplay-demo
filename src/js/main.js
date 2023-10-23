document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("preload-none");

    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});
