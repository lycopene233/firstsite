class Player {
	constructor({hp = 10, food = 10, san = 10, weapon = 0} = {}) {
		this.hp      = hp;
		this.food    = food;
		this.san     = san;
		this.weapon  = weapon;
		this.x       = undefined;
		this.y       = undefined;
		this.canPlay = true;
	}

	calcAttr([key = '', val = 0] = []) {
		if(this[key] !== undefined) this[key] += Number.parseInt(val);
		return this;
	}

	isAlive() {
		if(this.hp   === 0) return false;
		if(this.food === 0) return false;
		if(this.san  === 0) return false;
		return true;
	}

	updatePosition({x = undefined, y = undefined} = {}) {
		this.x = x === undefined ? this.x : x;
		this.y = y === undefined ? this.y : y;
		return this;
	}

	updateData() {
		document.getElementById('hp').innerHTML = this.hp;
		document.getElementById('san').innerHTML = this.san;
		document.getElementById('food').innerHTML = this.food;
		document.getElementById('weapon').innerHTML = this.weapon;

		if(!this.isAlive()) endGame(this);
		return this;
	}

	getNextPosition(event) {
		let nextPosition = {
			x: this.x,
			y: this.y
		};
		switch(event.keyCode){
			case 37: //left
				nextPosition.x--;
				break;
			case 38: //up
				nextPosition.y--;
				break;
			case 39: //right
				nextPosition.x++;
				break;
			case 40: //down
				nextPosition.y++;
				break;
		}
		return nextPosition;
	}

}
