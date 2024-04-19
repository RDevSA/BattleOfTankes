import Player from "../Player.js";

export default class Layouts {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.layouts = [];

        this.numBlocks = 15;
        this.baseUnit = this.width / this.numBlocks;



    }

    createLayout() {

        let verticalCenterAlign = this.height;
        let center = {}

        center.x = this.width / 2 - verticalCenterAlign / 2;
        center.y = this.height / 2 - verticalCenterAlign / 2;
        center.width = verticalCenterAlign;
        center.height = verticalCenterAlign;
        center.color = 'orange';
        center.content = this.content;

        
        let left = {
            x: 0,
            y: 0,
            width: this.width / 2 - this.height / 2,
            //width: this.width / 2 - verticalCenterAlign / 2,
            height: this.height,
            color: "blue",
        };

        let right = {
            x: left.width + this.height,
            //x: center.x + center.width,
            y: 0,
            width: this.width / 2 - this.height / 2,
            //width: this.width / 2 - verticalCenterAlign / 2,
            height: this.height,
            color: "green",
        }

        this.layouts = [left, center, right,];

        
    }

    createContentCenter(){
        
        this.createLayout();
        //let x = this.createLayout().center.x;

        this.player = new Player(this, 120, 200, 'red');
        this.enemy = new Player(this,120, 100,'orange');
        this.content = [this.player,this.enemy];
    }

    update() {
        this.player.update();
        this.enemy.update();
    }

    draw(context) {

        this.createContentCenter();

        for (const layout of this.layouts) {
            for (const key in layout) {
                if (layout.hasOwnProperty.call(layout, key)) {

                    context.fillStyle = layout['color'];
                    context.fillRect(layout['x'], layout['y'], layout['width'], layout['height']);

                    console.log(key+': '+layout[key]);

                }
            }
        }

        this.player.draw(context);
        this.enemy.draw(context);

    }

}