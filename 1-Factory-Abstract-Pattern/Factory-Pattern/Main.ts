import { ShapeFactory } from "./ShapeFactory";

class Main {
    main() {
        let shapeFactoryObj: ShapeFactory = new ShapeFactory();

        // CIRCLE   
        let shpeObj = shapeFactoryObj.getShape('CIRCLE');
        shpeObj.draw();

        // RECTANGLE
        shpeObj = shapeFactoryObj.getShape('RECTANGLE');
        shpeObj.draw();

        // SQUARE
        shpeObj = shapeFactoryObj.getShape('SQUARE');
        shpeObj.draw();

    }
}

let main = new Main();
main.main();
