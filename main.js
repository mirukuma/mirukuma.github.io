function draw(waveData,wave_w,wave_h) {
  var canvas = document.getElementById('canvas');
  var width = window.innerWidth;
  var height = window.innerHeight;
  canvas.width  = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  if(whichLong != width>height){
    return false
  }
  ctx.fillStyle = "#E0E0F0"
  var radius = Math.min((width-40)/wave_w * 0.5,(height-40)/wave_h * 0.5)
  var xStep = (width-40)/(wave_w - 1)
  var yStep = (height-40)/(wave_h - 1)
  for(x=0; x<wave_w; x++){
    for(y=0; y<wave_h; y++){
    ctx.beginPath();
    ctx.arc(20+x*xStep, 20+y*yStep, Math.max(waveData[y][x],0), 0, Math.PI*2, false);
    ctx.fill();
    }
  }
}

function calc(waveData,width,height){
  var waveData2 = new Array(width);
  for(y = 0; y < height; y++) {
    waveData2[y] = new Array(height);
    for(x = 0; x < width; x++) {
      waveData2[y][x] = 0;
    }
  }
  for(x=0; x<width; x++){
    for(y=0; y<height; y++){
      waveData2[y][x] += waveData[y][(x+1)%width] + waveData[y][(x-1+width) % width];
      waveData2[y][x] += waveData[(y+1)%height][x] + waveData[(y-1+height)%height][x];
      waveData2[y][x] -= waveData[y][x] * 4
    }
  }
  for(y = 0; y < height; y++) {
    for(x = 0; x < width; x++) {
      waveSpeed[y][x] = waveSpeed[y][x] + waveData2[y][x];
      waveData[y][x] = (waveData[y][x] + waveSpeed[y][x] * 0.25) * 0.97;
    }
  }
  return waveData
}

function tick(){
  waveData = calc(waveData,wave_w,wave_h);
  draw(waveData,wave_w,wave_h);
}

function makeWave(){
  waveData[Math.floor( Math.random() * 15 )][Math.floor( Math.random() * 25 )] += 30
}

function sleep(msec) {
   return new Promise(function(resolve) {

      setTimeout(function() {resolve()}, msec);

   })
}

async function init(){
  whichLong = window.innerWidth > window.innerHeight;
  if(whichLong){
    wave_w = 50;
    wave_h = Math.floor(50 * window.innerHeight / window.innerWidth)
  }else{
    wave_w = Math.floor(50 * window.innerWidth / window.innerHeight);
    wave_h = 50;
  }
  await sleep(1000);
  var x, y;
  waveData = new Array(wave_w);
  waveSpeed = new Array(wave_w);
  for(y = 0; y < wave_h; y++) {
    waveData[y] = new Array(wave_h);
    waveSpeed[y] = new Array(wave_h);
    for(x = 0; x < wave_w; x++) {
      waveData[y][x] = 0;
      waveSpeed[y][x] = 0;
    }
  }

  setInterval("makeWave()",1300);
  setInterval("tick()",1000/20);
}
