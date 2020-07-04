class Player {
	constructor() {
		this.currentPosition = 0;
	}
	
	setCurrentPosition(position) {
		this.currentPosition = position;
	}
	
	showCurrentPosition() {
		console.log(`New position: ${String(this.currentPosition).padStart(2, '0')}`)
	}
}

module.exports = Player;