class Shape { }

class Rectangle extends Shape {
    constructor(height, width) {
        super()
        this.height = height;
        this.width = width;
        this.name = 'Rectangle';
    }

    getPerimeter() {
        return (this.height * 2) + (this.width * 2)
    }

    getArea() {
        return this.height * this.width;
    }
}
class Square extends Shape {
    constructor(sideLength) {
        super()
        this.sideLength = sideLength;
        this.name = 'Square';
    }
    getPerimeter() {
        return this.sideLength * 4;
    }
    getArea() {
        return Math.pow(this.sideLength, 2);
    }
}
class ShapeStore {
    constructor(...shapes) {
        this.storage = [];
        for (const shape of shapes) {
            //if should always have curly braces, not inline
            if (!shape instanceof Shape) {
                throw new Error("One of the objects entered is not a shape!");
            }

            this.storage.push(shape);
        }
    }

    sumRectPerimeters() {
        let rectSum = 0;
        for (let shape of this.storage) {
            if (shape instanceof Rectangle) {
                rectSum += shape.getArea();
            }
        }

        return rectSum
    }

    sumSquareAreas() {
        let sqrSum = 0;
        for (let shape of this.storage) {
            if (shape instanceof Square) {
                sqrSum += shape.getArea();
            }
        }

        return sqrSum
    }

    addShape(...newShape) {
        for (let shape of newShape) {
            if (!shape instanceof Shape) {
                throw new Error("One of the objects entered is not a shape!");
            }

            this.storage.push(shape)
        }

        return this.storage
    }
}

/* for testing
let sqr = new Square(5);
let sqr2 = new Square(10);
let sqr3 = new Square(15);

let rect = new Rectangle(10, 20);
let rect2 = new Rectangle(50, 60);
let rect3 = new Rectangle(70, 80);

let SQRStore = new ShapeStore(sqr3, sqr2, sqr);
let RECTStore = new ShapeStore(rect2, rect3);
let MixedStore = new ShapeStore(rect, rect2, sqr3)

console.log(SQRStore.sumSquareAreas());
console.log(MixedStore.sumRectPerimeters());
console.log(MixedStore.sumSquareAreas());

try {
    console.log(MixedStore.addShape(sqr));
    console.log(MixedStore.addShape([1234]));
}
catch (e) {
    console.log(e.message)
}
*/