document.getElementById("reject").addEventListener("click", () => {
  document.getElementById("nope").classList.add("active");
  document.getElementById("like").classList.remove("active");
});

document.getElementById("heart").addEventListener("click", () => {
  document.getElementById("like").classList.add("active");
  document.getElementById("nope").classList.remove("active");
});
