async function search(city) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=814d6790e1a64d13baa164006241906&q=${city}&days=3`);
    if ( t.status !=t.ok && 400) {
        let city = await t.json();
        displayToday(city.location, city.current)
        display2Day(city.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", a=>{
    search(a.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayToday(a, t) {
    if (t!=null) {
        var dates = new Date(t.last_updated.replace(" ", "T"));
        let n = `<div class="today">
<div class="head1">
  <div class="day">${days[dates.getDay()]}</div>
  <div class="month">${dates.getDate() + months[dates.getMonth()]}</div>
</div>
<div class="bod">
  <div class="loc">
    <p class="as">${a.name}</p>
  </div>
  <div class="degree">
    <div class="num text-light">${t.temp_c}<sup>o</sup>C</div>
    <div class="forecast-icon">
        <img src="https:${t.condition.icon}" alt="" width="90">
    </div>	
</div>
  <div class="custom">${t.condition.text}</div>
  <div class="pq">
    <span><img src="images/icon-umberella.png" alt="">20%</span>
    <span><img src="images/icon-wind.png" alt="">18km/h</span>
    <span><img src="images/icon-compass.png" alt="">east</span>
  </div>
</div>
</div>`;
        document.getElementById("forecast").innerHTML = n
    }
}
function display2Day(a) {
    let t = ""
        t = `<div class="tomorrow">
              <div class="head2">
                <div class="text-center">${days[new Date(a[1].date.replace(" ", "T")).getDay()]}</div>
              </div>
              <div class="bod1">
                <div class="deg text-center">
                  <div class="forecast-icon">
                    <img src="https:${a[1].day.condition.icon}" alt="" width="90">
                </div>	
                  <div class="text-light">${a[1].day.maxtemp_c}<sup>o</sup>C</div>
                  <small class="d-block">${a[1].day.mintemp_c}<sup>o</sup></small>
              </div>
                <div class="custom1 text-center">${a[1].day.condition.text}</div>
              </div>
          </div>
          <div class="a-tomorow">
            <div class="head3">
              <div class="text-center">${days[new Date(a[2].date.replace(" ", "T")).getDay()]}</div>
            </div>
            <div class="bod1">
              <div class="degree text-center">
                <div class="forecast-icon">
                  <img src="https:${a[2].day.condition.icon}" alt="" width="90">
              </div>	
                <div class="text-light">${a[2].day.maxtemp_c}<sup>o</sup>C</div>
                  <small class="d-block">${a[2].day.mintemp_c}<sup>o</sup></small>
            </div>
              <div class="custom1 text-center">${a[2].day.condition.text}</div>
            </div>
        </div>`;
    document.getElementById("forecast").innerHTML += t
}
search("Giza");