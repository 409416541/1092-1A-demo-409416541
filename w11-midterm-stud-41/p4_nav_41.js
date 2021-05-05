function changepage(index) {
    const player = document.querySelector('#player');
    console.log('player', player);
    switch (index) {
      case 1:
        player.innerHTML = `<iframe src="./p1_41/tictactoe_41.html" width = "100%" heigh = "700px"></iframe>`;
        break;
      case 2:
        player.innerHTML = `<iframe src="./p2_41/resume_41.html" width = "100%" heigh = "700px"></iframe>`;
        break;
      case 3:
        player.innerHTML = `<iframe src="./p3_41/divjsDemo_41.html" width = "100%" heigh = "700px"></iframe>`;
        break;
    }
  }