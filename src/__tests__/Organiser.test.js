const Organiser = require('../Organiser');
const Board = require('../Board')
const Player = require('../Player')
const assert = require('assert');
const sinon = require('sinon');

describe('organiser', () => {
	describe('run steps', () => {
		it('should set players position to the nextPosition for specified steps', () => {
			const board = new Board()
			sinon.replace(board, 'nextPosition', sinon.fake.returns(22))
			const organiser = new Organiser(board, new Player());
			
			organiser.runSteps(4)
			
			assert.strictEqual(organiser.player.currentPosition, 22)
		});
	})
	describe('player reached home', () => {
		it('should return true when currentPosition is 100', () => {
			const board = new Board()
			sinon.replace(board, 'nextPosition', sinon.fake.returns(100))
			const organiser = new Organiser(board, new Player());
			
			organiser.runSteps(100)
			
			assert.strictEqual(organiser.playerReachedHome(), true)
		});
		it('should return false when currentPosition is less than 100', () => {
			const board = new Board()
			sinon.replace(board, 'nextPosition', sinon.fake.returns(99))
			const organiser = new Organiser(board, new Player());
			
			organiser.runSteps(99)
			
			assert.strictEqual(organiser.playerReachedHome(), false)
		});
	})
})
