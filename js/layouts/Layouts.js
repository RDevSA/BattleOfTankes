export default class Layouts {

    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;

        this.layouts = [];

    }


    createLayout() {

        //this.baseUnit = this.game_height / numBlocks;
        let verticalCenterAlign = this.height;


        let center = {}

        center.x = this.width / 2 - verticalCenterAlign / 2;
        center.y = this.height / 2 - verticalCenterAlign / 2;
        center.width = verticalCenterAlign;
        center.height = verticalCenterAlign;
        center.color = 'orange';


        let left = {
            x: 0,
            y: 0,
            width: this.width / 2 - this.height / 2,
            //width: this.width / 2 - verticalCenterAlign / 2,
            height: this.height,
            color: "blue"
        };

        let right = {
            x: left.width + this.height,
            //x: center.x + center.width,
            y: 0,
            width: this.width / 2 - this.height / 2,
            //width: this.width / 2 - verticalCenterAlign / 2,
            height: this.height,
            color: "green"
        }


        this.layouts = [left, center, right,];


        console.log('left x: ' + left.x +' left width: '+ left.width);
        console.log('center: ' + this.height);
        console.log('right x: ' + right.x +' right width: '+ right.width);
        console.log('width: '+this.width);

        this.draw();

    }

    draw() {

        for (const layout of this.layouts) {

            for (const key in layout) {
                if (layout.hasOwnProperty.call(layout, key)) {

                    const layoutKey = key;
                    const layoutValue = layout[key];

                    this.context.fillStyle = layout['color'];
                    this.context.fillRect(layout['x'], layout['y'], layout['width'], layout['height']);

                }
            }
        }

    }

}