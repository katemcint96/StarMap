const img = document.querySelector('svg');
const height = window.innerHeight;
const width = window.innerWidth;

img.setAttribute('height', `${height}`);
img.setAttribute('width', `${width}`);

let starsX = [];
let starsY = [];
const numStars = Math.floor(Math.random() * 60) + 150;
for (var i = 0; i < numStars; i++) {
  var x = Math.floor(Math.random() * (width));
  var y = Math.floor(Math.random() * (height));
  starsX[i] = x;
  starsY[i] = y;
}

function removeDuplicates(xArr, yArr) {
  var finalX = [];
  var finalY = [];
  for(var i = 0; i < xArr.length; i++) {
    xLoc = finalX.indexOf(xArr[i]);
    yLoc = finalY.indexOf(yArr[i]);
    if (xLoc !== -1 && yLoc !== -1 && xLoc == yLoc) {

    } else {
      finalX.push(xArr[i]);
      finalY.push(yArr[i]);
    }
  }
  return [finalX, finalY];
}

var [finalX, finalY] = removeDuplicates(starsX, starsY);
//console.log(starsX, starsY);
//console.log(finalX, finalY);


var html = `<rect width="${width}" height="${height}" fill="#000000"></rect>`;
for(var j = 0; j < finalX.length; j++) {
  var starRad = Math.ceil(Math.random() * 2);
  html += `<circle cx="${finalX[j]}" cy="${finalY[j]}" r="${starRad}"  fill="#fff" />`
}

img.innerHTML = html;
