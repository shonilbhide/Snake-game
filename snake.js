class Snake
{
    constructor()
    {
        this.x=rows * floor(random(scale));
        this.y=cols * floor(random(scale));
        this.xSpeed=1;          //initial movement is horizontal only
        this.ySpeed=0;
        this.total=0;
        this.tail=[];       //initially only one cell for snake
    }
    show()
    {
        fill(255,255,0);
        rectMode(CENTER);
        for(var i=0;i<this.tail.length;i++)
        {
            rect(this.tail[i].x,this.tail[i].y,size,size)   //adding tails
        }
        rect(this.x,this.y,size,size);
    }
    update()
    {
        for(var i=0;i<this.tail.length-1;i++)
        {
            this.tail[i]=this.tail[i+1];
        }
        if(this.total>0)
        {
            this.tail[this.total-1]=createVector(this.x,this.y);
        }
        this.x=this.x+this.xSpeed * size;
        this.y=this.y+this.ySpeed * size;
        if(this.x > 600)    //following code for continuing beyond the walls
        {
            this.x=0;
        }
        if(this.y > 600)
        {
            this.y=0;
        }
        if(this.x < 0)
        {
            this.x=600;
        }
        if(this.y < 0)
        {
            this.y=600;
        }
    }
    hasEaten()
    {
        var d=dist(this.x,this.y,food.x,food.y);
        if(d < 1)
        {
            food.pickLocation();
            this.total++;

        }
    }

    death()
    {
        for(var i=0;i<this.tail.length;i++)
        {
            var d=dist(this.x,this.y,this.tail[i].x,this.tail[i].y)
            if(d < 1)
            {
                this.total=0;
                this.tail=[];
                alert("GAME OVER.");
            }
        }
    }
}

class Food
{
    constructor()
    {
        this.x=300;
        this.y=300;
    }
    show()
    {
        fill(0,255,0);
        rectMode(CENTER);
        rect(this.x,this.y,size,size);
    }

    pickLocation()
    {
        this.x=rows * floor(random(scale));
        this.y=cols * floor(random(scale));
    }
}