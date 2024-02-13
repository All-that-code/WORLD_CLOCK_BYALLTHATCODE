function updateDate() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector("#date");
  let newYorkTimeElement = newYorkElement.querySelector("#time");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do, YYYY");

  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss A");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector("#date");
  let tokyoTimeElement = tokyoElement.querySelector("#time");

  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("MMMM Do, YYYY");

  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("hh:mm:ss A");

  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector("#date");
  let amsterdamTimeElement = amsterdamElement.querySelector("#time");

  amsterdamDateElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("MMMM Do, YYYY");

  amsterdamTimeElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("hh:mm:ss A");
}

updateDate();
setInterval(updateDate, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
}

let citiesSelectElement = document.querySelector("#select-city");

citiesSelectElement.addEventListener("change", updateCity);
