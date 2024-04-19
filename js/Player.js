export default class Player {
    constructor(game,width,height,color) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.color = color;

        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.speedX = 0;
    }

    

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.width,this.height);
    }
}