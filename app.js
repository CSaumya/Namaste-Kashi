
  const toggleBtn = document.getElementById("nav-toggle");
  const navLists = document.getElementById("nav-lists");

  toggleBtn.addEventListener("click", () => {
    navLists.classList.toggle("show");
  });

  toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  function MoreLess() {
  const dots = document.getElementById("myboxId");
  const moreText = document.getElementById("myboxId2");
  const btnText = document.getElementById("btn");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.innerHTML = "...";
    btnText.innerHTML = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.innerHTML = "";
    btnText.innerHTML = "Read Less";
  }
}
