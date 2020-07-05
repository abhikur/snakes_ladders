class Step {
	constructor(val) {
		this.val = val;
	}
	
	isInvalid() {
		return isNaN(this.val) || +this.val < 1 || +this.val > 6;
	}
	
	value() {
		return parseInt(this.val)
	}
}

module.exports = Step;