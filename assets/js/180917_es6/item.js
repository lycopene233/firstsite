class Item {
	constructor({name = '', buff = [], debuff = [], is_atkable = false, has_passed = false } = {}) {
		this.name			= name;
		this.buff			= buff;
		this.debuff			= debuff;
		this.is_atkable		= is_atkable;
		this.has_passed		= has_passed;
	}
}
