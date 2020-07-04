const Board = require('../Board');
const Player = require('../Player');
const assert = require('assert');

describe('Board', () => {
	let player;
	let snakeLadderMap;
	let board;
	
	beforeEach(() => {
		player = new Player();
		snakeLadderMap = {}
		board = new Board(player, snakeLadderMap)
	})
	
	describe('run steps', () => {
		it('should run the specified steps on the board', () => {
			board.runSteps(4);
			
			assert.strictEqual(board.player.currentPosition, 4)
		});
		it('should not go beyond the board when try to run steps more than 100', () => {
			board.runSteps(98);
			board.runSteps(6);
			
			assert.strictEqual(board.player.currentPosition, 98)
		});
		it('should promote to higher step when any ladder found', () => {
			const snakeLadderMap = {4: 97}
			const board = new Board(player, snakeLadderMap)
			board.runSteps(4);
			
			assert.strictEqual(board.player.currentPosition, 97)
		});
		it('should demote to lower step when any snake found', () => {
			const snakeLadderMap = {55: 4}
			const board = new Board(player, snakeLadderMap)
			board.runSteps(55);
			
			assert.strictEqual(board.player.currentPosition, 4)
		});
	})
	
	describe('reached home', () => {
		it('should return true when currentPosition is 100', () => {
			board.runSteps(100)
			
			assert.strictEqual(board.playerReachedHome(), true)
		});
		it('should return false when currentPosition is less than 100', () => {
			board.runSteps(99)
			
			assert.strictEqual(board.playerReachedHome(), false)
		});
	})
});