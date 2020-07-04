const Player = require('./Player');
const Board = require('./Board');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const snakeLadderMapping = JSON.parse(fs.readFileSync('./snake_ladder_mapping.json', 'utf-8'));
const board = new  Board(new Player(), snakeLadderMapping);

function invalidNumber(line) {
	return isNaN(line) || +line < 1 || +line > 6;
}

rl.on('line', function(line) {
	if (invalidNumber(line)) {
		console.log('Please enter number between 1 and 6')
	} else {
		board.runSteps(+line);
		if (board.playerReachedHome()) {
			console.log('Congrats you won!')
			rl.close()
		} else{
			board.showPlayersCurrentPosition();
		}
	}
})