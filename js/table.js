
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
 * @returns {propertyNames|Array} property names
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
