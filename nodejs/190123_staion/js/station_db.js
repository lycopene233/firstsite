import { searchHistory } from '/js/ui/search_history.js';

export let stationDb = {
	db: null,

	init: function () {
		let request = window.indexedDB.open('database_test');

		request.onupgradeneeded = function (event) {
			let db = event.target.result;
			if (db.objectStoreNames.contains('station')) {
            	return false;
        	}

			let objectStore = db.createObjectStore(
				'station',
				{ autoIncrement: true }
			);
			objectStore.createIndex('name', 'name', { unique: true });
			objectStore.createIndex('kana', 'kana', { unique: false });
		}

		request.onerror = function (event) {
  			console.log('db open error');
		};

		request.onsuccess = function (event) {
			console.log('db open success');
			stationDb.db = request.result;
			stationDb.readAll();
		};
	},

	add: function ({name, kana}) {
		let request = stationDb.db.transaction(['station'], 'readwrite')
			.objectStore('station')
		 	.add({name, kana});

		request.onsuccess = function (event) {
			console.log('db add success');
			searchHistory.add({name, kana});
		};

		request.onerror = function (event) {
		 	console.log('db add error');
		};
	},

	readAll: function () {
		let objectStore = stationDb.db.transaction(['station'])
			.objectStore('station');

		objectStore.openCursor().onsuccess = function (event) {
			let cursor = event.target.result;
			if (cursor) {
			   searchHistory.add(cursor.value);
			   cursor.continue();
			}
		};
	},

	clearStore: function () {
    	let request = stationDb.db.transaction(['station'], 'readwrite')
    		.objectStore('station')
    		.clear();

		request.onsuccess = function (event) {
			console.log('db clear success');
			searchHistory.remove();
		};

		request.onerror = function (event) {
		 	console.log('db clear error');
		};
	},

};