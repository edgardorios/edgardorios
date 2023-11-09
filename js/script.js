function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const widthValue = document.getElementById('widthValue');
    const heightValue = document.getElementById('heightValue');
    widthValue.innerText = `${width}`;
    heightValue.innerText = `${height}`;
}

window.addEventListener('resize', updateSize);
window.addEventListener('load', updateSize);