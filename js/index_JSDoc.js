// TABLE.JS
/* global fetch, caseMap, codeMap */

/**
 * ADD YOUR FUNCTIONS BELOW THIS COMMENT BLOCK
 * Include these functions from previous exercises
 *   - getJSON(url)
 *   - countryCodeMap(countries, initialCodes)
 *   - fillDataList(codeMap)
 *   - constructTableRow(code)
 *   - getKey(object, value) (this is needed by constructTableRow(code) function)
 */

/**
 * Fetches data from an URL by using window.fetch.
 * 
 * @param {string} url - URL from which the data is fetched
 * @returns {object} data - FILL IN ONCE COMPLETED
 */
const getJSON = function (url) {
    // TODO: implement this function
    return fetch(url)
            .then(function (response) {
                //response jasoniksi
                return response.json();
            });
};

/**
 * Modifies the country data so that it is compatible between different end-points.
 *
 * @param {Array<object>} countries - All countries returned from the API
 * @param {Array<object>} initialCodes - Countries that need to be changed
 * @returns {object} - Map of country names to country codes
 */
const countryCodeMap = function (countries, initialCodes) {
    const countryMap = {};
    for (let i = 0; i < countries.length; i++) {
        const name = countries[i].name.split("(")[0].trim();
        countryMap[name] = countries[i].alpha3Code;
    }
    for (const country in initialCodes) {
        countryMap[country] = initialCodes[country];
    }
    //console.log(countryMap.Congo);
    return countryMap;
};

/**
 * Fills datalist with country names
 *
 * @param {Array<object>} codeMap - Country codes and names
 */
const fillDataList = function (codeMap) {
    let allCodes = "";
    for (const country in codeMap) {
        allCodes += "<option value ='" + country + "'>";
    }
    document.getElementById("searchresults").innerHTML = allCodes;
};

/**
 * Gets country name based on country key value.
 * 
 * @param {object} object - Struct object containing country data
 * @param {string} value - Country code for country name selection
 * @returns {Array<object>} Property names
 */
const getKey = function (object, value) {
    const propertyNames = Object.getOwnPropertyNames(object);
    for (let i = 0; i < propertyNames.length; i++) {
        if (object[propertyNames[i]] === value) {
            return propertyNames[i];
        }
    }
};

/**
 * Contruct table row as html format.
 * 
 * @param {string} code - Country code 
 * @returns {string} - Table row in html format
 */
const constructTableRow = function (code) {
    let tableRow = "";
    
    if (caseMap[code] !== undefined) {
        tableRow = "<tr>\n\
                        <td>" + caseMap[code].country + "</td>\n\
                        <td>" + caseMap[code].confirmed + "</td>\n\
                        <td>" + caseMap[code].deaths + "</td>\n\
                        <td>" + caseMap[code].recovered + "</td>\n\
                    </tr>";
    } else {
        tableRow = "<tr>\n\
                        <td>" + getKey(codeMap, code) + "</td>\n\
                        <td>-</td>\n\
                        <td>-</td>\n\
                        <td>-</td>\n\
                    </tr>";
    }
    return tableRow;
};

/**
 * Map cases with country codes.
 * 
 * @param {Array<object>} cases - All corona cases returned from the API
 * @param {Array<object>} countries - codeMap
 * @returns {object} - Map of country codes to corona cases in the country
 */
const mapCasesWithCountrycodes = function (cases, countries) {
    const caseMap = {};
    for (const country in cases) {
        const name = country.replace(/_/g, " ");
        if (countries[name] !== undefined) {
            const code = countries[name];
            caseMap[code] = {};
            caseMap[code]["confirmed"] = cases[country]["confirmed"];
            caseMap[code]["deaths"] = cases[country]["deaths"];
            caseMap[code]["recovered"] = cases[country]["recovered"];
            caseMap[code]["country"] = name;
        }
    }
    //console.log(caseMap);
    return caseMap;
};

/**
 * Input handler for country search box (datalist)
 * 
 * @returns {undefined} nothing
 */
const inputHandler = function () {
    const country = document.getElementById("country").value;
    const ccode = codeMap[country];
    const tableRow = constructTableRow(ccode);    
    /*
    console.log(codeMap[country]);
    console.log(caseMap[codeMap[country]]);
    */
    if (ccode !== undefined) {
        document.getElementsByTagName("tbody")[0].innerHTML = "";
        if (countryarr.includes(tableRow)) {
            countryarr.splice(countryarr.indexOf(tableRow), 1);
            countryarr.sort();
            countryarr.unshift(tableRow);
        } else {
            countryarr.unshift(tableRow);
        }
        stop(inte);
        colorNeighbors(ccode);
        printTable();

        document.getElementById("date").innerHTML = parseDate();
        document.getElementById("country").value = "";
    }
    console.log(countryarr);
};

