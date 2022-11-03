import { PassengerVehicle } from "../WithStrategyPattern/PassengerVehicle";
import { GoodsVehicle } from "./GoodsVehicle";
import { OffRoadVehicle } from "./OffRoadVehicle";
import { SportsVehicle } from "./SportsVehicle";

//  here duplicate code will implemented PassengerVehicle and GoodsVehicle file
function Main() {

    //  here offroad and sport vehicle needs sports drive capabilities
    // sports drive capabilities
    let offRoadVehicle = new OffRoadVehicle();
    let sportsVehicle = new PassengerVehicle();
    offRoadVehicle.drive();
    sportsVehicle.drive();

    //here normalVehicle and goodVehicle needs normal drive capabilities
    // normal drive capabilities
    let normalVehicle = new PassengerVehicle();
    let goodsVehicle = new GoodsVehicle();
    goodsVehicle.drive();
    normalVehicle.drive();

}

Main();

