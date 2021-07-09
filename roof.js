class ROOF {
        constructor(){
            var options = {
                        isStatic : true
            }
            this.body = Bodies.rectangle(400,100,400,20,options);
            World.add(world,this.body);
            this.width = 400;
            this.height = 20;
            


        }

        display(){
            fill("red");
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);

            

        }
}