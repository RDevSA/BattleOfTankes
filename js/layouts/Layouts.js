import PlayerTank from "../Tank/PlayerTank.js";
import StaticTest from "../StaticTest.js";

export default class Layouts {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log('StaticTest from Layouts: ' + StaticTest.getFromStorage());

    }

    test() {
        console.log("test " + this.x);
    }

    createLayout() {

        let verticalCenterAlign = this.height;
        let center = {}

        center.name = 'center';
        center.x = this.width / 2 - this.height / 2;
        center.y = this.height / 2 - this.height / 2;
        center.width = this.height;
        center.height = this.height;
        center.color = 'orange';
        center.storage = this.setToStorage(this.height);

        let left = {
            name: 'left',
            x: 0,
            y: 0,
            width: this.width / 2 - this.height / 2,
            //width: this.width / 2 - verticalCenterAlign / 2,
            height: this.height,
            color: "blue",
        };

        let right = {
            name: 'right',
            x: left.width + this.height,
            //x: center.x + center.width,
            y: 0,
            width: this.width / 2 - this.height / 2,
            //width: this.width / 2 - verticalCenterAlign / 2,
            height: this.height,
            color: "green",
        }

        let layouts = [left, center, right,];

        return layouts;

    }

    setToStorage(width) {
        sessionStorage.setItem('numBlocks', 15);
        sessionStorage.setItem('width', width);
    };

    createContentCenter() {

        let player = new PlayerTank(this, 0, 100, 'red');
        let enemy = new PlayerTank(this, 0, 200, 'orange');
        let content = [player, enemy];

        return content;

    }

    update() {

        for (const item of this.createContentCenter()) {
            item.update();
        }

    }

    draw(context) {

        let layouts = this.createLayout();
        //console.log('createLayout: '+ layouts[0]);

        for (const layout of layouts) {
            for (const key in layout) {

                context.fillStyle = layout.color;
                context.fillRect(layout['x'], layout['y'], layout['width'], layout['height']);

                console.log(key + ': ' + layout[key]);

            }
        }

        let contents = this.createContentCenter();

        //console.log(contents);

        for (let item of contents) {

            item.draw(context, 200);
            //console.log(item.draw(context));
            //console.log(item.getTestColor());
        }

    }



}