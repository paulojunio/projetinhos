const firePixelArray = []
const fireWidth = 40
const fireHeight = 40
const fireColorsPalette = ["#07070700", "#1f07071a", "#2f0f0742", "#470f077a", "#5717079c", "#671f07bf", "#771f07d6", "#8f2707", "#9f2f07", "#af3f07", "#bf4707", "#c74707", "#DF4F07", "#DF5707", "#DF5707", "#D75F07", "#D7670F", "#cf6f0f", "#cf770f", "#cf7f0f", "#CF8717", "#C78717", "#C78F17", "#C7971F", "#BF9F1F", "#BF9F1F", "#BFA727", "#BFA727", "#BFAF2F", "#B7AF2F", "#B7B72F", "#B7B737", "#cfcf6fab", "#dfdf9f82", "#efefc763", "#ffffff2e"];

function createFireData() {
    const numberOfPixels = fireHeight * fireWidth;

    for(let i = 0; i < numberOfPixels; i++) {   
        firePixelArray[i] = 0;
    }
}

function calculateFire() {
    for (let i = 0; i < fireWidth; i++) {
     for(let j = 0; j < fireHeight; j++) {
        const pixelIndex = i + ( fireWidth * j);
        updateFireIntensity(pixelIndex)
     }   
    }
    renderFire()
}

function updateFireIntensity(currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth
    if(belowPixelIndex >= fireHeight * fireWidth) {
        return;
    }else{
        if(firePixelArray[belowPixelIndex] != 0) {
            const decay = Math.floor(Math.random() * 3)
            const belowPixelIntesity = firePixelArray[belowPixelIndex]
            const newFireIntensity = belowPixelIntesity - decay
            firePixelArray[currentPixelIndex + decay] = newFireIntensity
        }
    }
}
function renderFire() {
    const flag = false
    let html = '<table cellpadding=0 cellspacing=0>';
    createFire();
    for(let i = 0; i < fireHeight; i++) {
        html += '<tr>';

        for(let j = 0; j < fireWidth; j++) {
            const pixelIndex = j + ( fireWidth * i );
            const fireIntensity = firePixelArray[pixelIndex]
            if(flag === true){
                html += '<td>';
                html += `<div class="pixel-index">${pixelIndex}</div>`;
                html += fireIntensity;
                html += '</td>';
            }else{
                const color = fireColorsPalette[fireIntensity];
                html += `<td class="pixel" style="background-color: ${color}"></td>`;
            }
            
        }
        html += '</tr>';
    }

    html += '</table>';
    document.querySelector('#fireBlock').innerHTML = html
}

function createFire() {
    const fireBase = fireHeight * fireWidth;
    for(let i = 0; i < fireWidth; i++) {
        const pixelIndex = (fireBase - fireWidth) + i;
        firePixelArray[pixelIndex] = 36;
    }
}
function start() {
    createFireData()
    renderFire()
    setInterval(calculateFire,50)
}

start();