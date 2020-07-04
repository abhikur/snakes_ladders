# snakes_ladders

### Simple snakes and ladders console game

### How to play
There is game.js file which is the starting point. This file gets called when we run the following command : 

`npm start`

Now enter any number from 1 to 6 to run forward. There is `snake_ladder_mapping.json` file inside config folder which has the mapping of snakes and ladders for the game board. There is default mapping present in that file, you can change as you want. Ladders are there to help you reach your home faster and snakes bites you and demote you to lower step.

The starting point for the game is 0 and the home is at 100. If you reach at 100 then you win the game.

### Run tests
There are some tests which are running using mocha test runner. To run the tests, first you need to install the packages described in the `package.json`. To do so run: 

`npm install`

Now when packages are installed, you can run the test by :

`npm run test`
