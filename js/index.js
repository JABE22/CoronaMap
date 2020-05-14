/**
 * JavaScript for Corona Map in index.html
 * 
 */

// Global variables for basic corona map functionality
let codeMap, caseMap, neighMap, timeMap;
let inte;

/**
 * Stops time series. By default, time series will be off.
 * 
 * @returns {undefined}
 */
function stopTimeseries() {
    clearInterval(inte);
}

/**
 * The core of Corona Web App functionality. Initializations for Corona Map 
 * functionality.
 * 
 * @returns {undefined}
 */
async function initialize() {
    const countries = await getJSON('https://tie-lukioplus.rd.tuni.fi/corona/api/countries');
    codeMap = countryCodeMap(countries, INITIAL_CODES);
    fillDataList(codeMap);
    console.log("codemap");
    console.log(codeMap);
    const neighboursMapped = await getJSON('https://tie-lukioplus.rd.tuni.fi/corona/api/neighbours');
    neighMap = mapNeighbours(neighboursMapped);
    console.log(neighboursMapped);
    const cases = await getJSON('https://tie-lukioplus.rd.tuni.fi/corona/api/corona');
    caseMap = mapCasesWithCountrycodes(cases, codeMap);
    initialFills(caseMap);
    const timeseries = await getJSON('https://tie-lukioplus.rd.tuni.fi/corona/api/corona/timeseries/');
    timeMap = mapTimeseries(timeseries, codeMap);
    document.getElementById('country').addEventListener('input', inputHandler);
    document.getElementById('countryform').addEventListener('submit', (e) => e.preventDefault());
    document.getElementById("timeseries").onclick = function () {
                                                          timeseriesFills(timeMap);
                                                     };
}

/* Countries that have some anomalities in their names (such as special chars, 
 * brackets, or multiple variants) are collected here */
const INITIAL_CODES = {
    Brunei: "BRN",
    "Mainland China": "CHN",
    US: "USA",
    Iran: "IRN",
    "South Korea": "KOR",
    "Korea, South": "KOR",
    Korea: "KOR",
    "Taiwan*": "TWN",
    UK: "GBR",
    "United Kingdom": "GBR",
    Czechia: "CZE",
    Russia: "RUS",
    "United Arab Emirates": "UAE",
    Macau: "MAC",
    "North Macedonia": "MKD",
    Venezuela: "VEN",
    Vietnam: "VNM",
    "Cote d'Ivoire": "CIV",
    "West Bank and Gaza": "PSE",
    Kosovo: "KOS",
    "Congo (Kinshasa)": "COD",
    "Congo (Brazzaville)": "COG",
    Tanzania: "TZA",
    Burma: "MMR",
    Syria: "SYR",
    Laos: "LAO",
    Eswatini: "SWZ",
};

const DEFAULT_FILL = "#EEEEEE";

/**
 * Writes given text to console.log
 * 
 * @param {string} text Text to print out
 */
const sayHello = (text) => console.log(text);

/**
 * mapNeighbours arrow function returns neighbours of a country
 * as an associative array (i.e., object) where a key is a country codes and
 * the value is an array containing the neighbour country codes.
 * @param {json} rawNeighbours the parsed JSON content fetched from the API endpoint https://tie-lukioplus.rd.tuni.fi/corona/api/neighbours
 * @returns an object where keys are three-char country codes (alpha3codes), and the values are neighbour country codes as an array.
 */
const mapNeighbours = (rawNeighbours) => {
    let neighbours = {};
    for (var item in rawNeighbours) {
        neighbours[rawNeighbours[item]["alpha3Code"]] = rawNeighbours[item]["borders"];
    }
    return neighbours;
};

const int = (str) => Number.parseInt(str);

/**
 * Constructs a HSL color based on the given parameters.
 * The darker the color, the more alarming is the situation-
 * Hue gives the tone: blue indicates confirmed (hue 240), red indicates deaths (hue 360).
 * H: hue ranges between blue and red, i.e., 240..360.
 * S: saturation is constant (100)
 * L: lightness as a percentage between 0..100%, 0 dark .. 100 light
 * 
 * @param {type} confirmed d The number of confirmed people having coronavirus
 * @param {type} deaths d The number of dead people, 20 times more weight than confirmed
 * @returns {String} a HSL color constructed based on confirmed and deaths
 */
const getColor = (confirmed, deaths) => {
    const denominator = confirmed + deaths === 0 ? 1 : confirmed + deaths;
    const nominator = deaths ? deaths : 0;
    const hue = int(240 + 120 * nominator / denominator);
    const saturation = 100; //constant

    let weight = int(7 * Math.log(confirmed + 20 * deaths));
    weight = weight ? (weight > 100 ? 95 : weight) : 0;

    let lightness = 95 - weight;
    lightness = lightness < 0 ? 0 : lightness;
    return `hsl(${hue}, ${saturation}, ${lightness})`;
};

// Self-invoked function to avoid polluting global scope
(() => {
    const helloIndex = "Hello from index.js!";
    sayHello(helloIndex);
    console.log(
            `This is how you can use the configuration object: ${config.baseURL}`
            );
})();

let map = new Datamap({element: document.getElementById('map-container'), projection: 'mercator', fills: {defaultFill: DEFAULT_FILL}});
//console.log(mapNeighbours);
