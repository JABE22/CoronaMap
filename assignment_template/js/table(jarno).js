/* 
 * 
 * @author Jarno Matarmaa
 * 
 * Based on Week 6, exercise 3
 * Including table sort property
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

/**
 * What this function actually do? (describtion will be added later)
 * 
 * @param {type} object
 * @param {type} value
 * @returns {propertyNames|Array}
 */
function getKey(object, value) {
    propertyNames = Object.getOwnPropertyNames(object);
    for (i = 0; i < propertyNames.length; i++) {
        if (object[propertyNames[i]] == value) {
            return propertyNames[i];
        }
    }
}

/**
 * What this function actually do? (describtion will be added later)
 * 
 * @param {type} code
 * @returns {String}
 */
function constructTableRow(code) {
    var tableRow = "";
    if (caseMap[code] != undefined) {
        tableRow = "<tr>"
                + "<td>" + caseMap[code].country + "</td>"
                + "<td>" + caseMap[code].confirmed + "</td>"
                + "<td>" + caseMap[code].deaths + "</td>"
                + "<td>" + caseMap[code].recovered + "</td>"
                + "</tr>";
    } else {
        tableRow = "<tr>"
                + "<td>" + getKey(codeMap, code) + "</td>"
                + "<td>-</td>"
                + "<td>-</td>"
                + "<td>-</td>"
                + "</tr>";
    }
    return tableRow;
}

/**
 * What this function actually do? (describtion will be added later)
 * 
 * @param {Array<Object>} cases - All corona cases returned from the API
 * @param {Array<Object>} countries - codeMap
 * @returns {Object} - Map of country codes to corona cases in the country
 */
function mapCasesWithCountrycodes(cases, countries) {
    const caseMap = {}
    for (country in cases) {
        let name = country.replace(/_/g, " ");
        if (countries[name] !== undefined) {
            const code = countries[name];
            caseMap[code] = {}
            caseMap[code]["confirmed"] = cases[country]["confirmed"];
            caseMap[code]["deaths"] = cases[country]["deaths"];
            caseMap[code]["recovered"] = cases[country]["recovered"];
            caseMap[code]["country"] = name;
        }
    }
    //console.log(caseMap.NZL);
    return caseMap;
}

/**
 * What this function actually do? (describtion will be added later)
 * 
 * @param {type} e
 * @returns {undefined}
 */
function inputHandler(e) {
    let country = document.getElementById("country").value;
    var countryCode = codeMap[country]
    var tableRow = constructTableRow(countryCode);

    countryarr.sort();

    if (countryCode !== undefined) {
        document.getElementsByTagName("tbody")[0].innerHTML = "";
        if (countryarr.includes(tableRow)) {
            countryarr.splice(countryarr.indexOf(tableRow), 1);
            countryarr.unshift(tableRow);
        } else {
            countryarr.unshift(tableRow);
        }
    }
    colorNeighbors(countryCode);
    document.getElementById("country").value = "";

    printTable();

}

function printTable() {
    
    var tbody = document.getElementsByTagName("tbody")[0];
    
    for (i = 0; i < countryarr.length; i++) {
        tbody.innerHTML = tbody.innerHTML + countryarr[i];
    }
}

var countryarr = [];