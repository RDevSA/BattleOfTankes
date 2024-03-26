export default class AbstractLayout {

    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;

        this.layouts = [];

    }


    createLayout() {

        //this.baseUnit = this.game_height / numBlocks;
        let verticalCenterAlign = this.height * 0.9;


        let center = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            color: ""
        }

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


        this.layouts = [left, center,right,];

        //console.log('createLayout: '+this.layout.indexOf('right'));
        this.draw();

    }

    draw() {

        //console.log('layout = ' + layout.x[1] + "; " + layout.y[1]);

        // for (const key in this.layouts) {
        //     if (this.layouts.hasOwnProperty.call(this.layouts, key)) {
        //         const element = this.layouts[key].x;
        //         console.log('draw x: '+element);

        //     }
        // }

        for (const layout of this.layouts) {

            for (const key in layout) {
                if (layout.hasOwnProperty.call(layout, key)) {

                    const layoutKey = key;
                    const layoutValue = layout[key];

                    console.log('layoutKey: ' + layoutKey + ' = ' + layoutValue);

                    this.context.fillStyle = layout['color'];
                    this.context.fillRect(layout['x'], layout['y'], layout['width'], layout['height']);

                }
            }
        }


        //this.context.fillStyle = this.layouts[1].color;
        //this.context.fillRect(this.layouts[1].x, this.layouts[1].y, this.layouts[1].width, this.layouts[1].height);

        // for (const key in this.layout) {
        //     const element = this.layout[key];
        //     console.log(element);
        // }



    }

}