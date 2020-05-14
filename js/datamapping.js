
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
 * @param {type} ts receives object of corona stats
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