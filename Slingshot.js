class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingone = loadImage("sprites/sling1.png");
        this.slingtwo = loadImage("sprites/sling2.png");
        this.slingthree = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("brown")
            if(pointA.x <230){
                strokeWeight(8); 
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.slingthree, pointA.x-30,pointA.y-10,15,30)
            }
            else{
                strokeWeight(4); 
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.slingthree, pointA.x+25,pointA.y-10,15,30)
            }
         
            pop();
        }
        image(this.slingone, 200, 20);
        image(this.slingtwo, 170, 20)
        
    }
    
}