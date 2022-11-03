import { SportsDriveStrategy } from "./Strategy/SportDiveStrategy";
import { Vehicle } from "./vehicle";

class OffRoadVehicle extends Vehicle{

    constructor(){
        super(new SportsDriveStrategy());
    }

}  