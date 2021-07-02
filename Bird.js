class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.dot = loadImage("sprites/smoke.png")

    this.dotArray = [];
  }

  display() {
    super.display(); 
    
    if(this.body.velocity.x > 10 && this.body.position.x > 200 )
    {
      var pos = [this.body.position.x, this.body.position.y];

      this.dotArray.push(pos);
      
      console.log(this.dotArray);
    }
    for (let i = 0; i < this.dotArray.length; i++) {

      image(this.dot,this.dotArray[i][0], this.dotArray[i][1])
      
    }

  }
}
