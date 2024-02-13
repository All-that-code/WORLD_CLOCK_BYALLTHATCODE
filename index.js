function updateDate() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector("#date");
    let newYorkTimeElement = newYorkElement.querySelector("#time");

    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do, YYYY");

    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("hh:mm:ss A");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector("#date");
    let tokyoTimeElement = tokyoElement.querySelector("#time");

    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do, YYYY");

    tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("hh:mm:ss A");
  }

  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector("#date");
    let amsterdamTimeElement = amsterdamElement.querySelector("#time");

    amsterdamDateElement.innerHTML = moment()
      .tz("Europe/Amsterdam")
      .format("MMMM Do, YYYY");

    amsterdamTimeElement.innerHTML = moment()
      .tz("Europe/Amsterdam")
      .format("hh:mm:ss A");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1].toUpperCase();
  let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss A");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do, YYYY");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityDate}</div>
    </div>
    <div class="time">${cityTime}</div>
    </div>
        <img class="message"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/115/219/original/time-for-coffee.png?1707836255"
            alt="clock" />
        <img class="coffee"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/115/218/original/coffee.png?1707836245"
            alt="message" />
    </div>
    <footer>
        <p>Coded by <a href="https://github.com/All-that-code" target=_blank>Amaia
                Arbizu</a>
            and open sourced on <a href="https://github.com/All-that-code/WORLD-CLOCK-ALL-THAT-CODE"
                target="_blank">GitHub</p></a>
    </footer>`;
}

updateDate();
setInterval(updateDate, 1000);

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
