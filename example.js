function runConsoleExample () {
  var world = [
    [0,0,0],
    [1,1,1],
    [0,0,0]
  ];

  setInterval(() => {
    world = gameOfLife(world);
    world.forEach(row => {
      console.log(row.join(' '));
    })
      console.log('//////////////////////////////\n')
  }, 1000);
}

runConsoleExample();
