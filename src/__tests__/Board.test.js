const Board = require('../Board');
const Player = require('../Player');
const assert = require('assert');

describe('Board', () => {
	let snakeLadderMap;
	let board;
	
	beforeEach(() => {
		snakeLadderMap = {}
		board = new Board(snakeLadderMap)
	})
	
	it('should return next position for steps run on the board', () => {
		const nextPosition =  board.nextPosition(0, 4);
		
		assert.strictEqual(nextPosition, 4)
	});
	it('should return current position for next position when try to run steps more than 100', () => {
		const nextPosition = board.nextPosition(98, 6);
		
		assert.strictEqual(nextPosition, 98)
	});
	it('should promote to higher step when any ladder found', () => {
		const snakeLadderMap = {4: 97}
		const board = new Board(snakeLadderMap)
		const nextPosition = board.nextPosition(0, 4);
		
		assert.strictEqual(nextPosition, 97)
	});
	it('should demote to lower step when any snake found', () => {
		const snakeLadderMap = {55: 4}
		const board = new Board(snakeLadderMap)
		const nextPosition = board.nextPosition(50, 5);
		
		assert.strictEqual(nextPosition, 4)
	});
})
