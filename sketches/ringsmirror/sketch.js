let w = 640;
let h = 360;
let capture;




function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent");
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w,h);
  capture.hide();

}

function draw() {
  background(0,153,153,130);
  let stepSize = 15;
  capture.loadPixels();
  // 
  // let threshold = map(mouseX, 0,   width, 0, 256, true);

  
  
  for(let y = 0; y < capture.height; y+= stepSize){
    for(let x = 0; x < capture.width; x+= stepSize){
      const index = (x + y * capture.width) * 4;
      
      
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b =  capture.pixels[index + 2];
      let c = color(0 ,229,random(102,255));
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/3;
      
      let size = map(brightness, 0, 255, stepSize/4, stepSize * 2);
      // fill(255, 200, 225);
      
      
       stroke(c);
      strokeWeight(1);
      noFill();
      
      
    
      push();
        translate(capture.width, 0);
      scale (-1, 1);
       translate(-stepSize/2, stepSize/2);
  
      ellipse( x,  y, random(size), random(size));
      //  fill(c);
      // noStroke();
      ellipse( x,  y, size/2, size/2);

      pop();
      
    

      
    }
  }
}
  // capture.updatePixels();
  
  // image(capture, 0, 0);
