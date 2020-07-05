const readline = require('readline');

const Player = require('./Player');
const Board = require('./Board');
const Organiser = require('./Organiser');
const File = require('./File');
const Step = require('./Step');

const readLine = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

function snakeLadderMapping() {
	return new File('../config/snake_ladder_mapping.json').load();
}

function invalidNumberMessage() {
	console.log('Please enter number between 1 and 6');
}

function initialize(inputStep) {
	const board = new Board(snakeLadderMapping());
	const organiser = new Organiser(board, new Player());
	const step = new Step(inputStep);
	const stopGame = () => readLine.close();
	return step.isInvalid() ? invalidNumberMessage() : organiser.startGame(step.value(), stopGame);
}

readLine.on('line', initialize);