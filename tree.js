class Tree{

    constructor(x,y) {
        
        var option={
            isStatic:true
        }
        this.body =  Bodies.rectangle(x,y,width,height,option); 
        this.width = 10;
        this.height = 50;
        this.image =loadImage("Plucking mangoes/tree.png")
        World.add(world, this.body);  
    }
    

    display(){

        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
    }

}