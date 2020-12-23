class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution:0.2,
            friction:0,
            frictionAir:0,
            density:0.2,
            slop:1,
            inertia: Infinity,
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,64,64,options);
        this.x = x;
        this.y = y;
        this.color = color;

        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipse(0,0,30,30);
        pop();
      }
}