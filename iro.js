const player = {
  coordinates: {
    x: 0,
    y: 0
  },
  element: document.getElementById('pers1')
};

function movePlayer(player) {
  const { x, y } = player.coordinates;

  player.element.style.transform = `translate(${x}px, ${y}px)`;
}

function teclaDown(event) {
  if (event.key === 'a') {
    player.coordinates.x -= 10;
  }

  if (event.key === 'd') {
    player.coordinates.x += 10;
  }

  if (event.key === 's') {
    player.coordinates.y += 10;
  }

  if (event.key === 'w') {
    player.coordinates.y -= 10;
  }

  movePlayer(player);
}

function teclaUp(event) {
  // ...
}

document.addEventListener('keydown', teclaDown);
document.addEventListener('keyup', teclaUp);

