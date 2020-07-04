const	BOARD_END = 100

class Board {
	constructor(player, snakeLadderMap) {
		this.snakeLadderMap = snakeLadderMap
		this.player = player;
	}
	
	runSteps(steps) {
		if (withinBoard.call(this, steps)) {
			this.player.setCurrentPosition(this.player.currentPosition + steps);
			if (anySnakeOrLadderFound.call(this)) {
				this.player.setCurrentPosition(this.snakeLadderMap[this.player.currentPosition])
			}
		}
	}
	
	playerReachedHome() {
		return this.player.currentPosition === BOARD_END;
	}
	
	showPlayersCurrentPosition() {
		this.player.showCurrentPosition()
	}
}

function withinBoard(steps) {
	return this.player.currentPosition + steps <= BOARD_END;
}

function anySnakeOrLadderFound() {
	return Object.keys(this.snakeLadderMap).includes(this.player.currentPosition + '');
}

module.exports = Board;