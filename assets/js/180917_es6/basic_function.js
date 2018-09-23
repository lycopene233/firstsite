function createItemMap(numX, numY, itemCntY = undefined, result = new Map()) {
	if(!itemCntY) itemCntY = numY;
	if(numY === 0) {
		numY = itemCntY;
		numX--;
		if(numX === 0) return;
	}
	result.set(`${numX-1}-${numY-1}`, { x: numX - 1, y: numY - 1 });
	createItemMap(numX, --numY, itemCntY, result);

	return result;
}

function createTypeList(length) {
	let list = ((length, arr = []) => {
	    while(length-- > 0) arr.push(_pickRandomType());
	    return arr;
	})(length - 2);
	list.splice( Math.random() * list.length | 0, 0, 'treasure');
	list.splice( length / 2 | 0, 0, 'player');

	function _pickRandomType() {
		let random = Math.random();
		for(let [key, perc] of typePercMap.entries()) {
			if(random < perc) return key;
			random -= perc;
		}
	}

	return list;
}

function createItem(ui, player, type, block, position = {}){
	let item;

	switch (type) {
		case 'player':
			item = {
				name: type,
				has_passed: true,
			}
			player.updatePosition(position);
			ui.updateUi(block, {
				className: 'player',
				bgColor  : bgColorMap.get('passed'),
			});
			break;

		case 'treasure':
			item = {
				name: type,
			};
			ui.updateUi(block, {
				className: 'unknown',
				bgImage  : 'treasure.png',
			});
			break;

		default:
			let typeArr = itemData[type];
			item = typeArr[Math.random() * typeArr.length | 0];

			ui.updateUi(block, {
				className: Math.random() < 0.5 ? 'unknown' : '',
				bgColor:   bgColorMap.get(type),
				bgImage:   `${item.name}.png`,
			});
			break;
	}

	return item;
}

function move(player, ui, itemMap, nextBlock) {
	let item = itemMap.get(nextBlock.id);

	let itemX = item.x;
	let itemY = item.y;
	let playerX = player.x;
	let playerY = player.y;

	if(player.canPlay === false) {
		return false;
	}
	if(itemX === playerX && itemY === playerY) {
		return false;
	}
	if(Math.abs(itemX - playerX) + Math.abs(itemY - playerY) != 1) {
		_showMsg('you can only move to the square next to you.');
		return false;
	}
	if(item.name === 'treasure') {
		endGame(player);
		return false;
	}

	player.updatePosition({
		x: itemX,
		y: itemY,
	})
	.calcAttr(['food', -1])
	.updateData();

	ui.updatePlayerPosition(nextBlock, `${playerX}-${playerY}`);

	if(item.has_passed) {
		return false;
	}

	let msg = `${item.name} !`;

	if(item.is_atkable === true) {
		if(player.weapon > 0) {
			player.weapon--;
			msg += ' and fight with you weapon';
			msg += _calcAttrs('buff');
		}
		else {
			msg += ' but don\'t have a weapon';
			msg += _calcAttrs('debuff');
		}
	}
	else {
		msg += _calcAttrs('buff');
		msg += _calcAttrs('debuff');
	}

	_showMsg(msg);

	player.updateData();
	ui.updatePassedBlock(nextBlock);
	item.has_passed = true;

	function _calcAttrs(type) {
		let msg = '';
		if(item[type]) item[type].forEach(typeData => {
			player.calcAttr(typeData);
			let [key, val] = typeData;
			msg += ' ｜ ' + key + (val > 0 ? ' + ' : ' - ') + Math.abs(val);
		});
		return msg;
	}

	function _showMsg(msg) {
		document.getElementById('msg').innerHTML = msg;
		return msg;
	}	
}

function endGame(player){
	let msg = player.isAlive() ? 'YOU WIN!' : 'YOU LOST';
	player.canPlay = false;
	alert(msg);
}

