const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie Select Event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Seat click event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') &&
     !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }
  updateSelectedCount();
});

//show/hide seats
//selPlaceId - ID for selection-place div
function showSeats(selPlaceId) {
  if(document.getElementById(selPlaceId).style.display == "none"){
    document.getElementById(selPlaceId).style.display = "";
  } else{
    document.getElementById(selPlaceId).style.display = "none";
  }
  console.log("display="+document.getElementById(selPlaceId).style.display)
  /*document.getElementById("selection-place").style.display = "";*/
}

//Prepare action for booking
//cemId - cementary ID
//cemPlaceId - cementary place ID
//selPlaceId - ID for selection-place div
function prepareBooking(cemId, cemPlaceId, selPlaceId){
  console.log("CemID = "+cemId, "CemPlaceID = "+cemPlaceId)
  //prepare action place here

  showSeats(selPlaceId);
}
