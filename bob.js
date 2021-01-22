class Bob{
    constructor(x, y) {
        var options = {
            restitution:0.5
        }
        this.body = Bodies.circle(x,y,100);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        ellipse(this.x,this.y,100);
    }
}