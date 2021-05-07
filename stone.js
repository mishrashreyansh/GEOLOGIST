class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		restitution:0.8,
		friction:0.9,
		density:12,
	}
		this.width=width
		this.height=height
        this.image = loadImage("box.png");
        this.body=Bodies.rectangle(x,y,width,height, options)
        World.add(world, this.body);
        

	}
	display()
	{
            var pos=this.body.position;	
            var angle = this.body.angle;	
			push()
            translate(pos.x,pos.y);
            rotate(angle);
			imageMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("black");
			image(this.image,0,0,this.width,this.height);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}














