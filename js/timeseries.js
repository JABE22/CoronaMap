/**
 * Map time series.
 * 
 * @param {Array<Object>} timeseries - All corona cases returned from the API
 * @param {Array<Object>} countryMap - codeMap
 * @returns {Object} Time map
 */
var mapTimeseries = function (timeseries, countryMap) {
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