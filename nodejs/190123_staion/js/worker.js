self.importScripts('/js/find_suggest_stations.js');

self.addEventListener('message', (e) => {
	self.postMessage(findSuggestStations(e.data));
	self.close();
}, false);
