import { BasePizza } from "../BasePizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraCheese extends ToppingDecorator{
    basePizza:BasePizza;

    constructor(pizza:BasePizza){
        super();
        this.basePizza=pizza;
    }

    cost(): number {
        return this.basePizza.cost()+10;
    }
}