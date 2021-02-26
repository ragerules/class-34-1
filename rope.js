class rope{
    constructor(bodyA,bodyB){
    var options={
       bodyA:bodyA,
       pointB:bodyB,
       stiffness:1.2,
       length:250
    }
    this.pointB = pointB;
    this.rope = Constraint.create(options)
    World.add(world,this.rope);
    }
    attach(body) {
        this.rope.bodyA = body}
        fly() {this.rope.bodyA = null}
    display(){
        if(this.rope.bodyA){
var pointA = this.rope.bodyA.position;
var pointB = this.pointB
push()
stroke("black")
strokeWeight(5)
line(pointB.x,pointB.y,pointA.x,pointA.y)
pop()
        }
    }
}