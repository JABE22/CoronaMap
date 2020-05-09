/*const INITIAL_CODES = {
 Brunei: 'BRN',
 'Mainland China': 'CHN',
 US: 'USA',
 Iran: 'IRN',
 'South Korea': 'KOR',
 'Korea, South': 'KOR',
 'Taiwan*': 'TWN',
 UK: 'GBR',
 'United Kingdom': 'GBR',
 Czechia: 'CZE',
 Russia: 'RUS',
 'United Arab Emirates': 'UAE',
 Macau: 'MAC',
 'North Macedonia': 'MKD',
 Venezuela: 'VEN',
 Vietnam: 'VNM'
 };*/
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
 * @param {string} url - URL from which the data is fetched
 * @returns {} data - FILL IN ONCE COMPLETED
 */
function getJSON(url) {
    // TODO: implement this function
    return fetch(url)
            .then(function (response) {
                //response jasoniksi
                return response.json();
            });
}
/**
 * Modifies the country data so that it is compatible between different end-points.
 *
 * @param {Array<Object>} countries - All countries returned from the API
 * @param {Array<Object>} initialCodes - Countries that need to be changed
 * @returns {Object} - Map of country names to country codes
 */
function countryCodeMap(countries, initialCodes) {
    const countryMap = {}
    for (i = 0; i < countries.length; i++) {
        let name = countries[i].name.split("(")[0].trim();
        countryMap[name] = countries[i].alpha3Code;
    }
    for (country in initialCodes) {
        countryMap[country] = initialCodes[country];
    }
    //console.log(countryMap.Congo);
    return countryMap;
}
/**
 * Fills datalist with country names
 *
 * @param {Array<Object>} codeMap - Country codes and names
 */
function fillDataList(codeMap) {
    let allCodes = "";
    for (const country in codeMap) {
        allCodes += "<option value ='" + country + "'>"
    }
    document.getElementById("searchresults").innerHTML = allCodes;
}
//Tän vois muokata fiksummaks
function getKey(object, value) {
    propertyNames = Object.getOwnPropertyNames(object);
    for (i = 0; i < propertyNames.length; i++) {
        if (object[propertyNames[i]] == value) {
            return propertyNames[i];
        }
    }
}
function constructTableRow(code) {
    if (caseMap[code] != undefined) {
        return "<tr><td>" + caseMap[code].country + "</td><td>" + caseMap[code].confirmed + "</td><td>" + caseMap[code].deaths + "</td><td>" + caseMap[code].recovered + "</td></tr>";
    } else {
        return "<tr><td>" + getKey(codeMap, code) + "</td><td>-</td><td>-</td><td>-</td></tr>";
    }
}
/**
 * @param {Array<Object>} cases - All corona cases returned from the API
 * @param {Array<Object>} countries - codeMap
 * @returns {Object} - Map of country codes to corona cases in the country
 */
function mapCasesWithCountrycodes(cases, countries) {
    const caseMap = {}
    for (country in cases) {
        let name = country.replace(/_/g, " ");
        if (countries[name] != undefined) {
            const code = countries[name];
            caseMap[code] = {}
            caseMap[code]["confirmed"] = cases[country]["confirmed"];
            caseMap[code]["deaths"] = cases[country]["deaths"];
            caseMap[code]["recovered"] = cases[country]["recovered"];
            caseMap[code]["country"] = name;
        }
    }
    //console.log(caseMap);
    return caseMap;
}
function inputHandler(e) {
    let country = document.getElementById("country").value;
    console.log(codeMap[country]);
    console.log(caseMap[codeMap[country]]);

    if (codeMap[country] !== undefined) {
        document.getElementsByTagName("tbody")[0].innerHTML = "";
        if (countryarr.includes(constructTableRow(codeMap[country]))) {
            countryarr.splice(countryarr.indexOf(constructTableRow(codeMap[country])), 1);
            countryarr.sort();
            countryarr.unshift(constructTableRow(codeMap[country]));
        } else {
            countryarr.unshift(constructTableRow(codeMap[country]));
        }
		stop(inte);
        colorNeighbors(codeMap[country]);
        printTable();
		var today = new Date();
		var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

		document.getElementById("date").innerHTML = date;
        document.getElementById("country").value = "";
    }
    console.log(countryarr);
    /*setTimeout(function(){
     printTable();
     }, 2000);*/

}

function printTable() {
    for (i = 0; i < countryarr.length; i++) {
        document.getElementsByTagName("tbody")[0].innerHTML = document.getElementsByTagName("tbody")[0].innerHTML + countryarr[i];
    }
}

var countryarr = [];