export default function (suggestions) {
	const suggestElement = document.querySelector('.js-suggest');

	if (suggestions.length === 0) {
		suggestElement.innerHTML = '';
		return false;
	}

	let fragment = document.createDocumentFragment();
	let ul = document.createElement('ul');
	fragment.appendChild(ul);

	suggestions.forEach((station) => {
		let li = document.createElement('li');
		li.setAttribute('data-name', station.name);
		li.setAttribute('data-kana', station.kana);
		li.classList.add('js-suggested-station');
		li.innerHTML = station.name + '<br>' + station.kana;
		ul.appendChild(li);
	});

	suggestElement.innerHTML = 'もしかしたら...<br>※タップで検索履歴に追加できます';
	suggestElement.appendChild(fragment);
}