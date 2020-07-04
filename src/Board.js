const	BOARD_END = 100

class Board {
	constructor(snakeLadderMap) {
		this.snakeLadderMap = snakeLadderMap
	}
	
	nextPosition(currentPosition, steps) {
		let newPosition = currentPosition;
		if (withinBoard(currentPosition, steps)) {
			newPosition += steps;
			if (anySnakeOrLadderFound.call(this, newPosition)) {
				newPosition = this.snakeLadderMap[newPosition]
			}
		}
		return newPosition;
	}
}

function withinBoard(currentPosition, steps) {
	return currentPosition + steps <= BOARD_END;
}

function anySnakeOrLadderFound(position) {
	return Object.keys(this.snakeLadderMap).includes(position + '');
}

module.exports = Board;