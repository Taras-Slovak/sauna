function booking() {
  const getAllBooking = document.querySelectorAll(".booking");

  getAllBooking.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(
        btn.firstElementChild.firstElementChild.nextElementSibling
          .firstElementChild,
      );
    });
  });
}

booking();
