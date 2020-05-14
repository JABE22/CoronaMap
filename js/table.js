
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
 * @param {type} url - URL from which the data is fetched
 * @returns {unresolved} data - FILL IN ONCE COMPLETED
 */
let getJSON = function (url) {
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
 * @param {Array<Object>} countries - All countries returned from the API
 * @param {Array<Object>} initialCodes - Countries that need to be changed
 * @returns {Object} - Map of country names to country codes
 */
let countryCodeMap = function (countries, initialCodes) {
    const countryMap = {};
    for (let i = 0; i < countries.length; i++) {
        let name = countries[i].name.split("(")[0].trim();
        countryMap[name] = countries[i].alpha3Code;
    }
    for (let country in initialCodes) {
        countryMap[country] = initialCodes[country];
    }
    //console.log(countryMap.Congo);
    return countryMap;
};

/**
 * Fills datalist with country names
 *
 * @param {Array<Object>} codeMap - Country codes and names
 */
let fillDataList = function (codeMap) {
    let allCodes = "";
    for (const country in codeMap) {
        allCodes += "<option value ='" + country + "'>";
    }
    document.getElementById("searchresults").innerHTML = allCodes;
};

/**
 * Gets country name based on country key value.
 * 
 * @param {type} object
 * @param {type} value
 * @returns {propertyNames|Array} property names
 */
let getKey = function (object, value) {
    let propertyNames = Object.getOwnPropertyNames(object);
    for (let i = 0; i < propertyNames.length; i++) {
        if (object[propertyNames[i]] === value) {
            return propertyNames[i];
        }
    }
};

/**
 * Contruct table row as html format.
 * 
 * @param {type} code
 * @returns {String} table row
 */
let constructTableRow = function (code) {
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
 * @param {Array<Object>} cases - All corona cases returned from the API
 * @param {Array<Object>} countries - codeMap
 * @returns {Object} - Map of country codes to corona cases in the country
 */
let mapCasesWithCountrycodes = function (cases, countries) {
    const caseMap = {};
    for (let country in cases) {
        let name = country.replace(/_/g, " ");
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
 * @param {type} e
 * @returns {undefined} nothing
 */

let inputHandler = function (e) {
    let country = document.getElementById("country").value;
    let ccode = codeMap[country];
    let tableRow = constructTableRow(ccode);    
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
let printTable = function () {
    let tbody = document.getElementsByTagName("tbody")[0];

    for (let i = 0; i < countryarr.length; i++) {
        tbody.innerHTML = tbody.innerHTML + countryarr[i];
    }
};

/**
 * Parses date and returns it in specific format
 * 
 * @returns {String} date in format mm/dd/yy
 */
let parseDate = function () {
    let today = new Date();
    let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear().toString().slice(2);
    
    return date;
};

let numbers1 = [4, 9, 16, 25];
let numbers2 = [175, 50, 25, 45, 10];

/**
 * Takes square root for every number in the table given as parameter.
 * 
 * @param {type} table
 * @returns {unresolved} table with square roots
 */
let myMapFunction = function (table) {
  return table.map(Math.sqrt);
};

/**
 * Divides first number of the list for every other number on the list
 * starting left and forwarding into right.
 * 
 * @param {type} total
 * @param {type} num
 * @returns {Number} last divided number
 */
let myDivideFunction = function (total, num) {
	return total / num;
};

// Just some play with Array functions :)
console.log(myMapFunction(numbers1)); // Should print [2,3,4,5]
console.log(numbers2.reduce(myDivideFunction)); // Should print 0.0003111111111111111

let countryarr = [];
