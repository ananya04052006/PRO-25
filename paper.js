class Paper{
    constructor(x, y, radius) {
        var options = {
          'isStatic': false,  
          'restitution': 0.3,
          'friction': 0.5,
          'density': 1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      
      display(){
        var pos = this.body.position;
        push();
        ellipse(pos.x, pos.y, this.radius, this.radius);
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();
      }
}