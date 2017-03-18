function isAlive (world, x, y) {
  return Boolean(world[x] && world[x][y] === 1);
}

function numberOfNeighbours (world, x, y) {
  var displacements = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1],
    [0, 1], [1, -1], [1, 0], [1, 1]
  ];
  var neighbours = displacements.map(coords => {
    var displacementX = coords[0];
    var displacementY = coords[1];
    var neighbourX = x + displacementX;
    var neighbourY = y  + displacementY;

    return { x: neighbourX, y: neighbourY };
  });
  var liveNeighbours = neighbours.filter(neighbour => {
    return isAlive(world, neighbour.x, neighbour.y);
  });
  var numNeighbours = liveNeighbours.length;
  return numNeighbours;
}

function aliveNextRound (alive, numberOfNeighbours) {
  return (numberOfNeighbours === 3) || (numberOfNeighbours === 2 && alive)
}

function gameOfLife (world) {
  return world.map((row, x) => row.map((cell, y) => aliveNextRound(
    isAlive(world, x, y),
    numberOfNeighbours(world, x, y)
  ) ? 1 : 0));
}

module.exports = gameOfLife;
gameOfLife.isAlive = isAlive;
gameOfLife.numberOfNeighbours = numberOfNeighbours;
gameOfLife.aliveNextRound = aliveNextRound;
