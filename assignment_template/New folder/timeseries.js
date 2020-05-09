/**
 * @param {Array<Object>} timeseries - All corona cases returned from the API
 * @param {Array<Object>} countryMap - codeMap
 * @returns {Object} - 
 */
  function mapTimeseries(timeseries, countryMap){
      const timeMap = {}
      const confirmed = timeseries[0]["confirmed"];
      const deaths = timeseries[1]["deaths"];

      for (date in confirmed[0]){
        if (date=="Province/State"||date=="Country/Region"||date=="Lat"||date=="Long"){
            continue;
        }
        timeMap[date]={}
    }
    for (date in timeMap){
        for (i=0; i<confirmed.length; i++){
            const code = countryMap[confirmed[i]["Country/Region"]];
            timeMap[date][code]={}
            timeMap[date][code]["confirmed"] = confirmed[i][date];
            timeMap[date][code]["deaths"] = deaths[i][date];
        }
    }
      //console.log(timeMap["5/4/20"]["FIN"]);
      return timeMap;
  }