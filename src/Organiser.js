const GAME_END = 100;
class Organiser {
	constructor(board, player) {
		this.board = board;
		this.player = player;
	}
	
	startGame(steps, stopGame) {
		this.runSteps(steps);
		if (this.playerReachedHome()) {
			console.log('Congrats you won!');
			stopGame();
		} else {
			this.showPlayersCurrentPosition();
		}
	}
	
	runSteps(steps) {
		this.player.setCurrentPosition(this.board.nextPosition(this.player.currentPosition, steps))
	}
	
	playerReachedHome() {
		return this.player.currentPosition === GAME_END;
	}
	
	showPlayersCurrentPosition() {
		this.player.showCurrentPosition();
	}
}

module.exports = Organiser;