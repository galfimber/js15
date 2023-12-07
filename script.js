"use strict";

const DomElement = function (height, width, bg) {
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.newElement = function () {
    const div = document.createElement("div");
    div.style.height = this.height + "px";
    div.style.width = this.width + "px";
    div.style.background = this.bg;
    div.style.position = "absolute";
    div.style.left = "0";
    div.style.top = "0";
    document.body.append(div);
  };
};
let leftRight = 0;
let upDown = 0;

const square = new DomElement("100", "100", "blue");

document.addEventListener("DOMContentLoaded", square.newElement());

document.addEventListener("keydown", function (e) {
  const squareEl = document.querySelector("div");
  const arrow = {
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
  };
  switch (e.key) {
    case arrow.left:
      leftRight -= 10;
      squareEl.style.left = leftRight + "px";
      break;
    case arrow.up:
      upDown -= 10;
      squareEl.style.top = upDown + "px";
      break;
    case arrow.right:
      leftRight += 10;
      squareEl.style.left = leftRight + "px";
      break;
    case arrow.down:
      upDown += 10;
      squareEl.style.top = upDown + "px";
      break;
  }
});
