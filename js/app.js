const input = document.querySelector('input[type="text"]');
const button = document.querySelector(".btn-go");
const error = document.querySelector(".error-message");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
// const scrollBtn = document.querySelectorAll(".dot");

button.addEventListener("click", (e) => {
  const value = input.value;
  if (
    value.length === 0 ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    )
  ) {
    input.classList.add("error");
    error.classList.add("show-error-message");
    setTimeout(() => {
      input.classList.remove("error");
      error.classList.remove("show-error-message");
    }, 3000);
  }
  e.preventDefault();
});

hamburger.addEventListener("click", () => {
  if (close.classList.contains("show-close")) {
    close.classList.remove("show-close");
  } else {
    close.classList.add("show-close");
    nav.classList.add("show-navbar");
    hamburger.style.display = "none";
    document.body.style.overflow = "hidden";
  }
});

close.addEventListener("click", () => {
  if (close.classList.contains("show-close")) {
    close.classList.remove("show-close");
    nav.classList.remove("show-navbar");
    document.body.style.overflow = "auto";
    hamburger.style.display = "block";
  } else {
    close.classList.add("show-close");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
});

// scrollBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".slider").scrollLeft += 380;
//   });
// });
