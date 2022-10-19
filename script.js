function displayCityTime(event) {
    let timezoneElement = document.querySelector("#timezoneElement");
    if (event.target.value.length > 0) {
        if (event.target.value === 'America/Los_Angeles' || event.target.value === 'America/Los Angeles' || event.target.value === 'Los Angeles' || event.target.value === 'los angeles') {
            let Los_AngelesTimezone = moment.tz('America/Los_Angeles');
            function LosAngelesFunction() {
                timezoneElement.innerHTML = Los_AngelesTimezone.format("[<span class='timezoneHeader'>In America/Los Angeles timezone:</span><br /><span class='block date'>]MMMM Do, YYYY [<big>]h[h]:mm[m][</big>] [<small>]A[</small></span>]");
            }
            LosAngelesFunction();
        }
        else if (event.target.value === 'Europe/Paris' || event.target.value === 'paris' || event.target.value === 'Paris') {
            let ParisTimezone = moment.tz('Europe/Paris');
            function ParisFunction() {
                timezoneElement.innerHTML = ParisTimezone.format("[<span class='timezoneHeader'>In Europe/Paris timezone:</span><br /><span class='block date'>]MMMM Do, YYYY [<big>]h[h]:mm[m][</big>] [<small>]A[</small></span>]");
            }
            ParisFunction();
        }
        else if (event.target.value === 'Asia/Tokyo' || event.target.value === 'tokyo' || event.target.value === 'Tokyo') {
            let TokyoTimezone = moment.tz('Asia/Tokyo');
            function TokyoFunction() {
                timezoneElement.innerHTML = TokyoTimezone.format("[<span class='timezoneHeader'>In Asia/Tokyo timezone:</span><br /><span class='block date'>]MMMM Do, YYYY [<big>]h[h]:mm[m][</big>] [<small>]A[</small></span>]");
            }
            TokyoFunction();
        }
        else if (event.target.value === 'Europe/Rome' || event.target.value === 'Rome' || event.target.value === 'rome') {
            let RomeTimezone = moment.tz('Europe/Rome');
            function RomeFunction() {
                timezoneElement.innerHTML = RomeTimezone.format("[<span class='timezoneHeader'>In Europe/Rome timezone:</span><br /><span class='block date'>]MMMM Do, YYYY [<big>]h[h]:mm[m][</big>] [<small>]A[</small></span>]");
            }
            RomeFunction();
        }
    }
}

function doSomething() {
    alert("Don't you wanna do something?!");
}

function displayTime(event) {
    // Today

    // Local
    let localCountry = moment.tz.guess();
    let localCountryElement = document.querySelector("#actualCountry");
    localCountryElement.innerHTML = localCountry;
    let localTimezone = moment.tz(localCountry);
    let localElement = document.querySelector("#local");
    localElement.innerHTML = localTimezone.format("MMMM Do, YYYY [<big>]h[h]:mm[m]ss[s][</big>] [<small>]A[</small>]");

    // America/Los Angeles
    let Los_AngelesTimezone = moment.tz('America/Los_Angeles');
    let Los_AngelesTimezoneElement = document.querySelector("#losAngeles");
    Los_AngelesTimezoneElement.innerHTML = Los_AngelesTimezone.format("MMMM Do, YYYY [<big>]h[h]:mm[m]ss[s][</big>] [<small>]A[</small>]");

    // Asia/Tokyo
    let tokyoTimezone = moment.tz('Asia/Tokyo');
    let tokyoTimezoneElement = document.querySelector("#tokyo");
    tokyoTimezoneElement.innerHTML = tokyoTimezone.format("MMMM Do, YYYY [<big>]h[h]:mm[m]ss[s][</big>] [<small>]A[</small>]");

    // Tomorrow
    // date.innerHTML = moment().add(1, 'days').format("MMMM Do, YYYY || H:m[h]");
}

setTimeout(doSomething, 600000);
let countrySelectedInput = document.querySelector("#country");
countrySelectedInput.addEventListener('change', displayCityTime);
let countrySelect = document.querySelector("#lastResearch");
countrySelect.addEventListener('change', displayCityTime);
displayTime();
setInterval(displayTime, 1000);
setInterval(displayCityTime, 1000);