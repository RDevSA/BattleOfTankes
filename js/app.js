import AbstractLayout from "./layouts/AbstractLayout.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

ctx.fillRect(0, 0, 50, 50);
console.log('document height = ' + canvas.height);

let abstractLayout = new AbstractLayout(ctx,canvas.width,canvas.height);
abstractLayout.createLayout();

