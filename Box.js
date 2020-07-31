class Box {
    constructor(x, y, width, height) {
      var options = {
          //'restitution':0.2,
          //'friction':0.2,
          //'density':1.0
          
          //this.body = Bodies.rectangle(restitution:0.2,{isStatic:true});
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      strokeWeight(3);
      stroke("green");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  
