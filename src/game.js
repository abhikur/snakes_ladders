const readline = require('readline');
const fs = require('fs');
const path = require('path');

const Player = require('./Player');
const Board = require('./Board');
const Organiser = require('./Organiser');
const invalidNumber = require('./validators/invalidNumber');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const board = new  Board(JSON.parse(fs.readFileSync(path.join(__dirname, '../config/snake_ladder_mapping.json'), 'utf-8')));
const organiser = new Organiser(board, new Player());

rl.on('line', function(line) {
	if (invalidNumber(line)) {
		console.log('Please enter number between 1 and 6')
	} else {
		organiser.runSteps(+line);
		if (organiser.playerReachedHome()) {
			console.log('Congrats you won!')
			rl.close()
		} else{
			organiser.showPlayersCurrentPosition();
		}
	}
})