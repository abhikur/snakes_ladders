const Board = require('./Board');
const Organiser = require('./Organiser');
const Player = require('./Player');
const File = require('./File');
const Step = require('./Step');

const inputStep = process.argv[2]
const currentPosition = process.argv[3]

function snakeLadderMapping() {
	return new File('../config/snake_ladder_mapping.json').load();
}

const step = new Step(inputStep);

function showNextPosition() {
	const board = new Board(snakeLadderMapping());
	const player = new Player();
	player.setCurrentPosition(+currentPosition)
	const organiser = new Organiser(board, player);
	organiser.runSteps(step.value());
	if (organiser.playerReachedHome()) {
		console.log('Congrats you won!')
	} else {
		organiser.showPlayersCurrentPosition();
	}
}

step.isInvalid() ? console.log('Please enter number between 1 and 6') : showNextPosition();