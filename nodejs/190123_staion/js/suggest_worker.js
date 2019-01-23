import stationList from '/js/station_list.js';
import showSuggestions from '/js/ui/show_suggestions.js';

export default function (searchWord) {
	let worker = new Worker('/js/worker.js');
	worker.postMessage({searchWord, stationList});

	worker.onmessage = (e) => {
		showSuggestions(e.data);
	}

	worker.onerror = (e) => {
		console.log([
			'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
		].join(''));
	};	
}