import StaticTest from "../StaticTest.js";


export default class BaseTank {
    constructor(game,x,y, color) {
        this.game = game;
        this.color = color;

        this.x = x;
        this.y = y;
        this.speedY = 0;
        this.speedX = 0;

        this.base = StaticTest.getFromStorage();
    }

    

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.base,this.base);
    }
}