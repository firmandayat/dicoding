let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".slider");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = "block";
  console.log("gambar ke" + start);
  start++;

  setTimeout(otomatis, 3000);
}

const toggle = document.querySelector(".toggle-btn");
const toggleBtn = document.querySelector(".toggle-btn i");
const dropDown = document.querySelector(".dropdown-menu");

toggle.onclick = function () {
  dropDown.classList.toggle("open");
  const isOpen = dropDown.classList.contains("open");

  toggleBtn.classList = isOpen ? "fa fa-times" : "fa-solid fa-bars";
};

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".scroll");
sr.reveal(".sc1", {delay:200});
sr.reveal(".sc2", { delay: 400 });
sr.reveal(".sc3", { delay: 600 });

