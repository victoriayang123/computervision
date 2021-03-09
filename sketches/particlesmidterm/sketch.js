let particles = [];
let particleLines = [];


function setup() {
 let canvas = createCanvas(1441, 820);
 canvas.parent("#sketch-parent");
  for(let i = 0; i < 200; i++){
    let p = new Particle();
    let pLines = new ParticleLines();
    particles.push(p);
    particleLines.push(pLines);
  
  }
  //print(particles);
}

function draw() {
   // background( 204, 255, 255,3);
   // background( 15, 15, 156, 3);
  background(0, 0, random(102,204),3);
  
  noStroke();
                  
  
  for(let i = 0; i < particles.length; i++) {
    let p = particles[i];
    let p2 = particleLines[i];
    p.draw();
    p.update();
    p2.draw();
    p2.update();
  }
}


class ParticleLines {
  
  constructor() {
    // this.x = random(width);
    // this.y = random(height);
    this.pos = createVector(random(width), random(height));
    this.pos2 = createVector(600,-height);
    this.vel = createVector(-0.01,-0.01);
    this.vel2 = createVector(0.01, 0.01);
    this.acc = createVector(-0.01,-0.01);
    this.acc2 = createVector(0.001,0.001);
//     this.color = color(random(0,204), random(0,204), 204, 40);
     this.color = color(random(0,255), random(0,255), 255, 25);
    
    

    this.size = random(2,8);

  }
  
  checkWalls() {
    // check walls, make particles bounce off walls
    if(this.pos.y > (height - this.size)) {
      this.vel.y *= -1;
      this.pos.y = sin(-6.28);
      
    }
    
    if(this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = sin(0);
    }
    
    if(this.pos.x > (width - this.size)) {
      this.vel.x *= -1;
      this.pos.x = cos(-width);
    }
    
    if(this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = cos(0);
    }
     if(this.pos2.y > (height - this.size)) {
      this.vel2.y *= -1;
      this.pos2.y = sin(height);
      
    }
    
    if(this.pos2.y < 0) {
      this.vel2.y *= -1;
      this.pos2.y = sin(0);
    }
    
    if(this.pos2.x > (width - this.size)) {
      this.vel2.x *= -1;
      this.pos2.x = cos(-width);
    }
    
    if(this.pos2.x < 0) {
      this.vel2.x *= -1;
      this.pos2.x = cos(0);
    }
  
  }
  edges()
{
  if(this.pos.x < 0 || this.pos.x > width){
    this.vel.x *= -1
  }
  if(this.pos.y < 0 || this.pos. y > height){
    this.vel2.y *= -1
  }
   if(this.pos2.x < 0 || this.pos.x > width){
    this.vel.x *= -1
  }
  if(this.pos2.y < 0 || this.pos. y > height){
    this.vel2.y *= -1
  }
}
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
     this.vel2.add(this.acc2);
    this.pos2.add(this.vel2);
    this.checkWalls();
    this.edges();
    
    
    // loop particle back to top
    // if(this.pos.y > height) {
    //   this.pos.y = 0;
    //   this.vel = createVector(random(-1, 1), random(-1, 1));
    // }
  }
  
  draw() {
    // fill(this.color);
    stroke(this.color, 255);
    // strokeWeight(-1);
    //tint(255, 255, 0);
    // image(img, this.pos.x, this.pos.y, this.size, this.size);
    line(this.pos.x,this.pos.y,cos(this.size),sin(this.size));
     line(this.pos2.x,this.y,sin(this.size),cos(this.size));
  }
}

class Particle {
  
  constructor() {
    // this.x = random(width);
    // this.y = random(height);
    this.pos = createVector(random(width), random(height));
    this.pos2 = createVector(600,height/2);
    this.vel = createVector(-0.01,-0.01);
    this.vel2 = createVector(0.01, 0.01);
    this.acc = createVector(-0.01,-0.01);
    this.acc2 = createVector(0.001,0.001);
    this.color = color(random(51,255), random(51,255), 255, 120);
    // this.color = color(random(0,204), random(153,255), random(153,255), 150);
     // this.color = color(random(0,204), random(0,204), 204, 100);
    this.size = random(20,80);
  }
  
  checkWalls() {
    // check walls, make particles bounce off walls
    if(this.pos.y > (height - this.size)) {
      this.vel.y *= -1;
      this.pos.y = cos(-6.28);
    }
    
    if(this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = cos(0);
    }
    
    if(this.pos.x > (width - this.size)) {
      this.vel.x *= -1;
      this.pos.x = sin(-width);
    }
    
    if(this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = sin(0);
    }
     if(this.pos2.y > (height - this.size)) {
      this.vel2.y *= -1;
      this.pos2.y = cos(height);
      
    }
    
    if(this.pos2.y < 0) {
      this.vel2.y *= -1;
      this.pos2.y = cos(0);
    }
    
    if(this.pos2.x > (width - this.size)) {
      this.vel2.x *= -1;
      this.pos2.x = sin(-width);
    }
    
    if(this.pos2.x < 0) {
      this.vel2.x *= -1;
      this.pos2.x = sin(0);
    }
  
  }
  edges()
{
  if(this.pos.x < 0 || this.pos.x > width){
    this.vel.x *= -1
  }
  if(this.pos.y < 0 || this.pos. y > height){
    this.vel2.y *= -1
  }
   if(this.pos2.x < 0 || this.pos.x > width){
    this.vel.x *= -1
  }
  if(this.pos2.y < 0 || this.pos. y > height){
    this.vel2.y *= -1
  }
}
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel2.add(this.acc2);
    this.pos2.add(this.vel2);
    this.checkWalls();
    this.edges();
    
    
    // loop particle back to top
    // if(this.pos.y > height) {
    //   this.pos.y = 0;
    //   this.vel = createVector(random(-1, 1), random(-1, 1));
    // }
  }
  
  draw() {
  stroke(this.color, 100);
  fill(this.color, 255);
    // ellipse(this.pos.x,this.pos.y,5,5);
    //  ellipse(this.pos.x,this.pos.y,5,5);
    //  rect(this.pos.x,this.pos.y,cos(this.size),sin(this.size));
    // rect(this.pos.x,this.pos.y,sin(this.size),cos(this.size));
     for (let i = 0; i < 10; i ++) {
    rect(this.pos.x,this.pos.y,cos(this.size),sin(this.size));
    // ellipse(this.pos.x,this.pos.y,cos(this.size),sin(this.size));
    rotate(PI/5);
 }
}
}



