function colorNeighbors(countryCode) {

    map.updateChoropleth(null, {reset: true});
	try {
		map.updateChoropleth({
			[countryCode]: getColor(caseMap[countryCode].confirmed, caseMap[countryCode].deaths)
		});
		
		for (country in neighMap[countryCode]) {
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

function initialFills(mappedcases) {
	//console.log(mappedcases);
	for (country in mappedcases) {
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

function timeseriesHelper(date, max) {
	//console.log(date)
	//console.log(date);
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

function timeseriesFills(ts) {
	var keys = Object.keys(ts);
	var i = 0;
	var max = keys.length;
	var maxdate = ts[keys[max-1]];
	//console.log(maxdate);
	map.updateChoropleth(null, {reset: true});
	var inte = setInterval(function(){
		console.log(keys[i]);
		timeseriesHelper(ts[keys[i]], maxdate);
		if (typeof keys[i] === 'undefined') {
			stop();
		}
		i++;
	}, 200);
	function stop() {
		clearInterval(inte);
	};
}



