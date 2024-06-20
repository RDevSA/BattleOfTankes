import StaticTest from "../StaticTest.js";


export default class BaseTank {
    constructor(game, x, y, color) {
        this.game = game;
        this.color = color;

        this.base = StaticTest.getFromStorage();
        this.x = x;
        this.y = y;
        this.speedY = 0;
        this.speedX = 0;

    }



    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context, offset) {
        context.fillStyle = this.color;
        context.fillRect(this.x + offset, this.y, this.base, this.base);
    }

    getTestColor(){
        return this.color;
    }
}