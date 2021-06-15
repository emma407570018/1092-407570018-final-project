function changeVideo(index) {
  const player = document.querySelector(`#player`);
  console.log(`player`, player);
  switch (index) {
    case 1:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}

function changeColor(index) {
  const p = document.querySelector(`#section`);
  p.style.backgroundColor = `lightyellow`;
}

function changePhoto(index) {
  const photo = document.querySelector(`#player`);
  console.log(`photo`,photo);
  switch (index) {
    case 1:
      photo.innerHTML = `<img src="./1.PNG" style="width: 100%; height: auto" />`
            break;
    case 2:
      photo.innerHTML = `<img src="./2.PNG" style="width: 100%; height: auto" />`
      break;
    case 3:
      photo.innerHTML = `<img src="./3.PNG" style="width: 100%; height: auto" />`
      break;
    case 4:
      photo.innerHTML = `<img src="./4.PNG" style="width: 100%; height: auto" />`
      break;
    case 5:
      photo.innerHTML = `<img src="./5.PNG" style="width: 100%; height: auto" />`
      break;
  }
}