/**
 * Construct country table
 * 
 * @returns {undefined} table
 */
const printTable = function () {
    const tbody = document.getElementsByTagName("tbody")[0];

    for (let i = 0; i < countryarr.length; i++) {
        tbody.innerHTML = tbody.innerHTML + countryarr[i];
    }
};

/**
 * Parses date and returns it in specific format
 * 
 * @returns {string} date in format mm/dd/yy
 */
const parseDate = function () {
    const today = new Date();
    const date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear().toString().slice(2);
    
    return date;
};

const numbers1 = [4, 9, 16, 25];
const numbers2 = [175, 50, 25, 45, 10];

/**
 * Takes square root for every number in the table given as parameter.
 * 
 * @param {Array<number>} table Table with numbers
 * @returns {Array<number>} table with square roots
 */
const myMapFunction = function (table) {
  return table.map(Math.sqrt);
};

/**
 * Divides first number of the list for every other number on the list
 * starting left and forwarding into right.
 * 
 * @param {number} total First value of array
 * @param {number} num Divider
 * @returns {number} last divided number
 */
const myDivideFunction = function (total, num) {
	return total / num;
};

// Just some play with Array functions :)
console.log(myMapFunction(numbers1)); // Should print [2,3,4,5]
console.log(numbers2.reduce(myDivideFunction)); // Should print 0.0003111111111111111

const countryarr = [];




// INDEX.JS

/* global inputHandler, config, getJSON */

/**
 * JavaScript for Corona Map in index.html
 * 
 */

// Global variables for basic corona map functionality
let codeMap, caseMap, neighMap, timeMap;

/**
 * The core of Corona Web App functionality. Initializations for Corona Map 
 * functionality.
 * 
 * @returns {undefined}
 */
(async () => {
    const countries = await getJSON("https://tie-lukioplus.rd.tuni.fi/corona/api/countries");
    codeMap = countryCodeMap(countries, INITIAL_CODES);
    fillDataList(codeMap);
    console.log("codemap");
    console.log(codeMap);
    const neighboursMapped = await getJSON("https://tie-lukioplus.rd.tuni.fi/corona/api/neighbours");
    neighMap = mapNeighbours(neighboursMapped);
    console.log(neighboursMapped);
    const cases = await getJSON("https://tie-lukioplus.rd.tuni.fi/corona/api/corona");
    caseMap = mapCasesWithCountrycodes(cases, codeMap);
    initialFills(caseMap);
    const timeseries = await getJSON("https://tie-lukioplus.rd.tuni.fi/corona/api/corona/timeseries/");
    timeMap = mapTimeseries(timeseries, codeMap);
    document.getElementById("country").addEventListener("input", inputHandler);
    document.getElementById("countryform").addEventListener("submit", (e) => e.preventDefault());
    document.getElementById("timeseries").onclick = function () {
                                                          timeseriesFills(timeMap);
                                                     };
})();

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
    Eswatini: "SWZ"
};

const DEFAULT_FILL = "#EEEEEE";

/**
 * Writes given text to console.log
 * 
 * @param {string} text Some text to print
 * @returns {undefined} nothing
 */
const sayHello = (text) => console.log(text);

/**
 * mapNeighbours arrow function returns neighbours of a country
 * as an associative array (i.e., object) where a key is a country codes and
 * the value is an array containing the neighbour country codes.
 * 
 * @param {object} rawNeighbours the parsed JSON content fetched from the API endpoint https://tie-lukioplus.rd.tuni.fi/corona/api/neighbours
 * @returns {Array<object>} an object where keys are three-char country codes (alpha3codes), and the values are neighbour country codes as an array.
 */
