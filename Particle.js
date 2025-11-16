class Particle {
  constructor(position) {
    
    this.position = position.copy();

 
    this.velocity = createVector(random(-1, 1), random(-2, 0));


    this.acceleration = createVector(0, 0);


    this.lifespan = 120;

 
    this.size = 3;
  }

 
  applyForce(force) {
    this.acceleration.add(force);
  }

  run() {
    this.update();
    this.display();
  }

  update() {
   
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

 
    this.acceleration.mult(0);

    this.lifespan -= 2;
  }

  display() {
    push();
    noStroke();
    fill(255, this.lifespan);
    ellipse(this.position.x, this.position.y, this.size);
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}
