import { SportsDriveStrategy } from "./Strategy/SportDiveStrategy";
import { Vehicle } from "./vehicle";

export class SportsVehicle extends Vehicle{

    constructor(){
        super(new SportsDriveStrategy());
    }

}  