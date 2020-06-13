class Paper extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("images/paper.jpg");
    this.alpha = 255;
  }

  display() {

    /*if(paper.body.position.x - 500 != 105 && 500 - paper.body.position.x != 105 && 
      paper.body.position.y - 220 != 105 && 220 - paper.body.position.y != 105){
      super.display();
      console.log("a");
    }else{
      
      World .remove(world, this.body);
      push ();
      tint (255, this.alpha);
      this.alpha = this.alpha - 4;
      image (this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop ()
    }*/

    if(paper.body.position.x < 520 && paper.body.position.y < 570){
      super.display();
      console.log(mouseX);
    }else{
      
      World .remove(world, this.body);
      push ();
      tint (255, this.alpha);
      this.alpha = this.alpha - 4;
      image (this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop ()
    }

  }
}
