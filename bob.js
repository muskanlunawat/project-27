class BOB {
    constructor(x,y){
        var options = {
            restituion : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        World.add(world,this.body);
        
        


    }

    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        

        

    }
}