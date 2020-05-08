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
	
	//console.log(countryCode);
	//console.log(caseMap[countryCode].confirmed);
	/*console.log(typeof caseMap[countryCode].confirmed);
	let color = getColor(caseMap[countryCode].confirmed, caseMap[countryCode].deaths);
	console.log(color);
	try {
		map.updateChoropleth({
			[countryCode]: color
		});
		console.log(color);
	}*/
	catch (err) {
		console.log(err);
	}
};
