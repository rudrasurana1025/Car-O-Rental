let menuSelect = document.querySelector("#menuIcon");
let navSelect = document.querySelector(".navbar");

menuSelect.onclick = () => {
  menuSelect.classList.toggle("bx-x");
  navSelect.classList.toggle("active");
};

window.onscroll = () => {
  menuSelect.classList.remove("bx-x");
  navSelect.classList.remove("active");
};

const scr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

scr.reveal(".text", { delay: 200, origin: "top" });
scr.reveal(".form form", { delay: 400, origin: "left" });
scr.reveal(".heading", { delay: 400, origin: "top" });
scr.reveal(".rideContainer .box", { delay: 500, origin: "top" });
scr.reveal(".servicesContainer .box", { delay: 400, origin: "top" });
scr.reveal(".reviewsContainer", { delay: 500, origin: "top" });
scr.reveal(".newsletter .box", { delay: 400, origin: "top" });