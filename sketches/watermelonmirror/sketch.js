let w = 640;
let h = 320;
let capture;
let img;
let img2;
let img3;



function preload(){
  img = loadImage('green.jpg');
  img2 = loadImage('red.jpg');
  img3 = loadImage('texture.jpg');
  
}


function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent");
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w,h);
  capture.hide();
}

function draw() {
   // background(255, 102, 102);
  image(img3, 0, 0);
  let stepSize = 15;
  capture.loadPixels();
  // 
  let threshold = map( 640, 0,  width, 0, 255, true);
  
  for(let y = 0; y < capture.height; y+= stepSize){
    for(let x = 0; x < capture.width; x+= stepSize){
      const index = (x + y * capture.width) * 4;
      
      
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b =  capture.pixels[index + 2];
      // let w = color(random(51,204) ,255,random(51,204));
      // let m = color (255,random(51,204), random(51,204));
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/3;
      
      let size = map(brightness, 0, 255, stepSize/4, stepSize*2);
    
      push();
      
        if(brightness > 50)
        {
          // draw green image
          translate(capture.width, 0);
          scale (-1, 1);
          translate(-stepSize/2, stepSize/2);
          image(img, x, y, size, size);
        } else {
          // draw red image
          translate(capture.width, 0);
          scale (-1, 1);
          translate(-stepSize/2, stepSize/2);
          image(img2, x, y, size, size);
          // noFill();
          // strokeWeight(1);
          // rect( x,  y, size, size);
        }
      
      pop();      
    }
  }
  
  // image(capture, 0, 0);
}