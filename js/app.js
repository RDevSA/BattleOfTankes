import Layouts from "./layouts/Layouts.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const events = ['load', 'resize'];

function getSize() {
    console.log('resize: height = ' + document.documentElement.clientHeight);

    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;

    let layouts = new Layouts(canvas.width, canvas.height);
    layouts.draw(ctx);
}

events.forEach(e =>
    window.addEventListener(e, getSize)
);