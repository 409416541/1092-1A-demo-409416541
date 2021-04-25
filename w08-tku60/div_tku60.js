function changeVideo(index) {
    const player = document.querySelector('#player');
    console.log('player',player);
    switch (index){
        case 1:
            player.innerHTML = `<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/RechrtUxfQc" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 2:
            player.innerHTML = `<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/MRWX49Furew" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 3:
            player.innerHTML = `<iframe width="560" height="315"  
            src="https://www.youtube.com/embed/METhdbL_iMw" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 4:
            player.innerHTML = `<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/ZyDbq-lEKTo" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
        case 5:
            player.innerHTML = `<iframe width="560" height="315" 
            src="https://www.youtube.com/embed/NlsrJbVvjaA" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
            break;
    }
}

function changeColor(index) {
    const p = document.querySelector('#section');
    switch (index){
        case 1:
            p.style.backgroundColor = 'yellow';
            break;
        case 2:
            p.style.backgroundColor = 'red';
            break;
        case 3:
            p.style.backgroundColor = 'green';
            break;
    }
    
}

function changePicture(index) {
    const picture = document.querySelector('#player');
    switch(index){
        case 1:
            picture.innerHTML = `<img src="./1.png" style="width: 100%; height:auto;">`;
            break;
        case 2:
            picture.innerHTML = `<img src="./2.png" style="width: 100%; height:auto;">`;
            break;
        case 3:
            picture.innerHTML = `<img src="./3.png" style="width: 100%; height:auto;">`;
            break;
        case 4:
            picture.innerHTML = `<img src="./4.png" style="width: 100%; height:auto;">`;
            break;
        case 5:
            picture.innerHTML = `<img src="./5.png" style="width: 100%; height:auto;">`;
            break;
    }
}