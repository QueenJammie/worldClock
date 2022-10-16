function displayCityWeather(event) {
    if (event.target.value.length > 0) {
        if (event.target.value === 'montreal' || event.target.value === 'Montreal' || event.target.value === 'montréal' || event.target.value === 'Montréal') {
            let sentence = moment().tz('America/Montreal').format('[It is] dddd, MMMM D, YYYY h:m A [in America/Montreal.]');
            alert(sentence);
        }
        else if (event.target.value === 'paris' || event.target.value === 'Paris') {
            let sentence = moment().tz('Europe/Paris').format('[It is] dddd, MMMM D, YYYY h:m A [in Europe/Paris.]');
            alert(sentence);
        }
        else if (event.target.value === 'tokyo' || event.target.value === 'Tokyo') {
            let sentence = moment().tz('Asia/Tokyo').add(0, 'day').format(`[It is] dddd, MMMM D, YYYY h:m A [in Asia/Tokyo]`);
            alert(sentence);
        }
    }
}

function doSomething() {
    alert("Don't you wanna do something?!");
}

function displayTime() {
    // Today

    // Local
    let localCountry = moment.tz.guess();
    let localCountryElement = document.querySelector("#actualCountry");
    localCountryElement.innerHTML = localCountry;
    let localTimezone = moment.tz(localCountry);
    let localElement = document.querySelector("#local");
    localElement.innerHTML = localTimezone.format("MMMM Do, YYYY || HH[h]:mm[m]ss[s]");

    // America/Los Angeles
    let Los_AngelesTimezone = moment.tz('America/Los_Angeles');
    let Los_AngelesTimezoneElement = document.querySelector("#losAngeles");
    Los_AngelesTimezoneElement.innerHTML = Los_AngelesTimezone.format("MMMM Do, YYYY || HH[h]:mm[m]ss[s]");

    // Asia/Tokyo
    let tokyoTimezone = moment.tz('Asia/Tokyo');
    let tokyoTimezoneElement = document.querySelector("#tokyo");
    tokyoTimezoneElement.innerHTML = tokyoTimezone.format("MMMM Do, YYYY || HH[h]:mm[m]ss[s]");

    // Tomorrow
    // date.innerHTML = moment().add(1, 'days').format("MMMM Do, YYYY || H:m[h]");
}

setTimeout(doSomething, 600000);
let countrySelectedInput = document.querySelector("#country");
countrySelectedInput.addEventListener('change', displayCityWeather);
let countrySelect = document.querySelector("#lastResearch");
countrySelect.addEventListener('change', displayCityWeather);
displayTime();
setInterval(displayTime, 1000);