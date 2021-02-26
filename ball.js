class ball{
    constructor(x,y,width,height,angle){
    var options={
        density:1,
        frictionAir:0.05,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
    var ang = this.body.angle;
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(ang)
    fill("red");
    ellipse(0,0,this.width,this.height);
    pop()

    }
}