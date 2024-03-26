import Layouts from "./layouts/Layouts.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

let layouts = new Layouts(ctx,canvas.width,canvas.height);
layouts.createLayout();

