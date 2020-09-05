class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
        push();
        //var pos = this.body.position;
        translate(this.body.position.x, this.body.position.y);
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}