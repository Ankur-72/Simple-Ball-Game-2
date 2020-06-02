class Paper {
    constructor(x, y, width,height) {
      var options = {
        isStatic: false,
          'density':5.2
       }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper1.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  