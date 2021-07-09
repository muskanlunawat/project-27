class CONNECTION {
    constructor(A,B){
        var options = {
            bodyA : A ,
            pointB : B ,
            stiffness : 0.04,
            length : 250
        }
    



        this.body = Constraint.create(options)
        this.P = B;
       
        World.add(world,this.body);


    }

    display(){
      line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.P.x,this.P.y);



    }
    
}