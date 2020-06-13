class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        
        //this.sling1 = loadImage("sprites/sling1.png");
        //this.sling2 = loadImage("sprites/sling2.png");
        //this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image (this.sling1, 200, 30);
        //image (this.sling2, 170, 30);
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            stroke(48, 22, 8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y + 10);
            //line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y + 15);
            //image (this.sling3, pointA.x - 25, pointA.y - 10, 15, 30);
        }
    }
    
}