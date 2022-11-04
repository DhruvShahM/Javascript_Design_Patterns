import { FarmHouse } from "./Category/FarmHouse";
import { Margerita } from "./Category/Margerita";
import { Vegdelight } from "./Category/Vegdelight";
import { ExtraCheese } from "./Topping/ExtraCheese";
import { Jalapeno } from "./Topping/Jalapeno";
import { Mushroom } from "./Topping/Mushroom";

// Pizza Store using the Decorator Design Pattern
function main() {

    //Extra Cheese Pizza Cost
    let extraCheesePizza = new ExtraCheese(new Margerita());
    console.log("Extra Cheese pizza cost around " + extraCheesePizza.cost() + "RS");


    // Mushroom FarmHouse Pizza Cost
    let mushroomFarmHousePizza = new Mushroom(new FarmHouse());
    console.log("Mushroom farm-house pizza cost around " + mushroomFarmHousePizza.cost() + "RS");

    // Jalapeno Delight Pizza
    let jalapenoDelightPizza = new Jalapeno(new Vegdelight());
    console.log("Jalapeno Delight Pizza cost around " + jalapenoDelightPizza.cost() + "RS");


    // Note:
    //here we can add more pizza category with topping using the Decorator Design Pattern.... 
}

main();