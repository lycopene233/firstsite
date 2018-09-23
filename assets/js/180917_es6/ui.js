class UI {
	constructor() {
		this.itemCntX = 7; //最好是单数
		this.itemCntY = 6; //同上
	}

	calcBlockSize(wrap, interval = 10, cnt = 9) {
		return (wrap.clientWidth - interval * (cnt + 1)) / cnt | 0;
	}

	createBlock(id, position) {
		let blockWrapElement = document.getElementById('block_wrap');
		let blockInterval    = 10;

		let block = document.createElement('div');
		let blockSize = this.calcBlockSize(blockWrapElement, blockInterval, this.itemCntX);

		block.className    = 'block';
		block.style.width  = blockSize + 'px';
		block.style.height = blockSize + 'px';
		block.style.left   = blockInterval * (position.x + 1) + blockSize * position.x + 'px';
		block.style.top    = blockInterval * (position.y + 1) + blockSize * position.y + 'px';
		block.setAttribute('id', id);

		blockWrapElement.appendChild(block);
		return block;
	}

	updateUi(block, {className = '', bgColor = '', bgImage = ''} = {}){
		if(bgImage)   block.style.backgroundImage = `url(${imagePath}${bgImage})`;
		if(bgColor)   block.style.backgroundColor = bgColor;
		if(className) block.className += ` ${className}`;
		return this;
	}

	updatePlayerPosition(nextBlock, presentId) {
		let playerElement = document.getElementById(presentId);
		if(playerElement) {
			playerElement.className = playerElement.className.replace(' player', '');
			nextBlock.className += ' player';			
		}
		return this;
	}

	updatePassedBlock(passedBlock) {
		passedBlock.style.backgroundColor = bgColorMap.get('passed');
		passedBlock.className = passedBlock.className.replace(' unknown', '');
		return this;
	}

	blockElements() {
		return document.getElementsByClassName('block');
	}

}