const mapNeighbours = (rawNeighbours) => {
    const neighbours = {};
    for (const item in rawNeighbours) {
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
 * @param {number} confirmed d The number of confirmed people having coronavirus
 * @param {number} deaths d The number of dead people, 20 times more weight than confirmed
 * @returns {string} a HSL color constructed based on confirmed and deaths
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
/*
(() => {
    const helloIndex = "Hello from index.js!";
    sayHello(helloIndex);
    console.log(
            `This is how you can use the configuration object: ${config.baseURL}`
            );
})();
*/

const map = new window.Datamap({element: document.getElementById("map-container"), projection: "mercator", fills: {defaultFill: DEFAULT_FILL}});
//console.log(mapNeighbours);




// DATAMAPPING:JS
/* global map, caseMap, neighMap */

let inte;

/**
 * Function updates d3 map to show the current corona situation
 * of the selected country and the neighbouring countries of that country.
 * Updates color fill of the countries to the d3 map.
 * 
 * @param {string} countryCode Receives countrycode from user input in table
 * @returns {undefined}
 */
const colorNeighbors = function (countryCode) {
    //Reset all colours to default fill
    map.updateChoropleth(null, {reset: true});
    //try-catch-block. Errors are caused by faulty or empty countrycodes
    try {
        //First paint the selected country
        map.updateChoropleth({
            [countryCode]: getColor(caseMap[countryCode].confirmed, caseMap[countryCode].deaths)
        });
        //In a for-loop, paint the neighbouring countries of the selected country.
        for (const country in neighMap[countryCode]) {
            //Try-catch-block, errors are caused by neighbouring countries that have no cases
            try {
                console.log(neighMap[countryCode][country]);
                map.updateChoropleth({
                    [neighMap[countryCode][country]]: 
                     getColor(caseMap[neighMap[countryCode][country]].confirmed, 
                     caseMap[neighMap[countryCode][country]].deaths)
                });
            } catch (error) {
                console.log("was nothing in that country");
            }
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * Colors the countries with their current corona stats.
 * Updates color fill of the coutnries to the d3 map.
 * 
 * @param {object} mappedcases Mapped cases
 * @returns {undefined}
 */
const initialFills = function (mappedcases) {
    //Loop thru the cases
    for (const country in mappedcases) {
        //Try-catch-block, errors are caused by countries that have no cases
        try {
            console.log(country);
            map.updateChoropleth({
                [country]: getColor(mappedcases[country].confirmed, mappedcases[country].deaths)
            });
        } catch (error) {
            console.log("was nothing in that country");
        }
    }
};

/**
 * Colors the countries with their corona stats.
 * Method is called "per day"
 * Updates color fill of the coutnries to the d3 map.
 * 
 * @param {object} date receives object of corona stats for given day
 * @returns {undefined}
 */
const timeseriesHelper = function (date) {
    for (const country in date) {
        try {
            map.updateChoropleth({
                [country]: getColor(date[country].confirmed, date[country].deaths)
            });
        } catch (error) {
            console.log("was nothing in that country");
        }
    }
};

/**
 * Colors the countries with their corona stats.
 * Method is called once and receives object of dates, which contain corona stats to that date
 * Updates color fill of the coutnries to the d3 map.
 * 
 * @param {object} ts receives object of corona stats
 * @returns {undefined}
 */
const timeseriesFills = function (ts) {
    //Helper variables
    //Keys to the timeseries object
    const keys = Object.keys(ts);
    //counter
    let i = 0;
    //how many days
    const max = keys.length;
    const maxdate = ts[keys[max - 1]];
    //console.log(maxdate);

    //Reset map
    map.updateChoropleth(null, {reset: true});

    //intervalling.
    timeseriesHelper(ts[keys[i]], maxdate);
    document.getElementById("date").innerHTML = keys[i].toString();
    window.inte = 
            setInterval(function () {
                i++;
                console.log(keys[i]);
                //If all dates have been looped thru, stop
                if (typeof keys[i] === "undefined") {
                    stop();
                }
                timeseriesHelper(ts[keys[i]], maxdate);
                document.getElementById("date").innerHTML = keys[i].toString();
    }, 300); // Called about three times per second with iterated key
};

const today = new Date();
const date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear().toString().slice(2);

document.getElementById("date").innerHTML = date;



// TIMESERIES.JS
/**
 * Map time series.
 * 
 * @param {Array<object>} timeseries - All corona cases returned from the API
 * @param {Array<object>} countryMap - codeMap
 * @returns {object} Time map
 */
const mapTimeseries = function (timeseries, countryMap) {
    const timeMap = {};
    const confirmed = timeseries[0]["confirmed"];
    const deaths = timeseries[1]["deaths"];
    let date;

    for (date in confirmed[0]) {
        if (date === "Province/State" || date === "Country/Region" || 
            date === "Lat" || date === "Long") {
            continue;
        }
        timeMap[date] = {};
    }
    for (date in timeMap) {
        for (let i = 0; i < confirmed.length; i++) {
            const code = countryMap[confirmed[i]["Country/Region"].replace(/_/g, " ")];
            if (timeMap[date][code] === undefined) {
                timeMap[date][code] = {};
                timeMap[date][code]["confirmed"] = confirmed[i][date];
                timeMap[date][code]["deaths"] = deaths[i][date];
            } else {
                timeMap[date][code]["confirmed"] += confirmed[i][date];
                timeMap[date][code]["deaths"] += deaths[i][date];
            }
        }
    }
    //console.log(timeMap["5/4/20"]["FIN"]);
    return timeMap;
};

