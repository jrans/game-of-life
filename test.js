var test = require('tape');

var gameOfLife = require('./index.js');

var isAlive = gameOfLife.isAlive;
var numberOfNeighbours = gameOfLife.numberOfNeighbours;
var aliveNextRound = gameOfLife.aliveNextRound;

test ('isAlive', t=> {
  t.equal(isAlive([[1]], 0, 0), true);
  t.equal(isAlive([[0]], 0, 0), false);
  t.equal(isAlive([0], 100, 93), false)
  t.end();
});

test ('numberOfNeighbours', t=> {
  var world = [
    [1,0,0],
    [0,1,0],
    [0,0,0]
  ];
  t.equal(numberOfNeighbours(world, 0, 0), 1);
  t.end();
});

test('aliveNextRound', t=> {
  t.notOk(aliveNextRound(true, 1));
  t.ok(aliveNextRound(true, 2));
  t.ok(aliveNextRound(true, 3));
  t.notOk(aliveNextRound(true, 4));
  t.notOk(aliveNextRound(true, 8));
  t.notOk(aliveNextRound(false, 2));
  t.ok(aliveNextRound(false, 3));
  t.notOk(aliveNextRound(false, 4));
  t.end();
})

test ('gameOfLife', t=> {
  var world1 = [
    [0,1,0],
    [0,1,0],
    [0,1,0]
  ];
  var world2 = [
    [0,0,0],
    [1,1,1],
    [0,0,0]
  ];
  t.deepEqual(gameOfLife(world1), world2);
  t.deepEqual(gameOfLife(world2), world1);
  t.end();
});
