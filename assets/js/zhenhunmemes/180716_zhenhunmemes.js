const imgPath = "/pixi/img/zhenhunmemes/";

let restCards, players, isPlayer1sTurn, canPick;

class Player {
	constructor() {
		this.cards = [];
	}

	getCards() {
		if(restCards.length <= 0) return false;

		let maxCnt = 3;
		let index = restCards.splice(randomInt(restCards.length), 1);
		this.cards.push(new Card(index));			
		if(this.cards.length < maxCnt) this.getCards();
	}

	loadBuff() {
		$.each(this.cards, (i, card) => {
			if(card.load          === undefined) return;
			if(card.load.loadBuff === null)    return;

			let targetPlayer = card.load.loadBuff === "me" ? this : theOtherPlayer(this);
			let target       = card.load.target;
			let notTarget    = card.load.notTarget;
			let atk          = card.load.atk;
			let hp           = card.load.hp;

			$.each(targetPlayer.cards, (i, card) => {
				if(target    !== null && card.character !== target)    return;
				if(notTarget !== null && card.character === notTarget) return;
				if(atk) card.atk += atk;
				if(hp)  card.hp  += hp;
			});
		});
	}
}

class Card {
	constructor(index) {
		let card = cardInfo[index];
		return {
			id        : card.id,
			imgSrc    : imgPath + card.img,
			character : card.character,
			hp        : this._setHp(),
			atk       : this._setAtk(),
			load      : this._load(card.id)
		};
	}

	_setHp() {
		let maxHp = 10;
		let minHp = 5;
		return randomInt(maxHp, minHp);
	}
	_setAtk() {
		let maxAtk = 10;
		let minAtk = 3;
		return randomInt(maxAtk, minAtk);
	}
	_load(id) {
		let load = cardLoad.filter(card => id == card.id);
		return load.length > 0 ? load[0] : undefined;
	}
}

$(function(){
	init();
});

function init() {
	restCards = cardInfo.map((value, index) => index);
	isPlayer1sTurn = true;
	canPick = false;
	players = addPlayers();

	both("getCards");
	both("loadBuff");

	attack(players[0].cards[0], players[1].cards[0]);

	consoleCards();
}

function attack(card1, card2) {
	let atk = card1.atk;

	if(card1.load && card1.load.atkBuff == "atk") {
		let target = card1.load.target;
		let notTarget = card1.load.notTarget;
		if(target    !== null && card2.character === target)    atk += card1.load.atk;
		if(notTarget !== null && card2.character !== notTarget) atk += card1.load.atk;
	}
	if(card2.load && card2.load.atkBuff == "def") {
		let target = card2.load.target;
		let notTarget = card2.load.notTarget;
		if(target    !== null && card1.character === target)    atk -= card2.load.atk;
		if(notTarget !== null && card1.character !== notTarget) atk -= card2.load.atk;
	}
	card2.hp -= atk;
	//hp < 0
}

function consoleCards() {
	let outputText = players.reduce((text, player, index) => {
		let cardInfoText = player.cards.reduce((text, card) => {
			return text 
				+ card.id 
				+ "｜hp: " + card.hp 
				+ "｜atk: " + card.atk 
				+ (card.load ? "｜buff: " + card.load : "")
				+ "｜" + card.character + "<br>";
		}, "");
		return text + "player" + (index + 1) + "<br>" + cardInfoText + "<br>";
	}, "");
	$("body").append(outputText);
}

function both(func, ...parameter){
	$.each(players, function(i, player) {
		Player.prototype[func].call(player, parameter);
	});
}

function addPlayers() {
	return [new Player(), new Player()];
}

function theOtherPlayer(player) {
	return players[1 - players.indexOf(player)];
}

function randomInt(max, _min = 0) {
	return Number.parseInt(_min + Math.random() * (max - _min));
}




