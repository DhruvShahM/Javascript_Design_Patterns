import { GoodsVehicle } from "./GoodsVehicle";
import { SportsVehicle } from "./SportsVehicle";

//  here duplicate code will removed by using the Strategy pattern
function Main() {

    //  here offroad and sport vehicle needs sports drive capabilities
    //  so here implemented SportsDriveStrategy class  
    // sports drive capabilities
    let offRoadVehicle = new SportsVehicle();
    let sportsVehicle = new SportsVehicle();
    offRoadVehicle.drive();
    sportsVehicle.drive();

    //here normalVehicle and goodVehicle needs normal drive capabilities
    //  so here implemented NormalDriveStrategy class  
    // normal drive capabilities
    let normalVehicle = new GoodsVehicle();
    let goodsVehicle = new GoodsVehicle();
    goodsVehicle.drive();
    normalVehicle.drive();

}

Main();

