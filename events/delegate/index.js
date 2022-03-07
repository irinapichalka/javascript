const arenaElem = document.querySelectorAll(".arena");

const sectorElems = document.querySelectorAll(".sector");
const lineElems = document.querySelectorAll(".sector__line");
const seatElems = document.querySelectorAll(".sector__seat");

const showSelectedSeat = (sector, line, seat) => {
  const selectedSeatElem = document.querySelector(".board__selected-seat");
  selectedSeatElem.innerHTML = `<span>S${sector} - L${line} - S${seat}</span>`;
};

const onSectorClicked = (event) => {
  console.log(event.target.index); ////???????????????????????
};
[...sectorElems].forEach((sector, index) => {
  sector.addEventListener("click", onSectorClicked);
});
