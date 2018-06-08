/// <reference path="game.ts"/>

class Ball {
    
    private div : HTMLElement
    private game : Game
    
    private x : number = 0
    private y: number = 0
    
    private speedX: number = 0
    private speedY: number = 0
    
    constructor(game:Game) {
        this.game = game
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.x = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4)
        this.y = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4)
        
        this.speedX = Math.round(Math.random() * 15)+1
        this.speedY = Math.round(Math.random() * 15)-1

        if(Math.random()>0.5) this.speedX *= -1

        this.div.addEventListener("click", this.removeMe)
    }

    public removeMe(){
        console.log("remove")
        this.game.removeFromArray(this)
        this.div.remove()
    }
    
    public update() : void {
        this.x += this.speedX
        this.y += this.speedY
        
        if( this.y + 40 > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }
        
        if (this.x > window.innerWidth - 40 || this.x < 0 ) { 
            this.speedX *= -1
        } 
                        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}