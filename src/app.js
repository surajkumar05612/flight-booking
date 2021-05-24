const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const flight = document.querySelector(".main-container");
const login = document.querySelector(".btn12");
const back = document.querySelector("#back-btn");
const flight_btn = document.querySelector("#search-flight");
const flight_page = document.querySelector(".flight-container");
const book = document.querySelector(".btn12.book");
const passenger = document.querySelector(".passenger-container");
const book_final = document.querySelector("#book-btn-final");
const final_page = document.querySelector(".pop-container");


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// login activity

login.addEventListener("click", ()=> {
  container.classList.add("active");
  flight.classList.add("active");
});

back.addEventListener("click", ()=> {
  container.classList.remove("active");
  flight.classList.remove("active");
});

flight_btn.addEventListener("click", ()=> {
  flight.classList.remove("active")
  flight_page.classList.add("active")
});

book.addEventListener("click", ()=> {
  flight_page.classList.remove("active");
  passenger.classList.add("active");
})

book_final.addEventListener("click", ()=> {
  passenger.classList.remove("active")
  final_page.classList.add("active");
});
