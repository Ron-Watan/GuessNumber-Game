const currentViewPort = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

window.addEventListener('resize', viewPortSize);

function viewPortSize() {
  location.reload();
}
document.getElementById('current--vh').innerHTML = currentViewPort;