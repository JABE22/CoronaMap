/**
 * colorNeighbours function updates d3 map to show the current corona situation
 * of the selected country and the neighbouring countries of that country.
 * Updates color fill of the coutnries to the d3 map.
 * @param {Array<Object>} Receives countryycode from user input in table
 */
function colorNeighbors(countryCode) {

	//Reset all colours to default fill
    map.updateChoropleth(null, {reset: true});
	
	//try-catch-block. Errors are caused by faulty or empty countrycodes
	try {
		//First paint the selected country
		map.updateChoropleth({
			[countryCode]: getColor(caseMap[countryCode].confirmed, caseMap[countryCode].deaths)
		});
		
		//In a for-loop, paint the neighbouring countries of the selected country.
		for (country in neighMap[countryCode]) {
			//Try-catch-block, errors are caused by neighbouring countries that have no cases
			try {
				console.log(neighMap[countryCode][country]);
				map.updateChoropleth({
					[neighMap[countryCode][country]]: getColor(caseMap[neighMap[countryCode][country]].confirmed, caseMap[neighMap[countryCode][country]].deaths)
				});
			}
			catch (error) {
				console.log("was nothing in that country");
			}
		}
	}
	catch (err) {
		console.log(err);
	}
};

/**
 * initialFills-function colors the countries with their current corona stats.
 * Updates color fill of the coutnries to the d3 map.
 * @param {Array<Object>} mapped cases
 */
function initialFills(mappedcases) {
	
	//Loop thru the cases
	for (country in mappedcases) {
		//Try-catch-block, errors are caused by countries that have no cases
		try {
			console.log(country);
			map.updateChoropleth({
				
				[country]: getColor(mappedcases[country].confirmed, mappedcases[country].deaths)
			});
		}
		catch (error) {
			console.log("was nothing in that country");
		}
	}
	
};

/**
 * timeseriesHelper colors the countries with their corona stats.
 * Method is called "per day"
 * Updates color fill of the coutnries to the d3 map.
 * @param {Array<Object>} @param {Array<Object>} receives object of corona stats for given day
 */
function timeseriesHelper(date, max) {

	for (country in date) {
		try {
			map.updateChoropleth({
				
				[country]: getColor(date[country].confirmed, date[country].deaths)
			});
		}
		catch (error) {
			console.log("was nothing in that country");
		}
	}
}

/**
 * timeseriesFills colors the countries with their corona stats.
 * Method is called once and receives object of dates, which contain corona stats to that date
 * Updates color fill of the coutnries to the d3 map.
 * @param {Array<Object>} receives object of corona stats
 */
function timeseriesFills(ts) {
	//Helper variables
	//Keys to the timeseries object
	var keys = Object.keys(ts);
	//counter
	var i = 0;
	//how many days
	var max = keys.length;
	var maxdate = ts[keys[max-1]];
	//console.log(maxdate);
	
	//Reset map
	map.updateChoropleth(null, {reset: true});
	
	//intervalling.
	timeseriesHelper(ts[keys[i]], maxdate);
	document.getElementById("date").innerHTML = keys[i].toString();
	inte = setInterval(function(){
		i++;
		console.log(keys[i]);
		
		//Called once per second with iterated key
		
		//If all dates have been looped thru, stop
		if (typeof keys[i] === 'undefined') {
			stop();
		}
		timeseriesHelper(ts[keys[i]], maxdate);
		document.getElementById("date").innerHTML = keys[i].toString();
		
	}, 1000);
	//Inner function to stop the intervalling

}

var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear().toString().slice(2);

document.getElementById("date").innerHTML = date;