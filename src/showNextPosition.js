const fs = require('fs');
const path = require('path');

const Board = require('./Board');
const Organiser = require('./Organiser');
const Player = require('./Player');
const invalidNumber = require('./validators/invalidNumber');

const step = process.argv[2]
const currentPosition = process.argv[3]

const board = new Board(JSON.parse(fs.readFileSync(path.join(__dirname, '../config/snake_ladder_mapping.json'), 'utf-8')));
const player = new Player();
player.setCurrentPosition(+currentPosition)
const organiser = new Organiser(board, player);

if (invalidNumber(step)) {
	console.log('Please enter number between 1 and 6')
} else {
	organiser.runSteps(+step);
	if (organiser.playerReachedHome()) {
		console.log('Congrats you won!')
	} else{
		organiser.showPlayersCurrentPosition();
	}
}