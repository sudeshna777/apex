  document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  window.onscroll = () => {
    navbar.classList.remove("active");
  };

  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };

  // Apply dark mode on load if previously enabled
  if (darkmode === "active") enableDarkmode();

  // Toggle dark mode on button click
  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });
});

