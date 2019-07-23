const firePixelArray = []
const fireWidth = 2
const fireHeight = 3

function createFireData() {
    const numberOfPixels = fireHeight * fireWidth;

    for(let i = 0; i < numberOfPixels; i++) {   
        firePixelArray[i] = 0;
    }
}

function calculateFire() {

}

function renderFire() {
    let html = '<table cellpadding=0 cellspacing=0>';
    for(let i = 0; i < fireHeight; i++) {
        html += '<tr>';

        for(let j = 0; j < fireWidth; j++) {
            const pixelIndex = j + ( fireWidth * i );
            html += '<td>';
            html += pixelIndex;
            html += '</td>';
        }
        html += '</tr>';
    }

    html += '</table>';
    document.querySelector('#fireBlock').innerHTML = html
}

function start() {
    createFireData()
    renderFire()
}

start();