document.getElementById("theme-toggle").addEventListener("click", function () {
  var root = document.documentElement;
  var dark = root.dataset.theme === "dark";
  if (dark) {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = "dark";
  }
  localStorage.setItem("theme", dark ? "light" : "dark");
});
