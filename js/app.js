const input = document.querySelector('input[type="text"]');
const button = document.querySelector(".btn-go");
const error = document.querySelector(".error-message");

button.addEventListener("click", (e) => {
  const value = input.value;
  if (
    value.length === 0 ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
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
