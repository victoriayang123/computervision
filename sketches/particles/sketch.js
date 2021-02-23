// let img;

// function preload() {
//   img = loadImage('particle.png');
// }

// let x; // globally scoped variable
let particles = [];


function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent("#sketch-parent");
  for(let i = 0; i <200; i++){
    let p = new Particle();
    let p2 = new Particle();
    particles.push(p);
    particles.push(p2);
  
  }
  //print(particles);
}

function draw() {
  background( 15, 15, 156, 3);
  noStroke();
                  
  
  for(let i = 0; i < particles.length; i++) {
    let p = particles[i];
    let p2 = particles[i];
    p.draw();
    p.update();
    p2.draw();
    p2.update();
     

}
}

class Particle {
  
  constructor() {
    // this.x = random(width);
    // this.y = random(height);
    this.pos = createVector(random(width),random(height));
    this.pos2 = createVector(600,-height);
    this.vel = createVector(-0.01,-0.01);
    this.vel2 = createVector(0.0001, 0.0001);
    this.acc = createVector(-0.01,-0.01);
    this.acc2 = createVector(0.001,0.001);
    this.color = color(random(0,204), random(153,255), random(153,255), 50);
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
    stroke(this.color);
    //tint(255, 255, 0);
    // image(img, this.pos.x, this.pos.y, this.size, this.size);
    line(this.pos.x,this.pos.y,cos(this.size),sin(this.size));
     line(this.pos2.x,this.pos2.y,sin(this.size),cos(this.size));
  }
}





