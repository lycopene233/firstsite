function findSuggestStations({searchWord, stationList}) {
	if (searchWord === '') return [];

	let counter = 10;
	let suggestions = [];

	for (var station of stationList) {
		if (! station.name || ! station.kana) continue;
		if (station.name.includes(searchWord, 0) || station.kana.includes(searchWord, 0)) {
			suggestions.push(station);
			if(--counter === 0) break;
		}
	}

	return suggestions;
}
