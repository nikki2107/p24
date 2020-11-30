class Paper{constructor(x,y,radius) 
{var options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
}


this.body = Bodies.circle(x,y,radius,options)
this.x=x
this.y=y
this.radius=radius
World.add(world,this.body)


}
display(){

var pos = this.body.position
this.body.position = pos
ellipse(50,565,this.r,this.r)
}
}