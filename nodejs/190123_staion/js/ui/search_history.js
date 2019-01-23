export let searchHistory = {
	searchHistoryElement: document.querySelector('.js-search-history'),
	removeHistoryElement: document.querySelector('.js-remove-history'),

	add: (history) => {
		let li = document.createElement('li');
		li.textContent = history.name + '（' + history.kana + '）';
		searchHistory.searchHistoryElement.appendChild(li);
		searchHistory.removeHistoryElement.classList.remove('is-hidden');
	},

	remove: () => {
		searchHistory.searchHistoryElement.innerHTML = '';
		searchHistory.removeHistoryElement.classList.add('is-hidden');		
	}
}
