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
