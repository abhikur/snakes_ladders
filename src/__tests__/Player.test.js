const Player = require('../Player');
const assert = require('assert');

describe('Player', () => {
	let player;
	
	beforeEach(() => {
		player = new Player();
	})
	
	describe('set current position', () => {
		it('should set current position of the player', () => {
			player.setCurrentPosition(10);
			
			assert.strictEqual(player.currentPosition, 10)
		});
	})
});