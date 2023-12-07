const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.newElement = function () {
    switch (true) {
      case this.selector[0] === ".":
        const divv = document.createElement("div");
        divv.classList.add(this.selector.slice(1));
        divv.style.height = this.height + "px";
        divv.style.width = this.width + "px";
        divv.style.background = this.bg;
        divv.style.fontSize = this.fontSize + "px";
        divv.innerHTML = "Hello its tag div";
        document.body.append(divv);
        console.log("div");
        break;
      case this.selector[0] === "#":
        const pp = document.createElement("p");
        pp.id = this.selector.slice(1);
        pp.style.height = this.height + "px";
        pp.style.width = this.width + "px";
        pp.style.background = this.bg;
        pp.style.fontSize = this.fontSize + "px";
        pp.innerHTML = "Hello its tag p";
        document.body.append(pp);
        console.log("p");
        break;
    }
  };
};

const newDiv = new DomElement(".header", "100", "200", "blue", "20");
const newP = new DomElement("#text", "50", "50", "red", "12");

newDiv.newElement();
newP.newElement();
