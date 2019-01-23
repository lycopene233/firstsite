import suggestWorker from '/js/suggest_worker.js';
import { stationDb } from '/js/station_db.js';

const inputElement         = document.querySelector('.js-station-name-input');
const removeHistoryElement = document.querySelector('.js-remove-history');

document.addEventListener('DOMContentLoaded', (e) => {
	stationDb.init();
});

inputElement.addEventListener('keyup', function () {
	suggestWorker(this.value);
});

removeHistoryElement.addEventListener('click', () => {
	stationDb.clearStore();
});

document.addEventListener('click', (e) => {
	let target = e.target;
	if (! [...target.classList].includes('js-suggested-station')) {
		return false;
	}

	stationDb.add({
		name: target.getAttribute('data-name'),
		kana: target.getAttribute('data-kana'),
	});
});
