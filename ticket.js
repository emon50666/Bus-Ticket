let selectedSeats = 0;
const totalSeats = 8;

function btn(seatId) {
  const seat = document.getElementById(seatId);

  seat.classList.toggle("active");

  if (seat.classList.contains("active")) {
    selectedSeats++;
  } else {
    selectedSeats--;
  }

  document.getElementById("current-site").textContent = selectedSeats;
  updateAvailableSeats();
  document.getElementById("grandTotal").textContent = 550 * selectedSeats;
}

const updateAvailableSeats = () => {
  let avaiableSeats = totalSeats - selectedSeats;
  document.getElementById("allSeat").textContent = avaiableSeats + " seat left";
};

