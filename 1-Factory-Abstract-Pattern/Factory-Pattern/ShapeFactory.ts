import { Circle } from "./CIRCLE";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

export class ShapeFactory {

    getShape(input: string): Shape {

        switch (input) {
            case 'CIRCLE':
                return new Circle();
                break;
            case 'SQUARE':
                return new Square();
                break;
            case 'RECTANGLE':
                return new Rectangle();
                break;
            default:
                return null as any;
        }

    }

}